export const profile = {
  name: "Abdullah Al Fahad",
  handle: "shahed1475",
  role: "Software engineer · AI automation & full-stack",
  github: "https://github.com/shahed1475",
  avatar: "https://github.com/shahed1475.png?size=240",
  // Add these to show them in the contact section:
  email: "",
  linkedin: "",
};

export type CaseStudy = {
  index: string;
  title: string;
  kicker: string;
  summary: string;
  points: string[];
  stack: string[];
  repo: string;
};

export const caseStudies: CaseStudy[] = [
  {
    index: "01",
    title: "Studio",
    kicker: "Autonomous YouTube channel",
    summary:
      "A local-first pipeline that writes, voices, renders, reviews and uploads videos, with an always-on Docker worker behind a control dashboard.",
    points: [
      "Ollama writes the script, edge-tts narrates it, Pexels supplies footage and ffmpeg renders 1080×1920 Shorts with word-timed captions.",
      "A reviewer agent blocks a video on bad files, repeated lines, duplicate titles or risky claims before anything is scheduled.",
      "Autopilot ships switched off. Hold, publish slots and daily upload limits keep a human in control.",
    ],
    stack: ["Python", "Ollama", "ffmpeg", "YouTube Data API", "Docker"],
    repo: "https://github.com/shahed1475/Studio",
  },
  {
    index: "02",
    title: "Lead Finder",
    kicker: "Public-business lead intelligence",
    summary:
      "Give it an industry, a city and a target count. It discovers businesses from public results, researches their public sites and returns a deduplicated, exportable lead list.",
    points: [
      "Playwright drives public pages; SQLite is the source of truth; leads are tracked over time and exported to CSV or XLSX.",
      "Each lead gets a Sales Intelligence Report. A provider-agnostic AI client plans, but Python executes, validates and deduplicates.",
      "A written safety scope rules out credentials, private data and CAPTCHA or anti-bot bypass at every stage.",
    ],
    stack: ["Python", "FastAPI", "Playwright", "SQLite"],
    repo: "https://github.com/shahed1475/Advance-lead-generation",
  },
  {
    index: "03",
    title: "Software Testing AI",
    kicker: "Test automation framework",
    summary:
      "A Playwright-based framework that treats testing as infrastructure: tagged suites, containerised services, security scans and readable reports.",
    points: [
      "Cross-browser and mobile-simulated runs, with API and visual-regression checks.",
      "Tag-driven suites (@smoke, @regression, @security, @accessibility) running on Docker Compose with Selenium Grid.",
      "OWASP ZAP scanning, Allure reports and Grafana/Prometheus monitoring wired in.",
    ],
    stack: ["Python", "Playwright", "Docker", "Allure", "OWASP ZAP"],
    repo: "https://github.com/shahed1475/Software-testing-Ai",
  },
  {
    index: "04",
    title: "DealDoc AI",
    kicker: "Contract management platform",
    summary:
      "The database and backend foundation for an AI-assisted contract system, designed around tenant isolation from the first table.",
    points: [
      "Multi-tenant PostgreSQL on Supabase with row-level security so every organisation only ever sees its own data.",
      "pgvector embeddings for clause search, JWT auth and realtime subscriptions.",
      "Documents, versions, clauses, obligations and templates modelled end to end.",
    ],
    stack: ["Supabase", "PostgreSQL", "pgvector", "TypeScript"],
    repo: "https://github.com/shahed1475/DealDoc-AI",
  },
];

export const moreWork = [
  {
    title: "AI Content Repurposer",
    text: "FastAPI and React app that turns video and audio into transcripts, summaries, captions and subtitles.",
    stack: "FastAPI · React · TypeScript",
    repo: "https://github.com/shahed1475/AI-Content-Repurposer",
  },
  {
    title: "PromptOS Video",
    text: "Natural-language video editing, with its design system and Next.js foundation in place.",
    stack: "Next.js · Prisma · FFmpeg",
    repo: "https://github.com/shahed1475/ollA",
  },
  {
    title: "Visa Application Autofill",
    text: "Local-first assistant that organises an application. It never submits and never bypasses CAPTCHA, OTP or MFA.",
    stack: "TypeScript · Fastify · Playwright",
    repo: "https://github.com/shahed1475/Visa-application-automation",
  },
  {
    title: "POS Software",
    text: "Point-of-sale web app for products, sales and checkout.",
    stack: "Next.js · Prisma · Tailwind",
    repo: "https://github.com/shahed1475/Pos-software",
  },
  {
    title: "Nebula Hub Core",
    text: "React and Supabase web app with a background worker.",
    stack: "React · Supabase · Vite",
    repo: "https://github.com/shahed1475/nebula-hub-core",
  },
  {
    title: "PopupGenix Website",
    text: "Marketing site built with React, TypeScript and Supabase.",
    stack: "React · Supabase · Tailwind",
    repo: "https://github.com/shahed1475/popupgenix-website",
  },
];

export const principles = [
  {
    title: "Guardrails before features",
    text: "Lead Finder and the visa assistant document hard limits up front. Studio's autopilot is off until a person turns it on.",
  },
  {
    title: "Models plan, code decides",
    text: "AI sits behind a typed boundary. Validation, deduplication and evidence stay in ordinary, testable code.",
  },
  {
    title: "Local-first, portable",
    text: "SQLite, loopback-only APIs and Docker for the always-on path. Secrets never enter git.",
  },
  {
    title: "Checked before shipped",
    text: "Reviewer agents, Playwright suites and phase-by-phase builds catch problems before users do.",
  },
];

export const stack = [
  { group: "Languages", items: ["Python", "TypeScript", "JavaScript", "SQL"] },
  { group: "Backend & data", items: ["FastAPI", "Fastify", "PostgreSQL", "Supabase", "SQLite", "Prisma"] },
  { group: "Frontend", items: ["React", "Next.js", "Vite", "Tailwind CSS", "Framer Motion"] },
  { group: "Automation & AI", items: ["Playwright", "Ollama", "ffmpeg", "LLM tool-calling", "pgvector"] },
  { group: "Delivery", items: ["Docker", "GitHub Actions", "OWASP ZAP", "Allure"] },
];
