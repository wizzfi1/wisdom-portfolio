export default function PortfolioFooter() {
  return (
    <footer id="contact" className="contact-section">
      <div className="shell">
        <div className="contact-top">
          <span className="eyebrow">HAVE A PROBLEM WORTH SOLVING?</span>
          <span className="micro">OPEN TO OPPORTUNITIES</span>
        </div>
        <a className="contact-title" href="mailto:shaibuwisdom@gmail.com">
          Let’s build
          <br />
          something useful<span>↗</span>
        </a>
        <div className="contact-bottom">
          <a href="mailto:shaibuwisdom@gmail.com">shaibuwisdom@gmail.com</a>
          <div>
            <a
              href="https://github.com/wizzfi1"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub ↗
            </a>
            <a
              href="https://www.linkedin.com/in/wisdom-shaibu-tech/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn ↗
            </a>
            <a href="/Wisdom_Ojochegbe_Shaibu_Resume.pdf">Resume ↗</a>
          </div>
        </div>
        <div className="colophon">
          <span>© {new Date().getFullYear()} Wisdom Shaibu</span>
          <span>APPLIED AI / BACKEND / CLOUD</span>
          <a href="#main">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}
