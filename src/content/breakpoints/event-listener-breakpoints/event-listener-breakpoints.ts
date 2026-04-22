import { Tutorial, TutorialContent } from "../../types/tutorial";
import { whatAreEventBreakpoints } from "./concepts/what-are-event-breakpoints/concept";
import { eventListenerBreakpointsTasks } from "./tasks/task1/task";

const eventListenerBreakpointsContent: TutorialContent = {
    introduction: 'Event listener breakpoints let you pause execution whenever specific events are triggered, making it easy to debug user interactions.',
    concepts: [whatAreEventBreakpoints],
    tasks: eventListenerBreakpointsTasks,
}

export const eventListenerBreakpointsTutorial: Tutorial = {
    id: 'event-listener-breakpoints',
    title: 'Event Listener Breakpoints',
    description: 'Pause execution when specific events are fired, perfect for debugging user interactions and event handling.',
    difficulty: 'beginner',
    estimatedTime: '12 minutes',
    category: 'breakpoints',
    content: eventListenerBreakpointsContent,
}
