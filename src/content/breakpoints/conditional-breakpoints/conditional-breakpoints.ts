import { Tutorial, TutorialContent } from "../../types/tutorial";
import { whatAreConditionalBreakpoints } from "./concepts/what-are-conditional-breakpoints/concept";
import { whenToUseConditionalBreakpoints } from "./concepts/when-to-use-conditional-breakpoints/concept";
import { conditionalBreakpointsTasks } from "./tasks/task1/task";


const conditionalBreakpointsContent: TutorialContent =  {
    introduction: 'Conditional breakpoints allow you to pause execution only when certain conditions are true. This is incredibly useful when debugging loops or functions that are called many times.',
    concepts: [whatAreConditionalBreakpoints, whenToUseConditionalBreakpoints],
    tasks: conditionalBreakpointsTasks,
}

export const conditionalBreakpointsTutorial: Tutorial = {
    id: 'conditional-breakpoints',
    title: 'Conditional Breakpoints',
    description: 'Learn to set breakpoints that only trigger when specific conditions are met, making debugging more efficient.',
    difficulty: 'beginner',
    estimatedTime: '15 minutes',
    category: 'breakpoints',
    content: conditionalBreakpointsContent
}
