import { Task } from "../../../../../types/tutorial";
import brokenCode from './brokenCode?raw';

export const accessibilityTreeTasks: Task[] = [
    {
        id: 'task-1',
        title: 'Fix All Accessibility Issues',
        description: 'Using the accessibility tree, identify and fix all elements that are inaccessible to screen readers.',
        buggyCode: brokenCode,
        expectedBehavior: 'All interactive elements should have accessible names and proper roles. Decorative images should have empty alt="".',
        hints: [
            'Add aria-label="Add task" to the submit button',
            'Change the div to a <button> element',
            'Add alt="Remove task" to the X image and wrap in a button',
            'Add alt="" to decorative images (or role="presentation")',
        ],
        solution: {
            explanation: 'Each interactive element needs an accessible name that screen readers can announce. Non-interactive decorative elements need alt="" to be skipped.',
            debuggingSteps: [
                'Open the accessibility tree view',
                'Find elements with missing or empty names',
                'Add aria-label to the submit button',
                'Replace the div with a proper <button> element',
                'Add alt text to functional images',
                'Add alt="" to decorative images',
                'Verify fixes in the accessibility tree',
            ],
            devToolsFeatures: ['Accessibility Tree', 'Elements Panel', 'ARIA Attributes', 'Computed Accessible Name'],
        },
    },
]
