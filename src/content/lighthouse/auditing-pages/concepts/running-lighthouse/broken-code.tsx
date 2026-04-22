export default function App() {
  return (
    <div>
      {/* No lang attribute on html — Lighthouse will flag this */}
      <div style={{ padding: 16, fontFamily: 'sans-serif' }}>
        {/* Missing heading hierarchy — jumps from h1 to h4 */}
        <h1 style={{ color: '#333' }}>Welcome to Our Store</h1>
        <h4>Featured Products</h4>

        {/* Images without alt text — accessibility issue */}
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 12 }}>
          <img src="https://via.placeholder.com/200x150/3b82f6/ffffff?text=Product+1" width={200} height={150} />
          <img src="https://via.placeholder.com/200x150/10b981/ffffff?text=Product+2" width={200} height={150} />
          <img src="https://via.placeholder.com/200x150/f59e0b/ffffff?text=Product+3" width={200} height={150} />
        </div>

        {/* Low contrast text — accessibility issue */}
        <p style={{ color: '#ccc', marginTop: 16 }}>
          Browse our collection of premium products at great prices.
        </p>

        {/* Link with no discernible text */}
        <a href="#" style={{ display: 'inline-block', marginTop: 8 }}>
          <div style={{ width: 20, height: 20, backgroundColor: '#3b82f6', borderRadius: '50%' }} />
        </a>

        {/* Button with no accessible name */}
        <button style={{ marginTop: 12, padding: '8px 16px', cursor: 'pointer' }}>
          <span aria-hidden="true">{'\u2192'}</span>
        </button>
      </div>
    </div>
  )
}
