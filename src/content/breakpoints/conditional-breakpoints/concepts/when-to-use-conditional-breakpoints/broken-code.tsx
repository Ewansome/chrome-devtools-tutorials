import { useState } from 'react'

interface Item { name: string; price: number }

const testItems: Item[] = [
    { name: 'Book', price: 25 },
    { name: 'Laptop', price: 100 },
    { name: 'Phone', price: 150 },
    { name: 'Headphones', price: 75 },
    { name: 'Monitor', price: 200 },
]

export default function App() {
    const [filtered, setFiltered] = useState<Item[]>([])

    const filterBudgetItems = () => {
        const result: Item[] = []
        for (const item of testItems) {
            if (item.price < 100) {
                result.push(item)
            }
        }
        setFiltered(result)
    }

    return (
        <div style={{ padding: 16, fontFamily: 'sans-serif' }}>
        <h3>Budget Filter</h3>
        <p style={{ color: '#666' }}>Show items costing $100 or less</p>
        <button onClick={filterBudgetItems} style={{ padding: '8px 16px', cursor: 'pointer' }}>
            Filter Budget Items
        </button>
        {filtered.length > 0 && (
            <ul style={{ marginTop: 12 }}>
            {filtered.map((item) => (
                <li key={item.name}>{item.name} — \${item.price}</li>
            ))}
            </ul>
        )}
        </div>
    )
}
