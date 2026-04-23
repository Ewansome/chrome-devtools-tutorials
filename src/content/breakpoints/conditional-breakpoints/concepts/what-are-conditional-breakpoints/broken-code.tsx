import { useState } from 'react'

export default function App() {
    const [results, setResults] = useState<string[]>([])

    const processNumbers = () => {
        const newResults: string[] = []
        for (let i = 0; i < 10; i++) {
            if (i % 2 === 1) {
                newResults.push(`Processing even number: ${i}`)
            }
        }
        setResults(newResults)
    }

    return (
        <div style={{ padding: 16, fontFamily: 'sans-serif' }}>
        <h3>Even Number Processor</h3>
        <button onClick={processNumbers} style={{ padding: '8px 16px', cursor: 'pointer' }}>
            Process Even Numbers
        </button>
        {results.length > 0 && (
            <ul style={{ marginTop: 12 }}>
            {results.map((r, i) => <li key={i}>{r}</li>)}
            </ul>
        )}
        {results.length === 0 && <p style={{ color: '#888', marginTop: 12 }}>Click the button to process numbers.</p>}
        </div>
    )
}