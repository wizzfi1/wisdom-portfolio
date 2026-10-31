import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { projects } from "@/data/projects";
import PortfolioNav from "@/components/PortfolioNav";
import PortfolioFooter from "@/components/PortfolioFooter";
import ProjectVisual from "@/components/ProjectVisual";
import RetryDemo from "@/components/RetryDemo";
export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = projects.find((p) => p.slug === slug);
  return {
    title: p ? `${p.name} | Wisdom Shaibu` : "Project not found",
    description: p?.summary,
    alternates: { canonical: `/work/${slug}` },
  };
}
export default async function CaseStudy({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = projects.find((p) => p.slug === slug);
  if (!p) notFound();
  const next = projects[(projects.indexOf(p) + 1) % projects.length];
  return (
    <>
      <PortfolioNav />
      <main id="main" className="case-main shell">
        <Link className="text-link case-back" href="/#work">
          ← All selected work
        </Link>
        <div className="case-header">
          <p className="eyebrow">
            {p.category} / {p.name}
          </p>
          <h1>{p.headline}</h1>
          <p>{p.summary}</p>
        </div>
        <div className="case-facts">
          <div>
            <span>MY ROLE</span>
            <strong>{p.role}</strong>
          </div>
          <div>
            <span>PROJECT STATUS</span>
            <strong>{p.status}</strong>
          </div>
          <div>
            <span>TOOLS</span>
            <strong>{p.stack.join(" · ")}</strong>
          </div>
        </div>
        <ProjectVisual slug={p.slug} />
        <section className="case-section">
          <h2>The problem</h2>
          <p>{p.challenge}</p>
        </section>
        <section className="case-section">
          <h2>Engineering decisions</h2>
          <div className="decision-list">
            {p.decisions.map((d, i) => (
              <article key={d.title}>
                <span className="micro">0{i + 1}</span>
                <div>
                  <h3>{d.title}</h3>
                  <p>{d.body}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
        {slug === "failurelab" && <RetryDemo />}
        <section className="case-section">
          <h2>What came out of it</h2>
          <p>{p.result}</p>
        </section>
        <section className="case-section boundary-section">
          <h2>Scope & current limits</h2>
          <p>{p.boundary}</p>
        </section>
        {p.privateSource && (
          <p className="private-source-note">
            The source repository is private. I can discuss my contribution and
            the architecture; repository access remains with its owners.
          </p>
        )}
        <div className="case-actions">
          {p.source && !p.privateSource ? (
            <a
              className="button primary"
              href={p.source}
              target="_blank"
              rel="noopener noreferrer"
            >
              {slug === "awekik"
                ? "Explore the team repository"
                : "Explore the source"}{" "}
              ↗
            </a>
          ) : (
            <a className="button primary" href="mailto:shaibuwisdom@gmail.com">
              Discuss the implementation ↗
            </a>
          )}
          <Link className="text-link" href={`/work/${next.slug}`}>
            Next: {next.name} →
          </Link>
        </div>
      </main>
      <PortfolioFooter />
    </>
  );
}
