import { Concept } from "../../../../../types/tutorial";
import brokenCode from './broken-code.tsx?raw'

export const dimThirdParty: Concept = {
    id: 'dim-third-party',
    title: 'Using "Dim Third Parties"',
    description: 'The Performance panel can visually de-emphasize third-party code so your own application\'s performance bottlenecks stand out.',
    steps: [
        'Open DevTools → Performance panel',
        'Record a performance profile',
        'Look at the flame chart — third-party scripts may dominate',
        'Click the gear icon in the Performance panel',
        'Check "Dim third-party scripts"',
        'Third-party code will be dimmed (greyed out) in the flame chart',
        'Your own code will remain highlighted, making bottlenecks easier to spot',
        'You can also group by third-party in the Bottom-Up tab',
    ],
    exercises: [
        {
            id: 'dim-third-party-exercise',
            title: 'Simulate Third-Party Overhead',
            description: 'This app simulates loading third-party scripts alongside your own code. Record a profile and use "Dim third-party" to separate the noise from your code.',
            files: { '/App.tsx': brokenCode },
            expectedBehavior: 'Record a Performance profile while clicking "Load Dashboard". In the flame chart, find the two functions: simulateThirdPartyWork (represents third-party overhead) and renderDashboard (your code). Enable "Dim third-party scripts" to focus on your code.',
            hints: [
                'Third-party code often shows up as large blocks you don\'t recognize',
                'Use the gear icon in Performance panel to enable dimming',
                'In a real app, third-party origins (different domains) are auto-detected',
                'In this demo, both functions are first-party — imagine they were from different origins',
            ],
            debuggingInstructions: [
                'Open DevTools → Performance panel',
                'Click record, then click "Load Dashboard"',
                'Stop the recording',
                'Find the click handler in the flame chart',
                'You\'ll see simulateThirdPartyWork taking most of the time',
                'Click the gear icon → check "Dim third-party scripts"',
                'In a real app, third-party code from other domains is automatically dimmed',
                'Use the Bottom-Up tab and group by URL to see time per origin',
            ],
            readOnly: true,
        },
    ],
}
