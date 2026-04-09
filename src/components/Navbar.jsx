import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const LINKS = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/projects', label: 'Projects' },
  { path: '/cv', label: 'CV' },
  { path: '/certificates', label: 'Certificates' },
]

export default function Navbar() {
  const location = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-10 py-4"
      style={{
        background: scrolled ? 'rgba(8,8,16,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
        transition: 'all 0.4s cubic-bezier(0.4,0,0.2,1)',
      }}
    >
      {/* Logo */}
      <Link to="/" className="flex items-center gap-3 group">
        <div
          className="w-9 h-9 rounded-lg flex items-center justify-center font-display font-bold text-sm transition-all group-hover:scale-110"
          style={{ background: 'rgba(0,245,212,0.1)', border: '1px solid rgba(0,245,212,0.2)', color: '#00f5d4' }}
        >
          ME
        </div>
        <span className="font-display font-semibold text-sm tracking-wide" style={{ color: 'rgba(255,255,255,0.7)' }}>
          Mohamed Ebrahim
        </span>
      </Link>

      {/* Nav Links */}
      <div className="flex items-center gap-1">
        {LINKS.map(link => {
          const active = location.pathname === link.path
          return (
            <Link
              key={link.path}
              to={link.path}
              className="relative px-4 py-2 text-sm font-medium transition-colors duration-200"
              style={{ color: active ? '#00f5d4' : 'rgba(255,255,255,0.5)', fontFamily: 'DM Sans, sans-serif' }}
            >
              {active && (
                <motion.div
                  layoutId="nav-pill"
                  className="absolute inset-0 rounded-lg"
                  style={{ background: 'rgba(0,245,212,0.08)', border: '1px solid rgba(0,245,212,0.15)' }}
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
                />
              )}
              <span className="relative z-10">{link.label}</span>
            </Link>
          )
        })}
      </div>

      {/* CTA */}
      <motion.a
        href="mailto:mohammedebrahim1177@gmail.com"
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
        className="px-5 py-2 rounded-lg text-sm font-semibold"
        style={{
          background: 'linear-gradient(135deg, #00f5d4, #0ea5e9)',
          color: '#080810',
          fontFamily: 'Syne, sans-serif',
        }}
      >
        Hire Me
      </motion.a>
    </motion.nav>
  )
}
