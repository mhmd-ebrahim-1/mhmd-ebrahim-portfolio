import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Github, Linkedin, Mail, Download, ExternalLink, Database, BrainCircuit, BarChart3 } from 'lucide-react'
import { PROFILE, PROJECTS } from '../data'

const domains = [
  { icon: Database, title: 'Data Analytics', text: 'Python, SQL, Pandas, Power BI & business intelligence.' },
  { icon: BrainCircuit, title: 'Machine Learning', text: 'ML, NLP, RAG and computer vision solutions.' },
  { icon: BarChart3, title: 'Data Engineering', text: 'PySpark, HDFS, Airflow, Snowflake & Docker.' },
]

export default function Home() {
  const featured = PROJECTS.filter(p => p.featured).slice(0, 4)

  return (
    <main className="page-transition">
      <section className="relative min-h-[92vh] flex items-center overflow-hidden px-6 sm:px-10 pt-28 pb-16">
        <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
        <div className="absolute -top-32 -right-32 w-[520px] h-[520px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(0,245,212,.12), transparent 68%)' }} />
        <div className="absolute -bottom-48 -left-32 w-[560px] h-[560px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(14,165,233,.09), transparent 68%)' }} />

        <div className="relative z-10 max-w-7xl mx-auto w-full grid lg:grid-cols-[1.15fr_.85fr] gap-14 items-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }}>
            <div className="inline-flex items-center gap-2 px-3 py-2 rounded-full glass mb-7">
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ background:'#00f5d4', boxShadow:'0 0 12px #00f5d4' }} />
              <span className="font-mono text-[10px] sm:text-xs tracking-[.12em]" style={{ color:'#00f5d4' }}>OPEN TO INTERNSHIPS & FREELANCE</span>
            </div>

            <p className="font-mono text-xs sm:text-sm mb-4" style={{ color:'rgba(255,255,255,.35)' }}>Hello, I’m</p>
            <h1 className="font-display font-bold text-5xl sm:text-7xl xl:text-8xl leading-[.92] tracking-[-.04em] mb-6">
              <span className="text-white">Mohamed</span><br />
              <span className="grad-text">Ebrahim</span>
            </h1>
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="font-mono text-base sm:text-xl" style={{ color:'#38bdf8' }}>Data Analyst</span>
              <span style={{ color:'rgba(255,255,255,.18)' }}>•</span>
              <span className="font-mono text-base sm:text-xl" style={{ color:'#00f5d4' }}>ML Engineer</span>
            </div>
            <p className="max-w-2xl text-base sm:text-lg leading-8 mb-9" style={{ color:'rgba(255,255,255,.55)' }}>
              I turn raw data into useful decisions and practical AI products — building analytics dashboards, machine-learning systems, RAG applications, and end-to-end data pipelines.
            </p>

            <div className="flex flex-wrap gap-3 mb-9">
              <Link to="/projects" className="btn-primary inline-flex items-center gap-2">Explore My Work <ArrowRight size={16} /></Link>
              <Link to="/cv" className="btn-ghost inline-flex items-center gap-2"><Download size={15} /> View CV</Link>
              <a href={`mailto:${PROFILE.email}`} className="btn-ghost inline-flex items-center gap-2"><Mail size={15} /> Contact</a>
            </div>

            <div className="flex items-center gap-3">
              <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="w-11 h-11 rounded-xl glass flex items-center justify-center transition-transform hover:-translate-y-1" style={{ color:'rgba(255,255,255,.65)' }}><Github size={18} /></a>
              <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-11 h-11 rounded-xl glass flex items-center justify-center transition-transform hover:-translate-y-1" style={{ color:'rgba(255,255,255,.65)' }}><Linkedin size={18} /></a>
              <span className="font-mono text-xs ml-2" style={{ color:'rgba(255,255,255,.28)' }}>Egypt · AI Student · 2027</span>
            </div>
          </motion.div>

          <motion.div initial={{ opacity:0, scale:.94 }} animate={{ opacity:1, scale:1 }} transition={{ duration:.8, delay:.15 }} className="relative flex justify-center lg:justify-end">
            <div className="absolute -inset-8 rounded-[40px] opacity-60" style={{ background:'radial-gradient(circle at center, rgba(0,245,212,.13), transparent 65%)' }} />
            <div className="relative w-full max-w-[390px]">
              <div className="absolute -inset-[1px] rounded-[28px]" style={{ background:'linear-gradient(135deg, rgba(0,245,212,.6), rgba(14,165,233,.15), rgba(167,139,250,.45))' }} />
              <div className="relative m-[1px] rounded-[27px] overflow-hidden bg-[#0b0b14]">
                <div className="h-16 px-5 flex items-center justify-between" style={{ borderBottom:'1px solid rgba(255,255,255,.06)' }}>
                  <span className="font-mono text-[10px]" style={{ color:'rgba(255,255,255,.3)' }}>PROFILE / 01</span>
                  <span className="font-mono text-[10px]" style={{ color:'#00f5d4' }}>AVAILABLE</span>
                </div>
                <div className="aspect-[4/4.7] overflow-hidden">
                  <img src="/profile.jpg" alt="Mohamed Ebrahim" className="w-full h-full object-cover object-top" />
                </div>
                <div className="p-5">
                  <p className="font-display font-semibold text-white text-lg">Data Analyst & ML Engineer</p>
                  <p className="font-mono text-xs mt-1" style={{ color:'rgba(255,255,255,.35)' }}>Python · SQL · ML · RAG · BI</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="px-6 sm:px-10 pb-24">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-5">
          {domains.map(({ icon: Icon, title, text }, i) => (
            <motion.div key={title} initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:i*.08 }} className="glass glass-hover rounded-2xl p-6">
              <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5" style={{ background:'rgba(0,245,212,.07)', color:'#00f5d4' }}><Icon size={20} /></div>
              <h2 className="font-display font-semibold text-lg text-white mb-2">{title}</h2>
              <p className="text-sm leading-6" style={{ color:'rgba(255,255,255,.42)' }}>{text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="px-6 sm:px-10 pb-28">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5 mb-10">
            <div>
              <p className="font-mono text-xs mb-3 tracking-[.14em]" style={{ color:'#00f5d4' }}>// SELECTED WORK</p>
              <h2 className="font-display text-4xl sm:text-5xl font-bold text-white">Projects that <span className="grad-text">matter</span></h2>
            </div>
            <Link to="/projects" className="font-mono text-sm inline-flex items-center gap-2" style={{ color:'#00f5d4' }}>View all projects <ArrowRight size={14} /></Link>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {featured.map((proj, i) => (
              <motion.article key={proj.id} initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:i*.07 }} className="glass glass-hover rounded-2xl p-6 sm:p-7 group">
                <div className="flex items-start justify-between gap-5 mb-7">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl" style={{ background:`${proj.accent}12`, border:`1px solid ${proj.accent}25` }}>{proj.icon}</div>
                  <span className="font-mono text-[10px] px-2 py-1 rounded-md" style={{ color:proj.accent, background:`${proj.accent}10`, border:`1px solid ${proj.accent}20` }}>{proj.category === 'ai' ? 'AI / ML' : 'DATA'}</span>
                </div>
                <h3 className="font-display text-xl font-semibold text-white mb-3">{proj.title}</h3>
                <p className="text-sm leading-6 mb-6" style={{ color:'rgba(255,255,255,.43)' }}>{proj.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">{proj.tech.slice(0,5).map(t => <span key={t} className="tech-tag">{t}</span>)}</div>
                <a href={proj.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-mono text-xs transition-colors" style={{ color:'rgba(255,255,255,.4)' }}>View on GitHub <ExternalLink size={13} /></a>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
