import { Concept } from "../../../../types/tutorial";
import brokenCode from './broken-code.tsx?raw'

export const debuggingFailedRequests: Concept = {
    id: 'debugging-failed-requests',
    title: 'Debugging Failed Requests',
    description: 'Learn to identify and fix common network request issues.',
    steps: [
        'Check the status code (4xx client errors, 5xx server errors)',
        'Examine request headers for authentication issues',
        'Verify request payload format and content',
        'Look at response body for error messages',
    ],
    exercises: [
        {
            id: 'fetch-error-debug',
            title: 'Debug Failed API Request',
            description: 'This component tries to fetch user data but fails due to authentication issues! The mock server inside the sandbox rejects invalid tokens.',
            files: { '/App.tsx': brokenCode },
            expectedBehavior: 'Should handle authentication errors properly and show meaningful error messages',
            hints: [
                'Check response.ok before parsing JSON',
                'The token "Bearer invalid-token-12345" will cause a 401',
                'Use if (!response.ok) throw new Error(response.statusText)',
                'Open the Network panel to see the 401 status',
            ],
            debuggingInstructions: [
                'Open Chrome DevTools and go to Network panel',
                'Clear existing requests',
                'Click "Fetch User 101"',
                'Look for the failed request (red status code)',
                'Click on the request to see details',
                'Check the status code (401 Unauthorized)',
                'Examine the request headers to see the invalid token',
                'Fix the authentication or add proper error handling',
            ],
        },
    ],
}
