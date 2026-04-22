import { Tutorial, TutorialContent } from "../../../types/tutorial";
import { exploringA11yTree } from "./concepts/exploring-tree/concept";
import { accessibilityTreeTasks } from "./tasks/task1/task";


const accessibilityTreeContent: TutorialContent = {
    introduction: 'The accessibility tree is a parallel structure to the DOM that represents how assistive technologies (like screen readers) interpret your page. Understanding it helps you build more inclusive applications.',
    concepts: [exploringA11yTree],
    tasks: accessibilityTreeTasks,
}

export const accessibilityTreeTutorial: Tutorial = {
    id: 'accessibility-tree',
    title: 'Accessibility Tree',
    description: 'Inspect how assistive technologies see your page by exploring the accessibility tree in DevTools.',
    difficulty: 'beginner',
    estimatedTime: '15 minutes',
    category: 'accessibility',
    content: accessibilityTreeContent,
}
