import { Component, useState } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'

import Loader from './components/Loader'
import Cursor from './components/Cursor'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import CV from './pages/CV'
import Certificates from './pages/Certificates'

function PageWrapper({ children }) {
  return (
    <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -14 }} transition={{ duration: 0.35 }}>
      {children}
    </motion.div>
  )
}

function AnimatedRoutes() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
        <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
        <Route path="/projects" element={<PageWrapper><Projects /></PageWrapper>} />
        <Route path="/cv" element={<PageWrapper><CV /></PageWrapper>} />
        <Route path="/certificates" element={<PageWrapper><Certificates /></PageWrapper>} />
        <Route path="*" element={<PageWrapper><Home /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  )
}

class RouteErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  render() {
    if (this.state.hasError) {
      return (
        <main className="min-h-screen flex items-center justify-center px-6 pt-24">
          <div className="glass rounded-3xl p-10 max-w-lg text-center">
            <p className="font-mono text-xs mb-3" style={{ color: '#00f5d4' }}>SYSTEM RECOVERY</p>
            <h1 className="font-display text-3xl font-bold text-white mb-3">Something went wrong</h1>
            <p className="text-sm mb-6" style={{ color: 'rgba(255,255,255,0.5)' }}>The page failed to render. Refresh the page to restart the application.</p>
            <button className="btn-primary" onClick={() => window.location.reload()}>Reload Portfolio</button>
          </div>
        </main>
      )
    }
    return this.props.children
  }
}

export default function App() {
  const [loading, setLoading] = useState(true)

  return (
    <BrowserRouter basename="/My_Portfolio">
      <Cursor />
      <div className="noise" />
      <Navbar />
      <RouteErrorBoundary>
        <AnimatedRoutes />
      </RouteErrorBoundary>
      <footer className="py-10 px-6 text-center" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <p className="font-mono text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>
          Built by <span style={{ color: '#00f5d4' }}>Mohamed Ebrahim</span> · Data Analyst & ML Engineer
        </p>
      </footer>
      {loading && <Loader onDone={() => setLoading(false)} />}
    </BrowserRouter>
  )
}
