import { Tutorial, TutorialContent } from "../../types/tutorial";
import { typesOfDomBreakpoints } from "./concepts/types-of-dom-breakpoints/concept";
import { domBreakpointsTasks } from "./tasks/task1/task";

const domBreakpointsContent: TutorialContent = {
    introduction: 'DOM breakpoints help you catch changes to the DOM structure in real-time. They\'re perfect for debugging dynamic content issues.',
    concepts: [typesOfDomBreakpoints],
    tasks: domBreakpointsTasks,
}

export const domBreakpointsTutorial: Tutorial = {
    id: 'dom-breakpoints',
    title: 'DOM Breakpoints',
    description: 'Debug DOM modifications by setting breakpoints that trigger when elements are added, removed, or modified.',
    difficulty: 'intermediate',
    estimatedTime: '20 minutes',
    category: 'breakpoints',
    content: domBreakpointsContent,
}
