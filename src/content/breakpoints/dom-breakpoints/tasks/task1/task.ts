import { Task } from "../../../../types/tutorial";
import brokenCode from './brokenCode?raw';

export const domBreakpointsTasks: Task[] = [
    {
        id: 'task-1',
        title: 'Find the Disappearing Button',
        description: 'A submit button keeps disappearing from a form. Use DOM breakpoints to catch what\'s removing it.',
        buggyCode: brokenCode,
        expectedBehavior: 'The submit button should always remain visible on the form.',
        hints: [
            'Set a "Node removal" breakpoint on the submit button',
            'Wait for the breakpoint to trigger',
            'Check the call stack to see what code is removing the button',
        ],
        solution: {
            explanation: 'A setTimeout function is randomly removing the button. The DOM breakpoint will catch this and show you exactly where in the code it happens.',
            debuggingSteps: [
                'Right-click on the submit button in Elements panel',
                'Select "Break on" → "Node removal"',
                'Wait for the button to be removed',
                'When breakpoint triggers, check the Call Stack panel',
                'Identify the setTimeout function causing the removal',
            ],
            devToolsFeatures: ['DOM Breakpoints', 'Call Stack', 'Elements Panel'],
        },
    },
]
