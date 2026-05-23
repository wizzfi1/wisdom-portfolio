'use client'
import { useEffect, useRef } from 'react'

const stats = [
  { value: '8+', label: 'Projects shipped', color: 'text-green' },
  { value: '7', label: 'Certifications', color: 'text-blue' },
  { value: '2+', label: 'Years building', color: 'text-purple' },
  { value: '3', label: 'Cloud platforms', color: 'text-orange' },
]

export default function About() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => e.target.classList.toggle('visible', e.isIntersecting)),
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
              I'm a Backend and DevOps Engineer who builds the stuff that has to work — the APIs,
              the pipelines, the infra. Not because it's cool, but because teams depend on it being
              up, fast, and correct.
            </p>
            <p>
              My work spans production-ready Node.js/TypeScript APIs with event-driven architecture,
              to Kubernetes platforms running 8+ microservices, to CI/CD pipelines with embedded
              DevSecOps controls. I don't stop at "it works on my machine."
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
        <div className="md:col-span-2 grid grid-cols-2 gap-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`reveal reveal-delay-${i + 1} card p-5 text-center`}
            >
              <div className={`font-mono text-3xl font-bold ${s.color} mb-1`}>{s.value}</div>
              <div className="text-txt-muted text-xs leading-snug">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
