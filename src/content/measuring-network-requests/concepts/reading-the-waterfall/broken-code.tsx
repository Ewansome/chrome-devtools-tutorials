import { useState } from 'react'

function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

async function fakeFetch(label: string, ms: number, size: number) {
  await delay(ms)
  return { label, time: ms, payload: 'x'.repeat(size) }
}

export default function App() {
  const [results, setResults] = useState<{ label: string; time: number; size: number }[]>([])
  const [loading, setLoading] = useState(false)

  const loadAll = async () => {
    setLoading(true)
    setResults([])
    const responses = await Promise.all([
      fakeFetch('User profile', 120, 512),
      fakeFetch('Product list', 800, 24000),
      fakeFetch('Notifications', 200, 1024),
      fakeFetch('Analytics config', 50, 256),
      fakeFetch('Feature flags', 1500, 128),
    ])
    setResults(responses.map(r => ({ label: r.label, time: r.time, size: r.payload.length })))
    setLoading(false)
  }

  return (
    <div style={{ padding: 16, fontFamily: 'sans-serif' }}>
      <h3>API Dashboard</h3>
      <p style={{ color: '#666' }}>Click Load to fetch data from multiple APIs.</p>
      <button onClick={loadAll} style={{ padding: '8px 16px', cursor: 'pointer' }}>
        Load All Data
      </button>
      {loading && <p style={{ marginTop: 12, color: '#888' }}>Fetching data...</p>}
      {results.length > 0 && (
        <table style={{ marginTop: 16, borderCollapse: 'collapse', width: '100%' }}>
          <thead>
            <tr style={{ borderBottom: '2px solid #ddd', textAlign: 'left' }}>
              <th style={{ padding: 8 }}>API</th>
              <th style={{ padding: 8 }}>Time (ms)</th>
              <th style={{ padding: 8 }}>Size (bytes)</th>
            </tr>
          </thead>
          <tbody>
            {results.map(r => (
              <tr key={r.label} style={{ borderBottom: '1px solid #eee' }}>
                <td style={{ padding: 8 }}>{r.label}</td>
                <td style={{ padding: 8 }}>{r.time}</td>
                <td style={{ padding: 8 }}>{r.size.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}
