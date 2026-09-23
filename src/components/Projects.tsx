'use client'
import { useEffect, useRef } from 'react'

const projects = [
  {
    name: 'WIYANOS',
    period: 'Jul 2026 – Aug 2026',
    description:
      'Semantic labour marketplace for Nigeria\'s informal economy. FastAPI backend, Ahnlich vector DB with all-MiniLM-L6-v2 embeddings, cosine similarity matching across Pidgin, Yoruba, Hausa, and Igbo queries. Claude Haiku query normalisation, OpenAI Whisper voice search, Redis caching, and AWS EC2/ECR deployment. Sub-2-second search latency.',
    stack: ['FastAPI', 'Python', 'Ahnlich', 'Claude API', 'OpenAI Whisper', 'Redis', 'AWS', 'Terraform', 'Next.js'],
    color: 'green',
    link: 'https://wiyanos.vercel.app/',
    highlight: true,
  },
  {
    name: 'Pickup Logistics API',
    period: 'Jan 2026 – Aug 2026',
    description:
      'Production-ready logistics platform with shipment lifecycle management, real-time WebSocket tracking, event-driven architecture, async email queues via BullMQ, and role-based access control for 4 actor types.',
    stack: ['Node.js', 'TypeScript', 'MongoDB', 'Redis', 'BullMQ', 'WebSocket', 'Jest'],
    color: 'blue',
    link: 'https://pickup.archsaintnexus.com/',
    highlight: false,
  },
  {
    name: 'WizFi Microservices Platform',
    period: 'Jul 2025 – Sep 2025',
    description:
      'Backend services for a microservices platform composed of 8+ independently deployable services. REST APIs handling business logic and inter-service communication across Node.js and Python services, with authentication, structured logging, and health checks.',
    stack: ['Kubernetes', 'Docker', 'Terraform', 'AWS', 'Node.js', 'Python', 'GitHub Actions'],
    color: 'purple',
    link: 'https://github.com/wizzfi1/Wizfi-Microservices',
    highlight: false,
  },
  {
    name: "Wisdom's Order Fellow",
    period: 'Jan 2026 – Mar 2026',
    description:
      'Production-ready backend for real-time order tracking using a secure webhook-driven architecture. Full onboarding workflow (registration, OTP, KYC, admin approval), strict PostgreSQL order lifecycle transitions, and async notifications.',
    stack: ['Node.js', 'PostgreSQL', 'WebSockets', 'JWT', 'Rate limiting'],
    color: 'green',
    link: 'https://github.com/wizzfi1/Wisdoms_Order_Fellow',
    highlight: false,
  },
  {
    name: 'Full-Stack DevSecOps Demo',
    period: 'Sep 2025 – Oct 2025',
    description:
      'End-to-end CI/CD platform with backend APIs, structured error handling, input validation, and monitoring for request latency and error rates. Deployment-ready with automated testing pipelines.',
    stack: ['GitHub Actions', 'Docker', 'Kubernetes', 'Prometheus', 'Grafana', 'Terraform'],
    color: 'blue',
    link: 'https://github.com/wizzfi1/FullStack_DevSec',
    highlight: false,
  },
  {
    name: 'Wisdom Job Board API',
    period: 'May 2025 – Jul 2025',
    description:
      'Modular REST API with JWT-based authentication, role-based access control, and relational PostgreSQL data models using Sequelize ORM. Containerized with Docker and production-ready health endpoints.',
    stack: ['Node.js', 'Express', 'PostgreSQL', 'Sequelize ORM', 'JWT', 'Docker'],
    color: 'orange',
    link: 'https://github.com/wizzfi1/Wisdom14DaysofCodeAndDesign',
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
              className={`reveal reveal-delay-${(i % 3) + 1} glow-card gradient-border p-5 flex flex-col gap-4 group cursor-pointer`}
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
