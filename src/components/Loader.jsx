import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function Loader({ onDone }) {
  const [progress, setProgress] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(p => {
        if (p >= 100) {
          clearInterval(interval)
          setTimeout(() => {
            setVisible(false)
            setTimeout(onDone, 600)
          }, 300)
          return 100
        }
        return p + Math.random() * 15 + 5
      })
    }, 80)
    return () => clearInterval(interval)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
          style={{ background: '#080810' }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Animated grid */}
          <div className="absolute inset-0 grid-bg opacity-30" />

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative z-10 flex flex-col items-center gap-8"
          >
            <div className="relative">
              <motion.div
                className="w-20 h-20 rounded-2xl border border-[rgba(0,245,212,0.3)] flex items-center justify-center"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                style={{ background: 'rgba(0,245,212,0.04)' }}
              >
                <span className="font-display font-bold text-2xl" style={{ color: '#00f5d4' }}>ME</span>
              </motion.div>
              {/* Orbiting dot */}
              <motion.div
                className="absolute inset-0"
                animate={{ rotate: -360 }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              >
                <div className="w-3 h-3 rounded-full absolute -top-1.5 left-1/2 -translate-x-1/2" style={{ background: '#00f5d4' }} />
              </motion.div>
            </div>

            <div className="text-center">
              <p className="font-display text-lg font-semibold text-white mb-1">Mohamed Ebrahim</p>
              <p className="font-mono text-xs" style={{ color: '#00f5d4', letterSpacing: '0.12em' }}>LOADING PORTFOLIO</p>
            </div>

            {/* Progress bar */}
            <div className="w-48 h-[2px] rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.06)' }}>
              <motion.div
                className="h-full rounded-full"
                style={{ background: 'linear-gradient(90deg, #00f5d4, #0ea5e9)', width: `${Math.min(progress, 100)}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>
            <p className="font-mono text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>
              {Math.min(Math.round(progress), 100)}%
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
