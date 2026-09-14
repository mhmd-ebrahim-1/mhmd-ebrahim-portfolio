import { motion } from 'framer-motion'
import { useReveal } from '../hooks'
import { PROFILE, SKILLS, TOOLS } from '../data'

const BASE_URL = import.meta.env.BASE_URL

function proficiency(level) {
  if (level >= 90) return 'Advanced'
  if (level >= 80) return 'Strong'
  if (level >= 70) return 'Working knowledge'
  return 'Familiar'
}

function SkillBar({ name, level, color = '#00f5d4', delay = 0 }) {
  const [ref, visible] = useReveal()
  return (
    <div ref={ref} className="mb-5">
      <div className="flex justify-between items-center gap-4 mb-2">
        <span className="text-sm font-medium" style={{ color: 'rgba(255,255,255,0.75)' }}>{name}</span>
        <span className="font-mono text-[10px] sm:text-xs text-right" style={{ color }}>{proficiency(level)}</span>
      </div>
      <div className="h-[2px] rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.06)' }}>
        <motion.div initial={{ width: 0 }} animate={visible ? { width: `${Math.min(level, 100)}%` } : {}} transition={{ duration: 1.2, delay, ease: [0.4, 0, 0.2, 1] }} className="h-full rounded-full" style={{ background: `linear-gradient(90deg, ${color}, ${color}88)` }} />
      </div>
    </div>
  )
}

export default function About() {
  const [heroRef, heroVisible] = useReveal()
  const [skillsRef, skillsVisible] = useReveal()
  const [toolsRef, toolsVisible] = useReveal()

  return (
    <div className="page-transition min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <div ref={heroRef} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-20 lg:mb-24 items-start">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={heroVisible ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}>
            <p className="font-mono text-xs mb-4 tracking-[0.12em]" style={{ color: '#00f5d4' }}>// 01 — ABOUT</p>
            <h1 className="font-display text-4xl sm:text-6xl font-bold mb-6 tracking-[-0.04em] leading-[1.05]">Turning Data<br />Into <span className="grad-text">Intelligence</span></h1>
            <p className="text-base leading-relaxed mb-4" style={{ color: 'rgba(255,255,255,0.55)' }}>{PROFILE.bio}</p>
            <p className="text-base leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>{PROFILE.bio2}</p>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { label: 'University', value: PROFILE.university },
                { label: 'Degree', value: PROFILE.degree },
                { label: 'Location', value: PROFILE.location },
                { label: 'Status', value: 'Open to internships & freelance' },
              ].map(({ label, value }) => <div key={label} className="p-4 rounded-xl" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}><p className="font-mono text-xs mb-1" style={{ color: 'rgba(255,255,255,0.3)', letterSpacing: '0.06em' }}>{label.toUpperCase()}</p><p className="text-sm font-medium text-white">{value}</p></div>)}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} animate={heroVisible ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }} className="relative">
            <div className="grid grid-cols-5 gap-3 mb-4">
              <a href={`${BASE_URL}personal-outdoor.svg`} target="_blank" rel="noreferrer" className="col-span-3 block rounded-2xl overflow-hidden group" style={{ border: '1px solid rgba(255,255,255,0.08)' }}>
                <img src={`${BASE_URL}personal-outdoor.svg`} alt="Mohamed Ebrahim outdoors" className="w-full h-72 sm:h-80 object-cover transition-transform duration-500 group-hover:scale-[1.02]" loading="lazy" />
              </a>
              <a href={`${BASE_URL}personal-formal.svg`} target="_blank" rel="noreferrer" className="col-span-2 block rounded-2xl overflow-hidden group" style={{ border: '1px solid rgba(255,255,255,0.08)' }}>
                <img src={`${BASE_URL}personal-formal.svg`} alt="Mohamed Ebrahim formal portrait" className="w-full h-72 sm:h-80 object-cover transition-transform duration-500 group-hover:scale-[1.02]" loading="lazy" />
              </a>
            </div>
            <div className="rounded-2xl overflow-hidden relative" style={{ border: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.02)' }}>
              <div className="absolute inset-0 grid-bg opacity-30" />
              <div className="relative z-10 p-5 sm:p-8">
                <div className="flex items-center gap-2 mb-6"><div className="w-3 h-3 rounded-full" style={{ background: '#ff5f56' }} /><div className="w-3 h-3 rounded-full" style={{ background: '#ffbd2e' }} /><div className="w-3 h-3 rounded-full" style={{ background: '#27c93f' }} /><span className="font-mono text-xs ml-4" style={{ color: 'rgba(255,255,255,0.2)' }}>about.py</span></div>
                <div className="font-mono text-xs sm:text-sm leading-7 sm:leading-8 overflow-x-auto" style={{ color: 'rgba(255,255,255,0.7)' }}>
                  <p><span style={{ color: '#a78bfa' }}>class</span> <span style={{ color: '#00f5d4' }}>MohamedEbrahim</span>:</p>
                  <p className="pl-4 sm:pl-6"><span style={{ color: '#fb923c' }}>name</span> = <span style={{ color: '#86efac' }}>&quot;Mohamed Ebrahim Hamed&quot;</span></p>
                  <p className="pl-4 sm:pl-6"><span style={{ color: '#fb923c' }}>role</span> = <span style={{ color: '#86efac' }}>&quot;Data Analyst &amp; ML Engineer&quot;</span></p>
                  <p className="pl-4 sm:pl-6"><span style={{ color: '#fb923c' }}>focus</span> = [</p>
                  <p className="pl-8 sm:pl-12"><span style={{ color: '#86efac' }}>&quot;RAG Systems&quot;</span>,</p>
                  <p className="pl-8 sm:pl-12"><span style={{ color: '#86efac' }}>&quot;Computer Vision&quot;</span>,</p>
                  <p className="pl-8 sm:pl-12"><span style={{ color: '#86efac' }}>&quot;Data Analytics&quot;</span>,</p>
                  <p className="pl-4 sm:pl-6">]</p>
                  <p className="pl-4 sm:pl-6 mt-2"><span style={{ color: '#7dd3fc' }}>def</span> <span style={{ color: '#fde68a' }}>build</span>(self):</p>
                  <p className="pl-8 sm:pl-12"><span style={{ color: '#a78bfa' }}>return</span> <span style={{ color: '#86efac' }}>&quot;Practical AI &amp; Data Solutions&quot;</span></p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4">
              {[{ icon: '🤖', label: 'AI / ML', color: '#00f5d4' }, { icon: '📊', label: 'Data Science', color: '#0ea5e9' }, { icon: '⚙️', label: 'Data Engineering', color: '#fb923c' }].map(({ icon, label, color }) => <div key={label} className="p-4 rounded-xl text-center glass" style={{ border: `1px solid ${color}22` }}><p className="text-2xl mb-2">{icon}</p><p className="font-mono text-xs" style={{ color }}>{label}</p></div>)}
            </div>
          </motion.div>
        </div>

        <div ref={skillsRef} className="mb-20 lg:mb-24">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={skillsVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="mb-10 sm:mb-12">
            <p className="font-mono text-xs mb-3 tracking-[0.12em]" style={{ color: '#00f5d4' }}>// 02 — SKILLS</p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-[-0.04em]">Technical <span className="grad-text">Expertise</span></h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
            {[
              { key: 'ai', title: 'AI & Machine Learning', subtitle: 'Core Domain', icon: '🤖', color: '#00f5d4' },
              { key: 'data', title: 'Data Analysis', subtitle: 'Analytics & BI', icon: '📊', color: '#0ea5e9' },
              { key: 'dev', title: 'Development', subtitle: 'Tools & Platforms', icon: '💻', color: '#fb923c' },
            ].map(({ key, title, subtitle, icon, color }, cardIndex) => <motion.div key={key} initial={{ opacity: 0, y: 30 }} animate={skillsVisible ? { opacity: 1, y: 0 } : {}} transition={{ delay: cardIndex * 0.1, duration: 0.7 }} className="p-6 sm:p-7 rounded-2xl glass" style={{ border: `1px solid ${color}1a` }}><div className="flex items-center gap-3 mb-6"><div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl" style={{ background: `${color}12` }}>{icon}</div><div><p className="font-display font-semibold text-white">{title}</p><p className="font-mono text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>{subtitle}</p></div></div>{SKILLS[key].map((s, i) => <SkillBar key={s.name} {...s} color={color} delay={i * 0.08} />)}</motion.div>)}
          </div>
        </div>

        <div ref={toolsRef}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={toolsVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="mb-10"><p className="font-mono text-xs mb-3 tracking-[0.12em]" style={{ color: '#00f5d4' }}>// 03 — TOOLS</p><h2 className="font-display text-4xl sm:text-5xl font-bold tracking-[-0.04em]">Technologies <span className="grad-text">I Use</span></h2></motion.div>
          <div className="flex flex-wrap gap-3">{TOOLS.map((tool, i) => <motion.div key={tool.name} initial={{ opacity: 0, scale: 0.8 }} animate={toolsVisible ? { opacity: 1, scale: 1 } : {}} transition={{ delay: i * 0.04, duration: 0.4, ease: [0.16, 1, 0.3, 1] }} whileHover={{ y: -4, scale: 1.05 }} className="flex items-center gap-2 px-4 py-3 rounded-xl glass glass-hover cursor-default" style={{ border: `1px solid ${tool.color}22` }}><span className="text-lg">{tool.icon}</span><span className="font-mono text-sm font-medium" style={{ color: 'rgba(255,255,255,0.75)' }}>{tool.name}</span></motion.div>)}</div>
        </div>
      </div>
    </div>
  )
}
