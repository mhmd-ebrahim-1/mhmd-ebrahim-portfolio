import { useState } from 'react'
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

// Page wrapper with transition
function PageWrapper({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
    >
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
      </Routes>
    </AnimatePresence>
  )
}

export default function App() {
  const [loaded, setLoaded] = useState(false)

  return (
    <>
      {!loaded && <Loader onDone={() => setLoaded(true)} />}

      {loaded && (
        <BrowserRouter>
          <Cursor />
          {/* Noise overlay */}
          <div className="noise" />
          <Navbar />
          <AnimatedRoutes />
          {/* Footer */}
          <footer className="py-8 px-10 text-center"
            style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}>
            <p className="font-mono text-xs" style={{ color: 'rgba(255,255,255,0.2)' }}>
              Built by <span style={{ color: '#00f5d4' }}>Mohamed Ebrahim</span> · AI Engineer in Progress 🚀
            </p>
          </footer>
        </BrowserRouter>
      )}
    </>
  )
}
