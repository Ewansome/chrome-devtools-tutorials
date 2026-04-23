import { useState } from 'react'

export default function App() {
  const [counter, setCounter] = useState(0)
  const [history, setHistory] = useState<string[]>([])

  const handleClick = () => {
    // BUG: This increments instead of toggling between 0 and 1
    const next = counter + 1
    setCounter(next)
    setHistory(prev => [
      ...prev,
      `Click ${prev.length + 1}: counter = ${next}`,
    ])
  }

  return (
    <div style={{ padding: 16, fontFamily: 'sans-serif' }}>
      <h3>Toggle Counter</h3>
      <p>Counter should toggle between 0 and 1.</p>
      <div style={{ display: 'flex', gap: 8, marginTop: 8 }}>
        <button onClick={handleClick} style={{ padding: '8px 16px', cursor: 'pointer' }}>
          Toggle: {counter}
        </button>
        <button
          onClick={() => { setCounter(0); setHistory([]) }}
          style={{ padding: '8px 16px', cursor: 'pointer' }}
        >
          Reset
        </button>
      </div>
      {history.length > 0 && (
        <ul style={{ marginTop: 12, fontSize: 14, color: '#555' }}>
          {history.map((entry, i) => <li key={i}>{entry}</li>)}
        </ul>
      )}
    </div>
  )
}
