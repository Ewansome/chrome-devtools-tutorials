import { Task } from "../../../../types/tutorial";
import brokenCode from './brokenCode?raw';

export const measuringNetworkRequestsTasks: Task[] = [
    {
        id: 'task-1',
        title: 'Profile a Slow Page Load',
        description: 'A page takes 3+ seconds to become interactive. Use the Network panel to find which request is the bottleneck.',
        buggyCode: brokenCode,
        expectedBehavior: 'All independent requests should fire in parallel using Promise.all.',
        hints: [
            'Look at the waterfall \u2014 requests are stacked sequentially',
            'Hover over each bar to see TTFB and download time',
            'Notice that later requests don\'t start until earlier ones finish',
        ],
        solution: {
            explanation: 'The requests are made sequentially with await, creating a waterfall. Using Promise.all fires them in parallel, reducing total time.',
            debuggingSteps: [
                'Open Network panel and reload the page',
                'Observe the waterfall: requests are sequential (end-to-start pattern)',
                'Each request waits for the previous one to complete',
                'Refactor to Promise.all([fetch(...), fetch(...), fetch(...)]) to parallelize',
            ],
            devToolsFeatures: ['Network Panel', 'Waterfall View', 'Timing Breakdown'],
        },
    },
]
