import { Concept } from "../../../../types/tutorial";
import brokenCode from './broken-code.tsx?raw'

export const replaySpeed: Concept = {
    id: 'replay-speed',
    title: 'Controlling Replay Speed',
    description: 'You can slow down or speed up recordings to observe behavior at different speeds.',
    steps: [
        'Open a saved recording in the Recorder panel',
        'Before clicking Replay, look for the speed dropdown (usually "Normal")',
        'Choose a speed: Slow, Very Slow, Extremely Slow',
        'Click Replay \u2014 each step will execute at the chosen speed',
        'This is useful for observing visual transitions between steps',
        'It also helps debug timing-sensitive issues (animations, debounced inputs)',
        'You can also add explicit "Wait for element" steps if timing is the issue',
    ],
    exercises: [
        {
            id: 'slow-replay-exercise',
            title: 'Slow Replay Demo',
            description: 'Record a flow on this app, then replay it at different speeds. At slow speed, you can observe each state transition clearly.',
            files: { '/App.tsx': brokenCode },
            expectedBehavior: 'Record a series of clicks, then replay at "Slow" speed. You\'ll see each click happen with a visible pause between steps, making it easy to follow the flow.',
            hints: [
                'Look for the speed dropdown near the Replay button',
                'Try "Slow" first, then "Extremely Slow" to see each step in detail',
                'Slow replay is especially useful for debugging animation-dependent flows',
            ],
            debuggingInstructions: [
                'Open the demo in a new tab',
                'Record a flow: click +1 several times, then click Reset',
                'End the recording',
                'Before replaying, change the speed to "Slow"',
                'Click Replay and observe each step executing with delays',
                'Try "Extremely Slow" to see even more detail',
                'Notice how the counter updates step by step',
            ],
            readOnly: true,
        },
    ],
}
