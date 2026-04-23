import { Task } from "../../../../types/tutorial";
import brokenCode from './brokenCode?raw';

export const smallScriptsBigCostsTasks: Task[] = [
    {
        id: 'task-1',
        title: 'Fix the Layout Thrashing',
        description: 'Refactor the animation loop to batch reads and writes separately, eliminating forced reflows.',
        buggyCode: brokenCode,
        expectedBehavior: 'The animation should run smoothly without forced reflows. Batch reads, then batch writes.',
        hints: [
            'First loop: read all offsetHeight values into an array',
            'Second loop: write all style changes using the stored values',
            'This eliminates the read-write-read-write cycle',
        ],
        solution: {
            explanation: 'By separating reads and writes into two loops, the browser only recalculates layout once instead of once per element.',
            debuggingSteps: [
                'Record a Performance profile during the animation',
                'Identify "Layout Forced" warnings in the flame chart',
                'Note the read-write pattern in the loop',
                'Refactor: const heights = boxes.map(b => b.offsetHeight)',
                'Then: boxes.forEach((b, i) => b.style.height = heights[i] + 2 + "px")',
                'Re-record and verify the forced layout warnings are gone',
            ],
            devToolsFeatures: ['Performance Panel', 'Flame Chart', 'Layout Forced Warnings', 'Recalculate Style'],
        },
    },
]
