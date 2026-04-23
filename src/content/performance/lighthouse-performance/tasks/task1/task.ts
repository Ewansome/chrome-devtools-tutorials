import { Task } from "../../../../types/tutorial";
import brokenCode from './brokenCode?raw';

export const lighthousePerformanceTasks: Task[] = [
    {
        id: 'task-1',
        title: 'Optimize the Slow Image Gallery',
        description: 'An image gallery is loading slowly and causing layout shifts. Use Lighthouse to identify and fix the issues.',
        buggyCode: brokenCode,
        expectedBehavior: 'Images should load efficiently without causing layout shifts.',
        hints: [
            'Run a Lighthouse audit on the page',
            'Look for opportunities related to images',
            'Check for CLS issues',
            'Add lazy loading and explicit dimensions',
        ],
        solution: {
            explanation: 'The images cause layout shifts because they have no explicit width/height. Adding dimensions reserves space and prevents CLS. Lazy loading defers offscreen images.',
            debuggingSteps: [
                'Open Lighthouse and run a performance audit',
                'Review "Opportunities" for image suggestions',
                'Check "Diagnostics" for CLS',
                'Add width and height attributes to each image',
                'Add loading="lazy" for offscreen images',
                'Re-run Lighthouse to verify improvement',
            ],
            devToolsFeatures: ['Lighthouse Panel', 'Performance Metrics', 'Core Web Vitals', 'CLS Debugging'],
        },
    },
]
