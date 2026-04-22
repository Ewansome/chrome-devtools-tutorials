import { Concept } from "../../../../types/tutorial";
import brokenCode from './broken-code.tsx?raw'

export const replayingRecordings: Concept = {
    id: 'replaying-recordings',
    title: 'Replaying a Recording',
    description: 'Replaying executes each captured step in sequence, verifying that the flow still works correctly.',
    steps: [
        'Open DevTools \u2192 Recorder panel',
        'Select a previously saved recording from the list',
        'Click the "Replay" button (\u25b6)',
        'Watch as each step is executed automatically',
        'Steps that succeed show a green checkmark',
        'Steps that fail show a red X with an error message',
        'Failed steps usually mean a selector changed or an element is missing',
        'You can edit the recording to fix failed steps',
    ],
    exercises: [
        {
            id: 'replay-exercise',
            title: 'Practice Replaying',
            description: 'Use the same checkout demo. First record a flow, then replay it. Try modifying the app code slightly and replay again to see if it still works.',
            files: { '/App.tsx': brokenCode },
            expectedBehavior: 'Record a flow, then replay it successfully. Try editing a button label in the code and replay \u2014 the recording may still work if selectors are stable, or it may fail if you changed the element structure.',
            hints: [
                'Replay runs all steps automatically',
                'Green checkmarks mean the step succeeded',
                'Red X means the step failed \u2014 usually a selector mismatch',
                'You can edit step selectors in the recording',
            ],
            debuggingInstructions: [
                'Open the demo in a new tab',
                'Record a flow: add both products, go to cart, place order',
                'Click "Replay" to verify it works',
                'Now go to the editor and change a button label',
                'Replay again and observe if any steps fail',
                'If a step fails, click on it to see the error',
                'Edit the step\'s selector to fix it',
            ],
            readOnly: true,
        },
    ],
}
