'use client'
import { useEffect, useRef, useState } from 'react'

const stats = [
  { end: 8, suffix: '+', label: 'Projects shipped', color: 'text-green' },
  { end: 7, suffix: '', label: 'Certifications', color: 'text-blue' },
  { end: 2, suffix: '+', label: 'Years building', color: 'text-purple' },
  { end: 3, suffix: '', label: 'Cloud platforms', color: 'text-orange' },
]

function AnimatedStat({ end, suffix, color, label, triggered }: {
  end: number; suffix: string; color: string; label: string; triggered: boolean
}) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!triggered) return
    let start = 0
    const duration = 1200
    const step = Math.ceil(duration / end)
    const timer = setInterval(() => {
      start += 1
      setCount(start)
      if (start >= end) clearInterval(timer)
    }, step)
    return () => clearInterval(timer)
  }, [triggered, end])

  return (
    <div className="card p-5 text-center">
      <div className={`font-mono text-3xl font-bold ${color} mb-1 stat-value`}
        style={{ animationDelay: '0.1s' }}>
        {count}{suffix}
      </div>
      <div className="text-txt-muted text-xs leading-snug">{label}</div>
    </div>
  )
}

export default function About() {
  const ref = useRef<HTMLDivElement>(null)
  const [statsTriggered, setStatsTriggered] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => {
          e.target.classList.toggle('visible', e.isIntersecting)
          if (e.isIntersecting && (e.target as HTMLElement).dataset.stats) {
            setStatsTriggered(true)
          }
        })
      },
      { threshold: 0.1 }
    )
    ref.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" ref={ref} className="py-24 max-w-6xl mx-auto px-6">
      <div className="grid md:grid-cols-5 gap-16 items-start">
        {/* Text */}
        <div className="md:col-span-3 space-y-6">
          <div className="reveal">
            <p className="section-heading">// about</p>
            <h2 className="text-3xl md:text-4xl font-bold text-txt-base">
              The engineer who <span className="gradient-text-green">owns the outcome.</span>
            </h2>
          </div>

          <div className="reveal reveal-delay-1 space-y-4 text-txt-muted leading-relaxed">
            <p>
              I'm a Backend, DevOps, and AI Systems Engineer who builds the stuff that has to work —
              the APIs, the pipelines, the infra, and increasingly, the AI layer on top of it.
              Not because it's cool, but because teams depend on it being up, fast, and correct.
            </p>
            <p>
              My work spans production-ready Node.js/TypeScript APIs with event-driven architecture,
              to Kubernetes platforms running 8+ microservices, to RAG pipelines and LLM orchestration
              systems built on Azure OpenAI. I hold the{' '}
              <span className="text-green font-medium">Azure AI Engineer Associate (2026)</span>{' '}
              certification and apply it in real systems.
            </p>
            <p>
              Before software, I spent two years at Sterling Bank processing 100+ daily transactions —
              which gave me something no bootcamp teaches:{' '}
              <span className="text-green font-medium">obsession with data integrity and zero tolerance for system failure.</span>
            </p>
          </div>

          <div className="reveal reveal-delay-2 flex flex-wrap gap-3 pt-2">
            <span className="font-mono text-xs text-green">
              <span className="text-txt-muted">location: </span>Nigeria (Remote-ready)
            </span>
            <span className="font-mono text-xs text-green">
              <span className="text-txt-muted">edu: </span>B.Eng. Computer Engineering, FUT Minna
            </span>
          </div>
        </div>

        {/* Stats */}
        <div className="md:col-span-2 grid grid-cols-2 gap-4" data-stats="true">
          {stats.map((s, i) => (
            <div key={s.label} className={`reveal reveal-delay-${i + 1}`} data-stats="true">
              <AnimatedStat
                end={s.end}
                suffix={s.suffix}
                color={s.color}
                label={s.label}
                triggered={statsTriggered}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
