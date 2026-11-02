import { Fragment, type CSSProperties, type ReactNode } from "react";
import "./experience.css";
import { Effects } from "@/components/effects";
import { caseStudies, moreWork, principles, privateWork, profile, stack, tools } from "@/data/site";

const Arrow = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <path d="M3 11 11 3M5 3h6v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const delay = (i: number, step = 70) => ({ "--d": String(i * step) + "ms" }) as CSSProperties;

function Word({ i, children }: { i: number; children: ReactNode }) {
  return (
    <span className="w">
      <span style={{ "--i": String(i) } as CSSProperties}>{children}</span>
    </span>
  );
}

const popupgenix = ["Custom software", "AI sales agents", "Lead generation", "POS and commerce", "Process automation"];

const lead = ["Automation", "that", "ships,", "runs,"];
const tail = ["and", "checks", "its", "own", "work."];

const contacts = [
  { label: "Email", value: profile.email, href: "mailto:" + profile.email, external: false },
  { label: "Phone", value: profile.phoneDisplay, href: "tel:" + profile.phone, external: false },
  { label: "LinkedIn", value: "Abdullah Al Fahad", href: profile.linkedin, external: true },
  { label: "GitHub", value: "github.com/" + profile.handle, href: profile.github, external: true },
];

export default function Home() {
  return (
    <>
      <Effects />
      <div className="progress" aria-hidden="true" />
      <a className="skip" href="#work">Skip to work</a>

      <header className="nav">
        <div className="wrap nav-in">
          <a href="#top" className="mark" aria-label="Home">AF<span>.</span></a>
          <nav aria-label="Primary">
            <a href="#work">Work</a>
            <a href="#approach">Approach</a>
            <a href="#stack">Stack</a>
            <a href="#contact" className="pill">Contact</a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="wrap">
            <p className="status intro">
              <img src={profile.avatar} alt="" width={24} height={24} /> <i aria-hidden="true" /> Open to full-time roles and freelance projects
            </p>
            <h1>
              {lead.map((t, i) => (
                <Fragment key={t}>
                  <Word i={i}>{t}</Word>{" "}
                </Fragment>
              ))}
              <em>
                {tail.map((t, i) => (
                  <Fragment key={t}>
                    <Word i={lead.length + i}>{t}</Word>
                    {i < tail.length - 1 ? " " : ""}
                  </Fragment>
                ))}
              </em>
            </h1>
            <div className="hero-row intro late">
              <p className="lede">
                I’m {profile.name}, founder of PopupGenix and a software engineer building AI
                automation pipelines, lead-intelligence platforms and full-stack web apps with
                Python and TypeScript.
              </p>
              <div className="hero-cta">
                <a className="btn primary" href="#work">See the work</a>
                <a className="btn" href="#contact">Contact me</a>
              </div>
            </div>
            <div className="marquee intro late" role="group" aria-label="Core tools">
              <ul className="marquee-track">
                {tools.map((t) => (
                  <li key={t}>{t}</li>
                ))}
                {tools.map((t) => (
                  <li key={t + "-copy"} aria-hidden="true">{t}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="experience" className="section exp">
          <div className="wrap">
            <header className="sec-head" data-reveal>
              <p className="eyebrow">Experience</p>
              <h2>Founder, building software for businesses.</h2>
            </header>
            <div className="exp-item" data-reveal>
              <div className="exp-when">
                <span className="mono">Mar 2024 – Present</span>
                <span className="exp-place">PopupGenix</span>
              </div>
              <div className="exp-main">
                <h3>Founder &amp; Chief Executive Officer</h3>
                <p>
                  Founded PopupGenix to build custom software, AI sales agents and automation for
                  businesses. Projects include lead-generation systems, AI customer-facing agents,
                  POS and multivendor commerce platforms, and process automation.
                </p>
                <ul className="chips">
                  {popupgenix.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="work" className="section">
          <div className="wrap">
            <header className="sec-head" data-reveal>
              <p className="eyebrow">Selected work</p>
              <h2>Four systems, built end to end.</h2>
            </header>

            <div className="cases">
              {caseStudies.map((c) => (
                <article key={c.title} className="card case" data-reveal>
                  <div className="case-side">
                    <span className="num">{c.index}</span>
                    <h3>{c.title}</h3>
                    <p className="kicker">{c.kicker}</p>
                    <ul className="chips">
                      {c.stack.map((s) => (
                        <li key={s}>{s}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="case-main">
                    <p className="summary">{c.summary}</p>
                    <ul className="points">
                      {c.points.map((p) => (
                        <li key={p}>{p}</li>
                      ))}
                    </ul>
                    <a className="link" href={c.repo} target="_blank" rel="noreferrer">
                      View source <Arrow />
                    </a>
                  </div>
                </article>
              ))}
            </div>

            <h3 className="sub" data-reveal>More projects</h3>
            <div className="grid-more">
              {moreWork.map((m, i) => (
                <a key={m.title} className="card more" href={m.repo} target="_blank" rel="noreferrer" data-reveal style={delay(i % 4)}>
                  <div className="more-top">
                    <h4>{m.title}</h4>
                    <Arrow />
                  </div>
                  <p>{m.text}</p>
                  <span className="mono">{m.stack}</span>
                </a>
              ))}
            </div>

            <h3 className="sub" data-reveal>Private builds</h3>
            <div className="grid-private">
              {privateWork.map((m, i) => (
                <div key={m.title} className="card more private" data-reveal style={delay(i)}>
                  <div className="more-top">
                    <h4>{m.title}</h4>
                    <span className="tag">Private repository</span>
                  </div>
                  <p>{m.text}</p>
                  <span className="mono">{m.stack}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="approach" className="section alt">
          <div className="wrap">
            <header className="sec-head" data-reveal>
              <p className="eyebrow">Approach</p>
              <h2>How I build things that last.</h2>
            </header>
            <div className="principles">
              {principles.map((p, i) => (
                <div key={p.title} className="principle" data-reveal style={delay(i)}>
                  <span className="mono">0{i + 1}</span>
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="stack" className="section">
          <div className="wrap">
            <header className="sec-head" data-reveal>
              <p className="eyebrow">Stack</p>
              <h2>Tools I reach for.</h2>
            </header>
            <dl className="stack">
              {stack.map((g) => (
                <div key={g.group} className="stack-row" data-reveal>
                  <dt>{g.group}</dt>
                  <dd>
                    <ul className="chips">
                      {g.items.map((i) => (
                        <li key={i}>{i}</li>
                      ))}
                    </ul>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section id="contact" className="section contact">
          <div className="wrap">
            <p className="eyebrow" data-reveal>Contact</p>
            <h2 className="big" data-reveal>
              Let’s build something<br /><em>that runs on its own.</em>
            </h2>
            <ul className="contact-list">
              {contacts.map((c, i) => (
                <li key={c.label} data-reveal style={delay(i, 80)}>
                  <a
                    className="contact-item"
                    href={c.href}
                    {...(c.external ? { target: "_blank", rel: "noreferrer" } : {})}
                  >
                    <span className="c-label">{c.label}</span>
                    <span className="c-value">{c.value}</span>
                    <Arrow />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      <footer className="foot">
        <div className="wrap foot-in">
          <span>© {new Date().getFullYear()} {profile.name}</span>
          <a href={profile.github} target="_blank" rel="noreferrer">github.com/{profile.handle}</a>
        </div>
      </footer>
    </>
  );
}
