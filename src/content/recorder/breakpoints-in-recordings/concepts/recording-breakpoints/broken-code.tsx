import { useState } from 'react'

interface Todo {
  id: number
  text: string
  done: boolean
}

export default function App() {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: 'Learn DevTools Recorder', done: false },
    { id: 2, text: 'Practice breakpoints', done: false },
    { id: 3, text: 'Debug a real app', done: false },
  ])
  const [input, setInput] = useState('')

  const addTodo = () => {
    if (!input.trim()) return
    setTodos(prev => [...prev, { id: Date.now(), text: input, done: false }])
    setInput('')
  }

  const toggleTodo = (id: number) => {
    setTodos(prev => prev.map(t => t.id === id ? { ...t, done: !t.done } : t))
  }

  const deleteTodo = (id: number) => {
    setTodos(prev => prev.filter(t => t.id !== id))
  }

  return (
    <div style={{ padding: 16, fontFamily: 'sans-serif', maxWidth: 400 }}>
      <h3>Todo List</h3>
      <div style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Add a todo..."
          style={{ flex: 1, padding: 8, borderRadius: 4, border: '1px solid #ccc' }}
          onKeyDown={e => e.key === 'Enter' && addTodo()}
        />
        <button onClick={addTodo} style={{ padding: '8px 12px', cursor: 'pointer' }}>Add</button>
      </div>
      {todos.map(todo => (
        <div key={todo.id} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: 8, borderBottom: '1px solid #eee' }}>
          <input
            type="checkbox"
            checked={todo.done}
            onChange={() => toggleTodo(todo.id)}
          />
          <span style={{ flex: 1, textDecoration: todo.done ? 'line-through' : 'none', color: todo.done ? '#999' : '#333' }}>
            {todo.text}
          </span>
          <button onClick={() => deleteTodo(todo.id)} style={{ cursor: 'pointer', fontSize: 12, color: '#ef4444' }}>
            Delete
          </button>
        </div>
      ))}
      <p style={{ marginTop: 12, fontSize: 12, color: '#666' }}>{todos.filter(t => !t.done).length} remaining</p>
    </div>
  )
}
