'use client'
import { useEffect, useRef } from 'react'

const roles = [
  {
    title: 'Backend Engineer',
    company: 'ArchSaint Nexus',
    companyLink: 'https://pickup.archsaintnexus.com/',
    period: 'Jan 2026 – Present',
    type: 'Full-time · Remote',
    color: 'green',
    bullets: [
      'Built production-ready logistics API with shipment lifecycle management, real-time tracking via WebSocket, and event-driven architecture using Node EventEmitter.',
      'Implemented JWT auth, role-based access control (customer, business, admin, driver), and OTP verification backed by Redis.',
      'Designed async email queue with BullMQ and a dedicated worker process, decoupling notifications from main request flow.',
      'TypeScript strict mode throughout; Jest + MongoDB Memory Server for business logic; GitHub Actions for CI/CD.',
    ],
    stack: ['Node.js', 'TypeScript', 'MongoDB', 'Redis', 'BullMQ', 'WebSocket', 'GitHub Actions'],
  },
  {
    title: 'Graduate DevOps Engineer',
    company: 'Cognetiks Consulting',
    companyLink: 'https://cognetiks.com/',
    period: 'Aug 2025 – Present',
    type: 'Graduate role · Remote',
    color: 'blue',
    bullets: [
      'Contributed to backend-facing platform engineering and deployment workflows in a DevOps-focused consulting environment.',
      'Supported CI/CD automation and cloud infrastructure tasks, reducing manual intervention by ~40%.',
      'Worked on service observability, reliability, and production readiness across platform environments.',
    ],
    stack: ['CI/CD', 'Cloud Infrastructure', 'Observability', 'DevOps'],
  },
  {
    title: 'Azure Developer Intern',
    company: 'Teknowledge',
    companyLink: 'https://teknowledge.com/',
    period: 'Jan 2025 – Aug 2025',
    type: 'Internship · Remote',
    color: 'purple',
    bullets: [
      'Built backend microservices using Azure Functions and AKS to support scalable application delivery.',
      'Enforced API security and RBAC through Azure API Management.',
      'Automated CI/CD workflows using Azure DevOps, reducing deployment friction and release cycle time by up to 50%.',
    ],
    stack: ['Azure Functions', 'AKS', 'Azure DevOps', 'Azure API Management', 'RBAC'],
  },
  {
    title: 'Universal Teller',
    company: 'Sterling Bank',
    companyLink: 'https://sterling.ng/',
    period: 'May 2023 – Oct 2025',
    type: 'Lagos, Nigeria',
    color: 'orange',
    bullets: [
      'Processed 100+ daily transactions in core banking systems — built deep instincts around data integrity, auditability, and financial business logic.',
      'Liaised with IT and backend engineering teams to diagnose system issues; direct exposure to production incident workflows under load.',
    ],
    stack: ['Data integrity', 'Financial systems', 'Incident management'],
  },
]

const dotColor: Record<string, string> = {
  green: 'bg-green',
  blue: 'bg-blue',
  purple: 'bg-purple',
  orange: 'bg-orange',
}

const tagColor: Record<string, string> = {
  green: 'tag',
  blue: 'tag tag-blue',
  purple: 'tag tag-purple',
  orange: 'tag tag-orange',
}

export default function Experience() {
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
    <section id="experience" ref={ref} className="py-24 border-t border-border-subtle bg-bg-card/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="reveal mb-12">
          <p className="section-heading">// experience</p>
          <h2 className="text-3xl md:text-4xl font-bold text-txt-base">
            Where I've shipped <span className="gradient-text">real work.</span>
          </h2>
        </div>

        <div className="relative pl-6 space-y-10">
          {/* Timeline spine */}
          <div className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-green via-blue to-purple opacity-30" />

          {roles.map((role, i) => (
            <div key={role.company} className={`reveal reveal-delay-${i + 1} relative`}>
              {/* Timeline dot */}
              <span
                className={`absolute -left-[25px] top-1.5 w-3 h-3 rounded-full ${dotColor[role.color]} ring-2 ring-bg-base`}
              />

              <div className="card p-6 space-y-4">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
                  <div>
                    <h3 className="font-semibold text-txt-base text-lg">{role.title}</h3>
                    <p className="font-mono text-sm text-txt-muted">
                      <a
                        href={role.companyLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`text-${role.color} hover:underline underline-offset-2`}
                      >
                        {role.company}
                      </a>
                      {' · '}{role.type}
                    </p>
                  </div>
                  <span className="font-mono text-xs text-txt-muted whitespace-nowrap pt-1">
                    {role.period}
                  </span>
                </div>

                {/* Bullets */}
                <ul className="space-y-2">
                  {role.bullets.map((b, j) => (
                    <li key={j} className="flex gap-3 text-sm text-txt-muted leading-relaxed">
                      <span className="text-green mt-0.5 shrink-0">→</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                {/* Stack tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {role.stack.map(s => (
                    <span key={s} className={tagColor[role.color]}>{s}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
