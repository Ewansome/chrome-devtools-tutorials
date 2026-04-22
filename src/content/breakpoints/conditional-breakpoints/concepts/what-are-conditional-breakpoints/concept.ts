import { Concept } from "../../../../types/tutorial";
import brokenCode from './broken-code.tsx?raw'

export const whatAreConditionalBreakpoints: Concept = {
    id: 'what-are-conditional-breakpoints',
    title: 'What are Conditional Breakpoints?',
    description: 'A conditional breakpoint is a breakpoint that only pauses execution when a specified condition evaluates to true.',
    steps: [
        'Right-click on a line number in the Sources panel',
        'Select "Add conditional breakpoint"',
        'Enter a JavaScript expression that returns true/false',
        'The breakpoint will only trigger when the condition is met',
    ],
    exercises: [{
        id: 'basic-loop-debug',
        title: 'Debug a Specific Loop Iteration',
        description: 'This component should only process even numbers, but it\'s processing odd numbers instead!',
        files: { '/App.tsx': brokenCode },
        expectedBehavior: 'Should only process even numbers (0, 2, 4, 6, 8), not odd numbers',
        hints: [
            'The condition i % 2 === 1 checks for odd numbers, not even',
            'Even numbers have remainder 0 when divided by 2',
            'Change the condition to i % 2 === 0',
            'Use a conditional breakpoint with expression: i % 2 === 0',
        ],
        debuggingInstructions: [
            'Open Chrome DevTools (F12)',
            'Go to Sources panel',
            'Find the processNumbers function in the component',
            'Right-click on the line with the if condition',
            'Select "Add conditional breakpoint"',
            'Enter condition: i % 2 === 0',
            'Click the button to trigger the loop',
            'The breakpoint will only pause on even numbers',
            'Notice the bug: condition checks for odd numbers instead',
        ],
    }],
}