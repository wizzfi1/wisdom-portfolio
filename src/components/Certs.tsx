'use client'
import { useEffect, useRef } from 'react'

const certs = [
  {
    name: 'Azure AI Engineer Associate',
    issuer: 'Microsoft',
    year: '2026',
    code: 'AI-102',
    color: 'blue',
    icon: '⚡',
  },
  {
    name: 'Azure Developer Associate',
    issuer: 'Microsoft',
    year: '2025',
    code: 'AZ-204',
    color: 'blue',
    icon: '⚙️',
  },
  {
    name: 'Kubernetes & Cloud Native Associate',
    issuer: 'CNCF',
    year: '2025',
    code: 'KCNA',
    color: 'green',
    icon: '☸',
  },
  {
    name: 'Azure AI Fundamentals',
    issuer: 'Microsoft',
    year: '2025',
    code: 'AI-900',
    color: 'blue',
    icon: '🧠',
  },
  {
    name: 'Azure Fundamentals',
    issuer: 'Microsoft',
    year: '2025',
    code: 'AZ-900',
    color: 'blue',
    icon: '☁️',
  },
  {
    name: 'GitHub Foundations',
    issuer: 'GitHub',
    year: '2025',
    code: 'GH-001',
    color: 'purple',
    icon: '🐙',
  },
  {
    name: 'Foundational C# with Microsoft',
    issuer: 'Microsoft / freeCodeCamp',
    year: '2025',
    code: 'C#-F',
    color: 'purple',
    icon: '#',
  },
]

const borderMap: Record<string, string> = {
  green: 'border-green/20 hover:border-green/50',
  blue: 'border-blue/20 hover:border-blue/50',
  purple: 'border-purple/20 hover:border-purple/50',
}

const codeMap: Record<string, string> = {
  green: 'text-green bg-green/10',
  blue: 'text-blue bg-blue/10',
  purple: 'text-purple bg-purple/10',
}

export default function Certs() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => e.target.classList.toggle('visible', e.isIntersecting)),
      { threshold: 0.08 }
    )
    ref.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="certs" ref={ref} className="py-24 border-t border-border-subtle bg-bg-card/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="reveal mb-12">
          <p className="section-heading">// certifications</p>
          <h2 className="text-3xl md:text-4xl font-bold text-txt-base">
            Validated by the <span className="gradient-text">people who built it.</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {certs.map((cert, i) => (
            <div
              key={cert.code}
              className={`reveal reveal-delay-${(i % 4) + 1} card border ${borderMap[cert.color]} p-5 space-y-3 group transition-all duration-300 hover:-translate-y-1`}
            >
              <div className="flex items-center justify-between">
                <span className="text-2xl">{cert.icon}</span>
                <span className={`font-mono text-xs px-2 py-0.5 rounded ${codeMap[cert.color]}`}>
                  {cert.code}
                </span>
              </div>
              <div>
                <p className="font-medium text-txt-base text-sm leading-snug">{cert.name}</p>
                <p className="font-mono text-xs text-txt-muted mt-1">
                  {cert.issuer} · {cert.year}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats bar */}
        <div className="reveal reveal-delay-3 mt-12 card p-6 font-mono text-sm flex flex-col sm:flex-row gap-6 items-start sm:items-center justify-between">
          <div>
            <span className="text-green">$ echo $CERT_COUNT</span>
            <div className="mt-1 text-txt-muted">
              <span className="text-green-bright text-lg font-bold">7</span> active certifications across Azure, Kubernetes, and GitHub
            </div>
          </div>
          <div className="text-txt-muted text-xs leading-relaxed max-w-xs">
            Each cert represents production-relevant knowledge — not just exam prep. Azure AI Engineer (2026) is the most recent.
          </div>
        </div>
      </div>
    </section>
  )
}
