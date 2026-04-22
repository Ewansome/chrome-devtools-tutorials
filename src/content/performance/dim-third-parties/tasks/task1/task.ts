import { Task } from "../../../../../types/tutorial";
import brokenCode from './brokenCode?raw';

export const dimThirdPartiesTasks: Task[] = [
    {
        id: 'task-1',
        title: 'Isolate Your Code\'s Impact',
        description: 'Record a Performance profile and use the "Dim third-party scripts" feature to focus on first-party bottlenecks.',
        buggyCode: brokenCode,
        expectedBehavior: 'After dimming third-party code, focus on optimizing only your own code\'s performance.',
        hints: [
            'Click the gear icon in the Performance panel',
            'Enable "Dim third-party scripts"',
            'Third-party scripts will be greyed out in the flame chart',
            'Focus your optimization efforts on the highlighted (first-party) code',
        ],
        solution: {
            explanation: 'Dimming third-party scripts helps you triage performance issues. If most time is spent in third-party code, the fix may be to lazy-load those scripts or find lighter alternatives.',
            debuggingSteps: [
                'Record a Performance profile',
                'Enable "Dim third-party scripts" in settings',
                'Identify which blocks are dimmed (third-party) vs. highlighted (yours)',
                'Check the Bottom-Up tab for a breakdown by origin',
                'Focus optimization on your first-party code',
                'Consider lazy-loading or deferring third-party scripts',
            ],
            devToolsFeatures: ['Performance Panel', 'Dim Third-Party Scripts', 'Bottom-Up Tab', 'Flame Chart'],
        },
    },
]
