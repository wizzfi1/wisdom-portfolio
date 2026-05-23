'use client'
import { useEffect, useRef, useState } from 'react'

const categories = [
  {
    id: 'backend',
    label: 'Backend',
    color: 'green',
    skills: [
      'Node.js', 'TypeScript', 'Python', 'Express', 'NestJS', 'Flask',
      'C# (.NET)', 'REST APIs', 'WebSockets', 'Socket.io', 'Event-Driven Arch',
      'BullMQ', 'JWT', 'RBAC', 'OAuth2',
    ],
  },
  {
    id: 'devops',
    label: 'Cloud & DevOps',
    color: 'blue',
    skills: [
      'AWS', 'Microsoft Azure', 'GCP', 'Docker', 'Kubernetes', 'K3s',
      'Helm', 'Terraform', 'Ansible', 'NGINX', 'GitHub Actions',
      'Azure DevOps', 'CI/CD Pipelines', 'DevSecOps', 'Infrastructure as Code',
    ],
  },
  {
    id: 'data',
    label: 'Data & Messaging',
    color: 'purple',
    skills: [
      'PostgreSQL', 'MongoDB', 'Redis', 'SQL', 'Sequelize ORM',
      'Data Modeling', 'Transaction Handling', 'BullMQ queues',
    ],
  },
  {
    id: 'observability',
    label: 'Observability & Security',
    color: 'orange',
    skills: [
      'Prometheus', 'Grafana', 'Sentry', 'SAST scanning',
      'Secrets detection', 'IaC validation', 'Container hardening',
      'Structured logging', 'Health checks', 'Alerting',
    ],
  },
]

const colorMap: Record<string, string> = {
  green: 'tag',
  blue: 'tag tag-blue',
  purple: 'tag tag-purple',
  orange: 'tag tag-orange',
}

const tabActive: Record<string, string> = {
  green: 'border-green text-green',
  blue: 'border-blue text-blue',
  purple: 'border-purple text-purple',
  orange: 'border-orange text-orange',
}

export default function Stack() {
  const [active, setActive] = useState('backend')
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => e.target.classList.toggle('visible', e.isIntersecting)),
      { threshold: 0.1 }
    )
    ref.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const activeCategory = categories.find(c => c.id === active)!

  return (
    <section id="stack" ref={ref} className="py-24 border-t border-border-subtle">
      <div className="max-w-6xl mx-auto px-6">
        <div className="reveal mb-12">
          <p className="section-heading">// tech stack</p>
          <h2 className="text-3xl md:text-4xl font-bold text-txt-base">
            The tools I <span className="gradient-text">trust in production.</span>
          </h2>
        </div>

        {/* Category tabs */}
        <div className="reveal reveal-delay-1 flex flex-wrap gap-2 mb-8 font-mono text-sm">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className={`px-4 py-2 border rounded transition-all ${
                active === cat.id
                  ? `${tabActive[cat.color]} bg-bg-elevated`
                  : 'border-border-subtle text-txt-muted hover:border-border-accent hover:text-txt-base'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skill tags */}
        <div key={active} className="reveal reveal-delay-2 flex flex-wrap gap-2 min-h-[120px]">
          {activeCategory.skills.map((skill, i) => (
            <span
              key={skill}
              className={colorMap[activeCategory.color]}
              style={{ animationDelay: `${i * 40}ms`, animation: 'fadeUp 0.4s ease forwards', opacity: 0 }}
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Philosophy note */}
        <div className="reveal reveal-delay-3 mt-12 card p-6 font-mono text-sm">
          <span className="text-green">$ cat philosophy.txt</span>
          <div className="mt-3 text-txt-muted leading-relaxed">
            <span className="text-green-bright">&gt;</span>{' '}
            I don't collect tools. I understand them. Every item on this list has been used to solve
            a real problem in a real system — not just a tutorial project.
          </div>
        </div>
      </div>
    </section>
  )
}
