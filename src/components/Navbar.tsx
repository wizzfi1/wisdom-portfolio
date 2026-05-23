'use client'
import { useState, useEffect } from 'react'

const links = [
  { label: 'about', href: '#about' },
  { label: 'stack', href: '#stack' },
  { label: 'experience', href: '#experience' },
  { label: 'projects', href: '#projects' },
  { label: 'certs', href: '#certs' },
  { label: 'contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-bg-base/90 backdrop-blur-md border-b border-border-subtle' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        {/* Prompt */}
        <a href="#hero" className="font-mono text-sm text-txt-muted hover:text-green transition-colors">
          <span className="text-green">~/</span>
          <span className="text-txt-base">wisdom</span>
          <span className="text-purple"> $</span>
          <span className="animate-blink text-green ml-1">▋</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-sm px-3 py-1.5 text-txt-muted hover:text-green-bright transition-colors rounded hover:bg-green/5"
            >
              {link.label}
            </a>
          ))}
          <a
            href="mailto:shaibuwisdom@gmail.com"
            className="ml-4 font-mono text-sm px-4 py-1.5 border border-green/40 text-green hover:bg-green/10 hover:border-green transition-all rounded"
          >
            hire_me
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden font-mono text-sm text-txt-muted hover:text-green"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? '[x]' : '[≡]'}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-bg-base/95 backdrop-blur-md border-b border-border-subtle px-6 pb-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block font-mono text-sm py-2 text-txt-muted hover:text-green transition-colors"
            >
              <span className="text-green mr-2">$</span>{link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
