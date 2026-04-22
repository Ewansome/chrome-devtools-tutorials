import { Tutorial, TutorialContent } from "../../types/tutorial";
import { runningLighthouse } from "./concepts/running-lighthouse/concept";
import { auditingPagesTasks } from "./tasks/task1/task";


const auditingPagesContent: TutorialContent = {
    introduction: 'Lighthouse is built into Chrome DevTools and audits pages for performance, accessibility, best practices, and SEO. Learning to read its reports is a fundamental DevTools skill.',
    concepts: [runningLighthouse],
    tasks: auditingPagesTasks,
}

export const auditingPagesTutorial: Tutorial = {
    id: 'auditing-pages',
    title: 'Auditing Individual Pages',
    description: 'Run Lighthouse audits on specific pages to identify performance, accessibility, and SEO issues.',
    difficulty: 'beginner',
    estimatedTime: '15 minutes',
    category: 'lighthouse',
    content: auditingPagesContent,
}
