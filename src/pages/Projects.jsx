import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react'
import { useReveal } from '../hooks'
import { PROJECTS } from '../data'

const FILTERS = [
  { id: 'all', label: 'All Projects' },
  { id: 'ai', label: 'AI & ML' },
  { id: 'data', label: 'Data Analysis' },
  { id: 'dev', label: 'Development' },
]

function ProjectCard({ proj, index }) {
  const [ref, visible] = useReveal()
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      ref={ref}
      layout
      initial={{ opacity: 0, y: 40 }}
      animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
      transition={{ delay: index * 0.05, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="glass rounded-2xl overflow-hidden group"
      style={{ border: `1px solid ${hovered ? proj.accent + '30' : 'rgba(255,255,255,0.06)'}`, transition: 'border-color 0.3s' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Visual Header */}
      <div className={`h-48 bg-gradient-to-br ${proj.gradient} relative overflow-hidden`}>
        <div className="absolute inset-0 grid-bg opacity-40" />
        {/* Floating icon */}
        <motion.div
          animate={hovered ? { scale: 1.2, y: -5 } : { scale: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <span className="text-7xl filter drop-shadow-lg">{proj.icon}</span>
        </motion.div>

        {/* Featured badge */}
        {proj.featured && (
          <div className="absolute top-4 left-4 px-3 py-1 rounded-full font-mono text-xs"
            style={{ background: proj.accent + '20', border: `1px solid ${proj.accent}40`, color: proj.accent }}>
            FEATURED
          </div>
        )}

        {/* Category badge */}
        <div className="absolute top-4 right-4 px-2 py-1 rounded-md font-mono text-xs"
          style={{ background: 'rgba(0,0,0,0.5)', color: 'rgba(255,255,255,0.5)', border: '1px solid rgba(255,255,255,0.1)' }}>
          {proj.category.toUpperCase()}
        </div>

        {/* Hover overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: hovered ? 1 : 0 }}
          className="absolute inset-0 flex items-center justify-center gap-4"
          style={{ background: 'rgba(0,0,0,0.6)' }}
        >
          <a href={proj.github} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg font-mono text-xs font-medium transition-transform hover:scale-105"
            style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', color: '#fff' }}
            onClick={e => e.stopPropagation()}
          >
            <Github size={13} /> GitHub
          </a>
          {proj.live && (
            <a href={proj.live} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg font-mono text-xs font-medium"
              style={{ background: proj.accent + '20', border: `1px solid ${proj.accent}50`, color: proj.accent }}
            >
              <ExternalLink size={13} /> Live Demo
            </a>
          )}
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="font-display font-semibold text-lg text-white leading-tight">{proj.title}</h3>
          <motion.div animate={hovered ? { opacity: 1, x: 0 } : { opacity: 0, x: -5 }}>
            <ArrowUpRight size={16} style={{ color: proj.accent }} />
          </motion.div>
        </div>
        <p className="text-sm leading-relaxed mb-5" style={{ color: 'rgba(255,255,255,0.45)', fontFamily: 'DM Sans' }}>
          {proj.description.slice(0, 120)}...
        </p>
        <div className="flex flex-wrap gap-2">
          {proj.tech.map(t => (
            <span key={t} className="tech-tag" style={{
              borderColor: hovered ? proj.accent + '30' : 'rgba(0,245,212,0.12)',
              color: hovered ? proj.accent : '#00f5d4',
              transition: 'all 0.3s',
            }}>
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const [filter, setFilter] = useState('all')
  const [ref, visible] = useReveal()

  const filtered = filter === 'all' ? PROJECTS : PROJECTS.filter(p => p.category === filter)

  return (
    <div className="page-transition min-h-screen pt-24 pb-20 px-10">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-14"
        >
          <p className="font-mono text-xs mb-4" style={{ color: '#00f5d4', letterSpacing: '0.12em' }}>// 04 — PROJECTS</p>
          <h1 className="font-display text-6xl font-bold mb-4" style={{ letterSpacing: '-2px' }}>
            My <span className="grad-text">Work</span>
          </h1>
          <p className="text-base max-w-lg" style={{ color: 'rgba(255,255,255,0.4)', fontFamily: 'DM Sans' }}>
            Real-world systems across AI, data analysis, and IoT hardware. All projects open-source on GitHub.
          </p>
        </motion.div>

        {/* Filter Pills */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex items-center gap-3 mb-12"
        >
          {FILTERS.map(f => (
            <motion.button
              key={f.id}
              onClick={() => setFilter(f.id)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="relative px-5 py-2 rounded-xl font-mono text-sm transition-colors duration-200"
              style={{
                color: filter === f.id ? '#00f5d4' : 'rgba(255,255,255,0.4)',
                background: filter === f.id ? 'rgba(0,245,212,0.08)' : 'transparent',
                border: filter === f.id ? '1px solid rgba(0,245,212,0.2)' : '1px solid rgba(255,255,255,0.06)',
              }}
            >
              {f.label}
              {filter === f.id && (
                <motion.span
                  layoutId="filter-active"
                  className="absolute inset-0 rounded-xl"
                  style={{ background: 'rgba(0,245,212,0.05)' }}
                />
              )}
            </motion.button>
          ))}
          <span className="ml-auto font-mono text-xs" style={{ color: 'rgba(255,255,255,0.2)' }}>
            {filtered.length} projects
          </span>
        </motion.div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((proj, i) => (
              <ProjectCard key={proj.id} proj={proj} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </div>
  )
}
