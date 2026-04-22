import { Concept, Task, Tutorial, TutorialContent } from "../../types/tutorial";


const exportingRecordings: Concept = {
    id: 'exporting-recordings',
    title: 'Exporting as Automation Scripts',
    description: 'The Recorder can export your recordings as ready-to-run test scripts in various formats.',
    steps: [
        'Open a saved recording in the Recorder panel',
        'Click the export icon (↓ or three-dot menu → Export)',
        'Choose a format: Puppeteer, Playwright, @puppeteer/replay, or JSON',
        'The exported script is a complete, runnable test file',
        'For Puppeteer: the script uses page.click(), page.type(), etc.',
        'For Playwright: the script uses page.locator().click(), etc.',
        'You can paste the script into your test suite and modify as needed',
        'Selectors may need adjustment for robustness (prefer data-testid)',
    ],
    exercises: [
        {
            id: 'export-exercise',
            title: 'Export a Recording',
            description: 'Record a simple flow on this login form, then export it as a Puppeteer or Playwright script. Review the generated code.',
            files: {
                '/App.tsx': `import { useState } from 'react'

export default function App() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loggedIn, setLoggedIn] = useState(false)
  const [error, setError] = useState('')

  const handleLogin = () => {
    if (email === 'user@test.com' && password === 'password123') {
      setLoggedIn(true)
      setError('')
    } else {
      setError('Invalid credentials')
    }
  }

  if (loggedIn) {
    return (
      <div style={{ padding: 16, fontFamily: 'sans-serif', textAlign: 'center' }}>
        <h3 style={{ color: '#059669' }}>Welcome!</h3>
        <p>Logged in as {email}</p>
        <button onClick={() => { setLoggedIn(false); setEmail(''); setPassword('') }}
          style={{ marginTop: 12, padding: '8px 16px', cursor: 'pointer' }}>
          Logout
        </button>
      </div>
    )
  }

  return (
    <div style={{ padding: 16, fontFamily: 'sans-serif', maxWidth: 320 }}>
      <h3>Login</h3>
      <div style={{ marginBottom: 12 }}>
        <label style={{ display: 'block', fontWeight: 600, marginBottom: 4 }}>Email</label>
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="user@test.com"
          data-testid="email-input"
          style={{ width: '100%', padding: 8, borderRadius: 4, border: '1px solid #ccc' }}
        />
      </div>
      <div style={{ marginBottom: 12 }}>
        <label style={{ display: 'block', fontWeight: 600, marginBottom: 4 }}>Password</label>
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="password123"
          data-testid="password-input"
          style={{ width: '100%', padding: 8, borderRadius: 4, border: '1px solid #ccc' }}
        />
      </div>
      {error && <p style={{ color: '#ef4444', marginBottom: 8 }}>{error}</p>}
      <button onClick={handleLogin} data-testid="login-button"
        style={{ width: '100%', padding: '8px 16px', cursor: 'pointer', backgroundColor: '#3b82f6', color: '#fff', border: 'none', borderRadius: 4 }}>
        Login
      </button>
    </div>
  )
}
`,
            },
            expectedBehavior: 'Record a login flow (type email, type password, click Login). Export as Puppeteer or Playwright. The generated script will contain page.type() and page.click() calls matching your actions.',
            hints: [
                'Use the export button (download icon) in the Recorder panel',
                'The exported script includes all recorded steps as code',
                'data-testid attributes make selectors more stable in exports',
                'You can modify the generated script for your test framework',
            ],
            debuggingInstructions: [
                'Open the demo in a new tab',
                'Record a login flow: type "user@test.com", type "password123", click Login',
                'End the recording',
                'Click the export icon (↓) in the Recorder panel',
                'Choose "Puppeteer" or "@playwright/test"',
                'Review the generated code — it mirrors your actions',
                'Note how selectors are generated (CSS selectors or ARIA)',
                'The data-testid attributes provide stable selectors',
            ],
            readOnly: true,
        },
    ],
}

const exportingPuppeteerScriptsTasks: Task[] = [
    {
        id: 'task-1',
        title: 'Create an Exportable Recording',
        description: 'Record a login flow and export it as a Puppeteer script. Review the selectors and suggest improvements.',
        buggyCode: `// Generated Puppeteer script (simplified):
await page.click('#root > div > div:nth-child(3) > input');
// ^ This selector is fragile — it breaks if the DOM changes

// Better:
await page.click('[data-testid="email-input"]');
// ^ data-testid selectors are stable across refactors`,
        expectedBehavior: 'The exported script should use stable selectors (data-testid) when available.',
        hints: [
            'Record a flow, then export as Puppeteer',
            'Look at the selectors in the generated code',
            'CSS nth-child selectors are fragile',
            'data-testid selectors survive refactors',
        ],
        solution: {
            explanation: 'Chrome DevTools generates selectors based on what it finds (CSS, ARIA, XPath). Adding data-testid attributes to key elements gives the Recorder stable selectors to use.',
            debuggingSteps: [
                'Record the login flow',
                'Export as Puppeteer and review selectors',
                'Note which selectors use data-testid vs. CSS paths',
                'Add data-testid to any elements missing them',
                'Re-record and re-export to verify improved selectors',
            ],
            devToolsFeatures: ['Recorder Export', 'Puppeteer Script', 'Selector Strategy'],
        },
    },
]

const exportingPuppeteerScriptsContent: TutorialContent = {
    introduction: 'Recorded user flows can be exported as Puppeteer, Playwright, or other automation scripts. This bridges the gap between manual testing and automated end-to-end tests.',
    concepts: [exportingRecordings],
    tasks: exportingPuppeteerScriptsTasks,
}

export const exportingPuppeteerScriptsTutorial: Tutorial = {
    id: 'exporting-puppeteer-scripts',
    title: 'Exporting Puppeteer Scripts',
    description: 'Export recordings as Puppeteer or Playwright scripts for automated testing.',
    difficulty: 'intermediate',
    estimatedTime: '12 minutes',
    category: 'recorder',
    content: exportingPuppeteerScriptsContent,
}
