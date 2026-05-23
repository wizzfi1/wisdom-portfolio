import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Wisdom Shaibu — Backend & DevOps Engineer | Node.js · K8s · AWS',
  description:
    'Backend and DevOps Engineer building production-grade APIs, Kubernetes platforms, and CI/CD pipelines. Specializes in Node.js, TypeScript, Terraform, and AWS. Available for new opportunities.',
  keywords: [
    'Backend Engineer', 'DevOps Engineer', 'Node.js', 'TypeScript', 'Kubernetes',
    'Terraform', 'AWS', 'Azure', 'Docker', 'NestJS', 'PostgreSQL', 'CI/CD',
  ],
  authors: [{ name: 'Wisdom Shaibu' }],
  openGraph: {
    title: 'Wisdom Shaibu — Backend & DevOps Engineer | Node.js · K8s · AWS',
    description:
      'Backend and DevOps Engineer building production-grade APIs, Kubernetes platforms, and CI/CD pipelines. Specializes in Node.js, TypeScript, Terraform, and AWS. Available for new opportunities.',
    type: 'website',
    siteName: 'Wisdom Shaibu',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wisdom Shaibu — Backend & DevOps Engineer | Node.js · K8s · AWS',
    description:
      'Backend and DevOps Engineer building production-grade APIs, Kubernetes platforms, and CI/CD pipelines. Specializes in Node.js, TypeScript, Terraform, and AWS. Available for new opportunities.',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  )
}
