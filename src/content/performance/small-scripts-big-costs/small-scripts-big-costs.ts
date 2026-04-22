import { Tutorial, TutorialContent } from "../../types/tutorial";
import { layoutThrashing } from "./concepts/layout-thrashing/concept";
import { smallScriptsBigCostsTasks } from "./tasks/task1/task";

const smallScriptsBigCostsContent: TutorialContent = {
    introduction: 'Even small scripts can cause major performance problems if they trigger layout thrashing — reading layout properties and then writing to the DOM in a loop forces the browser to recalculate layout on every iteration.',
    concepts: [layoutThrashing],
    tasks: smallScriptsBigCostsTasks,
}

export const smallScriptsBigCostsTutorial: Tutorial = {
    id: 'small-scripts-big-costs',
    title: 'Small Scripts with Big Costs',
    description: 'Identify expensive JavaScript operations like layout thrashing and forced reflows using the Performance panel.',
    difficulty: 'intermediate',
    estimatedTime: '20 minutes',
    category: 'performance',
    content: smallScriptsBigCostsContent,
}
