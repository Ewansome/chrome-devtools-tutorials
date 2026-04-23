import { Concept } from "../../../../../types/tutorial";
import brokenCode from './broken-code.tsx?raw'

export const renderBlocking: Concept = {
    id: 'render-blocking',
    title: 'Identifying Render-Blocking Resources',
    description: 'Render-blocking resources are scripts and stylesheets that prevent the browser from painting content until they are downloaded and processed.',
    steps: [
        'Open DevTools → Performance panel',
        'Click the record button (circle) or press Ctrl+E',
        'Interact with the page or wait for it to load',
        'Click stop to end the recording',
        'Look at the flame chart — tall columns indicate long tasks',
        'Red corners on tasks mean they exceeded 50ms (Long Tasks)',
        'Look at the "Main" thread lane for JavaScript execution',
        'Check the "Network" lane for resource loading timeline',
    ],
    exercises: [
        {
            id: 'render-blocking-exercise',
            title: 'Find the Blocking Script',
            description: 'This app has a heavy computation that blocks rendering during a user interaction. Use the Performance panel to find it.',
            files: { '/App.tsx': brokenCode },
            expectedBehavior: 'Record a Performance profile while clicking "Generate Report". You will see a Long Task in the flame chart caused by heavyComputation(). The UI freezes during this task.',
            hints: [
                'Start a Performance recording before clicking the button',
                'Look for red-cornered tasks in the flame chart',
                'Click on the long task to see which function is responsible',
                'heavyComputation() runs synchronously and blocks the main thread',
            ],
            debuggingInstructions: [
                'Open DevTools → Performance panel',
                'Click the record button (circle icon)',
                'Click "Generate Report" in the app',
                'Wait for the computation to finish, then stop the recording',
                'Look at the flame chart — find the large block in the Main thread',
                'Click on it to see the function name (heavyComputation)',
                'Note the duration — it exceeds the 50ms Long Task threshold',
                'Solutions: use requestIdleCallback, setTimeout chunking, or a Web Worker',
            ],
            readOnly: true,
        },
    ],
}
