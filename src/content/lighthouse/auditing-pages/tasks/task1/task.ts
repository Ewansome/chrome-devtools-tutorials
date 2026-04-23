import { Task } from "../../../../types/tutorial";
import brokenCode from './brokenCode?raw';

export const auditingPagesTasks: Task[] = [
    {
        id: 'task-1',
        title: 'Improve the Accessibility Score',
        description: 'Run a Lighthouse audit on the demo page and fix all accessibility issues to achieve a score of 90+.',
        buggyCode: brokenCode,
        expectedBehavior: 'Accessibility score should be 90+ after adding alt text, fixing contrast, correcting heading hierarchy, and adding link text.',
        hints: [
            'Add descriptive alt text to all images',
            'Change text color to meet WCAG contrast ratios (4.5:1 minimum)',
            'Use h2 after h1, not h4',
            'Add aria-label or visible text to the link and button',
        ],
        solution: {
            explanation: 'Each Lighthouse accessibility audit maps to a WCAG guideline. Fixing these issues improves the experience for all users, especially those using screen readers.',
            debuggingSteps: [
                'Run Lighthouse with Accessibility checked',
                'Click each failed audit to see affected elements',
                'Add alt attributes to images',
                'Fix heading hierarchy (h1 \u2192 h2)',
                'Increase text contrast ratio',
                'Add aria-label to links and buttons without visible text',
                'Re-run Lighthouse to verify score improvement',
            ],
            devToolsFeatures: ['Lighthouse Panel', 'Accessibility Audit', 'Contrast Ratio Checker'],
        },
    },
]
