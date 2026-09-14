import { motion } from 'framer-motion'
import { Download, Briefcase, GraduationCap, MapPin, Mail, Github, Linkedin } from 'lucide-react'
import { useReveal } from '../hooks'
import { PROFILE, EXPERIENCE, EDUCATION, LEARNING_ACTIVITIES, SKILLS, TOOLS } from '../data'

const BASE_URL = import.meta.env.BASE_URL
const CV_FILE = 'My_Cv_Update.pdf'

function TimelineItem({ item, index, isEdu = false }) {
  const [ref, visible] = useReveal()
  return (
    <motion.div ref={ref} initial={{ opacity: 0, x: -20 }} animate={visible ? { opacity: 1, x: 0 } : {}} transition={{ delay: index * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }} className="relative flex gap-4 sm:gap-6 pb-10 last:pb-0">
      <div className="flex flex-col items-center">
        <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 z-10" style={{ background: item.current ? 'rgba(0,245,212,0.15)' : 'rgba(255,255,255,0.04)', border: item.current ? '1px solid rgba(0,245,212,0.3)' : '1px solid rgba(255,255,255,0.08)' }}>
          {isEdu ? <GraduationCap size={16} style={{ color: item.current ? '#00f5d4' : 'rgba(255,255,255,0.3)' }} /> : <Briefcase size={16} style={{ color: item.current ? '#00f5d4' : 'rgba(255,255,255,0.3)' }} />}
        </div>
        <div className="w-px flex-1 mt-2" style={{ background: 'rgba(255,255,255,0.06)' }} />
      </div>
      <div className="flex-1 min-w-0 pt-1 pb-2">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-1">
          <h3 className="font-display font-semibold text-white text-base sm:text-lg">{item.title || item.degree}</h3>
          {item.current && <span className="self-start px-2 py-0.5 rounded-full font-mono text-xs flex items-center gap-1.5" style={{ background: 'rgba(0,245,212,0.08)', border: '1px solid rgba(0,245,212,0.2)', color: '#00f5d4' }}><span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />Current</span>}
        </div>
        <p className="font-semibold mb-1 text-sm" style={{ color: '#0ea5e9' }}>{item.org || item.school}</p>
        <p className="font-mono text-xs mb-3" style={{ color: 'rgba(255,255,255,0.3)', letterSpacing: '0.04em' }}>{item.period}</p>
        <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>{item.description}</p>
        {item.skills && <div className="flex flex-wrap gap-2 mt-3">{item.skills.map(s => <span key={s} className="tech-tag">{s}</span>)}</div>}
      </div>
    </motion.div>
  )
}

export default function CV() {
  return (
    <div className="page-transition min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-10">
      <div className="max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <p className="font-mono text-xs mb-4 tracking-[0.12em]" style={{ color: '#00f5d4' }}>// 05 — RÉSUMÉ</p>
            <h1 className="font-display text-4xl sm:text-6xl font-bold mb-4 tracking-[-0.04em]">My <span className="grad-text">CV</span></h1>
            <p className="text-base" style={{ color: 'rgba(255,255,255,0.4)' }}>Experience, education, and skills — all in one place.</p>
          </div>
          <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }} onClick={() => window.open(`${BASE_URL}${CV_FILE}`, '_blank', 'noopener,noreferrer')} className="btn-primary inline-flex items-center gap-2 self-start">
            <Download size={16} /> Download PDF
          </motion.button>
        </motion.div>

        <div className="glass rounded-3xl overflow-hidden" style={{ border: '1px solid rgba(255,255,255,0.08)' }}>
          <div className="p-5 sm:p-10 pb-8" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', background: 'rgba(0,245,212,0.02)' }}>
            <div className="flex flex-col sm:flex-row items-start gap-5 sm:gap-6">
              <div className="w-20 h-20 rounded-2xl overflow-hidden flex-shrink-0" style={{ border: '2px solid rgba(0,245,212,0.2)' }}>
                <img src={`${BASE_URL}gallery/professional-portrait.webp`} alt={PROFILE.name} className="w-full h-full object-cover object-top" onError={e => { e.currentTarget.style.display = 'none' }} />
              </div>
              <div className="flex-1 min-w-0">
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-1">{PROFILE.fullName}</h2>
                <p className="text-base mb-3" style={{ color: '#00f5d4' }}>{PROFILE.title}</p>
                <div className="flex flex-wrap gap-x-4 gap-y-2">
                  {[
                    { icon: MapPin, text: PROFILE.location },
                    { icon: Mail, text: PROFILE.email, href: `mailto:${PROFILE.email}` },
                    { icon: Github, text: 'mhmd-ebrahim-1', href: PROFILE.github },
                    { icon: Linkedin, text: 'mhmd-ebrahim1', href: PROFILE.linkedin },
                  ].map(({ icon: Icon, text, href }) => (
                    <a key={text} href={href} target={href ? '_blank' : undefined} rel="noopener noreferrer" className="flex items-center gap-1.5 font-mono text-xs break-all" style={{ color: 'rgba(255,255,255,0.45)', textDecoration: 'none' }}>
                      <Icon size={12} style={{ color: '#00f5d4', flexShrink: 0 }} />{text}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <p className="mt-6 text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)', maxWidth: '700px' }}>{PROFILE.bio}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 divide-y lg:divide-y-0 lg:divide-x" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
            <div className="lg:col-span-3 p-5 sm:p-10">
              <div className="mb-10">
                <div className="flex items-center gap-3 mb-8"><div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'rgba(0,245,212,0.1)', border: '1px solid rgba(0,245,212,0.2)' }}><Briefcase size={14} style={{ color: '#00f5d4' }} /></div><h3 className="font-display font-semibold text-white text-lg">Experience</h3></div>
                {EXPERIENCE.map((exp, i) => <TimelineItem key={exp.id} item={exp} index={i} />)}
              </div>
              <div className="mb-10">
                <div className="flex items-center gap-3 mb-8"><div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'rgba(167,139,250,0.1)', border: '1px solid rgba(167,139,250,0.2)' }}><GraduationCap size={14} style={{ color: '#a78bfa' }} /></div><h3 className="font-display font-semibold text-white text-lg">Education</h3></div>
                {EDUCATION.map((edu, i) => <TimelineItem key={edu.id} item={edu} index={i} isEdu />)}
              </div>
              {LEARNING_ACTIVITIES.length > 0 && <div>
                <div className="flex items-center gap-3 mb-6"><div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'rgba(251,146,60,0.1)', border: '1px solid rgba(251,146,60,0.2)' }}><span style={{ fontSize: 14 }}>📚</span></div><h3 className="font-display font-semibold text-white text-lg">Learning Activities</h3></div>
                {LEARNING_ACTIVITIES.map((a, i) => <motion.div key={a.id} className="mb-5 pl-4" style={{ borderLeft: '2px solid rgba(251,146,60,0.2)' }} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }}><p className="font-display font-semibold text-white text-sm">{a.title}</p><p className="text-xs mb-1" style={{ color: '#fb923c' }}>{a.org}</p><p className="font-mono text-xs mb-2" style={{ color: 'rgba(255,255,255,0.3)' }}>{a.period}</p><p className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>{a.description}</p></motion.div>)}
              </div>}
            </div>

            <div className="lg:col-span-2 p-5 sm:p-10">
              <h3 className="font-display font-semibold text-white text-lg mb-6">Core Skills</h3>
              {[
                { section: 'AI / ML', color: '#00f5d4', skills: SKILLS.ai.map(s => s.name) },
                { section: 'Data', color: '#0ea5e9', skills: SKILLS.data.map(s => s.name) },
                { section: 'Development', color: '#fb923c', skills: SKILLS.dev.map(s => s.name) },
              ].map(({ section, color, skills }) => <div key={section} className="mb-7"><p className="font-mono text-xs mb-3" style={{ color, letterSpacing: '0.08em' }}>{section.toUpperCase()}</p><div className="flex flex-wrap gap-2">{skills.map(s => <span key={s} className="font-mono text-xs px-2 py-1 rounded-md" style={{ background: `${color}0a`, border: `1px solid ${color}20`, color: 'rgba(255,255,255,0.6)' }}>{s}</span>)}</div></div>)}

              <div className="mt-8"><h3 className="font-display font-semibold text-white text-lg mb-4">Languages</h3>{[{ lang: 'Arabic', level: 'Native' }, { lang: 'English', level: 'Professional' }].map(({ lang, level }) => <div key={lang} className="flex justify-between items-center mb-3"><span className="text-sm" style={{ color: 'rgba(255,255,255,0.7)' }}>{lang}</span><span className="font-mono text-xs px-2 py-0.5 rounded" style={{ background: 'rgba(0,245,212,0.08)', color: '#00f5d4' }}>{level}</span></div>)}</div>

              <div className="mt-8"><h3 className="font-display font-semibold text-white text-lg mb-4">Key Tools</h3><div className="flex flex-wrap gap-2">{TOOLS.slice(0, 8).map(t => <span key={t.name} className="font-mono text-xs px-2 py-1 rounded-md" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.5)' }}>{t.icon} {t.name}</span>)}</div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
