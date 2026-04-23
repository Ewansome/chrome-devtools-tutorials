import { useState } from 'react'

type Step = 'browse' | 'cart' | 'confirm'

const products = [
  { id: 1, name: 'Keyboard', price: 59.99 },
  { id: 2, name: 'Monitor Stand', price: 34.99 },
]

export default function App() {
  const [step, setStep] = useState<Step>('browse')
  const [cart, setCart] = useState<typeof products>([])

  if (step === 'confirm') {
    return (
      <div style={{ padding: 16, fontFamily: 'sans-serif', textAlign: 'center' }}>
        <h3 style={{ color: '#059669' }}>Order Placed!</h3>
        <p>{cart.length} items ordered.</p>
        <button onClick={() => { setStep('browse'); setCart([]) }}
          style={{ marginTop: 12, padding: '8px 16px', cursor: 'pointer' }}>
          Start Over
        </button>
      </div>
    )
  }

  return (
    <div style={{ padding: 16, fontFamily: 'sans-serif' }}>
      <h3>Quick Shop</h3>

      {step === 'browse' && (
        <div>
          {products.map(p => (
            <div key={p.id} style={{ display: 'flex', justifyContent: 'space-between', padding: 8, borderBottom: '1px solid #eee' }}>
              <span>{p.name} — ${p.price}</span>
              <button onClick={() => setCart(prev => [...prev, p])} style={{ cursor: 'pointer' }}>Add</button>
            </div>
          ))}
          {cart.length > 0 && (
            <button onClick={() => setStep('cart')}
              style={{ marginTop: 12, padding: '8px 16px', cursor: 'pointer', backgroundColor: '#3b82f6', color: '#fff', border: 'none', borderRadius: 4 }}>
              Cart ({cart.length})
            </button>
          )}
        </div>
      )}

      {step === 'cart' && (
        <div>
          {cart.map((p, i) => <div key={i} style={{ padding: 8 }}>{p.name}</div>)}
          <button onClick={() => setStep('confirm')}
            style={{ marginTop: 8, padding: '8px 16px', cursor: 'pointer', backgroundColor: '#059669', color: '#fff', border: 'none', borderRadius: 4 }}>
            Place Order
          </button>
        </div>
      )}
    </div>
  )
}
