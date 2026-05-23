'use client'
import { useState, useEffect, useRef } from 'react'

const SEQUENCES = [
  {
    cmd: 'whoami',
    output: ['Wisdom Shaibu', 'Backend Engineer · DevOps Engineer'],
  },
  {
    cmd: 'cat mission.txt',
    output: ['Building systems that don\'t break at 3am.'],
  },
  {
    cmd: 'kubectl get skills --all',
    output: [
      'Node.js   TypeScript   Python   NestJS',
      'K8s       Terraform    AWS      Docker',
      'Grafana   Prometheus   CI/CD    Redis',
    ],
  },
  {
    cmd: 'ls certifications/',
    output: [
      'azure-ai-engineer/   azure-developer/',
      'kcna/                azure-fundamentals/',
      'github-foundations/  foundational-csharp/',
    ],
  },
  {
    cmd: 'ping hire-wisdom --repeat',
    output: ['PONG — Available. Response time: immediate.', 'Zero packet loss. 100% uptime.'],
  },
]

const TYPING_SPEED = 35
const OUTPUT_SPEED = 15
const PAUSE_AFTER_CMD = 400
const PAUSE_AFTER_OUTPUT = 2200

type Line = { type: 'cmd' | 'output' | 'blank'; text: string }

export default function Hero() {
  const [lines, setLines] = useState<Line[]>([])
  const [typing, setTyping] = useState('')
  const [phase, setPhase] = useState<'cmd' | 'output' | 'pause'>('cmd')
  const [seqIdx, setSeqIdx] = useState(0)
  const [outputLine, setOutputLine] = useState(0)
  const [charIdx, setCharIdx] = useState(0)
  const terminalBodyRef = useRef<HTMLDivElement>(null)
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = terminalBodyRef.current
    if (el) el.scrollTop = el.scrollHeight
  }, [lines, typing])

  useEffect(() => {
    const seq = SEQUENCES[seqIdx % SEQUENCES.length]

    if (phase === 'cmd') {
      if (charIdx < seq.cmd.length) {
        const t = setTimeout(() => {
          setTyping(seq.cmd.slice(0, charIdx + 1))
          setCharIdx(c => c + 1)
        }, TYPING_SPEED)
        return () => clearTimeout(t)
      } else {
        const t = setTimeout(() => {
          setLines(l => [...l, { type: 'cmd', text: seq.cmd }])
          setTyping('')
          setCharIdx(0)
          setPhase('output')
        }, PAUSE_AFTER_CMD)
        return () => clearTimeout(t)
      }
    }

    if (phase === 'output') {
      const currentOut = seq.output[outputLine]
      if (!currentOut) {
        const t = setTimeout(() => {
          setLines(l => [...l, { type: 'blank', text: '' }])
          setOutputLine(0)
          setPhase('pause')
        }, PAUSE_AFTER_OUTPUT)
        return () => clearTimeout(t)
      }
      if (charIdx < currentOut.length) {
        const t = setTimeout(() => {
          setTyping(currentOut.slice(0, charIdx + 1))
          setCharIdx(c => c + 1)
        }, OUTPUT_SPEED)
        return () => clearTimeout(t)
      } else {
        const t = setTimeout(() => {
          setLines(l => [...l, { type: 'output', text: currentOut }])
          setTyping('')
          setCharIdx(0)
          setOutputLine(o => o + 1)
        }, 80)
        return () => clearTimeout(t)
      }
    }

    if (phase === 'pause') {
      const t = setTimeout(() => {
        if (lines.length > 20) setLines(l => l.slice(-14))
        setSeqIdx(i => i + 1)
        setPhase('cmd')
      }, 600)
      return () => clearTimeout(t)
    }
  }, [phase, charIdx, seqIdx, outputLine, lines.length])

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center grid-bg overflow-hidden">
      {/* Radial glow */}
      <div className="absolute inset-0 bg-glow-radial pointer-events-none" />

      {/* Scan line */}
      <div
        className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-green/20 to-transparent pointer-events-none"
        style={{ animation: 'scan 10s linear infinite' }}
      />

      <div className="relative max-w-6xl mx-auto px-6 pt-20 pb-16 grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Identity */}
        <div className="space-y-6">
          <div className="font-mono text-green text-sm tracking-widest uppercase animate-fade-in">
            $ ./wisdom --introduce
          </div>

          <div>
            <h1 className="font-mono font-bold leading-none mb-2">
              <span className="text-5xl md:text-7xl block text-txt-base">WISDOM</span>
              <span className="text-5xl md:text-7xl block gradient-text">SHAIBU</span>
            </h1>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="tag">Backend Engineer</span>
              <span className="tag-blue tag">DevOps Engineer</span>
              <span className="tag-purple tag">Cloud ∙ AWS ∙ Azure</span>
            </div>
          </div>

          <p className="text-txt-muted leading-relaxed max-w-md">
            I build production-grade APIs, distributed systems, and cloud infrastructure
            that scale under pressure. If it runs in prod, it's my responsibility.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href="#projects"
              className="font-mono text-sm px-5 py-2.5 bg-green text-bg-base font-semibold rounded hover:bg-green-bright transition-all hover:shadow-lg hover:shadow-green/25"
            >
              ./view_work
            </a>
            <a
              href="/Wisdom_Ojochegbe_Shaibu_Resume.pdf"
              download="Wisdom_Ojochegbe_Shaibu_Resume.pdf"
              className="font-mono text-sm px-5 py-2.5 border border-green/40 text-green hover:bg-green/10 hover:border-green rounded transition-all flex items-center gap-2"
            >
              <span>download_cv</span>
              <span className="text-xs">↓</span>
            </a>
            <a
              href="#contact"
              className="font-mono text-sm px-5 py-2.5 border border-border text-txt-muted hover:text-txt-base hover:border-border-accent rounded transition-all"
            >
              ./contact
            </a>
            <a
              href="https://github.com/wizzfi1"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-sm px-5 py-2.5 border border-border text-txt-muted hover:text-txt-base hover:border-border-accent rounded transition-all"
            >
              github↗
            </a>
          </div>

          {/* Availability badge */}
          <div className="flex items-center gap-2 font-mono text-xs text-txt-muted">
            <span className="w-2 h-2 rounded-full bg-green animate-pulse" />
            <span>Available for new opportunities</span>
          </div>
        </div>

        {/* Right: Terminal */}
        <div className="font-mono text-sm glow-green animate-glow-pulse rounded-lg overflow-hidden border border-border">
          {/* Terminal header */}
          <div className="bg-bg-elevated px-4 py-2.5 flex items-center gap-2 border-b border-border-subtle">
            <span className="w-3 h-3 rounded-full bg-red-500/80" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <span className="w-3 h-3 rounded-full bg-green/80" />
            <span className="ml-3 text-txt-muted text-xs">wisdom@portfolio:~</span>
          </div>

          {/* Terminal body */}
          <div ref={terminalBodyRef} className="bg-bg-card p-4 h-80 overflow-y-auto space-y-1" style={{ scrollbarWidth: 'none' }}>
            {lines.map((line, i) => (
              <div key={i}>
                {line.type === 'cmd' && (
                  <div>
                    <span className="text-green">wisdom@portfolio</span>
                    <span className="text-txt-muted">:</span>
                    <span className="text-blue">~</span>
                    <span className="text-txt-muted">$ </span>
                    <span className="text-txt-base">{line.text}</span>
                  </div>
                )}
                {line.type === 'output' && (
                  <div className="text-green-bright pl-2">{line.text}</div>
                )}
                {line.type === 'blank' && <div className="h-2" />}
              </div>
            ))}

            {/* Active typing line */}
            {phase === 'cmd' && (
              <div>
                <span className="text-green">wisdom@portfolio</span>
                <span className="text-txt-muted">:</span>
                <span className="text-blue">~</span>
                <span className="text-txt-muted">$ </span>
                <span className="text-txt-base">{typing}</span>
                <span className="animate-blink text-green">█</span>
              </div>
            )}
            {phase === 'output' && (
              <div className="text-green-bright pl-2">
                {typing}
                <span className="animate-blink text-green">█</span>
              </div>
            )}
            {phase === 'pause' && (
              <div>
                <span className="text-green">wisdom@portfolio</span>
                <span className="text-txt-muted">:</span>
                <span className="text-blue">~</span>
                <span className="text-txt-muted">$ </span>
                <span className="animate-blink text-green">█</span>
              </div>
            )}
            <div ref={bottomRef} />
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-txt-muted font-mono text-xs animate-bounce">
        <span>scroll</span>
        <span>↓</span>
      </div>
    </section>
  )
}
