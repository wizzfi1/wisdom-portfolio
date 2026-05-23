export default function Footer() {
  return (
    <footer className="border-t border-border-subtle py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="font-mono text-xs text-txt-muted">
          <span className="text-green">wisdom@portfolio</span>
          <span className="text-txt-faint">:</span>
          <span className="text-blue">~</span>
          <span className="text-txt-muted"> $ uptime</span>
          <span className="text-green-bright ml-2">∞ — no downtime, no excuses.</span>
        </div>
        <div className="font-mono text-xs text-txt-muted">
          built with Next.js · deployed on Vercel · no money spent
        </div>
      </div>
    </footer>
  )
}
