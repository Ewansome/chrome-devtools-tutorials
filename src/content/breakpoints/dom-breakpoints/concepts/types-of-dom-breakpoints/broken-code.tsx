import { useState, useRef } from 'react'

export default function App() {
  const [count, setCount] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  const createElements = () => {
    if (!containerRef.current) return
    containerRef.current.innerHTML = ''

    for (let i = 0; i < 3; i++) {
      const el = document.createElement('div')
      el.textContent = `Element ${i + 1}`
      el.style.padding = '8px'
      el.style.margin = '4px 0'
      el.style.backgroundColor = '#e0f2fe'
      el.style.borderRadius = '4px'

      // BUG: Elements are created but never appended!
      // containerRef.current.appendChild(el)  ← this line is missing
    }

    setCount(containerRef.current.children.length)
  }

  return (
    <div style={{ padding: 16, fontFamily: 'sans-serif' }}>
      <h3>Dynamic Element Creator</h3>
      <button onClick={createElements} style={{ padding: '8px 16px', cursor: 'pointer' }}>
        Create 3 Elements
      </button>
      <p style={{ marginTop: 8 }}>Elements in container: {count}</p>
      <div
        ref={containerRef}
        style={{
          marginTop: 12,
          minHeight: 60,
          border: '2px dashed #ccc',
          borderRadius: 8,
          padding: 12,
          color: '#999',
        }}
      >
        Dynamic elements should appear here...
      </div>
    </div>
  )
}
