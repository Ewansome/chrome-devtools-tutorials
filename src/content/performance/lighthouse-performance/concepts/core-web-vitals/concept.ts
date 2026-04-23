import { Concept } from "../../../../types/tutorial";
import brokenCode from './broken-code.tsx?raw'

export const coreWebVitals: Concept = {
    id: 'core-web-vitals',
    title: 'Core Web Vitals and Performance Issues',
    description: 'Key metrics that Google uses to measure user experience and common performance problems.',
    steps: [
        'Largest Contentful Paint (LCP): Loading performance — how fast the biggest element renders',
        'Interaction to Next Paint (INP): Interactivity — how fast the page responds to user input',
        'Cumulative Layout Shift (CLS): Visual stability — how much content shifts unexpectedly',
    ],
    exercises: [
        {
            id: 'performance-optimization',
            title: 'Optimize Image Loading Performance',
            description: 'This image gallery has performance problems causing layout shifts and inefficient loading!',
            files: { '/App.tsx': brokenCode },
            expectedBehavior: 'Images should load efficiently without causing layout shifts or blocking the main thread',
            hints: [
                'Add loading="lazy" attribute for lazy loading',
                'Set width and height attributes to prevent layout shift',
                'Use Lighthouse to measure CLS improvements',
            ],
            debuggingInstructions: [
                'Open the preview in a new tab',
                'Open DevTools → Lighthouse panel',
                'Click "Analyze page load" for Performance',
                'Load the image gallery and run another audit',
                'Look at "Opportunities" for image-related suggestions',
                'Check "Diagnostics" for CLS issues',
                'Add width/height and loading="lazy" to fix the issues',
                'Re-run Lighthouse to see improvements',
            ],
        },
    ],
}
