import { Concept } from "../../../../types/tutorial";
import brokenCode from './broken-code.tsx?raw'

export const recordingBreakpoints: Concept = {
    id: 'recording-breakpoints',
    title: 'Adding Breakpoints to Steps',
    description: 'Recording breakpoints let you pause a replay at a specific step to inspect the application state.',
    steps: [
        'Open a saved recording in the Recorder panel',
        'Hover over any step in the recording',
        'Click the breakpoint icon (circle) to the left of the step',
        'The step now has a blue breakpoint marker',
        'Click Replay \u2014 the replay will pause just before that step executes',
        'While paused, you can inspect the DOM, check the Console, view Network requests',
        'Click the Resume (\u25b6) button to continue the replay',
        'You can set multiple breakpoints in the same recording',
    ],
    exercises: [
        {
            id: 'recording-breakpoint-exercise',
            title: 'Inspect State Mid-Flow',
            description: 'Record a flow on this todo app. Set a breakpoint before the delete step to inspect the DOM state while items still exist.',
            files: { '/App.tsx': brokenCode },
            expectedBehavior: 'Record: check off a todo, then delete it. Set a breakpoint before the delete step. Replay \u2014 when it pauses, inspect the DOM to see the checked-off item still present.',
            hints: [
                'Click the circle icon next to a step to set a breakpoint',
                'The replay pauses BEFORE executing the breakpointed step',
                'While paused, switch to Elements panel to inspect the DOM',
                'Resume replay to continue',
            ],
            debuggingInstructions: [
                'Open the demo in a new tab',
                'Record: check the first todo, then click its Delete button',
                'End the recording',
                'Set a breakpoint on the Delete step (click the circle icon)',
                'Click Replay',
                'When paused at the breakpoint, inspect the Elements panel',
                'The todo item is still in the DOM (checked off but not yet deleted)',
                'Click Resume to continue the replay',
            ],
            readOnly: true,
        },
    ],
}
