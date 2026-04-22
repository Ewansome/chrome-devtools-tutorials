import { Tutorial, TutorialContent } from "../../types/tutorial";
import { recordingBreakpoints } from "./concepts/recording-breakpoints/concept";
import { breakpointsInRecordingsTasks } from "./tasks/task1/task";

const breakpointsInRecordingsContent: TutorialContent = {
    introduction: 'You can add breakpoints to individual steps in a recording. When the replay reaches that step, it pauses so you can inspect the DOM, network requests, and application state before continuing.',
    concepts: [recordingBreakpoints],
    tasks: breakpointsInRecordingsTasks,
}

export const breakpointsInRecordingsTutorial: Tutorial = {
    id: 'breakpoints-in-recordings',
    title: 'Setting Breakpoints in Recordings',
    description: 'Add breakpoints to specific steps in recordings to pause and inspect state mid-flow.',
    difficulty: 'intermediate',
    estimatedTime: '10 minutes',
    category: 'recorder',
    content: breakpointsInRecordingsContent,
}
