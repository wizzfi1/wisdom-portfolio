const roles = [
  {
    company: "VettedAI",
    role: "AI Engineer",
    date: "JAN 2026 - PRESENT",
    text: "AI-assisted QA workflows connecting generated tests, browser agents, authenticated sessions and structured reports.",
  },
  {
    company: "Greenwich Registrars & Data Solutions",
    role: "Software Developer",
    date: "SEP 2025 - PRESENT",
    text: "Financial reconciliation and internal .NET applications, including meetings, training and document workflows.",
  },
  {
    company: "ArchSaint Nexus",
    role: "Backend Engineer",
    date: "JAN 2026 - AUG 2026",
    text: "Pickup Logistics: shipment APIs, role-based access, Redis-backed verification and background notification workers.",
  },
  {
    company: "Sterling Bank",
    role: "Channel Associate",
    date: "MAY 2023 - OCT 2025",
    text: "Daily banking operations gave me firsthand experience of the people, processes and data behind financial software.",
  },
];
export default function ProfileSections() {
  return (
    <>
      <section id="about" className="about-section">
        <div className="shell about-grid">
          <div>
            <p className="eyebrow">02 / THE PERSON BEHIND THE SYSTEMS</p>
            <h2>
              Close to the code.
              <br />
              Closer to the
              <br />
              <span>problem.</span>
            </h2>
          </div>
          <div className="about-copy">
            <p className="large-copy">
              I came to engineering with experience on the other side of
              financial software: using it, depending on it, and seeing what
              happens when it gets in the way.
            </p>
            <p>
              Today, I build across applied AI and backend engineering. I
              connect models to real workflows, make the outputs inspectable,
              and handle the infrastructure needed to put the result in people’s
              hands.
            </p>
            <p>
              That work has taken me from finance automation to browser agents
              and accessible-learning prototypes. The common thread is
              understanding the problem well enough to build something useful.
            </p>
            <div className="about-facts">
              <span>LAGOS, NIGERIA</span>
              <span>
                B.ENG. COMPUTER ENGINEERING
                <br />
                FUT MINNA
              </span>
            </div>
          </div>
        </div>
      </section>
      <section id="experience" className="experience-section shell">
        <div className="section-intro">
          <div>
            <p className="eyebrow">03 / EXPERIENCE</p>
            <h2>
              Where I’ve
              <br />
              put it to work.
            </h2>
          </div>
          <a
            className="text-link"
            href="/Wisdom_Ojochegbe_Shaibu_Resume.pdf"
            download
          >
            Download the full resume ↓
          </a>
        </div>
        <div className="experience-list">
          {roles.map((r) => (
            <article key={r.company}>
              <span className="micro">{r.date}</span>
              <div>
                <h3>{r.company}</h3>
                <span className="role-label">{r.role}</span>
              </div>
              <p>{r.text}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="capabilities shell">
        <div>
          <p className="eyebrow">04 / TOOLS WITH A PURPOSE</p>
          <h2>
            Across the stack.
            <br />
            Grounded in practice.
          </h2>
        </div>
        <div className="capability-list">
          <div>
            <h3>Applied AI</h3>
            <p>
              Model integration, agents, embeddings, semantic search, video
              processing and evaluation.
            </p>
            <small>
              Python · SignCLIP · Claude · Gemini · Whisper · Playwright
            </small>
          </div>
          <div>
            <h3>Backend systems</h3>
            <p>
              APIs, data models, queues, authentication, reconciliation and
              recovery.
            </p>
            <small>
              TypeScript · Node.js · FastAPI · C# / .NET · PostgreSQL · Redis
            </small>
          </div>
          <div>
            <h3>Cloud & delivery</h3>
            <p>
              Deployments, containers, infrastructure as code and repeatable
              delivery workflows.
            </p>
            <small>AWS · Azure · Docker · Terraform · GitHub Actions</small>
          </div>
        </div>
      </section>
      <section className="certifications shell">
        <div>
          <p className="eyebrow">SELECTED CREDENTIALS</p>
          <h2>
            Practice, backed
            <br />
            by study.
          </h2>
        </div>
        <div className="cert-list">
          <a
            href="https://learn.microsoft.com/en-us/users/wisdomojochegbeshaibu-3520/credentials/certification/devops-engineer?tab=credentials-tab"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Microsoft Certified: DevOps Engineer Expert</span>
            <small>2026 ↗</small>
          </a>
          {[
            ["Azure AI Engineer Associate", "2026"],
            ["Identity and Access Administrator Associate", "2026"],
            ["Azure Developer Associate", "2025"],
            ["Kubernetes and Cloud Native Associate", "2025"],
          ].map(([name, year]) => (
            <div key={name}>
              <span>{name}</span>
              <small>{year}</small>
            </div>
          ))}
          <details>
            <summary>Additional credentials</summary>
            <p>
              Azure AI Fundamentals · Azure Fundamentals · GitHub Foundations ·
              Foundational C# with Microsoft
            </p>
          </details>
        </div>
      </section>
    </>
  );
}
