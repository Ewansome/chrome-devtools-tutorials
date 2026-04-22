import { Tutorial, TutorialContent } from "../../types/tutorial";
import { requestBlocking } from "./concepts/request-blocking/concept";
import { blockingNetworkRequestsTasks } from "./tasks/task1/task";


const blockingNetworkRequestsContent: TutorialContent = {
    introduction: 'The Network panel lets you block specific requests to test graceful degradation. This is invaluable for testing offline scenarios and what happens when third-party services go down.',
    concepts: [requestBlocking],
    tasks: blockingNetworkRequestsTasks,
}

export const blockingNetworkRequestsTutorial: Tutorial = {
    id: 'blocking-network-requests',
    title: 'Blocking Network Requests',
    description: 'Test how your app behaves when specific resources are unavailable by blocking requests in DevTools.',
    difficulty: 'intermediate',
    estimatedTime: '15 minutes',
    category: 'network',
    content: blockingNetworkRequestsContent,
}
