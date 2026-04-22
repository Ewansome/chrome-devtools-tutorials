import { Task } from "../../../../types/tutorial";
import brokenCode from './brokenCode?raw';

export const replayingUserFlowsTasks: Task[] = [
    {
        id: 'task-1',
        title: 'Debug a Failed Replay',
        description: 'A recorded flow fails on replay after a code change. Identify which step fails and fix the recording.',
        buggyCode: brokenCode,
        expectedBehavior: 'Update the failed step\'s selector to match the new element.',
        hints: [
            'Click on the failed step to see the error',
            'The error will say the selector was not found',
            'Edit the step and update the selector',
            'Replay to verify the fix',
        ],
        solution: {
            explanation: 'When element selectors change (class names, IDs, structure), recorded steps that depend on those selectors will fail. You can edit the step\'s selector to fix the recording.',
            debuggingSteps: [
                'Replay the recording and find the failing step (red X)',
                'Click the step to see which selector was not found',
                'Click the "Edit" icon on the step',
                'Update the selector to match the current DOM',
                'Replay to confirm all steps pass',
            ],
            devToolsFeatures: ['Recorder Panel', 'Replay', 'Step Editing', 'Selector Debugging'],
        },
    },
]
