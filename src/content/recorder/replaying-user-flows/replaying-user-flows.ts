import { Tutorial, TutorialContent } from "../../types/tutorial";
import { replayingRecordings } from "./concepts/replaying-recordings/concept";
import { replayingUserFlowsTasks } from "./tasks/task1/task";

const replayingUserFlowsContent: TutorialContent = {
    introduction: 'Once you\'ve recorded a user flow, you can replay it at any time to verify it still works. This is like a manual smoke test that runs automatically.',
    concepts: [replayingRecordings],
    tasks: replayingUserFlowsTasks,
}

export const replayingUserFlowsTutorial: Tutorial = {
    id: 'replaying-user-flows',
    title: 'Replaying User Flows',
    description: 'Replay saved recordings to verify user flows still work correctly after code changes.',
    difficulty: 'beginner',
    estimatedTime: '8 minutes',
    category: 'recorder',
    content: replayingUserFlowsContent,
}
