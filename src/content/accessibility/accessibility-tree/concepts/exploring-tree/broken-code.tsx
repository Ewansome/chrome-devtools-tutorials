export default function App() {
  return (
    <div style={{ padding: 16, fontFamily: 'sans-serif' }}>
      <h1>Task Manager</h1>

      {/* Good: proper form labeling */}
      <form style={{ marginTop: 16 }}>
        <div style={{ marginBottom: 12 }}>
          <label htmlFor="task-input" style={{ display: 'block', fontWeight: 600, marginBottom: 4 }}>
            New Task
          </label>
          <input id="task-input" type="text" placeholder="Enter a task..."
            style={{ padding: 8, width: '100%', borderRadius: 4, border: '1px solid #ccc' }} />
        </div>

        {/* Bad: button with no accessible name */}
        <button type="submit" style={{ padding: '8px 16px', cursor: 'pointer', border: 'none', backgroundColor: '#3b82f6', borderRadius: 4 }}>
          <span aria-hidden="true" style={{ color: 'white', fontSize: 18 }}>+</span>
        </button>
      </form>

      {/* Bad: using div as a button without role or keyboard handling */}
      <div
        onClick={() => {}}
        style={{ marginTop: 16, padding: '8px 16px', backgroundColor: '#ef4444', color: 'white', borderRadius: 4, display: 'inline-block', cursor: 'pointer' }}
      >
        Delete All
      </div>

      {/* Good: proper list semantics */}
      <h2 style={{ marginTop: 24 }}>Current Tasks</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li style={{ padding: 8, borderBottom: '1px solid #eee', display: 'flex', justifyContent: 'space-between' }}>
          <span>Buy groceries</span>
          {/* Bad: image used as button without alt */}
          <img
            src="https://via.placeholder.com/20/ef4444/ffffff?text=X"
            onClick={() => {}}
            style={{ cursor: 'pointer' }}
          />
        </li>
        <li style={{ padding: 8, borderBottom: '1px solid #eee', display: 'flex', justifyContent: 'space-between' }}>
          <span>Walk the dog</span>
          {/* Good: proper button with text */}
          <button style={{ padding: '2px 8px', cursor: 'pointer', fontSize: 12 }}>Remove</button>
        </li>
      </ul>

      {/* Bad: decorative image without proper handling */}
      <img src="https://via.placeholder.com/400x100/f3f4f6/999999?text=Ad+Banner" style={{ marginTop: 24, width: '100%' }} />
    </div>
  )
}
