import { Tutorial, TutorialContent } from "../../../types/tutorial";
import { dimThirdParty } from "./concepts/dim-third-party/concept";
import { dimThirdPartiesTasks } from "./tasks/task1/task";

const dimThirdPartiesContent: TutorialContent = {
    introduction: 'Third-party scripts (analytics, ads, chat widgets) can dominate a Performance recording. Chrome DevTools can dim them so you can focus on your own code\'s performance impact.',
    concepts: [dimThirdParty],
    tasks: dimThirdPartiesTasks,
}

export const dimThirdPartiesTutorial: Tutorial = {
    id: 'dim-third-parties',
    title: 'Dim Third Parties',
    description: 'Use the Performance panel\'s "Dim third-party" feature to focus on your own code\'s performance impact.',
    difficulty: 'beginner',
    estimatedTime: '10 minutes',
    category: 'performance',
    content: dimThirdPartiesContent,
}
