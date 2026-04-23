import { Tutorial, TutorialContent } from "../../types/tutorial";
import { debuggingFailedRequests } from "./concepts/debugging-failed-requests/concept";
import { networkDebuggingTasks } from "./tasks/task1/task";


const networkDebuggingContent: TutorialContent = {
    introduction: 'The Network panel shows all network activity and helps you debug API calls, slow requests, and failed network operations.',
    concepts: [debuggingFailedRequests],
    tasks: networkDebuggingTasks,
}

export const networkDebuggingTutorial: Tutorial = {
    id: 'network-debugging',
    title: 'Network Request Debugging',
    description: 'Debug API calls, failed requests, and network performance issues using the Network panel.',
    difficulty: 'intermediate',
    estimatedTime: '25 minutes',
    category: 'network',
    content: networkDebuggingContent,
}
