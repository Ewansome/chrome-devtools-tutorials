import { Task } from "../../../../types/tutorial";
import brokenCode from './brokenCode?raw';

export const networkDebuggingTasks: Task[] = [
    {
        id: 'task-1',
        title: 'Fix the Broken API Call',
        description: 'User data is not loading because of a network request issue. Use the Network panel to identify and fix the problem.',
        buggyCode: brokenCode,
        expectedBehavior: 'User data should load successfully when a valid user ID is provided.',
        hints: [
            'Open Network panel and try to load user data',
            'Look for failed requests (red status codes)',
            'Check the request headers and response',
            'Pay attention to authentication-related errors',
        ],
        solution: {
            explanation: 'The API call is failing because of an invalid authorization token. The Network panel will show a 401 Unauthorized error.',
            debuggingSteps: [
                'Open Network panel and clear existing requests',
                'Trigger the user data fetch',
                'Look for the failed request (401 status)',
                'Click on the request to see details',
                'Check the Authorization header value',
                'Fix the token or remove invalid authentication',
            ],
            devToolsFeatures: ['Network Panel', 'Request Headers', 'Response Details', 'Status Codes'],
        },
    },
]
