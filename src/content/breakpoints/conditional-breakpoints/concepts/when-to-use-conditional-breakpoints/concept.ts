import { Concept } from "../../../../types/tutorial";
import brokenCode from './broken-code.tsx?raw'

export const whenToUseConditionalBreakpoints: Concept = {
    id: 'when-to-use',
    title: 'When to Use Conditional Breakpoints',
    description: 'Use conditional breakpoints when you need to debug specific scenarios in loops, event handlers, or frequently called functions.',
    codeExample: `
        // Instead of this:
        for (let i = 0; i < 1000; i++) {
            if (i === 500) {
                console.log('Debug point'); // Don't do this!
            }
            processItem(i);
        }

        // Use a conditional breakpoint on processItem(i) with condition: i === 500`,
    exercises: [{
        id: 'array-filter-debug',
        title: 'Debug Array Filtering Edge Case',
        description: 'This component should include items that cost exactly $100, but they\'re being filtered out!',
        files: { '/App.tsx': brokenCode },
        expectedBehavior: 'Should include the $100 laptop in the filtered results (3 items: Book, Laptop, Headphones)',
        hints: [
            'The condition should include items with price exactly 100',
            'Change < to <= in the comparison',
            'Use conditional breakpoint: item.price === 100 to inspect the edge case',
        ],
        debuggingInstructions: [
            'Open Chrome DevTools and go to Sources panel',
            'Find the filterBudgetItems function',
            'Set a conditional breakpoint on the if statement',
            'Use condition: item.price === 100',
            'Click the filter button',
            'The breakpoint will pause when processing the $100 laptop',
            'Notice it does not enter the if block due to the strict < condition',
            'Change the condition to <= 100 to fix the bug',
        ],
    }],
}