import { Task } from "../../../../types/tutorial";
import brokenCode from './brokenCode?raw';

export const blockingNetworkRequestsTasks: Task[] = [
    {
        id: 'task-1',
        title: 'Test Third-Party Failure',
        description: 'Block requests to a third-party analytics script and verify the app still works without it.',
        buggyCode: brokenCode,
        expectedBehavior: 'The app should remain fully functional even when third-party scripts and stylesheets are blocked.',
        hints: [
            'Use Network request blocking to block analytics.example.com',
            'Block fonts.example.com and see if the app still renders',
            'Check the Console for any uncaught errors from missing resources',
        ],
        solution: {
            explanation: 'Third-party resources should be loaded with appropriate fallbacks. Fonts should have a font-stack fallback, and analytics scripts should not block rendering.',
            debuggingSteps: [
                'Open Network request blocking panel',
                'Add pattern: "*analytics.example.com*"',
                'Add pattern: "*fonts.example.com*"',
                'Reload the page and verify functionality',
                'Check Console for errors and ensure they are handled',
            ],
            devToolsFeatures: ['Network Request Blocking', 'Console Panel', 'Network Panel'],
        },
    },
]
