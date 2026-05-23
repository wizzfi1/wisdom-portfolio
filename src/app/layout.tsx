import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Wisdom Shaibu — Backend & DevOps Engineer',
  description:
    'Backend and DevOps Engineer specializing in Node.js, TypeScript, Kubernetes, Terraform, and AWS. Building systems that don\'t break at 3am.',
  keywords: [
    'Backend Engineer', 'DevOps Engineer', 'Node.js', 'TypeScript', 'Kubernetes',
    'Terraform', 'AWS', 'Azure', 'Docker', 'NestJS', 'PostgreSQL', 'CI/CD',
  ],
  authors: [{ name: 'Wisdom Shaibu' }],
  openGraph: {
    title: 'Wisdom Shaibu — Backend & DevOps Engineer',
    description: 'Building systems that don\'t break at 3am.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  )
}
