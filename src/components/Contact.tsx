'use client'
import { useEffect, useRef } from 'react'

const links = [
  {
    cmd: 'sendmail shaibuwisdom@gmail.com',
    label: 'Email',
    value: 'shaibuwisdom@gmail.com',
    href: 'mailto:shaibuwisdom@gmail.com',
    color: 'green',
  },
  {
    cmd: 'open linkedin.com/in/wisdom-shaibu-tech',
    label: 'LinkedIn',
    value: 'wisdom-shaibu-tech',
    href: 'https://linkedin.com/in/wisdom-shaibu-tech',
    color: 'blue',
  },
  {
    cmd: 'git clone github.com/wizzfi1',
    label: 'GitHub',
    value: 'github.com/wizzfi1',
    href: 'https://github.com/wizzfi1',
    color: 'purple',
  },
  {
    cmd: 'call +234-813-836-9506',
    label: 'Phone',
    value: '+234 813 836 9506',
    href: 'tel:+2348138369506',
    color: 'orange',
  },
]

const hoverMap: Record<string, string> = {
  green: 'hover:border-green/50 hover:shadow-green/10 group-hover:text-green',
  blue: 'hover:border-blue/50 hover:shadow-blue/10 group-hover:text-blue',
  purple: 'hover:border-purple/50 hover:shadow-purple/10 group-hover:text-purple',
  orange: 'hover:border-orange/50 hover:shadow-orange/10 group-hover:text-orange',
}

const promptMap: Record<string, string> = {
  green: 'text-green',
  blue: 'text-blue',
  purple: 'text-purple',
  orange: 'text-orange',
}

export default function Contact() {
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
    <section id="contact" ref={ref} className="py-24 border-t border-border-subtle">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="reveal mb-6">
          <p className="section-heading">// contact</p>
          <h2 className="text-3xl md:text-4xl font-bold text-txt-base mb-4">
            Ready to build something <span className="gradient-text">that matters?</span>
          </h2>
          <p className="text-txt-muted max-w-xl mx-auto leading-relaxed">
            If you need a backend engineer who understands the full stack — API design, deployment,
            observability, and everything in between — let's talk.
          </p>
        </div>

        {/* Terminal status */}
        <div className="reveal reveal-delay-1 card font-mono text-sm p-5 mb-10 text-left max-w-lg mx-auto">
          <div className="flex items-center gap-2 text-txt-muted mb-3">
            <span className="w-2 h-2 rounded-full bg-green animate-pulse" />
            <span>wisdom@portfolio:~ $ status --verbose</span>
          </div>
          <div className="space-y-1 pl-4">
            <div><span className="text-txt-muted">availability: </span><span className="text-green">OPEN</span></div>
            <div><span className="text-txt-muted">response_time: </span><span className="text-green-bright">fast</span></div>
            <div><span className="text-txt-muted">remote: </span><span className="text-blue">yes</span></div>
            <div><span className="text-txt-muted">relocation: </span><span className="text-purple">negotiable</span></div>
          </div>
        </div>

        {/* Links */}
        <div className="reveal reveal-delay-2 grid sm:grid-cols-2 gap-3 max-w-2xl mx-auto mb-10">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className={`group card p-4 text-left flex items-center gap-4 hover:shadow-lg ${hoverMap[link.color]} transition-all duration-300`}
            >
              <div className="flex-1 min-w-0">
                <div className={`font-mono text-xs ${promptMap[link.color]} mb-0.5`}>
                  $ {link.cmd}
                </div>
                <div className="text-txt-muted text-sm truncate group-hover:text-txt-base transition-colors">
                  {link.value}
                </div>
              </div>
              <span className={`text-lg ${promptMap[link.color]} shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform`}>
                ↗
              </span>
            </a>
          ))}
        </div>

        {/* Final CTA */}
        <div className="reveal reveal-delay-3">
          <a
            href="mailto:shaibuwisdom@gmail.com"
            className="inline-flex items-center gap-2 font-mono text-sm px-8 py-3 bg-green text-bg-base font-semibold rounded hover:bg-green-bright transition-all hover:shadow-lg hover:shadow-green/25"
          >
            <span>./hire_wisdom</span>
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  )
}
