import { Concept } from "../../../../types/tutorial";
import brokenCode from './broken-code.tsx?raw'

export const layoutThrashing: Concept = {
    id: 'layout-thrashing',
    title: 'Layout Thrashing and Forced Reflows',
    description: 'Layout thrashing occurs when JavaScript reads a layout property (like offsetHeight), writes to the DOM, then reads again — forcing the browser to recalculate layout between each read/write cycle.',
    steps: [
        'Open the Performance panel and record a profile',
        'Look for purple "Layout" blocks in the flame chart',
        'Frequent small Layout blocks in a loop indicate thrashing',
        'Click on a Layout block to see "Layout Forced" warnings',
        'The "Recalculate Style" entries show which properties triggered it',
        'Batch your reads and writes separately to avoid thrashing',
    ],
    exercises: [
        {
            id: 'layout-thrashing-exercise',
            title: 'Spot the Layout Thrashing',
            description: 'This component animates elements by reading and writing layout properties in a loop. Record a Performance profile to see the forced reflows.',
            files: { '/App.tsx': brokenCode },
            expectedBehavior: 'Record a Performance profile during the animation. You\'ll see repeated "Layout Forced" warnings in the flame chart. The fix is to batch all reads first, then do all writes.',
            hints: [
                'offsetHeight is a layout-triggering property',
                'Reading it after writing to style forces a synchronous layout recalculation',
                'Batch reads first: collect all heights into an array',
                'Then batch writes: update all styles without interleaved reads',
            ],
            debuggingInstructions: [
                'Open DevTools → Performance panel',
                'Click record, then click "Animate Boxes"',
                'Wait for animation to finish, then stop recording',
                'Zoom into the flame chart — look for purple "Layout" blocks',
                'Click on a Layout block — check for "Layout Forced" warnings',
                'The warning shows which line triggered the forced layout',
                'Fix: read all offsetHeight values first, then write all styles',
            ],
            readOnly: true,
        },
    ],
}
