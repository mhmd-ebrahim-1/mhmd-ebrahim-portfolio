import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { PROFILE } from '../data'

const LINKS = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/projects', label: 'Projects' },
  { path: '/#services', label: 'Services', isHash: true },
  { path: '/cv', label: 'CV' },
  { path: '/certificates', label: 'Certificates' },
]

export default function Navbar() {
  const location = useLocation()
  const navigate = useNavigate()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname, location.hash])

  const handleNavClick = (link, e) => {
    if (link.isHash) {
      e.preventDefault()
      if (location.pathname !== '/') {
        navigate('/')
        setTimeout(() => {
          const el = document.getElementById('services')
          if (el) el.scrollIntoView({ behavior: 'smooth' })
        }, 300)
      } else {
        const el = document.getElementById('services')
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }
      setMenuOpen(false)
    }
  }

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.55 }}
        className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-10 py-3"
      >
        <div
          className="max-w-7xl mx-auto h-14 px-3 sm:px-4 rounded-2xl flex items-center justify-between glass"
          style={{
            background: scrolled ? 'rgba(8,8,16,.88)' : 'rgba(8,8,16,.55)',
            borderColor: scrolled ? 'rgba(0,245,212,.12)' : 'rgba(255,255,255,.06)',
          }}
        >
          <Link to="/" className="flex items-center gap-3 group shrink-0">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center font-display font-bold text-sm transition-transform group-hover:scale-105"
              style={{
                background: 'linear-gradient(145deg,rgba(0,245,212,.14),rgba(14,165,233,.08))',
                border: '1px solid rgba(0,245,212,.2)',
                color: '#00f5d4',
              }}
            >
              ME
            </div>
            <div className="hidden sm:block">
              <p className="font-display font-semibold text-sm text-white">{PROFILE.name}</p>
              <p className="font-mono text-[9px] tracking-wider" style={{ color: 'rgba(255,255,255,.3)' }}>
                DATA · ML · AI
              </p>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {LINKS.map((link) => {
              const active = !link.isHash && location.pathname === link.path
              return link.isHash ? (
                <a
                  key={link.label}
                  href="#services"
                  onClick={(e) => handleNavClick(link, e)}
                  className="relative px-3 lg:px-4 py-2 rounded-lg text-sm font-medium transition-colors hover:text-white"
                  style={{ color: 'rgba(255,255,255,.6)' }}
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  className="relative px-3 lg:px-4 py-2 rounded-lg text-sm font-medium transition-colors hover:text-white"
                  style={{ color: active ? '#00f5d4' : 'rgba(255,255,255,.55)' }}
                >
                  {active && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-lg"
                      style={{
                        background: 'rgba(0,245,212,.07)',
                        border: '1px solid rgba(0,245,212,.13)',
                      }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </Link>
              )
            })}
          </div>

          <div className="flex items-center gap-2">
            <a
              href={`mailto:${PROFILE.email}?subject=Project%20Inquiry%20-%20Mohamed%20Ebrahim`}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-transform hover:-translate-y-0.5"
              style={{ background: 'linear-gradient(135deg,#00f5d4,#0ea5e9)', color: '#080810' }}
            >
              Get In Touch <ArrowUpRight size={14} />
            </a>
            <button
              aria-label="Toggle navigation"
              onClick={() => setMenuOpen((v) => !v)}
              className="md:hidden w-10 h-10 rounded-xl flex items-center justify-center"
              style={{
                background: 'rgba(255,255,255,.05)',
                border: '1px solid rgba(255,255,255,.08)',
                color: '#fff',
              }}
            >
              {menuOpen ? <X size={19} /> : <Menu size={19} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed top-[78px] left-4 right-4 z-40 md:hidden glass rounded-2xl p-3 border shadow-2xl"
            style={{ background: 'rgba(8,8,16,.96)', borderColor: 'rgba(255,255,255,0.1)' }}
          >
            {LINKS.map((link) =>
              link.isHash ? (
                <a
                  key={link.label}
                  href="#services"
                  onClick={(e) => handleNavClick(link, e)}
                  className="flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium"
                  style={{ color: 'rgba(255,255,255,.75)' }}
                >
                  {link.label}
                  <ArrowUpRight size={14} />
                </a>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  className="flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium"
                  style={{
                    color: location.pathname === link.path ? '#00f5d4' : 'rgba(255,255,255,.75)',
                    background: location.pathname === link.path ? 'rgba(0,245,212,.06)' : 'transparent',
                  }}
                >
                  {link.label}
                  <ArrowUpRight size={14} />
                </Link>
              )
            )}
            <a
              href={`mailto:${PROFILE.email}?subject=Project%20Inquiry%20-%20Mohamed%20Ebrahim`}
              className="mt-2 flex items-center justify-center px-4 py-3 rounded-xl font-semibold text-sm"
              style={{ background: 'linear-gradient(135deg,#00f5d4,#0ea5e9)', color: '#080810' }}
            >
              Get In Touch
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
