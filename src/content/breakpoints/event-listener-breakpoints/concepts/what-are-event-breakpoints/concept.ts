import { Concept } from "../../../../types/tutorial";
import brokenCode from './broken-code.tsx?raw'

export const whatAreEventBreakpoints: Concept = {
    id: 'what-are-event-breakpoints',
    title: 'Event Listener Breakpoints',
    description: 'These breakpoints pause execution when specific DOM events are fired, regardless of where the event listeners are defined.',
    steps: [
        'Go to Sources panel in DevTools',
        'Find "Event Listener Breakpoints" in the right sidebar',
        'Check the events you want to break on',
        'Interact with the page to trigger the events',
    ],
    exercises: [
        {
            id: 'event-handler-debug',
            title: 'Debug Event Handler Logic',
            description: 'This counter should toggle between 0 and 1, but it keeps incrementing instead!',
            files: { '/App.tsx': brokenCode },
            expectedBehavior: 'Counter should toggle between 0 and 1, not keep incrementing',
            hints: [
                'Use modulo operator: (counter + 1) % 2',
                'Or use ternary: counter === 0 ? 1 : 0',
                'Set an event listener breakpoint on "click" to step through the handler',
            ],
            debuggingInstructions: [
                'Open Chrome DevTools and go to Sources panel',
                'In the right sidebar, find "Event Listener Breakpoints"',
                'Expand "Mouse" section and check "click"',
                'Click the toggle button',
                'The debugger will pause on the click event',
                'Step through the handleClick function',
                'Notice the counter keeps incrementing instead of toggling',
                'Fix the logic to toggle between 0 and 1',
            ],
        },
    ],
}
