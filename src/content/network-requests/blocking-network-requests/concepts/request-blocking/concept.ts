import { Concept } from "../../../../types/tutorial";
import brokenCode from './broken-code.tsx?raw'

export const requestBlocking: Concept = {
    id: 'request-blocking',
    title: 'Blocking Requests in DevTools',
    description: 'You can block specific URLs or URL patterns to test how your app handles missing resources.',
    steps: [
        'Open Network panel',
        'Right-click on any request and choose "Block request URL" or "Block request domain"',
        'Or open the Network request blocking panel via the three-dot menu \u2192 More tools \u2192 Network request blocking',
        'Add URL patterns to block (supports * wildcards)',
        'Reload the page to see how the app behaves without those resources',
        'Uncheck or remove patterns to re-enable requests',
    ],
    exercises: [
        {
            id: 'blocking-exercise',
            title: 'Test Offline Resilience',
            description: 'This app loads data from three sources. Try blocking each one and observe how the app handles failures. It should show errors gracefully \u2014 does it?',
            files: { '/App.tsx': brokenCode },
            expectedBehavior: 'Use the Network request blocking panel to block specific URLs. Observe which sections degrade gracefully and which crash. The Stock Price service already fails \u2014 the app handles it with an error message.',
            hints: [
                'Right-click a request \u2192 "Block request URL" to block it',
                'Or use More tools \u2192 Network request blocking to add patterns',
                'Block "/api/weather" and reload to see what happens',
                'Good apps show an error message; bad apps crash or show nothing',
            ],
            debuggingInstructions: [
                'Open DevTools \u2192 Network panel',
                'Click "Load" on Weather and News to trigger requests',
                'Right-click the weather request \u2192 "Block request URL"',
                'Click Load on Weather again \u2014 observe the error handling',
                'Open the Network request blocking drawer to manage blocked URLs',
                'Add a wildcard pattern like "/api/*" to block all API calls',
                'Reload and observe how the entire app behaves',
            ],
            readOnly: true,
        },
    ],
}
