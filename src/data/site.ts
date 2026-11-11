export const profile = {
  name: "Abdullah Al Fahad",
  handle: "shahed1475",
  role: "Software engineer · AI automation & full-stack",
  github: "https://github.com/shahed1475",
  avatar: "https://github.com/shahed1475.png?size=240",
  email: "shahedalfahad19@gmail.com",
  phone: "+8801879574874",
  phoneDisplay: "+880 1879 574874",
  linkedin: "https://www.linkedin.com/in/abdullah-al-fahad-sarkar-4b1a5b424/",
};

export type CaseStudy = {
  index: string;
  title: string;
  kicker: string;
  summary: string;
  points: string[];
  stack: string[];
  repo?: string;
  flowLabel?: string;
  flow?: string[];
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
    flowLabel: "Pipeline",
    flow: ["Script", "Voice", "Footage", "Render", "Review", "Upload"],
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
    flowLabel: "Pipeline",
    flow: ["Discover", "Research", "Deduplicate", "Export"],
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
    flowLabel: "Pipeline",
    flow: ["Tagged suites", "Docker services", "Security scan", "Allure report"],
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
    flowLabel: "Data model",
    flow: ["Documents", "Versions", "Clauses", "Obligations", "Templates"],
  },
  { index: "05", title: "AI Bot Visit Tracker", kicker: "AI crawler analytics middleware", summary: "Drop-in middleware for Node.js, Flask, Django and PHP that detects and logs visits from AI bots such as GPTBot, ClaudeBot and Gemini, and shows which pages they read.", points: ["Recognises 20+ AI user agents and classifies each request as indexing or retrieval.", "One schema across SQLite, MySQL and PostgreSQL, with asynchronous logging, stats endpoints and CSV or JSON export.", "Examples and test scripts for every framework, so it drops into an existing app in minutes."], stack: ["Node.js", "Python", "PHP", "SQL"], repo: "https://github.com/shahed1475/ai-bot-visit-tracker", flowLabel: "Pipeline", flow: ["Request", "Detect bot", "Classify", "Log", "Analytics"] },
];

export const moreWork = [
  { title: "AutoLead Manager (live)", text: "Sales growth dashboard for lead discovery, email campaigns and pipeline tracking. Live frontend demo; the Python backend runs on a server.", stack: "React · Vite · Python", repo: "https://autolead-manager.pages.dev/" },
{ title: "Inno-AI (live)", text: "Ingredient compliance checker for EU and US food additive rules with substitution ideas. Runs on a Cloudflare Worker with a D1 SQLite database.", stack: "TypeScript · Cloudflare Workers · D1", repo: "https://inno-ai.shahedalfahad19.workers.dev/" },
  {
    title: "AI Content Repurposer",
    text: "FastAPI and React app that turns video and audio into transcripts, summaries, captions and subtitles.",
    stack: "FastAPI · React · TypeScript",
    repo: "https://github.com/shahed1475/AI-Content-Repurposer",
  },
  {
    title: "ContentOps AI",
    text: "Content operations platform with a backend API and a dashboard, run with Docker Compose.",
    stack: "TypeScript · Docker Compose",
    repo: "https://github.com/shahed1475/ContentOps-AI",
  },
  {
    title: "PromptOS Video",
    text: "Natural-language video editing, with its design system and Next.js foundation in place.",
    stack: "Next.js · Prisma · FFmpeg",
    repo: "https://github.com/shahed1475/ollA",
  },
  {
    title: "Veyra",
    text: "Python pipeline that analyses a reference video and recreates it, with planning and implementation docs.",
    stack: "Python · Video analysis",
    repo: "https://github.com/shahed1475/Veyra",
  },
  {
    title: "Lead Harvester",
    text: "Python toolkit for harvesting and organising business leads.",
    stack: "Python",
    repo: "https://github.com/shahed1475/LEAD_HARVESTER",
  },
  {
    title: "POS Software",
    text: "Point-of-sale web app for products, sales and checkout.",
    stack: "Next.js · Prisma · Tailwind",
    repo: "https://github.com/shahed1475/Pos-software",
  },
  {
    title: "Software Agency Portal",
    text: "Agency website with a client portal and admin panel, plus an AI worker that researches companies and drafts outreach.",
    stack: "React · Supabase · Vite",
    repo: "https://github.com/shahed1475/software-agency-portal",
  },
  {
    title: "PopupGenix Website",
    text: "Marketing site built with React, TypeScript and Supabase.",
    stack: "React · Supabase · Tailwind",
    repo: "https://github.com/shahed1475/popupgenix-website",
  },
];

export const privateWork = [
  { title: "Visa Application Assistant", text: "Local-first assistant that organises application documents and helps fill a configurable portal form under the user's control. It never submits and never bypasses CAPTCHA or OTP.", stack: "TypeScript · Fastify · Playwright · SQLite" },
  {
    title: "Jobbot",
    text: "Finds jobs, tailors a country-styled resume PDF for each one, lists the skills you are missing and emails a digest. Nothing is submitted on your behalf.",
    stack: "Python · MCP server",
  },
  {
    title: "forge",
    text: "Autonomous coding agent for the terminal. Works with local Ollama models and paid OpenAI-compatible models.",
    stack: "Python · Ollama",
  },
];

export const tools = [
  "Python", "TypeScript", "FastAPI", "Playwright", "Supabase", "Docker",
  "Next.js", "React", "PostgreSQL", "Ollama", "ffmpeg", "SQLite",
];

export const principles = [
  {
    title: "Guardrails before features",
    text: "Lead Finder and Jobbot document hard limits up front. Studio's autopilot is off until a person turns it on.",
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
