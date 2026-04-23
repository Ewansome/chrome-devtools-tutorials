import { Task } from "../../../../../types/tutorial";
import brokenCode from './brokenCode?raw';

export const whatsBlockingRenderingTasks: Task[] = [
    {
        id: 'task-1',
        title: 'Identify the Long Task',
        description: 'Record a Performance profile and find the function causing the UI to freeze.',
        buggyCode: brokenCode,
        expectedBehavior: 'The computation should not block the main thread. Break it into chunks or move it to a Web Worker.',
        hints: [
            'Record a Performance profile while triggering the computation',
            'Look for red-flagged Long Tasks in the flame chart',
            'Click on the task to see the call stack',
        ],
        solution: {
            explanation: 'The heavy computation runs synchronously on the main thread, creating a Long Task that freezes the UI. Moving it to a Web Worker or breaking it into chunks using setTimeout allows the browser to stay responsive.',
            debuggingSteps: [
                'Start a Performance recording',
                'Click Generate Report to trigger the computation',
                'Stop recording and examine the flame chart',
                'Find the Long Task (marked with red corner)',
                'Click it to see heavyComputation in the call stack',
                'Refactor to use a Web Worker or chunk the work',
            ],
            devToolsFeatures: ['Performance Panel', 'Flame Chart', 'Long Tasks', 'Main Thread'],
        },
    },
]
