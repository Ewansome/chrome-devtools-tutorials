import { Tutorial, TutorialContent } from "../../types/tutorial";
import { timespanMode } from "./concepts/timespan-mode/concept";
import { lighthouseTimespansTasks } from "./tasks/task1/task";


const lighthouseTimespansContent: TutorialContent = {
    introduction: 'Lighthouse timespan mode measures performance during user interactions rather than just page load. This is critical for SPAs where most work happens after the initial load.',
    concepts: [timespanMode],
    tasks: lighthouseTimespansTasks,
}

export const lighthouseTimespansTutorial: Tutorial = {
    id: 'lighthouse-timespans',
    title: 'Using Timespans to Audit Interactions',
    description: 'Audit user interactions (not just page load) using Lighthouse timespan mode.',
    difficulty: 'intermediate',
    estimatedTime: '20 minutes',
    category: 'lighthouse',
    content: lighthouseTimespansContent,
}
