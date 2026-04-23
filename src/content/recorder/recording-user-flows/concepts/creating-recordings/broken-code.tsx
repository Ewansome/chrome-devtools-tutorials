import { useState } from 'react'

type Step = 'browse' | 'cart' | 'shipping' | 'confirm'

const products = [
  { id: 1, name: 'Wireless Mouse', price: 29.99 },
  { id: 2, name: 'USB-C Hub', price: 49.99 },
  { id: 3, name: 'Webcam HD', price: 79.99 },
]

export default function App() {
  const [step, setStep] = useState<Step>('browse')
  const [cart, setCart] = useState<typeof products>([])
  const [address, setAddress] = useState('')

  if (step === 'confirm') {
    return (
      <div style={{ padding: 16, fontFamily: 'sans-serif', textAlign: 'center' }}>
        <h3 style={{ color: '#059669' }}>Order Confirmed!</h3>
        <p>Shipping to: {address}</p>
        <p>Items: {cart.map(p => p.name).join(', ')}</p>
        <p style={{ fontWeight: 600, marginTop: 8 }}>
          Total: ${cart.reduce((sum, p) => sum + p.price, 0).toFixed(2)}
        </p>
        <button onClick={() => { setStep('browse'); setCart([]); setAddress('') }}
          style={{ marginTop: 16, padding: '8px 16px', cursor: 'pointer' }}>
          New Order
        </button>
      </div>
    )
  }

  return (
    <div style={{ padding: 16, fontFamily: 'sans-serif' }}>
      <h3>Mini Shop</h3>
      <p style={{ color: '#666', marginBottom: 12 }}>Step: {step}</p>

      {step === 'browse' && (
        <div>
          <h4>Products</h4>
          {products.map(p => (
            <div key={p.id} style={{ display: 'flex', justifyContent: 'space-between', padding: 8, borderBottom: '1px solid #eee' }}>
              <span>{p.name} — ${p.price}</span>
              <button onClick={() => setCart(prev => [...prev, p])}
                style={{ padding: '4px 12px', cursor: 'pointer' }}>
                Add
              </button>
            </div>
          ))}
          {cart.length > 0 && (
            <button onClick={() => setStep('cart')}
              style={{ marginTop: 12, padding: '8px 16px', cursor: 'pointer', backgroundColor: '#3b82f6', color: '#fff', border: 'none', borderRadius: 4 }}>
              View Cart ({cart.length})
            </button>
          )}
        </div>
      )}

      {step === 'cart' && (
        <div>
          <h4>Cart</h4>
          {cart.map((p, i) => (
            <div key={i} style={{ padding: 8, borderBottom: '1px solid #eee' }}>
              {p.name} — ${p.price}
            </div>
          ))}
          <p style={{ fontWeight: 600, marginTop: 8 }}>
            Total: ${cart.reduce((sum, p) => sum + p.price, 0).toFixed(2)}
          </p>
          <div style={{ display: 'flex', gap: 8, marginTop: 12 }}>
            <button onClick={() => setStep('browse')} style={{ padding: '8px 16px', cursor: 'pointer' }}>Back</button>
            <button onClick={() => setStep('shipping')}
              style={{ padding: '8px 16px', cursor: 'pointer', backgroundColor: '#3b82f6', color: '#fff', border: 'none', borderRadius: 4 }}>
              Checkout
            </button>
          </div>
        </div>
      )}

      {step === 'shipping' && (
        <div>
          <h4>Shipping Address</h4>
          <input
            value={address}
            onChange={e => setAddress(e.target.value)}
            placeholder="123 Main St, City, State"
            style={{ width: '100%', padding: 8, borderRadius: 4, border: '1px solid #ccc' }}
          />
          <div style={{ display: 'flex', gap: 8, marginTop: 12 }}>
            <button onClick={() => setStep('cart')} style={{ padding: '8px 16px', cursor: 'pointer' }}>Back</button>
            <button onClick={() => setStep('confirm')} disabled={!address}
              style={{ padding: '8px 16px', cursor: 'pointer', backgroundColor: address ? '#059669' : '#ccc', color: '#fff', border: 'none', borderRadius: 4 }}>
              Place Order
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
