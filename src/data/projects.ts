export type Project = {
  slug: string;
  name: string;
  category: string;
  role: string;
  status: string;
  headline: string;
  summary: string;
  outcome: string;
  stack: string[];
  source?: string;
  privateSource?: boolean;
  challenge: string;
  decisions: { title: string; body: string }[];
  result: string;
  boundary: string;
};
export const projects: Project[] = [
  {
    slug: "recon-engine",
    name: "Recon Engine",
    category: "FINANCIAL AUTOMATION",
    role: "Developer at Greenwich",
    status: "Used by Greenwich finance",
    headline: "Hours of reconciliation. Minutes to a report.",
    summary:
      "A Python reconciliation workflow that gives the finance team a clear starting point for review.",
    outcome: "Under 5 minutes to generate reports",
    stack: ["Python", "Pandas", "Desktop GUI", "Excel"],
    source: "https://github.com/wizzfi1/recon-engine",
    challenge:
      "Greenwich’s finance department previously spent roughly two to four hours on a manual reconciliation. The goal was to automate the repetitive processing and give the team reviewable outputs.",
    decisions: [
      {
        title: "Make the workflow explicit",
        body: "Separated loading, validation, netting, matching, review and report writing into stages so each part of reconciliation could be inspected and maintained.",
      },
      {
        title: "Design for the people doing the work",
        body: "Packaged the workflow in a desktop interface with background processing, progress feedback and cancellation, instead of requiring the finance team to run scripts.",
      },
      {
        title: "Keep review in the process",
        body: "Produced Excel reports for human review and confirmation. Automation prepares the evidence; the team retains the decision.",
      },
    ],
    result:
      "The finance workflow I supported produces reports in under five minutes for files processed by the team, followed by light review. This timing is operational experience reported by the team, not a published benchmark or a guarantee for arbitrary file sizes.",
    boundary:
      "The public repository is a development snapshot. A recent code review identified a matching edge case that needs correction and a committed merge conflict. Repository completeness is not a claim that every reconciliation case is handled.",
  },
  {
    slug: "awekik",
    name: "AweKik",
    category: "MULTIMODAL AI",
    role: "AI engineering owner, team project",
    status: "Research prototype",
    headline: "Making accessible learning a system we can build on.",
    summary:
      "Signing-video processing, avatar motion integration and cloud delivery for a maths-learning prototype.",
    outcome: "AI engineering, avatar integration and AWS",
    stack: ["Python", "SignCLIP", "Gemini", "TypeScript", "AWS"],
    source: "https://github.com/chocolaid/easelearn",
    privateSource: true,
    challenge:
      "Deaf learners need accessible explanations they can revisit independently. Our team explored reusable signing and avatar lessons for a supported set of maths topics.",
    decisions: [
      {
        title: "Integrate the model with traceability",
        body: "Integrated the pretrained SignCLIP encoder to produce 768-dimensional video embeddings. Checkpoint verification, input constraints and preprocessing metadata make comparisons reproducible.",
      },
      {
        title: "Connect signing to the avatar",
        body: "Worked on getting the avatar to follow signing movements and coordinate gesture sequences with lesson playback. The maths compiler uses parsing, teaching rules and reusable animation assets.",
      },
      {
        title: "Constrain what the model can decide",
        body: "Built a separate Gemini planning integration with structured outputs and local capability checks. Application code controls supported content and mathematical checks.",
      },
      {
        title: "Audit before scaling the data",
        body: "Built an AI-assisted audit of 50 recordings and 9,000 sampled motion frames. It exposed whole-passage transcripts and cases where motion extraction followed the listener instead of the signer.",
      },
      {
        title: "Deliver the integrated prototype",
        body: "Handled AWS Lightsail and CloudFront deployment, updates and backups. The demonstration infrastructure was subsequently retired.",
      },
    ],
    result:
      "Delivered a working prototype and a documented dataset audit, including a shortlist for alignment experiments. My ownership covered AI engineering, avatar integration work and cloud deployment within the team.",
    boundary:
      "SignCLIP embeddings are not translations. General sentence translation and signing intelligibility have not been established through independent fluent-signer evaluation. The former AWS demo is offline.",
  },
  {
    slug: "qa-workflows",
    name: "AI-assisted QA",
    category: "AGENTS & AUTOMATION",
    role: "AI Engineer at VettedAI",
    status: "Professional work",
    headline: "Turn a testing guide into an inspectable run.",
    summary:
      "Generated test scripts and browser agents, with controlled execution and structured evidence.",
    outcome: "Two complementary execution paths",
    stack: ["Playwright", "Node.js", "NVIDIA NIM", "Gemini", "GitHub Actions"],
    challenge:
      "Turning a written testing guide into repeatable browser checks requires more than asking a model to click around. Authentication, test data, execution limits and interpretable results all matter.",
    decisions: [
      {
        title: "Use two execution paths",
        body: "Built a generated-script path for executable QA checks and a browser-action agent path. The current agent observes textual accessibility-tree information and captures screenshots as evidence.",
      },
      {
        title: "Control the run",
        body: "Added bounded execution, reusable authenticated sessions, fixtures and model-provider fallbacks. Failure handling matters as much as the happy path.",
      },
      {
        title: "Make results reviewable",
        body: "Produced structured reports and comparisons against saved baseline outcomes. These are result comparisons rather than replay of recorded browser actions.",
      },
      {
        title: "Connect it to delivery",
        body: "Integrated webhook-driven and dispatch-based GitHub Actions workflows. The implementation does not imply that every pull request automatically triggers a run.",
      },
    ],
    result:
      "Built the application plumbing that connects model decisions to browser execution and reviewable results, while keeping the scope of checks explicit.",
    boundary:
      "Employer code and private test artifacts are not published here. This overview describes architecture and responsibilities, not a universal autonomous testing claim.",
  },
  {
    slug: "wiyanos",
    name: "WIYANOS",
    category: "SEMANTIC SEARCH",
    role: "Backend lead, team project",
    status: "Hackathon prototype",
    headline: "Find the service. Even when the words are different.",
    summary:
      "A service-discovery backend combining language normalization, vector retrieval and geographic relevance.",
    outcome: "Voice and text into ranked provider results",
    stack: ["FastAPI", "Ahnlich", "Claude", "Whisper", "Redis", "PostgreSQL"],
    source: "https://github.com/wizzfi1/wiyanos",
    privateSource: true,
    challenge:
      "Service queries in Nigeria can mix languages and local expressions. A useful search system needs to interpret intent and rank nearby providers, rather than rely on exact keyword matches.",
    decisions: [
      {
        title: "Normalize intent before retrieval",
        body: "Integrated Claude query normalization and Ahnlich vector retrieval, with a similarity floor to filter weak candidates.",
      },
      {
        title: "Combine meaning and location",
        body: "Ranked results using semantic similarity and geographic proximity, then enriched candidates with provider records from PostgreSQL.",
      },
      {
        title: "Support voice and repeated queries",
        body: "Integrated Whisper transcription and Redis caching keyed by normalized query and filters, reducing repeated work for equivalent searches.",
      },
      {
        title: "Package the backend for delivery",
        body: "Worked with containerized services, AWS EC2/ECR, Terraform and GitHub Actions in a team-built application.",
      },
    ],
    result:
      "Delivered the backend search workflow, from text or voice input to ranked providers, with persistence and caching. I primarily owned backend engineering and contributed to the frontend.",
    boundary:
      "No independently substantiated latency or job-completion rate is claimed. The language normalization workflow is implemented; broad multilingual quality requires a larger independent evaluation.",
  },
  {
    slug: "failurelab",
    name: "FailureLab",
    category: "RELIABILITY ENGINEERING",
    role: "Developer",
    status: "Reproducible local demo",
    headline: "Break the payment flow. Then prove the recovery.",
    summary:
      "A controlled environment for duplicate webhooks, delayed delivery and interrupted processing.",
    outcome: "3 failure scenarios. 11 passing backend tests.",
    stack: ["TypeScript", "Express", "SQLite", "React"],
    source: "https://github.com/wizzfi1/failurelab",
    challenge:
      "A payment handler can look successful while leaving duplicate fulfillment or unfinished work in storage. I wanted a demonstrator where failures could be introduced deliberately and outcomes checked independently.",
    decisions: [
      {
        title: "Compare vulnerable and corrected behavior",
        body: "Built duplicate-delivery, delay and crash scenarios with vulnerable and corrected implementations, giving six variants to inspect.",
      },
      {
        title: "Persist the work atomically",
        body: "The corrected path writes the payment and durable job in one transaction. Recovery workers apply idempotent fulfillment so retries do not repeat the effect.",
      },
      {
        title: "Check records, not reassuring messages",
        body: "Outcome checks inspect persisted payment, order and job records. Worker limits and bounded execution keep the experiment controlled.",
      },
    ],
    result:
      "All 11 backend tests passed in the latest local review. The application demonstrates recovery patterns using synthetic payments; its previous AWS demonstration deployment has been retired.",
    boundary:
      "This is a bounded single-host engineering demonstrator. It does not process real payments or claim production-scale payment certification.",
  },
];
export const archive = [
  {
    name: "Pickup Logistics",
    type: "Backend engineering",
    description:
      "Shipment lifecycles, role-based access, Redis OTPs and background email jobs at ArchSaint Nexus.",
    stack: "Node.js / TypeScript / MongoDB / BullMQ",
    href: "https://github.com/wizzfi1/pick-up-api",
    privateSource: true,
  },
  {
    name: "WizFi Microservices",
    type: "Cloud & infrastructure",
    description:
      "A multi-service backend project exploring service boundaries, containers, authentication and operational visibility.",
    stack: "Node.js / Python / Docker / Kubernetes",
    href: "https://github.com/wizzfi1/Wizfi-Microservices",
  },
  {
    name: "Wisdom’s Order Fellow",
    type: "Backend engineering",
    description:
      "Order tracking, onboarding, approval gates and explicit relational order-state transitions.",
    stack: "Node.js / PostgreSQL / WebSockets",
    href: "https://github.com/wizzfi1/Wisdoms_Order_Fellow",
  },
  {
    name: "Full-Stack DevSecOps",
    type: "Cloud & infrastructure",
    description:
      "API development with CI/CD, deployment automation and request monitoring.",
    stack: "Docker / GitHub Actions / Terraform",
    href: "https://github.com/wizzfi1/FullStack_DevSec",
  },
  {
    name: "Wisdom Job Board API",
    type: "Backend engineering",
    description:
      "A modular API with authentication, roles and relational data models.",
    stack: "Express / PostgreSQL / Sequelize",
    href: "https://github.com/wizzfi1/Wisdom14DaysofCodeAndDesign",
  },
];
