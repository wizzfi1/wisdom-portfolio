export default function ProjectVisual({ slug }: { slug: string }) {
  if (slug === "recon-engine")
    return (
      <div
        className="project-art recon-art"
        aria-label="Illustration of the reconciliation workflow"
      >
        <span className="art-label">RECON / WORKFLOW ILLUSTRATION</span>
        <div className="recon-sheet">
          <div className="sheet-heading">
            <b>Reconciliation</b>
            <span>REPORT PREPARATION</span>
          </div>
          {[
            "Load & validate",
            "Net & match",
            "Prepare review",
            "Write report",
          ].map((x, i) => (
            <div className="sheet-row" key={x}>
              <span>0{i + 1}</span>
              <strong>{x}</strong>
              <span>↗</span>
            </div>
          ))}
        </div>
        <div className="time-stamp">
          <small>REPORT GENERATION</small>
          <strong>
            &lt;5<span>min</span>
          </strong>
          <span>Then human review.</span>
        </div>
      </div>
    );
  if (slug === "awekik")
    return (
      <div
        className="project-art awekik-art"
        aria-label="Illustration of AweKik model and motion pipeline"
      >
        <span className="art-label">AWEKIK / FROM VIDEO TO MOTION</span>
        <div className="motion-frames">
          {[0, 1, 2, 3, 4].map((i) => (
            <div className="motion-frame" key={i}>
              <span>0{i + 1}</span>
              <div className="pose">
                <i className="pose-head" />
                <i className="pose-body" />
                <i
                  className="pose-arm left"
                  style={{ transform: `rotate(${i * 18 - 36}deg)` }}
                />
                <i
                  className="pose-arm right"
                  style={{ transform: `rotate(${-i * 18 + 36}deg)` }}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="motion-caption">
          <b>
            Meaning.
            <br />
            Motion.
            <br />
            Connection.
          </b>
          <span>
            MODEL INTEGRATION
            <br />
            AVATAR PLAYBACK
            <br />
            HUMAN EVALUATION
          </span>
        </div>
        <span className="art-note">
          Pipeline illustration, not a validated signing sequence.
        </span>
      </div>
    );
  if (slug === "qa-workflows")
    return (
      <div className="project-art qa-art">
        <span className="art-label">QA / EXECUTION PATHS</span>
        <div className="qa-flow">
          <span>Testing guide</span>
          <div>
            <b>Generated tests</b>
            <b>Browser agent</b>
          </div>
          <span>Evidence + report</span>
        </div>
        <span className="art-note">
          Bounded execution. Inspectable outcomes.
        </span>
      </div>
    );
  if (slug === "wiyanos")
    return (
      <div className="project-art search-art">
        <span className="art-label">WIYANOS / SEARCH PIPELINE</span>
        <div className="search-prompt">“I need an electrician nearby”</div>
        <div className="search-route">
          <span>Normalize</span>
          <i>→</i>
          <span>Retrieve</span>
          <i>→</i>
          <span>Rank</span>
        </div>
        <div className="search-result">
          <div className="result-mark">W</div>
          <div>
            <b>Meaning meets location.</b>
            <span>Semantic relevance + geographic proximity</span>
          </div>
        </div>
        <span className="art-note">
          Illustrative query, not a live search result.
        </span>
      </div>
    );
  return (
    <div className="project-art failure-art">
      <span className="art-label">FAILURELAB / RECOVERY BY DESIGN</span>
      <div className="retry-stack">
        <span>event_001 ↘</span>
        <span>event_001 →</span>
        <span>event_001 ↗</span>
      </div>
      <div className="one-effect">
        <strong>01</strong>
        <span>FULFILLMENT</span>
      </div>
      <span className="art-note">Repeated delivery. One intended effect.</span>
    </div>
  );
}
