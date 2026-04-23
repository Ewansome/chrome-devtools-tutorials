import { Task } from "../../../../types/tutorial";
import brokenCode from './brokenCode?raw';

export const recordingUserFlowsTasks: Task[] = [
    {
        id: 'task-1',
        title: 'Create a Complete User Flow Recording',
        description: 'Record the full checkout flow from browsing products to order confirmation.',
        buggyCode: brokenCode,
        expectedBehavior: 'A complete recording with all steps that can be replayed successfully.',
        hints: [
            'Open the Recorder panel first',
            'Give your recording a descriptive name',
            'Perform each action slowly and deliberately',
            'Check that all steps were captured in the recording',
        ],
        solution: {
            explanation: 'The Recorder captures every user interaction as a replayable step. Once recorded, you can replay the flow to verify it still works after code changes.',
            debuggingSteps: [
                'Open Recorder panel and create a new recording',
                'Start recording and perform the checkout flow',
                'End the recording and review all steps',
                'Click "Replay" to verify the recording works',
                'Edit selectors if any steps fail on replay',
            ],
            devToolsFeatures: ['Recorder Panel', 'User Flow Recording', 'Step Editing'],
        },
    },
]
