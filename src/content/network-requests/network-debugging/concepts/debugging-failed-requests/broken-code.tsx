import { useState } from 'react'

// Simple mock fetch for the sandbox — intercepts /api/user requests
const originalFetch = window.fetch.bind(window)
window.fetch = async (input: RequestInfo | URL, init?: RequestInit) => {
  const url = typeof input === 'string' ? input : input.toString()
  if (url.startsWith('/api/user/')) {
    const auth = init?.headers && (init.headers as Record<string, string>)['Authorization']
    if (auth === 'Bearer invalid-token-12345') {
      return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401 })
    }
    const userId = url.split('/').pop()
    return new Response(JSON.stringify({ id: userId, name: 'John Doe', email: 'john@example.com' }), { status: 200 })
  }
  return originalFetch(input, init)
}

export default function App() {
  const [user, setUser] = useState<{ name: string; email: string } | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const fetchUser = async (userId: string) => {
    setLoading(true)
    setError(null)
    setUser(null)
    try {
      // BUG: Using an invalid authorization token
      const res = await fetch(`/api/user/${userId}`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer invalid-token-12345',
        },
      })
      // BUG: Not checking response.ok before parsing
      const data = await res.json()
      setUser(data)
    } catch {
      setError('Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={{ padding: 16, fontFamily: 'sans-serif' }}>
      <h3>User Loader</h3>
      <div style={{ display: 'flex', gap: 8, marginTop: 8 }}>
        {['101', '102', '103'].map(id => (
          <button key={id} onClick={() => fetchUser(id)} style={{ padding: '8px 16px', cursor: 'pointer' }}>
            Fetch User {id}
          </button>
        ))}
      </div>
      {loading && <p style={{ marginTop: 12, color: '#666' }}>Loading...</p>}
      {error && <p style={{ marginTop: 12, color: 'red' }}>{error}</p>}
      {user && (
        <div style={{ marginTop: 12, padding: 12, backgroundColor: '#f0fdf4', borderRadius: 8 }}>
          <strong>{user.name}</strong> — {user.email}
        </div>
      )}
    </div>
  )
}
