import { useState } from 'react'

// Simulates third-party work (analytics, ads, etc.)
function simulateThirdPartyWork() {
  let x = 0
  for (let i = 0; i < 2_000_000; i++) {
    x += Math.random()
  }
  return x
}

// Your actual app work
function renderDashboard(): string[] {
  const items: string[] = []
  for (let i = 1; i <= 5; i++) {
    items.push(`Dashboard widget ${i}`)
  }
  return items
}

export default function App() {
  const [widgets, setWidgets] = useState<string[]>([])
  const [loaded, setLoaded] = useState(false)

  const loadPage = () => {
    // Third-party scripts run first (simulated)
    simulateThirdPartyWork()

    // Then your code renders the dashboard
    const items = renderDashboard()
    setWidgets(items)
    setLoaded(true)
  }

  return (
    <div style={{ padding: 16, fontFamily: 'sans-serif' }}>
      <h3>Dashboard</h3>
      <p style={{ color: '#666' }}>Click Load and record a Performance profile to see third-party vs. first-party code.</p>
      <button onClick={loadPage} style={{ padding: '8px 16px', cursor: 'pointer' }}>
        Load Dashboard
      </button>
      {loaded && (
        <div style={{ marginTop: 16 }}>
          {widgets.map((w, i) => (
            <div key={i} style={{ padding: 8, margin: '4px 0', backgroundColor: '#f0f9ff', borderRadius: 4 }}>
              {w}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
