import { useState } from 'react'

function heavyComputation(): number {
  // Simulates an expensive synchronous operation
  let result = 0
  for (let i = 0; i < 5_000_000; i++) {
    result += Math.sqrt(i) * Math.sin(i)
  }
  return result
}

export default function App() {
  const [items, setItems] = useState<string[]>([])
  const [computing, setComputing] = useState(false)

  const generateReport = () => {
    setComputing(true)
    // BUG: This blocks the main thread — should use a web worker or break into chunks
    const result = heavyComputation()
    setItems([
      `Computed value: ${result.toFixed(2)}`,
      `Timestamp: ${new Date().toISOString()}`,
      'Report generated successfully',
    ])
    setComputing(false)
  }

  return (
    <div style={{ padding: 16, fontFamily: 'sans-serif' }}>
      <h3>Report Generator</h3>
      <p style={{ color: '#666' }}>Click Generate to run a heavy computation.</p>
      <button onClick={generateReport} style={{ padding: '8px 16px', cursor: 'pointer' }}>
        Generate Report
      </button>
      {computing && <p style={{ marginTop: 12, color: '#f59e0b' }}>Computing... (UI is frozen)</p>}
      {items.length > 0 && (
        <ul style={{ marginTop: 12 }}>
          {items.map((item, i) => <li key={i}>{item}</li>)}
        </ul>
      )}
    </div>
  )
}
