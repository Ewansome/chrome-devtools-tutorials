import { Tutorial, TutorialContent } from "../../../types/tutorial";
import { renderBlocking } from "./concepts/render-blocking/concept";
import { whatsBlockingRenderingTasks } from "./tasks/task1/task";

const whatsBlockingRenderingContent: TutorialContent = {
    introduction: 'The Performance panel records everything the browser does during a time period — parsing, scripting, rendering, painting. Learn to identify what blocks rendering and makes pages feel slow.',
    concepts: [renderBlocking],
    tasks: whatsBlockingRenderingTasks,
}

export const whatsBlockingRenderingTutorial: Tutorial = {
    id: 'whats-blocking-rendering',
    title: "What's Blocking Rendering",
    description: 'Use the Performance panel to identify render-blocking resources and long tasks.',
    difficulty: 'intermediate',
    estimatedTime: '20 minutes',
    category: 'performance',
    content: whatsBlockingRenderingContent,
}
