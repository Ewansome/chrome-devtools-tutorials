import { Concept, Task, Tutorial, TutorialContent } from "../../types/tutorial";


const perfFromRecordings: Concept = {
    id: 'perf-from-recordings',
    title: 'Profiling with Recordings',
    description: 'Combining the Recorder with the Performance panel gives you reproducible performance measurements.',
    steps: [
        'First, create a recording of the user flow you want to profile',
        'Open the Performance panel',
        'Click record in the Performance panel',
        'Switch to the Recorder panel and replay your recording',
        'Wait for the replay to complete',
        'Switch back to Performance panel and stop recording',
        'You now have a performance profile of the exact same user flow',
        'Repeat after making optimizations to measure improvement',
        'This ensures you are comparing the same actions each time',
    ],
    exercises: [
        {
            id: 'perf-profile-exercise',
            title: 'Profile a User Flow',
            description: 'This app has a search feature with some performance issues. Record a search flow, then profile the replay to identify bottlenecks.',
            files: {
                '/App.tsx': `import { useState } from 'react'

const items = Array.from({ length: 500 }, (_, i) => ({
  id: i,
  name: \`Product \${i + 1}\`,
  category: ['Electronics', 'Books', 'Clothing', 'Food', 'Toys'][i % 5],
  price: Math.round(Math.random() * 200 * 100) / 100,
}))

export default function App() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState(items.slice(0, 20))

  const search = (q: string) => {
    setQuery(q)
    // Simulates an unoptimized search — no debounce, searches on every keystroke
    const filtered = items.filter(item =>
      item.name.toLowerCase().includes(q.toLowerCase()) ||
      item.category.toLowerCase().includes(q.toLowerCase())
    )
    // Simulates expensive rendering work
    const start = Date.now()
    while (Date.now() - start < 30) { /* busy wait per keystroke */ }
    setResults(filtered.slice(0, 20))
  }

  return (
    <div style={{ padding: 16, fontFamily: 'sans-serif' }}>
      <h3>Product Search</h3>
      <input
        value={query}
        onChange={e => search(e.target.value)}
        placeholder="Search products..."
        style={{ width: '100%', padding: 8, borderRadius: 4, border: '1px solid #ccc', marginBottom: 16 }}
      />
      <p style={{ color: '#666', fontSize: 12 }}>{results.length} results</p>
      <div>
        {results.map(item => (
          <div key={item.id} style={{ padding: 8, borderBottom: '1px solid #eee', display: 'flex', justifyContent: 'space-between' }}>
            <span>{item.name} <small style={{ color: '#888' }}>({item.category})</small></span>
            <span>\${item.price}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
`,
            },
            expectedBehavior: 'Record a search flow (type a few characters). Then start a Performance recording, replay the search flow, and stop. The profile will show the 30ms blocking loop on every keystroke.',
            hints: [
                'Record the user flow first in the Recorder panel',
                'Then switch to Performance panel and start recording there',
                'Replay the Recorder flow while Performance is recording',
                'Stop Performance recording to see the profile',
                'Look for repeated blocking tasks on each keystroke',
            ],
            debuggingInstructions: [
                'Open the demo in a new tab',
                'Recorder panel: record typing "elec" into the search box',
                'End the Recorder recording',
                'Switch to Performance panel → click record',
                'Switch to Recorder panel → click Replay',
                'After replay finishes, switch to Performance → stop recording',
                'Examine the flame chart: you\'ll see a 30ms blocking task per keystroke',
                'Repeat after fixing the busy-wait to measure improvement',
            ],
            readOnly: true,
        },
    ],
}

const generatingPerformanceProfilesTasks: Task[] = [
    {
        id: 'task-1',
        title: 'Measure Before and After',
        description: 'Profile a user flow, fix the performance issue, then re-profile to measure improvement.',
        buggyCode: `const search = (q) => {
  // Runs on every keystroke with no debounce
  const filtered = items.filter(item => item.name.includes(q));
  // 30ms busy-wait simulating expensive work
  const start = Date.now();
  while (Date.now() - start < 30) {}
  setResults(filtered);
};`,
        expectedBehavior: 'After removing the busy-wait and adding debouncing, the Performance profile should show no Long Tasks during typing.',
        hints: [
            'Record the same search flow before and after the fix',
            'Compare the flame charts — look for reduction in Long Tasks',
            'Debouncing reduces the number of search executions',
            'Removing the busy-wait eliminates the blocking time per search',
        ],
        solution: {
            explanation: 'Using the Recorder to replay the same user flow gives you consistent before/after measurements. The combination of debouncing and removing the synchronous busy-wait eliminates the stuttering during typing.',
            debuggingSteps: [
                'Record a search flow in the Recorder',
                'Profile the replay in Performance panel — note Long Tasks',
                'Remove the busy-wait loop in the search function',
                'Add debouncing (setTimeout/clearTimeout) to the search',
                'Profile the same replay again',
                'Compare: Long Tasks should be gone',
            ],
            devToolsFeatures: ['Recorder + Performance Panel', 'Flame Chart Comparison', 'Long Tasks'],
        },
    },
]

const generatingPerformanceProfilesContent: TutorialContent = {
    introduction: 'Recordings can be combined with the Performance panel to generate repeatable performance profiles. Record a user flow once, then replay it while profiling to get consistent measurements.',
    concepts: [perfFromRecordings],
    tasks: generatingPerformanceProfilesTasks,
}

export const generatingPerformanceProfilesTutorial: Tutorial = {
    id: 'generating-performance-profiles',
    title: 'Generating Performance Profiles from Recordings',
    description: 'Use recordings to generate consistent performance profiles for measuring optimization impact.',
    difficulty: 'intermediate',
    estimatedTime: '12 minutes',
    category: 'recorder',
    content: generatingPerformanceProfilesContent,
}
