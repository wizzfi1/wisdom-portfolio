import Link from "next/link";
import { projects, archive } from "@/data/projects";
import ProjectVisual from "./ProjectVisual";
export default function SelectedWork() {
  return (
    <section className="work-section shell" aria-labelledby="work-title">
      <div className="section-intro">
        <div>
          <p className="eyebrow">01 / SELECTED WORK</p>
          <h2 id="work-title">
            The work behind
            <br />
            the words<span className="blue">.</span>
          </h2>
        </div>
        <p>
          AI, finance and the moments where systems need to hold up. Here’s what
          I built, what I owned and what I learned.
        </p>
      </div>
      <div className="featured-grid">
        {projects.slice(0, 2).map((p, i) => (
          <article className="featured-project" key={p.slug}>
            <Link
              className="art-link"
              href={`/work/${p.slug}`}
              aria-label={`Read ${p.name} case study`}
            >
              <ProjectVisual slug={p.slug} />
              <span className="art-arrow" aria-hidden="true">
                ↗
              </span>
            </Link>
            <div className="project-heading">
              <h3>
                <Link href={`/work/${p.slug}`}>{p.name}</Link>
              </h3>
              <span className="micro">0{i + 1}</span>
            </div>
            <p className="project-summary">{p.summary}</p>
            <div className="project-meta">
              <span>{p.role}</span>
              <span>{p.status}</span>
            </div>
          </article>
        ))}
      </div>
      <div className="project-list">
        {projects.slice(2).map((p, i) => (
          <Link key={p.slug} className="project-row" href={`/work/${p.slug}`}>
            <span className="project-index">0{i + 3}</span>
            <div>
              <span className="micro">{p.category}</span>
              <h3>{p.name}</h3>
              <p>{p.summary}</p>
            </div>
            <span className="row-status">{p.status}</span>
            <span className="row-arrow" aria-hidden="true">
              ↗
            </span>
          </Link>
        ))}
      </div>
      <details className="archive">
        <summary>
          <span>
            More engineering work <small>05 projects</small>
          </span>
          <span aria-hidden="true">+</span>
        </summary>
        <div className="archive-list">
          {archive.map((p) => (
            <article key={p.name}>
              <div>
                <span className="micro">{p.type}</span>
                <h3>{p.name}</h3>
                <p>{p.description}</p>
                <small>{p.stack}</small>
              </div>
              <a
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${p.name} ${p.privateSource ? "private repository, authorized access required" : "source on GitHub"}`}
              >
                {p.privateSource ? "Private repo ↗" : "Source ↗"}
              </a>
            </article>
          ))}
        </div>
      </details>
    </section>
  );
}
