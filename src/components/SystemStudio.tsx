"use client";
import { useState } from "react";
import Link from "next/link";
const systems = [
  {
    name: "AI workflows",
    title: "From instruction to evidence.",
    source: "Testing guide",
    engine: "Agent + browser",
    output: "Checked results",
    note: "Model orchestration, bounded execution and structured reporting.",
    project: "qa-workflows",
    code: "01 / APPLIED AI",
  },
  {
    name: "Financial tools",
    title: "From hours to a review.",
    source: "Finance records",
    engine: "Recon Engine",
    output: "Reviewable reports",
    note: "Under five minutes to generate reports, followed by human review.",
    project: "recon-engine",
    code: "02 / BACKEND SYSTEMS",
  },
  {
    name: "Reliability",
    title: "One event. One intended effect.",
    source: "Repeated event",
    engine: "Transaction + job",
    output: "One fulfillment",
    note: "Explore duplicate delivery and recovery in FailureLab.",
    project: "failurelab",
    code: "03 / RELIABILITY",
  },
];
export default function SystemStudio() {
  const [active, setActive] = useState(0);
  const s = systems[active];
  return (
    <div className="system-studio">
      <div className="studio-top">
        <span className="micro">SYSTEM EXPLORER</span>
        <span className="micro">SELECT A PATH ↓</span>
      </div>
      <div className="studio-selector" aria-label="Explore my engineering work">
        {systems.map((item, i) => (
          <button
            key={item.name}
            aria-pressed={active === i}
            onClick={() => setActive(i)}
          >
            {item.name}
          </button>
        ))}
      </div>
      <div className="system-drawing" aria-hidden="true">
        <div className="orbit orbit-one" />
        <div className="orbit orbit-two" />
        <div className="orbit orbit-three" />
        <div className="system-core">
          <span>w.</span>
          <small>
            ENGINEERED
            <br />
            TO CONNECT
          </small>
        </div>
        <div className="signal-node input-node">
          <i>IN</i>
          <span>{s.source}</span>
        </div>
        <div className="signal-node model-node">
          <i>RUN</i>
          <span>{s.engine}</span>
        </div>
        <div className="signal-node output-node">
          <i>OUT</i>
          <span>{s.output}</span>
        </div>
        <span className="drawing-coordinate coord-one">x / 06.5244</span>
        <span className="drawing-coordinate coord-two">LAGOS → EVERYWHERE</span>
      </div>
      <div className="studio-caption" aria-live="polite">
        <span className="micro">{s.code}</span>
        <h2>{s.title}</h2>
        <p>{s.note}</p>
        <Link href={`/work/${s.project}`}>Explore the system ↗</Link>
      </div>
      <span className="studio-disclaimer">
        Architecture illustration, not a live service monitor.
      </span>
    </div>
  );
}
