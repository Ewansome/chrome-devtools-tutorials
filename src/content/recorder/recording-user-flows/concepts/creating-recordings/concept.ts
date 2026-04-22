import { Concept } from "../../../../types/tutorial";
import brokenCode from './broken-code.tsx?raw'

export const creatingRecordings: Concept = {
    id: 'creating-recordings',
    title: 'Creating a Recording',
    description: 'The Recorder panel captures clicks, typing, navigation, and other user actions as a sequence of steps you can replay.',
    steps: [
        'Open DevTools \u2192 Recorder panel (or More tools \u2192 Recorder)',
        'Click "Create a new recording"',
        'Give your recording a name (e.g., "Checkout flow")',
        'Click "Start recording"',
        'Interact with the page \u2014 click buttons, type text, submit forms',
        'Each action appears as a step in the recording',
        'Click "End recording" when you\'re done',
        'Your recording is saved and can be replayed at any time',
    ],
    exercises: [
        {
            id: 'recorder-exercise',
            title: 'Record a Checkout Flow',
            description: 'This demo has a multi-step checkout flow. Open it in a new tab and use the Recorder panel to capture the entire flow from product selection to order confirmation.',
            files: { '/App.tsx': brokenCode },
            expectedBehavior: 'Open this in a new tab. Use the Recorder panel to record the full checkout flow: add products, view cart, enter shipping address, place order.',
            hints: [
                'Create a new recording before interacting',
                'Each click and keystroke is captured as a step',
                'You can edit steps after recording (change selectors, add assertions)',
                'Recordings persist across DevTools sessions',
            ],
            debuggingInstructions: [
                'Open the demo in a new tab',
                'Open DevTools \u2192 Recorder panel',
                'Click "Create a new recording" and name it "Checkout Flow"',
                'Click "Start recording"',
                'Click "Add" on a product, then click "View Cart"',
                'Click "Checkout", type an address, click "Place Order"',
                'Click "End recording"',
                'Review the captured steps \u2014 each action is listed',
            ],
            readOnly: true,
        },
    ],
}
