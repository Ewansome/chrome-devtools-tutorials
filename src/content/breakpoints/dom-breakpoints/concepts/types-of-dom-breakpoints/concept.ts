import { Concept } from "../../../../types/tutorial";
import brokenCode from './broken-code.tsx?raw'

export const typesOfDomBreakpoints: Concept = {
    id: 'types-of-dom-breakpoints',
    title: 'Types of DOM Breakpoints',
    description: 'There are three types of DOM breakpoints you can set on any element.',
    steps: [
        'Subtree modifications: Triggers when child elements are added or removed',
        'Attribute modifications: Triggers when element attributes change',
        'Node removal: Triggers when the element itself is removed',
    ],
    exercises: [
        {
            id: 'dom-manipulation-debug',
            title: 'Debug DOM Element Creation',
            description: 'This component should create 3 elements, but they\'re not appearing in the container!',
            files: { '/App.tsx': brokenCode },
            expectedBehavior: 'Should create and display 3 elements in the container',
            hints: [
                'Elements are created but not added to the container',
                'Add containerRef.current.appendChild(el) inside the loop',
                'Set a DOM breakpoint on "Subtree modifications" on the container to observe changes',
            ],
            debuggingInstructions: [
                'Open Chrome DevTools and go to Elements panel',
                'Find the dashed-border container element',
                'Right-click on it and select "Break on" → "Subtree modifications"',
                'Click the "Create 3 Elements" button',
                'Notice the breakpoint does not trigger — no children are being added',
                'Inspect the JavaScript to find the missing appendChild call',
            ],
        },
    ],
}
