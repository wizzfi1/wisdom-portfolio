import PortfolioNav from "@/components/PortfolioNav";
import SystemStudio from "@/components/SystemStudio";
import SelectedWork from "@/components/SelectedWork";
import ProfileSections from "@/components/ProfileSections";
import PortfolioFooter from "@/components/PortfolioFooter";
export default function Home() {
  return (
    <>
      <PortfolioNav />
      <main id="main">
        <section className="hero shell">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="status-dot" /> APPLIED AI & BACKEND ENGINEER
            </p>
            <h1>
              From model
              <br />
              to working
              <br />
              <span>product.</span>
            </h1>
            <p className="hero-intro">
              I’m Wisdom. I build AI workflows and the backend systems that make
              them useful in the real world.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#work">
                Explore my work ↘
              </a>
              <a
                className="text-link"
                href="/Wisdom_Ojochegbe_Shaibu_Resume.pdf"
              >
                Get my resume ↗
              </a>
            </div>
            <div className="hero-footnote">
              <span>BASED IN LAGOS, NIGERIA</span>
              <span>OPEN TO OPPORTUNITIES</span>
            </div>
          </div>
          <SystemStudio />
        </section>
        <div id="work" className="proof-strip shell">
          <div>
            <strong>&lt;5 min</strong>
            <span>
              Recon report generation
              <br />
              Previously 2–4 hours manually*
            </span>
          </div>
          <div>
            <strong>AI → AWS</strong>
            <span>
              AweKik AI ownership,
              <br />
              avatar integration and deployment
            </span>
          </div>
          <div>
            <strong>Built to be checked.</strong>
            <span>
              Model evaluation, automated tests
              <br />
              and failure-recovery experiments
            </span>
          </div>
        </div>
        <p className="proof-note shell">
          *Reported Greenwich finance workflow; light review follows report
          generation.
        </p>
        <SelectedWork />
        <ProfileSections />
      </main>
      <PortfolioFooter />
    </>
  );
}
