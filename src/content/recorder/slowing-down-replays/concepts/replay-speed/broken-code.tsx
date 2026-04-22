import { useState } from 'react'

export default function App() {
  const [count, setCount] = useState(0)
  const [log, setLog] = useState<string[]>([])

  const increment = () => {
    setCount(prev => prev + 1)
    setLog(prev => [...prev, `Incremented to ${count + 1} at ${new Date().toLocaleTimeString()}`])
  }

  const reset = () => {
    setCount(0)
    setLog([])
  }

  return (
    <div style={{ padding: 16, fontFamily: 'sans-serif' }}>
      <h3>Click Counter</h3>
      <p style={{ fontSize: 24, fontWeight: 'bold' }}>{count}</p>
      <div style={{ display: 'flex', gap: 8 }}>
        <button onClick={increment} style={{ padding: '8px 16px', cursor: 'pointer' }}>+1</button>
        <button onClick={reset} style={{ padding: '8px 16px', cursor: 'pointer' }}>Reset</button>
      </div>
      {log.length > 0 && (
        <div style={{ marginTop: 12, fontSize: 12, color: '#666' }}>
          {log.map((entry, i) => <div key={i}>{entry}</div>)}
        </div>
      )}
    </div>
  )
}
