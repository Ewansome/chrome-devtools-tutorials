import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import TutorialPage from './pages/TutorialPage'
import './App.css'

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tutorial/:tutorialId" element={<TutorialPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
