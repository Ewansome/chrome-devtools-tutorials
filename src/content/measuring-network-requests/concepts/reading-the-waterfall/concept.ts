import { Concept } from "../../../../types/tutorial";
import brokenCode from './broken-code.tsx?raw'

export const readingTheWaterfall: Concept = {
    id: 'reading-the-waterfall',
    title: 'Reading the Waterfall View',
    description: 'The waterfall chart visualizes the timeline of every network request. Each bar shows DNS lookup, connection, waiting (TTFB), and content download.',
    steps: [
        'Open DevTools \u2192 Network panel',
        'Reload the page to capture all requests',
        'Look at the Waterfall column \u2014 each bar is a request timeline',
        'Hover over a bar to see the timing breakdown',
        'Click a request to see Headers, Preview, Response, and Timing tabs',
        'Use the Size column to identify large payloads',
        'Use the filter bar (XHR, JS, CSS, Img, etc.) to narrow results',
    ],
    exercises: [
        {
            id: 'waterfall-exercise',
            title: 'Identify the Slowest Request',
            description: 'This app makes several API calls with varying response times. Open the Network panel and find which one is the bottleneck.',
            files: { '/App.tsx': brokenCode },
            expectedBehavior: 'Open the Network panel before clicking Load. Identify which request takes the longest and which transfers the most data.',
            hints: [
                'Feature flags is the slowest request (1500ms) but one of the smallest',
                'Product list is the largest payload (24KB)',
                'The waterfall shows request timing visually',
                'Sort by the Time column to find the longest request',
            ],
            debuggingInstructions: [
                'Open DevTools \u2192 Network panel and clear existing requests',
                'Click "Load All Data" in the preview',
                'Observe the waterfall chart \u2014 all requests start at the same time (Promise.all)',
                'Click the "Time" column header to sort by duration',
                'Click the "Size" column header to sort by payload size',
                'Click on a request to inspect its Timing tab',
            ],
            readOnly: true,
        },
    ],
}
