import { Task } from "../../../../types/tutorial";
import brokenCode from './brokenCode?raw';

export const breakpointsInRecordingsTasks: Task[] = [
    {
        id: 'task-1',
        title: 'Pause and Inspect',
        description: 'Set a breakpoint in a recording and use the pause to inspect application state.',
        buggyCode: brokenCode,
        expectedBehavior: 'When paused at the breakpoint, the todo should be checked but still visible in the DOM.',
        hints: [
            'Use the breakpoint icon on step 2',
            'While paused, check the Elements panel',
            'The checkbox should be checked, item still present',
            'Click Resume to execute the delete',
        ],
        solution: {
            explanation: 'Recording breakpoints let you freeze the replay at any point to inspect the DOM, console, and network state. This is like setting a debugger; breakpoint but for recorded user flows.',
            debuggingSteps: [
                'Set a breakpoint on the step before delete',
                'Replay the recording',
                'When paused, open Elements panel',
                'Verify the todo item is still in the DOM',
                'Check that the checkbox input is checked',
                'Resume to complete the flow',
            ],
            devToolsFeatures: ['Recorder Breakpoints', 'Elements Panel', 'Replay Controls'],
        },
    },
]
