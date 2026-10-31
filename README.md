# Wisdom Shaibu Portfolio

Applied AI and backend engineering portfolio, built with Next.js, React and TypeScript. Design direction is documented in DESIGN.md; acceptance checks are in VERIFY.md.

## Run locally

Use Node.js 20+ and the committed lockfile:

```sh
npm ci
npm run dev
```

No environment variables, model API keys or third-party accounts are required. The interactive illustrations run in the browser and do not invoke model services.

## Verify and build

```sh
npx tsc --noEmit
npm run build
npm start
```

The five case studies are generated from src/data/projects.ts. Unknown slugs return a not-found response. Metadata, sitemap, robots and social image are under src/app.

## Content

- src/data/projects.ts: selected case studies and older project archive.
- src/components/ProfileSections.tsx: experience, skills and credentials.
- src/components/SystemStudio.tsx: interactive architecture illustration.
- src/components/RetryDemo.tsx: illustrative duplicate-event behavior, not the actual FailureLab backend.
- public/Wisdom_Ojochegbe_Shaibu_Resume.pdf: current two-page resume.

Keep project ownership, status, evidence and limits accurate. Illustrations are original CSS compositions, not screenshots of live systems. Retired AWS demos are not advertised as running services. The finance timing is reported operational experience, not a generalized benchmark.

## Design and accessibility

Native system fonts; no font network requests or animation libraries. Content is server rendered and visible by default. Controls have focus states, reduced-motion overrides and mobile navigation semantics. The current public Vercel domain is retained in metadata. Publishing is a separate step after preview review.

Reference sites were used for inspiration only. No external design assets or source code were copied.
