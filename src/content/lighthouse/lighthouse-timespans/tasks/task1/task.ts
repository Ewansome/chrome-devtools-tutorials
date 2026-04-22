import { Task } from "../../../../types/tutorial";
import brokenCode from './brokenCode?raw';

export const lighthouseTimespansTasks: Task[] = [
    {
        id: 'task-1',
        title: 'Measure Interaction Performance',
        description: 'Use Lighthouse timespan mode to find which user interaction in the form causes the worst delay.',
        buggyCode: brokenCode,
        expectedBehavior: 'Step transitions should be instant. Remove the busy-wait loop.',
        hints: [
            'Start a Lighthouse timespan before interacting',
            'Click through all form steps',
            'End the timespan and check INP metrics',
            'The busy-wait loop blocks the main thread for 150ms per transition',
        ],
        solution: {
            explanation: 'The goToStep function contains a synchronous busy-wait that blocks the main thread for 150ms on each step transition. Removing it makes transitions instant.',
            debuggingSteps: [
                'Start a Lighthouse timespan',
                'Navigate through all form steps',
                'End the timespan and review the report',
                'INP will be high due to the blocking loop',
                'Remove the busy-wait: delete the while loop',
                'Re-measure to confirm improvement',
            ],
            devToolsFeatures: ['Lighthouse Timespan Mode', 'INP Metric', 'Total Blocking Time'],
        },
    },
]
