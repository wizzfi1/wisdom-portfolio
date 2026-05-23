import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Wisdom Ojochegbe Shaibu — Backend & DevOps Engineer'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#08090f',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '72px 80px',
          fontFamily: 'monospace',
          position: 'relative',
        }}
      >
        {/* Grid background */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'linear-gradient(rgba(16,185,129,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.04) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        {/* Radial glow */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(ellipse at 30% 50%, rgba(16,185,129,0.07) 0%, transparent 65%)',
          }}
        />

        {/* Prompt line */}
        <div style={{ display: 'flex', marginBottom: '24px', color: '#10b981', fontSize: '20px', letterSpacing: '0.1em' }}>
          $ ./wisdom --introduce
        </div>

        {/* Name */}
        <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '20px' }}>
          <span style={{ fontSize: '80px', fontWeight: 900, color: '#e2e8f0', lineHeight: 1, letterSpacing: '-2px' }}>
            WISDOM
          </span>
          <span
            style={{
              fontSize: '80px',
              fontWeight: 900,
              lineHeight: 1,
              letterSpacing: '-2px',
              background: 'linear-gradient(135deg, #34d399, #60a5fa)',
              backgroundClip: 'text',
              color: 'transparent',
            }}
          >
            SHAIBU
          </span>
        </div>

        {/* Title tags */}
        <div style={{ display: 'flex', gap: '12px', marginBottom: '40px' }}>
          {['Backend Engineer', 'DevOps Engineer', 'AWS · Azure · Kubernetes'].map((tag) => (
            <div
              key={tag}
              style={{
                padding: '6px 16px',
                background: 'rgba(16,185,129,0.1)',
                border: '1px solid rgba(16,185,129,0.25)',
                borderRadius: '6px',
                color: '#34d399',
                fontSize: '18px',
              }}
            >
              {tag}
            </div>
          ))}
        </div>

        {/* Divider */}
        <div style={{ width: '100%', height: '1px', background: 'rgba(16,185,129,0.15)', marginBottom: '32px', display: 'flex' }} />

        {/* Bottom row */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', gap: '24px' }}>
            {['Node.js', 'TypeScript', 'Kubernetes', 'Terraform', 'AWS', 'Prometheus'].map((skill) => (
              <span key={skill} style={{ color: '#64748b', fontSize: '16px' }}>
                {skill}
              </span>
            ))}
          </div>
          <div style={{ color: '#374151', fontSize: '16px' }}>
            github.com/wizzfi1
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
