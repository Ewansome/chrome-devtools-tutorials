import { useRef } from 'react'

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null)

  const animateBoxes = () => {
    if (!containerRef.current) return
    const boxes = containerRef.current.children

    // BUG: Layout thrashing — reads offsetHeight then writes style in each iteration
    for (let i = 0; i < boxes.length; i++) {
      const box = boxes[i] as HTMLElement
      const currentHeight = box.offsetHeight  // READ — forces layout
      box.style.height = (currentHeight + 2) + 'px' // WRITE — invalidates layout
      box.style.backgroundColor = `hsl(${i * 30 + currentHeight}, 70%, 60%)`
    }
  }

  const runAnimation = () => {
    for (let frame = 0; frame < 50; frame++) {
      setTimeout(() => animateBoxes(), frame * 20)
    }
  }

  return (
    <div style={{ padding: 16, fontFamily: 'sans-serif' }}>
      <h3>Box Animator</h3>
      <p style={{ color: '#666' }}>Click animate and record a Performance profile to see layout thrashing.</p>
      <button onClick={runAnimation} style={{ padding: '8px 16px', cursor: 'pointer' }}>
        Animate Boxes
      </button>
      <div ref={containerRef} style={{ display: 'flex', gap: 8, marginTop: 16, alignItems: 'flex-end' }}>
        {Array.from({ length: 10 }, (_, i) => (
          <div
            key={i}
            style={{
              width: 40,
              height: 30 + i * 5,
              backgroundColor: `hsl(${i * 30}, 70%, 60%)`,
              borderRadius: 4,
              transition: 'none',
            }}
          />
        ))}
      </div>
    </div>
  )
}
