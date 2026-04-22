import { useState } from 'react'

export default function App() {
  const [step, setStep] = useState(1)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  // Simulates a heavy operation during form step transitions
  const goToStep = (next: number) => {
    // This blocks the main thread briefly
    const start = Date.now()
    while (Date.now() - start < 150) { /* busy wait */ }
    setStep(next)
  }

  if (submitted) {
    return (
      <div style={{ padding: 16, fontFamily: 'sans-serif', textAlign: 'center' }}>
        <h3 style={{ color: '#059669' }}>Submitted!</h3>
        <p>Thanks, {name}. We'll email you at {email}.</p>
        <button onClick={() => { setSubmitted(false); setStep(1); setName(''); setEmail('') }}
          style={{ marginTop: 12, padding: '8px 16px', cursor: 'pointer' }}>
          Start Over
        </button>
      </div>
    )
  }

  return (
    <div style={{ padding: 16, fontFamily: 'sans-serif', maxWidth: 400 }}>
      <h3>Multi-Step Registration</h3>
      <p style={{ color: '#666', marginBottom: 16 }}>Step {step} of 3</p>

      {step === 1 && (
        <div>
          <label style={{ display: 'block', marginBottom: 4, fontWeight: 600 }}>Name</label>
          <input
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Your name"
            style={{ width: '100%', padding: 8, borderRadius: 4, border: '1px solid #ccc' }}
          />
          <button onClick={() => goToStep(2)}
            style={{ marginTop: 12, padding: '8px 16px', cursor: 'pointer', backgroundColor: '#3b82f6', color: '#fff', border: 'none', borderRadius: 4 }}>
            Next
          </button>
        </div>
      )}

      {step === 2 && (
        <div>
          <label style={{ display: 'block', marginBottom: 4, fontWeight: 600 }}>Email</label>
          <input
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="you@example.com"
            style={{ width: '100%', padding: 8, borderRadius: 4, border: '1px solid #ccc' }}
          />
          <div style={{ display: 'flex', gap: 8, marginTop: 12 }}>
            <button onClick={() => goToStep(1)} style={{ padding: '8px 16px', cursor: 'pointer' }}>Back</button>
            <button onClick={() => goToStep(3)}
              style={{ padding: '8px 16px', cursor: 'pointer', backgroundColor: '#3b82f6', color: '#fff', border: 'none', borderRadius: 4 }}>
              Next
            </button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div>
          <p><strong>Name:</strong> {name}</p>
          <p><strong>Email:</strong> {email}</p>
          <div style={{ display: 'flex', gap: 8, marginTop: 12 }}>
            <button onClick={() => goToStep(2)} style={{ padding: '8px 16px', cursor: 'pointer' }}>Back</button>
            <button onClick={() => setSubmitted(true)}
              style={{ padding: '8px 16px', cursor: 'pointer', backgroundColor: '#059669', color: '#fff', border: 'none', borderRadius: 4 }}>
              Submit
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
