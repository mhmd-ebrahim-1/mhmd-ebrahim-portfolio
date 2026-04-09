import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Github, Linkedin, Twitter, Instagram, Download, ExternalLink } from 'lucide-react'
import ParticleBackground from '../components/ParticleBackground'
import { useTyping, useReveal } from '../hooks'
import { PROFILE, PROJECTS } from '../data'

// Stagger container
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } }
}
const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
}

export default function Home() {
  const typedText = useTyping(PROFILE.roles, 90)
  const [statsRef, statsVisible] = useReveal()
  const [projRef, projVisible] = useReveal()

  const featured = PROJECTS.filter(p => p.featured)

  return (
    <div className="page-transition">
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <ParticleBackground count={35} />

        {/* Gradient orbs */}
        <div className="absolute top-1/4 -right-40 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(0,245,212,0.08) 0%, transparent 70%)' }} />
        <div className="absolute -bottom-20 -left-40 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(167,139,250,0.06) 0%, transparent 70%)' }} />

        <div className="relative z-10 max-w-7xl mx-auto px-10 pt-24 grid grid-cols-2 gap-16 items-center w-full">
          {/* LEFT */}
          <motion.div variants={container} initial="hidden" animate="show">
            {/* Badge */}
            <motion.div variants={item} className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full"
              style={{ background: 'rgba(0,245,212,0.06)', border: '1px solid rgba(0,245,212,0.15)' }}>
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#00f5d4' }} />
              <span className="font-mono text-xs" style={{ color: '#00f5d4', letterSpacing: '0.08em' }}>
                OPEN TO OPPORTUNITIES
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1 variants={item} className="font-display text-7xl font-bold leading-[1.0] mb-4"
              style={{ letterSpacing: '-2px' }}>
              <span className="text-white">Mohamed</span>
              <br />
              <span className="grad-text">Ebrahim</span>
            </motion.h1>

            {/* Typing role */}
            <motion.div variants={item} className="flex items-center gap-2 mb-6 h-8">
              <span className="font-mono text-lg" style={{ color: 'rgba(255,255,255,0.4)' }}>→</span>
              <span className="font-mono text-lg" style={{ color: '#0ea5e9' }}>{typedText}</span>
              <span className="typing-cursor" />
            </motion.div>

            {/* Bio */}
            <motion.p variants={item} className="text-base leading-relaxed mb-10 max-w-xl"
              style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'DM Sans' }}>
              I build practical AI solutions that solve real problems — from{' '}
              <span style={{ color: '#00f5d4' }}>RAG systems</span> and{' '}
              <span style={{ color: '#a78bfa' }}>computer vision models</span> to{' '}
              <span style={{ color: '#fb923c' }}>IoT-integrated applications</span>.
            </motion.p>

            {/* CTA */}
            <motion.div variants={item} className="flex items-center gap-4 mb-10">
              <Link to="/projects" className="btn-primary flex items-center gap-2">
                View Projects <ArrowRight size={16} />
              </Link>
              <Link to="/cv" className="btn-ghost flex items-center gap-2">
                <Download size={15} /> Download CV
              </Link>
            </motion.div>

            {/* Social */}
            <motion.div variants={item} className="flex items-center gap-3">
              {[
                { icon: Github, href: PROFILE.github, label: 'GitHub' },
                { icon: Linkedin, href: PROFILE.linkedin, label: 'LinkedIn' },
                { icon: Twitter, href: PROFILE.twitter, label: 'Twitter' },
                { icon: Instagram, href: PROFILE.instagram, label: 'Instagram' },
              ].map(({ icon: Icon, href, label }) => (
                <motion.a key={label} href={href} target="_blank" rel="noopener noreferrer"
                  whileHover={{ y: -3, scale: 1.1 }}
                  className="w-10 h-10 rounded-xl flex items-center justify-center transition-colors"
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.4)' }}
                  title={label}
                >
                  <Icon size={16} />
                </motion.a>
              ))}
              <span className="w-px h-6 mx-1" style={{ background: 'rgba(255,255,255,0.1)' }} />
              <span className="font-mono text-xs" style={{ color: 'rgba(255,255,255,0.3)', letterSpacing: '0.06em' }}>
                @mhmd-ebrahim-1
              </span>
            </motion.div>
          </motion.div>

          {/* RIGHT — profile photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="flex justify-center"
          >
            <div className="relative">
              {/* Animated ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                className="absolute -inset-4 rounded-3xl"
                style={{
                  background: 'conic-gradient(from 0deg, #00f5d4, #0ea5e9, #a78bfa, transparent, transparent, #00f5d4)',
                  opacity: 0.4,
                }}
              />
              {/* Photo frame */}
              <div className="relative w-80 h-96 rounded-2xl overflow-hidden"
                style={{ border: '1px solid rgba(0,245,212,0.15)' }}>
                <img
                  src="/profile.jpg"
                  alt="Mohamed Ebrahim"
                  className="w-full h-full object-cover object-top"
                  onError={e => {
                    // Fallback gradient avatar if no image
                    e.target.style.display = 'none'
                    e.target.parentElement.style.background = 'linear-gradient(135deg, rgba(0,245,212,0.1), rgba(167,139,250,0.1))'
                    e.target.parentElement.innerHTML += `<div style="position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px"><div style="font-size:80px">👨‍💻</div><div style="font-family:Syne,sans-serif;font-size:18px;font-weight:700;color:rgba(255,255,255,0.8)">Mohamed Ebrahim</div><div style="font-family:JetBrains Mono,monospace;font-size:12px;color:#00f5d4">AI Engineer</div></div>`
                  }}
                />
                {/* Overlay gradient */}
                <div className="absolute bottom-0 left-0 right-0 h-24"
                  style={{ background: 'linear-gradient(to top, rgba(8,8,16,0.9), transparent)' }} />
                {/* Name tag */}
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="font-display font-semibold text-white text-lg leading-tight">Mohamed Ebrahim</p>
                  <p className="font-mono text-xs" style={{ color: '#00f5d4' }}>AI & Data Science Engineer</p>
                </div>
              </div>

              {/* Floating chips */}
              <motion.div
                animate={{ y: [-4, 4, -4] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -left-16 top-16 px-3 py-2 rounded-xl glass"
                style={{ border: '1px solid rgba(0,245,212,0.15)' }}
              >
                <p className="font-mono text-xs" style={{ color: '#00f5d4' }}>23 Repos</p>
              </motion.div>
              <motion.div
                animate={{ y: [4, -4, 4] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -right-14 top-32 px-3 py-2 rounded-xl glass"
                style={{ border: '1px solid rgba(167,139,250,0.2)' }}
              >
                <p className="font-mono text-xs" style={{ color: '#a78bfa' }}>21 Certs</p>
              </motion.div>
              <motion.div
                animate={{ y: [-3, 3, -3] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute -right-12 bottom-20 px-3 py-2 rounded-xl glass"
                style={{ border: '1px solid rgba(251,146,60,0.2)' }}
              >
                <p className="font-mono text-xs" style={{ color: '#fb923c' }}>IoT + AI</p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="font-mono text-xs" style={{ color: 'rgba(255,255,255,0.2)', letterSpacing: '0.1em' }}>SCROLL</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-px h-8"
            style={{ background: 'linear-gradient(to bottom, rgba(0,245,212,0.5), transparent)' }}
          />
        </motion.div>
      </section>

      {/* ── STATS ── */}
      <section ref={statsRef} className="py-20 px-10" style={{ borderTop: '1px solid rgba(255,255,255,0.04)', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
        <div className="max-w-7xl mx-auto grid grid-cols-4 gap-8">
          {[
            { num: '23', label: 'GitHub Repos', color: '#00f5d4' },
            { num: '21', label: 'Certificates', color: '#0ea5e9' },
            { num: '5+', label: 'Tech Domains', color: '#a78bfa' },
            { num: '6+', label: 'Months Experience', color: '#fb923c' },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={statsVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-center"
            >
              <p className="font-display font-bold text-5xl mb-2" style={{ color: stat.color }}>
                {stat.num}
              </p>
              <p className="font-mono text-xs tracking-widest" style={{ color: 'rgba(255,255,255,0.35)' }}>
                {stat.label.toUpperCase()}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── FEATURED PROJECTS ── */}
      <section ref={projRef} className="py-24 px-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={projVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-end justify-between mb-12"
          >
            <div>
              <p className="font-mono text-xs mb-3" style={{ color: '#00f5d4', letterSpacing: '0.12em' }}>// FEATURED WORK</p>
              <h2 className="font-display text-5xl font-bold" style={{ letterSpacing: '-1.5px' }}>
                Selected <span className="grad-text">Projects</span>
              </h2>
            </div>
            <Link to="/projects" className="flex items-center gap-2 font-mono text-sm transition-colors"
              style={{ color: '#00f5d4' }}>
              View All <ArrowRight size={14} />
            </Link>
          </motion.div>

          <div className="grid grid-cols-3 gap-6">
            {featured.map((proj, i) => (
              <motion.div
                key={proj.id}
                initial={{ opacity: 0, y: 40 }}
                animate={projVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.12, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="glass glass-hover rounded-2xl overflow-hidden group"
              >
                {/* Project visual */}
                <div className={`h-44 bg-gradient-to-br ${proj.gradient} relative overflow-hidden`}>
                  <div className="absolute inset-0 grid-bg opacity-30" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-6xl">{proj.icon}</span>
                  </div>
                  {/* Category badge */}
                  <div className="absolute top-3 right-3 px-2 py-1 rounded-md font-mono text-xs"
                    style={{ background: 'rgba(0,0,0,0.5)', color: 'rgba(255,255,255,0.6)', border: '1px solid rgba(255,255,255,0.1)' }}>
                    {proj.category.toUpperCase()}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-display font-semibold text-lg mb-2 text-white">{proj.title}</h3>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: 'rgba(255,255,255,0.45)', fontFamily: 'DM Sans' }}>
                    {proj.description.slice(0, 100)}...
                  </p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {proj.tech.slice(0, 3).map(t => (
                      <span key={t} className="tech-tag">{t}</span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <a href={proj.github} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-2 font-mono text-xs transition-colors"
                      style={{ color: 'rgba(255,255,255,0.4)' }}
                      onMouseEnter={e => e.target.style.color = proj.accent}
                      onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.4)'}
                    >
                      <Github size={13} /> GitHub
                    </a>
                    <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{ color: proj.accent }} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
