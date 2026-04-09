import { motion } from 'framer-motion'
import { useReveal } from '../hooks'
import { PROFILE, SKILLS, TOOLS } from '../data'

function SkillBar({ name, level, color = '#00f5d4', delay = 0 }) {
  const [ref, visible] = useReveal()
  return (
    <div ref={ref} className="mb-5">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium" style={{ color: 'rgba(255,255,255,0.75)', fontFamily: 'DM Sans' }}>{name}</span>
        <span className="font-mono text-xs" style={{ color }}>{level}%</span>
      </div>
      <div className="h-[2px] rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.06)' }}>
        <motion.div
          initial={{ width: 0 }}
          animate={visible ? { width: `${level}%` } : {}}
          transition={{ duration: 1.2, delay, ease: [0.4, 0, 0.2, 1] }}
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${color}, ${color}88)` }}
        />
      </div>
    </div>
  )
}

export default function About() {
  const [heroRef, heroVisible] = useReveal()
  const [skillsRef, skillsVisible] = useReveal()
  const [toolsRef, toolsVisible] = useReveal()

  return (
    <div className="page-transition min-h-screen pt-24 pb-20 px-10">
      <div className="max-w-7xl mx-auto">

        {/* ── HERO BIO ── */}
        <div ref={heroRef} className="grid grid-cols-2 gap-20 mb-24 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={heroVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="font-mono text-xs mb-4" style={{ color: '#00f5d4', letterSpacing: '0.12em' }}>// 01 — ABOUT</p>
            <h1 className="font-display text-6xl font-bold mb-6" style={{ letterSpacing: '-2px', lineHeight: 1.1 }}>
              Turning Data<br />Into <span className="grad-text">Intelligence</span>
            </h1>
            <p className="text-base leading-relaxed mb-4" style={{ color: 'rgba(255,255,255,0.55)', fontFamily: 'DM Sans' }}>
              {PROFILE.bio}
            </p>
            <p className="text-base leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)', fontFamily: 'DM Sans' }}>
              {PROFILE.bio2}
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                { label: 'University', value: 'Kafr El-Sheikh University' },
                { label: 'Degree', value: 'B.Sc. Artificial Intelligence' },
                { label: 'Location', value: 'Egypt 🇪🇬' },
                { label: 'Status', value: 'Open to work ✅' },
              ].map(({ label, value }) => (
                <div key={label} className="p-4 rounded-xl"
                  style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
                  <p className="font-mono text-xs mb-1" style={{ color: 'rgba(255,255,255,0.3)', letterSpacing: '0.06em' }}>{label.toUpperCase()}</p>
                  <p className="text-sm font-medium text-white">{value}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right side — visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={heroVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden relative"
              style={{ border: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.02)' }}>
              <div className="absolute inset-0 grid-bg opacity-30" />
              {/* Terminal window */}
              <div className="relative z-10 p-8">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-3 h-3 rounded-full" style={{ background: '#ff5f56' }} />
                  <div className="w-3 h-3 rounded-full" style={{ background: '#ffbd2e' }} />
                  <div className="w-3 h-3 rounded-full" style={{ background: '#27c93f' }} />
                  <span className="font-mono text-xs ml-4" style={{ color: 'rgba(255,255,255,0.2)' }}>about.py</span>
                </div>
                <div className="font-mono text-sm leading-8" style={{ color: 'rgba(255,255,255,0.7)' }}>
                  <p><span style={{ color: '#a78bfa' }}>class</span> <span style={{ color: '#00f5d4' }}>MohamedEbrahim</span>:</p>
                  <p className="pl-6"><span style={{ color: '#fb923c' }}>name</span> = <span style={{ color: '#86efac' }}>"Mohamed Ebrahim Hamed"</span></p>
                  <p className="pl-6"><span style={{ color: '#fb923c' }}>role</span> = <span style={{ color: '#86efac' }}>"Junior AI Engineer"</span></p>
                  <p className="pl-6"><span style={{ color: '#fb923c' }}>passion</span> = [</p>
                  <p className="pl-12"><span style={{ color: '#86efac' }}>"RAG Systems"</span>,</p>
                  <p className="pl-12"><span style={{ color: '#86efac' }}>"Computer Vision"</span>,</p>
                  <p className="pl-12"><span style={{ color: '#86efac' }}>"Data Analytics"</span>,</p>
                  <p className="pl-12"><span style={{ color: '#86efac' }}>"IoT + AI"</span>,</p>
                  <p className="pl-6">]</p>
                  <p className="pl-6 mt-2"><span style={{ color: '#7dd3fc' }}>def</span> <span style={{ color: '#fde68a' }}>build</span>(self):</p>
                  <p className="pl-12"><span style={{ color: '#a78bfa' }}>return</span> <span style={{ color: '#86efac' }}>"Intelligent Systems"</span> 🚀</p>
                </div>
              </div>
            </div>

            {/* Domain cards */}
            <div className="grid grid-cols-3 gap-3 mt-4">
              {[
                { icon: '🤖', label: 'AI / ML', color: '#00f5d4' },
                { icon: '📊', label: 'Data Science', color: '#0ea5e9' },
                { icon: '🔌', label: 'IoT / Hardware', color: '#fb923c' },
              ].map(({ icon, label, color }) => (
                <div key={label} className="p-4 rounded-xl text-center glass"
                  style={{ border: `1px solid ${color}22` }}>
                  <p className="text-2xl mb-2">{icon}</p>
                  <p className="font-mono text-xs" style={{ color }}>{label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ── SKILLS ── */}
        <div ref={skillsRef} className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={skillsVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <p className="font-mono text-xs mb-3" style={{ color: '#00f5d4', letterSpacing: '0.12em' }}>// 02 — SKILLS</p>
            <h2 className="font-display text-5xl font-bold" style={{ letterSpacing: '-1.5px' }}>
              Technical <span className="grad-text">Expertise</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-3 gap-8">
            {/* AI/ML */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={skillsVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.7 }}
              className="p-7 rounded-2xl glass"
              style={{ border: '1px solid rgba(0,245,212,0.1)' }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
                  style={{ background: 'rgba(0,245,212,0.1)' }}>🤖</div>
                <div>
                  <p className="font-display font-semibold text-white">AI & Machine Learning</p>
                  <p className="font-mono text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>Core Domain</p>
                </div>
              </div>
              {SKILLS.ai.map((s, i) => (
                <SkillBar key={s.name} {...s} color="#00f5d4" delay={i * 0.1} />
              ))}
            </motion.div>

            {/* Data */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={skillsVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="p-7 rounded-2xl glass"
              style={{ border: '1px solid rgba(14,165,233,0.1)' }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
                  style={{ background: 'rgba(14,165,233,0.1)' }}>📊</div>
                <div>
                  <p className="font-display font-semibold text-white">Data Analysis</p>
                  <p className="font-mono text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>Analytics & BI</p>
                </div>
              </div>
              {SKILLS.data.map((s, i) => (
                <SkillBar key={s.name} {...s} color="#0ea5e9" delay={i * 0.1} />
              ))}
            </motion.div>

            {/* Dev */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={skillsVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="p-7 rounded-2xl glass"
              style={{ border: '1px solid rgba(251,146,60,0.1)' }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
                  style={{ background: 'rgba(251,146,60,0.1)' }}>💻</div>
                <div>
                  <p className="font-display font-semibold text-white">Development</p>
                  <p className="font-mono text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>Tools & Platforms</p>
                </div>
              </div>
              {SKILLS.dev.map((s, i) => (
                <SkillBar key={s.name} {...s} color="#fb923c" delay={i * 0.1} />
              ))}
            </motion.div>
          </div>
        </div>

        {/* ── TOOLS ── */}
        <div ref={toolsRef}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={toolsVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <p className="font-mono text-xs mb-3" style={{ color: '#00f5d4', letterSpacing: '0.12em' }}>// 03 — TOOLS</p>
            <h2 className="font-display text-5xl font-bold" style={{ letterSpacing: '-1.5px' }}>
              Technologies <span className="grad-text">I Use</span>
            </h2>
          </motion.div>

          <div className="flex flex-wrap gap-3">
            {TOOLS.map((tool, i) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={toolsVisible ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: i * 0.04, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -4, scale: 1.05 }}
                className="flex items-center gap-2 px-4 py-3 rounded-xl glass glass-hover cursor-default"
                style={{ border: `1px solid ${tool.color}22` }}
              >
                <span className="text-lg">{tool.icon}</span>
                <span className="font-mono text-sm font-medium" style={{ color: 'rgba(255,255,255,0.75)' }}>
                  {tool.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}
