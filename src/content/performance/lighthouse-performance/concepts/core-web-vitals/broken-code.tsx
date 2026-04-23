import { useState } from 'react'

const imageUrls = [
  'https://picsum.photos/400/300?random=1',
  'https://picsum.photos/400/300?random=2',
  'https://picsum.photos/400/300?random=3',
  'https://picsum.photos/400/300?random=4',
  'https://picsum.photos/400/300?random=5',
  'https://picsum.photos/400/300?random=6',
]

export default function App() {
  const [images, setImages] = useState<string[]>([])
  const [loading, setLoading] = useState(false)

  const loadImages = () => {
    setLoading(true)
    setImages([])
    // BUG: Loading all images at once without lazy loading
    setTimeout(() => {
      setImages(imageUrls)
      setLoading(false)
    }, 500)
  }

  return (
    <div style={{ padding: 16, fontFamily: 'sans-serif' }}>
      <h3>Image Gallery</h3>
      <button onClick={loadImages} style={{ padding: '8px 16px', cursor: 'pointer' }}>
        Load Images
      </button>
      {loading && <p style={{ marginTop: 12, color: '#888' }}>Loading gallery...</p>}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 12, marginTop: 16 }}>
        {images.map((url, i) => (
          <div key={i}>
            {/* BUG: No width/height — causes layout shift */}
            {/* BUG: No loading="lazy" — all images load immediately */}
            <img
              src={url}
              alt={`Gallery image ${i + 1}`}
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
