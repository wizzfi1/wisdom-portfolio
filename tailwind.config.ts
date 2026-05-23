import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['JetBrains Mono', 'Fira Code', 'Consolas', 'monospace'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        bg: {
          base: '#08090f',
          card: '#0e1117',
          elevated: '#161b22',
        },
        border: {
          subtle: '#1e2433',
          DEFAULT: '#2d3748',
          accent: '#30363d',
        },
        green: {
          dim: '#0d3320',
          DEFAULT: '#10b981',
          bright: '#34d399',
          glow: '#6ee7b7',
        },
        blue: {
          dim: '#0d1f3c',
          DEFAULT: '#60a5fa',
          bright: '#93c5fd',
        },
        purple: {
          dim: '#1e1040',
          DEFAULT: '#a78bfa',
          bright: '#c4b5fd',
        },
        orange: {
          DEFAULT: '#fb923c',
          bright: '#fdba74',
        },
        txt: {
          base: '#e2e8f0',
          muted: '#64748b',
          faint: '#374151',
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease forwards',
        'fade-in': 'fadeIn 0.5s ease forwards',
        blink: 'blink 1s step-end infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'scan': 'scan 8s linear infinite',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(16,185,129,0.1)' },
          '50%': { boxShadow: '0 0 40px rgba(16,185,129,0.25)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
      },
      backgroundImage: {
        'grid-pattern': `linear-gradient(rgba(16,185,129,0.03) 1px, transparent 1px),
                         linear-gradient(90deg, rgba(16,185,129,0.03) 1px, transparent 1px)`,
        'glow-radial': 'radial-gradient(ellipse at center, rgba(16,185,129,0.08) 0%, transparent 70%)',
      },
      backgroundSize: {
        grid: '60px 60px',
      },
    },
  },
  plugins: [],
}

export default config
