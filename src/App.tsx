import { useEffect, useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  Check,
  Code2,
  Copy,
  Database,
  FileCode2,
  GitBranch,
  Mail,
  Moon,
  Printer,
  Sun,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import "@fontsource-variable/inter";
import "@fontsource/instrument-serif/latin-400.css";
import "@fontsource/instrument-serif/latin-400-italic.css";
import "./App.css";
function Github({ size = 17 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <path
        d="M9 19c-4 1-4-2-6-2m12 5v-4a3.5 3.5 0 0 0-1-2.7c3.3-.4 6.8-1.6 6.8-7.3a5.7 5.7 0 0 0-1.5-4 5.3 5.3 0 0 0-.1-4s-1.2-.4-4.2 1.5a14.5 14.5 0 0 0-7.6 0C4.4-.4 3.2 0 3.2 0a5.3 5.3 0 0 0-.1 4 5.7 5.7 0 0 0-1.5 4c0 5.7 3.5 6.9 6.8 7.3A3.5 3.5 0 0 0 7.5 18v4"
        transform="translate(1 1) scale(.9)"
      />
    </svg>
  );
}
function Linkedin({ size = 17 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M7 10v7M7 7v.01M11 17v-7m0 3c0-4 6-4 6 0v4" />
    </svg>
  );
}
const email = "a6prabah@uwaterloo.ca";
const jobs = [
  {
    company: "Samsung",
    role: "AI Developer Co-op",
    date: "Sep 2026 to present",
    summary:
      "Building AI workflows that turn complex information into useful tools.",
    bullets: [
      "Engineered 6 Python/FastAPI workflows with SQL and REST APIs, reducing manual processing time by 65%.",
      "Built a RAG pipeline across 2,500+ documents, achieving 91% retrieval accuracy using vector search.",
      "Optimizing asynchronous APIs with Redis caching and concurrent processing to reduce p95 latency.",
      "Developing React components and FastAPI endpoints to automate data entry and validation.",
      "Implementing unit and integration tests with Docker CI/CD pipelines.",
    ],
    stack: ["Python", "FastAPI", "React", "Redis"],
  },
  {
    company: "Scotiabank",
    division: "Global Banking & Markets",
    role: "Software Engineering Intern",
    date: "May to Aug 2026",
    summary: "Engineering automation for banking and capital markets.",
    bullets: [
      "Built a Node.js audit application processing 30,000+ calls, reducing quarterly audits from 2 weeks to 2 hours.",
      "Developed market data ingestion pipelines with automated validation for downstream pricing and trading systems.",
      "Implemented NumPy/SciPy validation pipelines to detect anomalies and improve financial data integrity.",
      "Engineered hierarchical multi-agent workflows for task routing, execution, and validation.",
      "Integrated RAG and knowledge graph retrieval, and built a web interface for automated agent workflows.",
    ],
    stack: ["Node.js", "Python", "NumPy", "RAG"],
  },
  {
    company: "Scotiabank",
    division: "AI Automation & Data Engineering",
    role: "Data Analyst Co-op",
    date: "Jan to Apr 2026",
    summary: "Making financial data cleaner, faster, and more actionable.",
    bullets: [
      "Built Python ETL pipelines using Pandas, NumPy, and Openpyxl to clean multi-source Auto Finance datasets.",
      "Automated reporting workflows, reducing a two-week quarterly audit process to 30 minutes.",
      "Developed reusable scripts to validate, append, and generate weekly sales reports.",
      "Built Power BI dashboards with DAX supporting 75+ weekly users.",
      "Automated Salesforce workflows, reducing manual operational processing by 60%.",
      "Implemented RAG, reducing LLM hallucinations by 70% through contextual grounding.",
    ],
    stack: ["Python", "Pandas", "SQL", "Power BI"],
  },
];
const projects = [
  {
    name: "Patchwork",
    url: "https://github.com/abishekp123/patchwork-ai",
    label: "AI / DEVELOPER TOOLS",
    description: "AI-assisted code analysis and patch review.",
    detail:
      "Patchwork analyzes a codebase, suggests patches, and checks them in isolated Docker containers before review.",
    stack: ["Python", "FastAPI", "React", "Docker"],
    metric: "140",
    metricLabel: "backend & frontend tests",
    bullets: [
      "A FastAPI backend handles repository analysis and patch generation.",
      "Isolated Docker verification pipelines enforce network, CPU, and memory restrictions.",
      "A React and TypeScript dashboard supports repository analysis and patch review through REST APIs.",
      "124 backend tests and 16 frontend tests validate patch workflows in CI.",
    ],
  },
  {
    name: "EmberKV",
    url: "https://github.com/abishekp123/emberkv",
    label: "DATABASES / SYSTEMS",
    description: "A persistent key-value database in Go.",
    detail:
      "EmberKV uses append-only logging and an in-memory index to store data, run fast queries, and recover after a crash.",
    stack: ["Go", "React", "TypeScript", "REST APIs"],
    metric: "8.4×",
    metricLabel: "faster queries across 10,000 keys",
    bullets: [
      "Append-only logging and in-memory indexing support persistent key-value storage and crash recovery.",
      "Bounded heaps optimize prefix scans, achieving 8.4× faster queries across 10,000 keys.",
      "A React and TypeScript dashboard exposes database operations, log inspection, and compaction.",
      "Concurrency controls, checksummed records, and automated tests support durability and fault recovery.",
    ],
  },
];
function Tags({ items }: { items: string[] }) {
  return (
    <div className="tags">
      {items.map((item) => (
        <Badge key={item} variant="secondary">
          {item}
        </Badge>
      ))}
    </div>
  );
}
function ProjectArt({ type }: { type: number }) {
  return type === 0 ? (
    <div
      className="project-art patch-art"
      aria-label="Patchwork architecture diagram"
    >
      <div className="art-caption">
        <span className="tiny-dot" /> PATCHWORK / PIPELINE
      </div>
      <div className="pipeline">
        <div className="pipeline-node">
          <GitBranch />
          <span>repository</span>
        </div>
        <span className="connector" />
        <div className="pipeline-node main-node">
          <Code2 />
          <span>analyze</span>
        </div>
        <span className="connector" />
        <div className="pipeline-node">
          <FileCode2 />
          <span>patch</span>
        </div>
      </div>
      <div className="verification">
        <Check size={12} />
        <span>isolated verification</span>
        <span className="verification-line" />
        Docker
      </div>
      <span className="art-footnote">inspect → generate → verify</span>
    </div>
  ) : (
    <div
      className="project-art ember-art"
      aria-label="EmberKV storage architecture diagram"
    >
      <div className="art-caption">
        <span className="tiny-dot" /> EMBERKV / STORAGE ENGINE
      </div>
      <div className="storage-art">
        <div className="log-lines">
          <span>
            SET <b>user:01</b> value
          </span>
          <span>
            SET <b>user:02</b> value
          </span>
          <span>
            GET <b>user:01</b>
            <i> ↵</i>
          </span>
        </div>
        <span className="storage-arrow">→</span>
        <div className="database-symbol">
          <Database size={48} strokeWidth={1.1} />
          <span>append-only log</span>
        </div>
      </div>
      <div className="storage-footer">
        <span>
          <span className="tiny-dot" /> in-memory index
        </span>
        <span>persistent by design</span>
      </div>
    </div>
  );
}
function Resume() {
  return (
    <Dialog>
      <DialogTrigger
        render={<Button variant="outline" className="resume-button" />}
      >
        Résumé <ArrowUpRight size={14} />
      </DialogTrigger>
      <DialogContent className="resume-dialog">
        <DialogHeader>
          <DialogTitle>Abishek Prabaharan</DialogTitle>
          <DialogDescription>
            University of Waterloo · Bachelor of Mathematics & Computer Science
          </DialogDescription>
        </DialogHeader>
        <div className="resume-body">
          <p>
            <a href={`mailto:${email}`}>{email}</a> · 647-916-7433
          </p>
          <h3>Experience</h3>
          {jobs.map((job) => (
            <section key={job.role}>
              <h4>
                {job.company} · {job.role}
              </h4>
              <p className="muted">{job.date} · Toronto, ON</p>
              <ul>
                {job.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </section>
          ))}
          <h3>Projects</h3>
          {projects.map((p) => (
            <section key={p.name}>
              <h4>{p.name}</h4>
              <p>{p.detail}</p>
              <ul>
                {p.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </section>
          ))}
          <h3>Extracurriculars</h3>
          <p>
            <strong>
              CaseHacks finalist · May 2026 · Wilfrid Laurier University
            </strong>
            <br />
            Developed an ML-driven engagement solution for a retail investing
            platform, using customer and financial features to predict the
            optimal channel across email, SMS, and in-app notifications.
          </p>
          <h3>Skills</h3>
          <p>
            Python, Go, Java, JavaScript, TypeScript, SQL, C, C++, FastAPI,
            React, Node.js, Spring Boot, Pandas, NumPy, SciPy, PostgreSQL,
            SQLite, Redis, RAG, LLM APIs, multi-agent systems, vector search,
            Docker, Git, CI/CD, Pytest, Vitest, Linux/Unix, Power BI.
          </p>
        </div>
        <Button className="print-button" onClick={() => window.print()}>
          <Printer size={15} /> Print / save as PDF
        </Button>
      </DialogContent>
    </Dialog>
  );
}
function App() {
  const [dark, setDark] = useState(() => {
    try {
      return localStorage.getItem("portfolio-theme") === "dark";
    } catch {
      return false;
    }
  });
  const [copied, setCopied] = useState(false);
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    try {
      localStorage.setItem("portfolio-theme", dark ? "dark" : "light");
    } catch {
      /* storage unavailable */
    }
  }, [dark]);
  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  }
  return (
    <TooltipProvider>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <div className="site-shell">
        <header className="site-header">
          <a
            className="monogram"
            href="#"
            aria-label="Abishek Prabaharan, home"
          >
            ap<span>.</span>
          </a>
          <nav aria-label="Main navigation">
            <a href="#work">Work</a>
            <a href="#experience">Experience</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>
          <Tooltip>
            <TooltipTrigger
              render={
                <Button
                  variant="ghost"
                  size="icon"
                  className="theme-button"
                  aria-label={
                    dark ? "Switch to light theme" : "Switch to dark theme"
                  }
                  onClick={() => setDark(!dark)}
                />
              }
            >
              {dark ? <Sun size={17} /> : <Moon size={17} />}
            </TooltipTrigger>
            <TooltipContent>{dark ? "Light mode" : "Dark mode"}</TooltipContent>
          </Tooltip>
        </header>
        <main id="main">
          <section className="hero" aria-labelledby="hero-title">
            <h1 id="hero-title">
              Abishek
              <br />
              Prabaharan<span className="name-period">.</span>
            </h1>
            <div className="hero-bottom">
              <div>
                <p className="hero-description">
                  I build software that makes
                  <br />
                  <em>complex things work simply.</em>
                </p>
                <p className="hero-subtext">
                  Computer science student at the University of Waterloo.
                  <br />
                  Working across backend systems, applied AI, and the web.
                </p>
                <div className="hero-actions">
                  <Button
                    nativeButton={false}
                    role="link"
                    render={<a href="#work" />}
                  >
                    Explore my work <ArrowDown size={15} />
                  </Button>
                  <Resume />
                </div>
              </div>
              <aside className="hero-note">
                <span className="note-plus">+</span>
                <span className="small-label">CURRENTLY</span>
                <p>
                  Turning information
                  <br />
                  into useful systems.
                </p>
                <span className="note-location">Toronto / Waterloo, ON</span>
              </aside>
            </div>
            <div className="hero-footer">
              <span>ENGINEERING WITH INTENTION</span>
              <a
                href="https://github.com/abishekp123"
                target="_blank"
                rel="noreferrer"
              >
                GitHub <ArrowUpRight size={13} />
              </a>
              <a
                href="https://linkedin.com/in/abishekp"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn <ArrowUpRight size={13} />
              </a>
            </div>
          </section>
          <section id="work" className="page-section">
            <div className="section-heading">
              <div>
                <span className="section-number">01 / SELECTED WORK</span>
                <h2>Projects</h2>
              </div>
              <span className="section-aside">
                Two projects I’ve been working on.
              </span>
            </div>
            <div className="project-grid">
              {projects.map((project, index) => (
                <article className="project" key={project.name}>
                  <Dialog>
                    <DialogTrigger
                      className="project-art-button"
                      aria-label={`Explore ${project.name}`}
                    >
                      <ProjectArt type={index} />
                      <span className="art-open">
                        <ArrowUpRight size={18} />
                      </span>
                    </DialogTrigger>
                    <DialogContent className="project-dialog">
                      <DialogHeader>
                        <span className="small-label">{project.label}</span>
                        <DialogTitle>{project.name}</DialogTitle>
                        <DialogDescription>{project.detail}</DialogDescription>
                      </DialogHeader>
                      <ProjectArt type={index} />
                      <ul className="project-details">
                        {project.bullets.map((b) => (
                          <li key={b}>
                            <Check size={15} />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                      <Tags items={project.stack} />
                      <Button
                        nativeButton={false}
                        role="link"
                        variant="outline"
                        render={
                          <a
                            href={project.url}
                            target="_blank"
                            rel="noreferrer"
                          />
                        }
                      >
                        <Github size={16} /> View source{" "}
                        <ArrowUpRight size={14} />
                      </Button>
                    </DialogContent>
                    <div className="project-meta">
                      <span className="small-label">{project.label}</span>
                      <DialogTrigger className="project-title">
                        <h3>{project.name}</h3>
                        <ArrowUpRight size={20} />
                      </DialogTrigger>
                      <p className="project-tagline">{project.description}</p>
                      <p className="project-description">{project.detail}</p>
                      <Tags items={project.stack} />
                      <div className="project-stat">
                        <strong>{project.metric}</strong>
                        <span>{project.metricLabel}</span>
                      </div>
                    </div>
                  </Dialog>
                </article>
              ))}
            </div>
          </section>
          <section id="experience" className="page-section">
            <div className="section-heading">
              <div>
                <span className="section-number">02 / EXPERIENCE</span>
                <h2>Built in the real world.</h2>
              </div>
              <span className="section-aside">
                Good teams. Meaningful problems.
              </span>
            </div>
            <Accordion defaultValue={["job-0"]} className="experience-list">
              {jobs.map((job, i) => (
                <AccordionItem value={`job-${i}`} key={job.role}>
                  <AccordionTrigger className="job-trigger">
                    <div
                      className={`company-mark ${i === 0 ? "samsung-mark" : "scotia-mark"}`}
                    >
                      <img
                        src={
                          i === 0
                            ? "/logos/samsung.png"
                            : "/logos/scotiabank.svg"
                        }
                        alt=""
                        width={i === 0 ? 80 : 32}
                        height={i === 0 ? 45 : 36}
                        loading="lazy"
                      />
                    </div>
                    <div className="job-main">
                      <span className="company-name">
                        {job.company}
                        {i === 0 && (
                          <Badge variant="outline" className="current-badge">
                            Current
                          </Badge>
                        )}
                      </span>
                      <span className="job-role">
                        {job.role}
                        {job.division && (
                          <span className="job-division">
                            {" "}
                            · {job.division}
                          </span>
                        )}
                      </span>
                    </div>
                    <span className="job-date">{job.date}</span>
                  </AccordionTrigger>
                  <AccordionContent className="job-content">
                    <p>{job.summary}</p>
                    <ul>
                      {job.bullets.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                    <Tags items={job.stack} />
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>
          <section id="about" className="page-section about-section">
            <div>
              <span className="section-number">03 / A LITTLE ABOUT ME</span>
              <h2>About me</h2>
              <p>
                I’m studying Mathematics & Computer Science at the University of
                Waterloo. Through my co-ops at Samsung and Scotiabank, I’ve
                worked on AI tools, backend services, and data pipelines.
              </p>
              <p>
                Outside of work, I’ve been building Patchwork and EmberKV.
                They’ve given me a chance to work through questions about code
                verification, database performance, and crash recovery
                firsthand.
              </p>
              <div className="education">
                <img
                  className="waterloo-logo"
                  src={
                    dark ? "/logos/waterloo-dark.png" : "/logos/waterloo.png"
                  }
                  alt="University of Waterloo"
                  width="240"
                  height="108"
                  loading="lazy"
                />
                <span>Mathematics & Computer Science</span>
              </div>
              <div className="hackathon">
                <span>↗</span>
                <p>
                  <strong>CaseHacks finalist, 2026</strong>
                  <br />
                  Predicting how to reach retail investors with ML.
                </p>
              </div>
            </div>
            <div className="toolkit">
              <span className="small-label">TECHNICAL SKILLS</span>
              <div>
                <h3>Languages</h3>
                <p>
                  Python · Go · TypeScript · JavaScript
                  <br />
                  Java · SQL · C · C++
                </p>
              </div>
              <div>
                <h3>Backend & data</h3>
                <p>
                  FastAPI · Node.js · Spring Boot
                  <br />
                  PostgreSQL · SQLite · Redis · Pandas
                </p>
              </div>
              <div>
                <h3>AI & systems</h3>
                <p>
                  RAG · LLM APIs · Multi-agent systems
                  <br />
                  Vector search · Concurrency · Caching
                </p>
              </div>
              <div>
                <h3>Frontend & delivery</h3>
                <p>
                  React · Docker · Git · CI/CD
                  <br />
                  Pytest · Vitest · Linux / Unix
                </p>
              </div>
            </div>
          </section>
          <section id="contact" className="contact-section">
            <span className="section-number">04 / CONTACT</span>
            <h2>Let’s get in touch.</h2>
            <div className="contact-bottom">
              <p>
                Feel free to reach out about a role, a project,
                <br />
                or anything you’d like to know about my work.
              </p>
              <div className="contact-actions">
                <Button
                  nativeButton={false}
                  role="link"
                  render={<a href={`mailto:${email}`} />}
                >
                  Say hello <ArrowUpRight size={16} />
                </Button>
                <Tooltip>
                  <TooltipTrigger
                    render={
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={copyEmail}
                        aria-label={
                          copied ? "Email copied" : "Copy email address"
                        }
                      />
                    }
                  >
                    {copied ? <Check size={16} /> : <Copy size={16} />}
                  </TooltipTrigger>
                  <TooltipContent>
                    {copied ? "Copied!" : "Copy email"}
                  </TooltipContent>
                </Tooltip>
                <span className="sr-only" role="status">
                  {copied ? "Email address copied to clipboard" : ""}
                </span>
              </div>
            </div>
            <a className="email-link" href={`mailto:${email}`}>
              {email} ↗
            </a>
          </section>
        </main>
        <footer className="site-footer">
          <span>© {new Date().getFullYear()} Abishek Prabaharan</span>
          <span className="footer-note">Toronto / Waterloo, Ontario</span>
          <div>
            <a
              href="https://github.com/abishekp123"
              aria-label="GitHub"
              target="_blank"
              rel="noreferrer"
            >
              <Github size={17} />
            </a>
            <a
              href="https://linkedin.com/in/abishekp"
              aria-label="LinkedIn"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin size={17} />
            </a>
            <a href={`mailto:${email}`} aria-label="Email">
              <Mail size={17} />
            </a>
          </div>
        </footer>
      </div>
    </TooltipProvider>
  );
}
export default App;
