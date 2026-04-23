import { Tutorial, TutorialContent } from "../../types/tutorial";
import { readingTheWaterfall } from "./concepts/reading-the-waterfall/concept";
import { measuringNetworkRequestsTasks } from "./tasks/task1/task";


const measuringNetworkRequestsContent: TutorialContent = {
    introduction: 'The Network panel waterfall view shows when each request starts and finishes, how large each response is, and where time is being spent. This is essential for understanding your app\'s loading behavior.',
    concepts: [readingTheWaterfall],
    tasks: measuringNetworkRequestsTasks,
}

export const measuringNetworkRequestsTutorial: Tutorial = {
    id: 'measuring-network-requests',
    title: 'Measuring Network Requests',
    description: 'Learn to read the Network panel waterfall, measure timing, and understand request sizes.',
    difficulty: 'beginner',
    estimatedTime: '15 minutes',
    category: 'network',
    content: measuringNetworkRequestsContent,
}
