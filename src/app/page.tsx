import { Effects } from "@/components/effects";
import { caseStudies, moreWork, principles, profile, stack } from "@/data/site";

const Arrow = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <path d="M3 11 11 3M5 3h6v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function Home() {
  return (
    <>
      <Effects />
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
            <p className="status" data-reveal>
              <img src={profile.avatar} alt="" width={24} height={24} /> <i aria-hidden="true" /> Open to full-time roles and freelance projects
            </p>
            <h1 data-reveal>
              Automation that ships, runs, <em>and checks its own work.</em>
            </h1>
            <div className="hero-row" data-reveal>
              <p className="lede">
                I’m {profile.name}, a software engineer building AI automation pipelines,
                lead-intelligence platforms and full-stack web apps with Python and TypeScript.
              </p>
              <div className="hero-cta">
                <a className="btn primary" href="#work">See the work</a>
                <a className="btn" href={profile.github} target="_blank" rel="noreferrer">
                  GitHub <Arrow />
                </a>
              </div>
            </div>
            <ul className="chips hero-chips" data-reveal aria-label="Core tools">
              {["Python", "TypeScript", "FastAPI", "Playwright", "Supabase", "Docker"].map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
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
              {moreWork.map((m) => (
                <a key={m.title} className="card more" href={m.repo} target="_blank" rel="noreferrer" data-reveal>
                  <div className="more-top">
                    <h4>{m.title}</h4>
                    <Arrow />
                  </div>
                  <p>{m.text}</p>
                  <span className="mono">{m.stack}</span>
                </a>
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
                <div key={p.title} className="principle" data-reveal>
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
            <div className="hero-cta" data-reveal>
              {profile.email && (
                <a className="btn primary" href={"mailto:" + profile.email}>Email me</a>
              )}
              <a
                className={profile.email ? "btn" : "btn primary"}
                href={profile.github}
                target="_blank"
                rel="noreferrer"
              >
                Message on GitHub <Arrow />
              </a>
              {profile.linkedin && (
                <a className="btn" href={profile.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn <Arrow />
                </a>
              )}
            </div>
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
