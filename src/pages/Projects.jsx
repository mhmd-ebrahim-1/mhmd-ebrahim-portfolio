import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react'
import { useReveal } from '../hooks'
import { PROJECTS } from '../data'

const BASE_URL = import.meta.env.BASE_URL
const FILTERS = [
  { id: 'all', label: 'All Projects' },
  { id: 'ai', label: 'AI & ML' },
  { id: 'data', label: 'Data & BI' },
  { id: 'dev', label: 'Development' },
]

function ProjectCard({ proj, index }) {
  const [ref, visible] = useReveal()
  const [hovered, setHovered] = useState(false)
  const image = `${BASE_URL}projects/${proj.slug}.svg`

  return (
    <motion.article ref={ref} layout initial={{ opacity: 0, y: 40 }} animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }} exit={{ opacity: 0, scale: 0.96 }} transition={{ delay: index * 0.05, duration: 0.55, ease: [0.16, 1, 0.3, 1] }} className="glass rounded-2xl overflow-hidden group" style={{ border: `1px solid ${hovered ? proj.accent + '30' : 'rgba(255,255,255,0.06)'}`, transition: 'border-color .3s' }} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      <div className="h-48 sm:h-52 relative overflow-hidden bg-[#0b0b14]">
        <img src={image} alt={`${proj.title} project preview`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" loading="lazy" onError={e => { e.currentTarget.style.opacity = '0' }} />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080810]/75 via-transparent to-transparent pointer-events-none" />
        {proj.featured && <span className="absolute top-4 left-4 px-3 py-1 rounded-full font-mono text-xs" style={{ background: proj.accent + '20', border: `1px solid ${proj.accent}40`, color: proj.accent }}>FEATURED</span>}
        <span className="absolute top-4 right-4 px-2 py-1 rounded-md font-mono text-xs" style={{ background: 'rgba(0,0,0,.55)', color: 'rgba(255,255,255,.7)', border: '1px solid rgba(255,255,255,.1)' }}>{proj.category === 'ai' ? 'AI & ML' : proj.category === 'data' ? 'DATA' : 'DEV'}</span>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: hovered ? 1 : 0 }} className="absolute inset-0 flex items-center justify-center gap-3" style={{ background: 'rgba(0,0,0,.5)' }}>
          <a href={proj.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-lg font-mono text-xs font-medium" style={{ background: 'rgba(255,255,255,.1)', border: '1px solid rgba(255,255,255,.2)', color: '#fff' }}><Github size={13} /> GitHub</a>
          {proj.live && <a href={proj.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-lg font-mono text-xs" style={{ background: proj.accent + '20', border: `1px solid ${proj.accent}50`, color: proj.accent }}><ExternalLink size={13} /> Live Demo</a>}
        </motion.div>
      </div>
      <div className="p-5 sm:p-6">
        <div className="flex items-start justify-between gap-3 mb-3"><h3 className="font-display font-semibold text-lg text-white leading-tight">{proj.title}</h3><ArrowUpRight size={16} style={{ color: proj.accent, opacity: hovered ? 1 : .45, flexShrink: 0 }} /></div>
        <p className="text-sm leading-relaxed mb-5" style={{ color: 'rgba(255,255,255,.5)' }}>{proj.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">{proj.tech.map(t => <span key={t} className="tech-tag" style={{ borderColor: hovered ? proj.accent + '30' : 'rgba(0,245,212,.12)', color: hovered ? proj.accent : '#00f5d4' }}>{t}</span>)}</div>
        <a href={proj.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-mono text-xs" style={{ color: 'rgba(255,255,255,.42)' }}><Github size={13} /> View repository <ArrowUpRight size={12} /></a>
      </div>
    </motion.article>
  )
}

function ProjectGrid({ projects, label }) {
  if (!projects.length) return null
  return (
    <section className="mb-14">
      {label && <div className="flex items-end justify-between gap-4 mb-6"><div><p className="font-mono text-[10px] tracking-[.14em] mb-2" style={{ color: '#00f5d4' }}>// {label === 'Featured Work' ? 'PRIMARY' : 'ADDITIONAL'}</p><h2 className="font-display text-2xl sm:text-3xl font-bold text-white">{label}</h2></div><span className="font-mono text-xs" style={{ color: 'rgba(255,255,255,.2)' }}>{projects.length} projects</span></div>}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6">
        <AnimatePresence mode="popLayout">{projects.map((proj, i) => <ProjectCard key={proj.id} proj={proj} index={i} />)}</AnimatePresence>
      </motion.div>
    </section>
  )
}

export default function Projects() {
  const [filter, setFilter] = useState('all')
  const filtered = filter === 'all' ? PROJECTS : PROJECTS.filter(p => p.category === filter)
  const featured = filtered.filter(p => p.featured)
  const additional = filtered.filter(p => !p.featured)

  return (
    <div className="page-transition min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }} className="mb-12">
          <p className="font-mono text-xs mb-4 tracking-[.12em]" style={{ color: '#00f5d4' }}>// 04 — PROJECTS</p>
          <h1 className="font-display text-4xl sm:text-6xl font-bold mb-4 tracking-[-.04em]">Selected <span className="grad-text">Work</span></h1>
          <p className="text-base max-w-2xl" style={{ color: 'rgba(255,255,255,.45)' }}>A focused selection of real work across data analytics, machine learning, Generative AI, computer vision, and data engineering.</p>
        </motion.div>

        <div className="flex items-center gap-2 sm:gap-3 mb-12 flex-wrap">
          {FILTERS.map(f => <motion.button key={f.id} onClick={() => setFilter(f.id)} whileHover={{ scale: 1.03 }} whileTap={{ scale: .97 }} className="px-3 sm:px-5 py-2 rounded-xl font-mono text-xs sm:text-sm" style={{ color: filter === f.id ? '#00f5d4' : 'rgba(255,255,255,.4)', background: filter === f.id ? 'rgba(0,245,212,.08)' : 'transparent', border: filter === f.id ? '1px solid rgba(0,245,212,.2)' : '1px solid rgba(255,255,255,.06)' }}>{f.label}</motion.button>)}
          <span className="sm:ml-auto font-mono text-xs" style={{ color: 'rgba(255,255,255,.2)' }}>{filtered.length} projects</span>
        </div>

        {filter === 'all' ? <>
          <ProjectGrid projects={featured} label="Featured Work" />
          <ProjectGrid projects={additional} label="Additional Work" />
        </> : <ProjectGrid projects={filtered} />}
      </div>
    </div>
  )
}
