import { Concept } from "../../../../../types/tutorial";
import brokenCode from './broken-code.tsx?raw'

export const exploringA11yTree: Concept = {
    id: 'exploring-a11y-tree',
    title: 'Exploring the Accessibility Tree',
    description: 'Chrome DevTools lets you view the full accessibility tree and inspect individual element roles, names, and states.',
    steps: [
        'Open DevTools \u2192 Elements panel',
        'Click the "Accessibility" tab in the sidebar (next to Styles, Computed, etc.)',
        'Or enable the full accessibility tree view: click the person icon in the Elements panel toolbar',
        'Inspect elements to see their computed accessible name and role',
        'Look for elements with missing names or incorrect roles',
        'Check ARIA attributes and their computed values',
    ],
    exercises: [
        {
            id: 'a11y-tree-exercise',
            title: 'Find Accessibility Issues',
            description: 'This page has elements with good and bad accessibility. Inspect the accessibility tree to identify which elements are problematic for screen reader users.',
            files: { '/App.tsx': brokenCode },
            expectedBehavior: 'Inspect the accessibility tree. The "+" button has no accessible name. The "Delete All" div is not a real button (no role, no keyboard access). The trash icon image has no alt text. The ad banner has no alt text.',
            hints: [
                'Enable the full accessibility tree in the Elements panel',
                'Look for elements with "No accessible name" warnings',
                'The "+" button uses aria-hidden on its only child, making it empty',
                'The "Delete All" div has no button role \u2014 screen readers see it as generic text',
                'Images acting as buttons need alt text describing their action',
            ],
            debuggingInstructions: [
                'Open DevTools \u2192 Elements panel',
                'Click the accessibility (person) icon to toggle the full accessibility tree view',
                'Expand the tree and look for nodes with warnings',
                'Click on the "+" button \u2014 note it has no accessible name',
                'Click on "Delete All" \u2014 note it is a generic div, not a button',
                'Click on the X image \u2014 note it has no alt text',
                'Compare with the well-labeled input and "Remove" button',
                'Check the Accessibility pane in the sidebar for each element',
            ],
            readOnly: true,
        },
    ],
}
