import { Concept } from "../../../../types/tutorial";
import brokenCode from './broken-code.tsx?raw'

export const timespanMode: Concept = {
    id: 'timespan-mode',
    title: 'Lighthouse Timespan Mode',
    description: 'Timespan mode lets you start a measurement, interact with the page, then stop and get a report on what happened during that period.',
    steps: [
        'Open DevTools \u2192 Lighthouse panel',
        'Change the mode from "Navigation" to "Timespan"',
        'Click "Start timespan"',
        'Interact with the page (click buttons, scroll, fill forms)',
        'Click "End timespan"',
        'Review the report \u2014 it focuses on runtime performance and interaction metrics',
        'Check for INP (Interaction to Next Paint) issues',
        'Look at Total Blocking Time during your interactions',
    ],
    exercises: [
        {
            id: 'timespan-exercise',
            title: 'Audit an Interactive Form',
            description: 'This multi-step form has some sluggish interactions. Use Lighthouse timespan mode to measure performance while filling it out.',
            files: { '/App.tsx': brokenCode },
            expectedBehavior: 'Use Lighthouse timespan mode: start a timespan, fill out all 3 steps, end the timespan. The report will show interaction delays caused by the busy-wait in goToStep.',
            hints: [
                'Switch Lighthouse to "Timespan" mode before starting',
                'The goToStep function has a 150ms busy-wait that blocks the main thread',
                'Look for INP (Interaction to Next Paint) in the timespan report',
                'Total Blocking Time will reveal the synchronous delays',
            ],
            debuggingInstructions: [
                'Open the preview in a new tab for accurate results',
                'Open DevTools \u2192 Lighthouse panel',
                'Change mode from "Navigation" to "Timespan"',
                'Click "Start timespan"',
                'Fill in name, click Next, fill in email, click Next, click Submit',
                'Click "End timespan"',
                'Review the report for INP and blocking time issues',
                'The goToStep busy-wait causes the delay \u2014 remove it to fix',
            ],
            readOnly: true,
        },
    ],
}
