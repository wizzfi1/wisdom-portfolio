'use client'
import { useEffect, useRef } from 'react'

const projects = [
  {
    name: 'Pickup Logistics API',
    period: 'Jan 2026 – Present',
    description:
      'Production-ready logistics platform with shipment lifecycle management, real-time WebSocket tracking, event-driven architecture, async email queues via BullMQ, and role-based access control for 4 actor types.',
    stack: ['Node.js', 'TypeScript', 'MongoDB', 'Redis', 'BullMQ', 'WebSocket', 'Jest'],
    color: 'green',
    link: 'https://pickup.archsaintnexus.com/',
    highlight: true,
  },
  {
    name: 'WizFi Microservices Platform',
    period: 'Jul 2025 – Sept 2025',
    description:
      'Full Kubernetes platform running 8+ independently deployable microservices. AWS infrastructure via Terraform, HTTPS via NGINX + Let\'s Encrypt, standardised Helm chart releases, structured logging and health checks.',
    stack: ['Kubernetes', 'Docker', 'Terraform', 'AWS', 'Helm', 'NGINX', 'Node.js', 'Python'],
    color: 'blue',
    link: 'https://github.com/wizzfi1/Wizfi-Microservices',
    highlight: false,
  },
  {
    name: 'FullStack DevSecOps Demo',
    period: 'Oct 2025 – Dec 2025',
    description:
      'End-to-end CI/CD platform with automated build, test, SAST scanning, secrets detection, and IaC validation in pipeline gates. Container hardening with non-root execution + Prometheus/Grafana monitoring.',
    stack: ['GitHub Actions', 'Docker', 'Kubernetes', 'Prometheus', 'Grafana', 'SAST', 'Terraform'],
    color: 'purple',
    link: 'https://github.com/wizzfi1/FullStack_DevSec',
    highlight: false,
  },
  {
    name: "Wisdom's Order Fellow",
    period: 'Jan 2026 – Mar 2026',
    description:
      'Real-time order tracking backend with secure webhook-driven architecture, full onboarding (registration → OTP → KYC → admin approval), strict PostgreSQL lifecycle transitions, and async email notifications.',
    stack: ['Node.js', 'PostgreSQL', 'WebSockets', 'JWT', 'Rate limiting'],
    color: 'green',
    link: 'https://github.com/wizzfi1/Wisdoms_Order_Fellow',
    highlight: false,
  },
  {
    name: 'Wisdom Job Board API',
    period: 'Mar 2025 – Jul 2025',
    description:
      'Modular REST API with JWT-based authentication, role-based access control, and relational PostgreSQL data models using Sequelize ORM. Containerized with Docker and production-ready health endpoints.',
    stack: ['Node.js', 'Express', 'PostgreSQL', 'Sequelize ORM', 'JWT', 'Docker'],
    color: 'blue',
    link: 'https://github.com/wizzfi1/Wisdom14DaysofCodeAndDesign',
    highlight: false,
  },
  {
    name: 'Azure AD User Reader API',
    period: 'Jan 2025 – Mar 2025',
    description:
      'C# backend integration service using OAuth2 client credentials for secure non-interactive Azure AD authentication. Retrieves and processes user metadata via protected Microsoft Graph API endpoints.',
    stack: ['C#', '.NET', 'Azure AD', 'OAuth2', 'Microsoft Graph API'],
    color: 'orange',
    link: 'https://github.com/wizzfi1',
    highlight: false,
  },
]

const borderMap: Record<string, string> = {
  green: 'hover:border-green/40 hover:shadow-green/10',
  blue: 'hover:border-blue/40 hover:shadow-blue/10',
  purple: 'hover:border-purple/40 hover:shadow-purple/10',
  orange: 'hover:border-orange/40 hover:shadow-orange/10',
}

const tagMap: Record<string, string> = {
  green: 'tag',
  blue: 'tag tag-blue',
  purple: 'tag tag-purple',
  orange: 'tag tag-orange',
}

const dotMap: Record<string, string> = {
  green: 'text-green',
  blue: 'text-blue',
  purple: 'text-purple',
  orange: 'text-orange',
}

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => e.target.classList.toggle('visible', e.isIntersecting)),
      { threshold: 0.06 }
    )
    ref.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="projects" ref={ref} className="py-24 border-t border-border-subtle">
      <div className="max-w-6xl mx-auto px-6">
        <div className="reveal mb-12">
          <p className="section-heading">// projects</p>
          <h2 className="text-3xl md:text-4xl font-bold text-txt-base">
            Systems I built, <span className="gradient-text">not just coded.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p, i) => (
            <a
              key={p.name}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`reveal reveal-delay-${(i % 3) + 1} card p-5 flex flex-col gap-4 group cursor-pointer hover:shadow-lg ${borderMap[p.color]} transition-all duration-300`}
            >
              {/* Top: title + period */}
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    {p.highlight && (
                      <span className="font-mono text-xs text-green bg-green/10 border border-green/20 px-2 py-0.5 rounded">
                        featured
                      </span>
                    )}
                  </div>
                  <h3 className="font-semibold text-txt-base group-hover:text-green-bright transition-colors">
                    {p.name}
                  </h3>
                  <p className="font-mono text-xs text-txt-muted mt-0.5">{p.period}</p>
                </div>
                <span className={`text-lg ${dotMap[p.color]} group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform`}>
                  ↗
                </span>
              </div>

              {/* Description */}
              <p className="text-sm text-txt-muted leading-relaxed flex-1">{p.description}</p>

              {/* Stack */}
              <div className="flex flex-wrap gap-1.5">
                {p.stack.map(s => (
                  <span key={s} className={tagMap[p.color]}>{s}</span>
                ))}
              </div>
            </a>
          ))}
        </div>

        <div className="reveal reveal-delay-3 mt-8 text-center">
          <a
            href="https://github.com/wizzfi1"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-sm text-txt-muted hover:text-green transition-colors"
          >
            $ git clone https://github.com/wizzfi1 — more on GitHub ↗
          </a>
        </div>
      </div>
    </section>
  )
}
