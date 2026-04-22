import { Tutorial, TutorialContent } from "../../types/tutorial";
import { creatingRecordings } from "./concepts/creating-recordings/concept";
import { recordingUserFlowsTasks } from "./tasks/task1/task";

const recordingUserFlowsContent: TutorialContent = {
    introduction: 'The Recorder panel captures user interactions as replayable step-by-step recordings. This is powerful for testing, bug reproduction, and automated QA.',
    concepts: [creatingRecordings],
    tasks: recordingUserFlowsTasks,
}

export const recordingUserFlowsTutorial: Tutorial = {
    id: 'recording-user-flows',
    title: 'Recording User Flows',
    description: 'Learn to record multi-step user interactions with the DevTools Recorder panel.',
    difficulty: 'beginner',
    estimatedTime: '10 minutes',
    category: 'recorder',
    content: recordingUserFlowsContent,
}
