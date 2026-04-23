import { Task } from "../../../../types/tutorial";
import brokenCode from './brokenCode?raw';

export const eventListenerBreakpointsTasks: Task[] = [
    {
        id: 'task-1',
        title: 'Debug the Double-Click Issue',
        description: 'A button is being clicked twice somehow, causing duplicate form submissions. Find out why.',
        buggyCode: brokenCode,
        expectedBehavior: 'The form should only submit once per click.',
        hints: [
            'Set an event listener breakpoint for "click" events',
            'Also set one for "mouseup" events',
            'Click the button and see which events fire',
        ],
        solution: {
            explanation: 'The button has both click and mouseup event listeners calling the same function, causing double submission.',
            debuggingSteps: [
                'Enable "click" and "mouseup" event listener breakpoints',
                'Click the button',
                'Notice both breakpoints trigger',
                'Check the event listeners in Elements panel',
                'Remove the duplicate mouseup listener',
            ],
            devToolsFeatures: ['Event Listener Breakpoints', 'Event Listeners Panel', 'Sources Panel'],
        },
    },
]
