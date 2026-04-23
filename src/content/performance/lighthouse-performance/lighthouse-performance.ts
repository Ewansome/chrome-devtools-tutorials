import { Tutorial, TutorialContent } from "../../types/tutorial";
import { coreWebVitals } from "./concepts/core-web-vitals/concept";
import { lighthousePerformanceTasks } from "./tasks/task1/task";

const lighthousePerformanceContent: TutorialContent = {
    introduction: 'Lighthouse provides automated auditing for performance, accessibility, SEO, and best practices. Learn to interpret and act on its recommendations.',
    concepts: [coreWebVitals],
    tasks: lighthousePerformanceTasks,
}

export const lighthousePerformanceTutorial: Tutorial = {
    id: 'lighthouse-performance',
    title: 'Performance Debugging with Lighthouse',
    description: 'Use Lighthouse to identify and fix performance issues including image optimization and layout shifts.',
    difficulty: 'advanced',
    estimatedTime: '30 minutes',
    category: 'performance',
    content: lighthousePerformanceContent,
}
