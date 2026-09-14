import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Award, Star, BookOpen, ChevronDown, ChevronUp } from 'lucide-react'
import { useReveal } from '../hooks'
import { CERTIFICATES } from '../data'

const TIER_CONFIG = {
  top: { label: 'Top Certifications', color: '#00f5d4', icon: Star, bg: 'rgba(0,245,212,0.08)', border: 'rgba(0,245,212,0.2)' },
  important: { label: 'Professional Certifications', color: '#0ea5e9', icon: Award, bg: 'rgba(14,165,233,0.08)', border: 'rgba(14,165,233,0.2)' },
  standard: { label: 'Additional Certifications', color: '#a78bfa', icon: BookOpen, bg: 'rgba(167,139,250,0.08)', border: 'rgba(167,139,250,0.2)' },
  learning: { label: 'Learning Activities', color: '#fb923c', icon: BookOpen, bg: 'rgba(251,146,60,0.08)', border: 'rgba(251,146,60,0.2)' },
}

function CertCard({ cert, index }) {
  const [ref, visible] = useReveal()
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={visible ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.06, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -4, scale: 1.01 }}
      className="glass rounded-2xl p-5 flex gap-4 items-start"
      style={{ border: '1px solid rgba(255,255,255,0.06)' }}
    >
      <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 font-display font-bold text-sm"
        style={{ background: cert.color + '18', border: `1px solid ${cert.color}30`, color: cert.color }}>
        {cert.issuer.slice(0, 2).toUpperCase()}
      </div>
      <div className="flex-1 min-w-0">
        <p className="font-display font-semibold text-white text-sm leading-snug mb-1">{cert.name}</p>
        <p className="font-semibold text-xs mb-1" style={{ color: cert.color }}>{cert.issuer}</p>
        <p className="font-mono text-xs" style={{ color: 'rgba(255,255,255,0.25)' }}>
          Issued {cert.date}{cert.expires ? ` · Expires ${cert.expires}` : ''}
        </p>
        {cert.skills?.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-3">
            {cert.skills.map(s => (
              <span key={s} className="font-mono text-xs px-2 py-0.5 rounded-md"
                style={{ background: `${cert.color}0d`, border: `1px solid ${cert.color}25`, color: cert.color }}>
                {s}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  )
}

function CertSection({ tier, certs }) {
  const [expanded, setExpanded] = useState(tier !== 'learning')
  const config = TIER_CONFIG[tier]
  if (!config || certs.length === 0) return null
  const Icon = config.icon
  const [ref, visible] = useReveal()

  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 20 }} animate={visible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="mb-12">
      <button onClick={() => setExpanded(e => !e)} className="w-full flex items-center justify-between mb-6 group text-left" aria-expanded={expanded}>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: config.bg, border: `1px solid ${config.border}` }}>
            <Icon size={16} style={{ color: config.color }} />
          </div>
          <div>
            <h2 className="font-display font-semibold text-white text-lg sm:text-xl">{config.label}</h2>
            <p className="font-mono text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>{certs.length} certificate{certs.length !== 1 ? 's' : ''}</p>
          </div>
        </div>
        <div className="w-8 h-8 rounded-lg flex items-center justify-center transition-colors group-hover:bg-white/5" style={{ border: '1px solid rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.4)' }}>
          {expanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
        </div>
      </button>

      <AnimatePresence>
        {expanded && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }} className="overflow-hidden">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {certs.map((cert, i) => <CertCard key={cert.id} cert={cert} index={i} />)}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function Certificates() {
  const groups = ['top', 'important', 'standard', 'learning'].map(tier => ({
    tier,
    certs: CERTIFICATES.filter(c => c.tier === tier),
  }))
  const visibleGroups = groups.filter(g => g.certs.length > 0)

  return (
    <div className="page-transition min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-10">
      <div className="max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="mb-14">
          <p className="font-mono text-xs mb-4 tracking-[0.12em]" style={{ color: '#00f5d4' }}>// 06 — ACHIEVEMENTS</p>
          <h1 className="font-display text-4xl sm:text-6xl font-bold mb-4 tracking-[-0.04em]">
            Certificates &amp;<br /><span className="grad-text">Achievements</span>
          </h1>
          <p className="text-base max-w-lg" style={{ color: 'rgba(255,255,255,0.4)' }}>
            {CERTIFICATES.length} verified learning achievements across AI, data, machine learning, and software development.
          </p>
          <div className="flex flex-wrap gap-3 mt-8">
            {visibleGroups.map(({ tier, certs }) => {
              const config = TIER_CONFIG[tier]
              return (
                <div key={tier} className="px-4 py-3 rounded-xl glass" style={{ border: `1px solid ${config.color}20` }}>
                  <p className="font-display font-bold text-2xl" style={{ color: config.color }}>{certs.length}</p>
                  <p className="font-mono text-xs" style={{ color: 'rgba(255,255,255,0.35)' }}>{config.label}</p>
                </div>
              )
            })}
          </div>
        </motion.div>

        {groups.map(({ tier, certs }) => <CertSection key={tier} tier={tier} certs={certs} />)}
      </div>
    </div>
  )
}
