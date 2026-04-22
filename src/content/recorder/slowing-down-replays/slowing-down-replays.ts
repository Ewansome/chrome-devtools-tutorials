import { Tutorial, TutorialContent } from "../../types/tutorial";
import { replaySpeed } from "./concepts/replay-speed/concept";
import { slowingDownReplaysTasks } from "./tasks/task1/task";

const slowingDownReplaysContent: TutorialContent = {
    introduction: 'By default, replays run at normal speed. Slowing them down lets you observe each step and catch timing-related issues.',
    concepts: [replaySpeed],
    tasks: slowingDownReplaysTasks,
}

export const slowingDownReplaysTutorial: Tutorial = {
    id: 'slowing-down-replays',
    title: 'Slowing Down Replays',
    description: 'Control replay speed to observe each step in detail during debugging.',
    difficulty: 'beginner',
    estimatedTime: '5 minutes',
    category: 'recorder',
    content: slowingDownReplaysContent,
}
