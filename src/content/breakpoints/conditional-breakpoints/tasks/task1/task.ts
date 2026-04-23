import { Task } from "../../../../types/tutorial";
import brokenCode from './brokenCode?raw';

export const conditionalBreakpointsTasks: Task[] = [{
    id: 'task-1',
    title: 'Debug the Shopping Cart',
    description: 'A shopping cart is not calculating the total correctly for items over $100. Use conditional breakpoints to find the bug.',
    buggyCode: brokenCode,
    expectedBehavior: 'Items over $100 should get a 10% discount, but the calculation seems wrong for expensive items.',
    hints: [
        'Set a conditional breakpoint where item.price > 100',
        'Check the values of item.price and the calculation',
        'Look at the discount calculation carefully',
    ],
    solution: {
        explanation: 'The bug is in the discount calculation. It should be item.price * 0.1 (10% discount) subtracted from the price, not multiplied by 0.9.',
        debuggingSteps: [
            'Set conditional breakpoint on the discount line: item.price > 100',
            'Run the code with expensive items',
            'Inspect the values and notice the discount is being applied incorrectly',
            'The correct calculation should be: total += item.price - (item.price * 0.1)',
        ],
        devToolsFeatures: ['Conditional Breakpoints', 'Variables Panel', 'Watch Expressions'],
    },
}]