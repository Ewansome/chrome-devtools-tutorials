import { useState, useEffect } from 'react'

function mockFetch(url: string): Promise<{ data: string }> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url.includes('weather')) resolve({ data: 'Sunny, 22\u00b0C' })
      else if (url.includes('news')) resolve({ data: 'Breaking: DevTools are awesome' })
      else if (url.includes('stock')) reject(new Error('Service unavailable'))
      else reject(new Error('Unknown endpoint'))
    }, 300)
  })
}

interface SectionProps {
  title: string
  url: string
}

function DataSection({ title, url }: SectionProps) {
  const [data, setData] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const load = async () => {
    setLoading(true)
    setError(null)
    try {
      const result = await mockFetch(url)
      setData(result.data)
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={{ padding: 12, border: '1px solid #ddd', borderRadius: 8, marginBottom: 8 }}>
      <strong>{title}</strong>
      <button onClick={load} style={{ marginLeft: 8, padding: '4px 12px', cursor: 'pointer' }}>
        Load
      </button>
      {loading && <span style={{ marginLeft: 8, color: '#888' }}>Loading...</span>}
      {data && <p style={{ marginTop: 8, color: '#059669' }}>{data}</p>}
      {error && <p style={{ marginTop: 8, color: '#dc2626' }}>Error: {error}</p>}
    </div>
  )
}

export default function App() {
  return (
    <div style={{ padding: 16, fontFamily: 'sans-serif' }}>
      <h3>Multi-Source Dashboard</h3>
      <p style={{ color: '#666', marginBottom: 12 }}>
        Each section loads from a different API. Try blocking requests to test resilience.
      </p>
      <DataSection title="Weather" url="/api/weather" />
      <DataSection title="News" url="/api/news" />
      <DataSection title="Stock Price" url="/api/stock" />
    </div>
  )
}
