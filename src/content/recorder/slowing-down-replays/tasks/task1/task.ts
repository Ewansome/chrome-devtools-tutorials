import { Task } from "../../../../types/tutorial";
import brokenCode from './brokenCode?raw';

export const slowingDownReplaysTasks: Task[] = [
    {
        id: 'task-1',
        title: 'Observe a Timing Issue',
        description: 'A fast replay passes but at slow speed, a race condition is visible. Use slow replay to diagnose it.',
        buggyCode: brokenCode,
        expectedBehavior: 'Slow replay reveals that the debounce timeout is too short for slow typing.',
        hints: [
            'Replay at different speeds and compare behavior',
            'At slow speed, more time passes between keystrokes',
            'This can reveal debounce or throttle issues',
        ],
        solution: {
            explanation: 'Slow replay increases the time between actions, which can expose timing-dependent bugs that are hidden at normal speed. This is useful for testing debounced inputs, animations, and race conditions.',
            debuggingSteps: [
                'Record a flow that involves typing',
                'Replay at normal speed \u2014 verify it works',
                'Replay at "Slow" or "Very Slow" speed',
                'Observe if the behavior changes with longer delays',
                'If it does, the code has a timing dependency that needs fixing',
            ],
            devToolsFeatures: ['Recorder Panel', 'Replay Speed Controls'],
        },
    },
]
