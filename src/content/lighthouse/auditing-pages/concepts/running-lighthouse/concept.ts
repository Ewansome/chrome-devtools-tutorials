import { Concept } from "../../../../types/tutorial";
import brokenCode from './broken-code.tsx?raw'

export const runningLighthouse: Concept = {
    id: 'running-lighthouse',
    title: 'Running a Lighthouse Audit',
    description: 'Lighthouse generates a report with scores and actionable suggestions for any page.',
    steps: [
        'Open DevTools and go to the Lighthouse panel',
        'Choose the categories you want to audit (Performance, Accessibility, etc.)',
        'Select device type (Mobile or Desktop)',
        'Click "Analyze page load"',
        'Wait for the audit to complete — Lighthouse will reload the page',
        'Review the scores (0–100) and expand each section for details',
        'Look at the "Opportunities" section for quick wins',
        'Check "Diagnostics" for deeper issues',
    ],
    exercises: [
        {
            id: 'lighthouse-page-audit',
            title: 'Audit This Page',
            description: 'This page has several intentional accessibility and performance issues. Open it in a new tab (via the Sandpack "Open in new window" button) and run a Lighthouse audit to discover them.',
            files: { '/App.tsx': brokenCode },
            expectedBehavior: 'Run a Lighthouse audit (Accessibility category) and identify all the issues: missing alt text, low contrast, heading hierarchy, empty links, and button without accessible name.',
            hints: [
                'Open the page in a new tab for accurate Lighthouse results',
                'Focus on the Accessibility category first',
                'Images missing alt attributes will be flagged',
                'Low-contrast text (light gray on white) will lose points',
                'The heading jumps from h1 to h4 (skipping h2, h3)',
            ],
            debuggingInstructions: [
                'Open the Sandpack preview in a new tab',
                'Open DevTools \u2192 Lighthouse panel',
                'Check "Accessibility" and "Best Practices"',
                'Click "Analyze page load"',
                'Review the report \u2014 expand each failed audit',
                'Note the specific elements flagged and their issues',
                'Try fixing the issues in the editor and re-auditing',
            ],
            readOnly: true,
        },
    ],
}
