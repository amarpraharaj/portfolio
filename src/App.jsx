import "./App.css";
import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  Database,
  Download,
  GraduationCap,
  Mail,
  MapPin,
  Moon,
  Sun,
  Wrench,
} from "lucide-react";

const email = "amarpraharaj283@gmail.com";
const github = "https://github.com/amarpraharaj";
const linkedin = "https://linkedin.com/in/amar-anurag-praharaj";
const roles = ["MCA student", "Junior Full-Stack Developer", "Backend Developer"];

const skillGroups = [
  { title: "Frontend", icon: Code2, items: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS", "Bootstrap"] },
  { title: "Backend", icon: BriefcaseBusiness, items: ["Node.js", "Express.js", "REST APIs", "JWT authentication"] },
  { title: "Databases", icon: Database, items: ["MongoDB", "Mongoose", "MySQL"] },
  { title: "Tools", icon: Wrench, items: ["Git", "GitHub", "VS Code"] },
];

const projects = [
  {
    id: "devdesk",
    number: "01",
    name: "DevDesk",
    subtitle: "Full-stack ticket management",
    description: "A workspace for creating, organizing, and tracking support tickets.",
    detail: "HttpOnly-cookie authentication, ticket ownership checks, validation, search, filtering, sorting, pagination, and activity history.",
    stack: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "Mongoose", "Zod"],
    live: "https://dev-desk-delta.vercel.app/",
    source: "https://github.com/amarpraharaj/DevDesk",
    image: "https://raw.githubusercontent.com/amarpraharaj/DevDesk/main/docs/screenshots/dashboard.png",
    imageAlt: "DevDesk ticket management dashboard",
    featured: true,
  },
  {
    id: "task-manager",
    number: "02",
    name: "Task Manager",
    subtitle: "MERN task management app",
    description: "A task-management app with registration, login, JWT authentication, and task workflows.",
    stack: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT"],
    live: "https://task-manager-five-orcin-75.vercel.app/",
    source: github,
    visual: "tasks",
  },
  {
    id: "rich-text-editor",
    number: "03",
    name: "Rich Text Editor",
    subtitle: "Browser-based editor",
    description: "A browser-based editor with formatting, autosave, PDF export, printing, and dark mode.",
    stack: ["HTML", "CSS", "JavaScript"],
    live: "https://rich-text-editor-pearl-rho.vercel.app/",
    source: github,
    visual: "editor",
  },
];

function App() {
  const reduceMotion = useReducedMotion();
  const [role, setRole] = useState(roles[0]);
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem("amar-portfolio-theme") === "light" ? "light" : "dark";
    } catch {
      return "dark";
    }
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem("amar-portfolio-theme", theme);
    } catch {
      // Keep the selected theme for this page view if storage is unavailable.
    }
  }, [theme]);

  useEffect(() => {
    if (reduceMotion) return undefined;

    let phraseIndex = 0;
    let characterIndex = 0;
    let erasing = false;
    let timerId;

    const tick = () => {
      const phrase = roles[phraseIndex];
      characterIndex += erasing ? -1 : 1;
      setRole(phrase.slice(0, characterIndex));

      if (!erasing && characterIndex === phrase.length) {
        erasing = true;
        timerId = window.setTimeout(tick, 3500);
        return;
      }

      if (erasing && characterIndex === 0) {
        erasing = false;
        phraseIndex = (phraseIndex + 1) % roles.length;
      }

      timerId = window.setTimeout(tick, erasing ? 32 : 65);
    };

    timerId = window.setTimeout(tick, 65);
    return () => window.clearTimeout(timerId);
  }, [reduceMotion]);

  const displayedRole = reduceMotion ? roles[0] : role;
  const toggleTheme = () => setTheme((current) => current === "dark" ? "light" : "dark");

  return (
    <main className="bento-page">
      <header className="page-header">
        <a className="site-mark" href="#top" aria-label="Amar Praharaj, home"><span>AP</span><span className="mark-dot" /></a>
        <nav className="site-nav" aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </nav>
        <span className="header-location"><MapPin size={14} aria-hidden="true" /> Bhubaneswar, Odisha</span>
        <ThemeToggle theme={theme} onToggle={toggleTheme} />
      </header>

      <div className="bento-grid" id="top">
        <section className="bento-card profile-card" id="about" aria-labelledby="profile-name">
          <div className="profile-main">
            <div className="profile-topline"><span className="availability-dot" /> OPEN TO JUNIOR ROLES</div>
            <div className="profile-intro">
              <img className="photo-placeholder" src="./profile.jpeg" alt="Amar Anurag Praharaj" width="96" height="96" />
              <div className="profile-heading">
                <h1 id="profile-name">Amar Anurag<br />Praharaj</h1>
                <p className="role-line" aria-label={displayedRole}><span aria-hidden="true">{displayedRole}</span><span className="type-cursor" aria-hidden="true">|</span></p>
              </div>
            </div>
            <p className="profile-summary">MCA student and junior full-stack/backend developer based in Bhubaneswar, Odisha, India.</p>
            <div className="profile-actions">
              <a className="resume-button" href="./resume.pdf" download="Amar-Anurag-Praharaj-Resume.pdf"><Download size={15} aria-hidden="true" /> Download Resume</a>
              <div className="social-links">
                <ExternalLink href={github} label="GitHub profile"><GithubMark /><span>GitHub</span></ExternalLink>
                <ExternalLink href={linkedin} label="LinkedIn profile"><LinkedInMark /><span>LinkedIn</span></ExternalLink>
                <a href={`mailto:${email}`} aria-label={`Email Amar at ${email}`}><Mail size={16} aria-hidden="true" /><span>Email</span></a>
              </div>
            </div>
            <div className="profile-foot"><span><MapPin size={13} aria-hidden="true" /> Bhubaneswar, Odisha, India</span></div>
          </div>
          <aside className="profile-focus" aria-label="Current study and technology focus">
            <span className="eyebrow">CURRENT FOCUS</span>
            <h2>Building across<br />the stack.</h2>
            <span className="focus-label">TOOLS IN MY PROJECTS</span>
            <ul className="focus-stack">
              {["React", "TypeScript", "Node.js", "Express", "MongoDB"].map((item) => <li key={item}>{item}</li>)}
            </ul>
          </aside>
        </section>

        <ProjectCard project={projects[0]} featured reduceMotion={reduceMotion} />

        <div className="section-divider"><span>SELECTED WORK & BACKGROUND</span><i /></div>
        <ProjectCard project={projects[1]} reduceMotion={reduceMotion} />
        <ProjectCard project={projects[2]} reduceMotion={reduceMotion} />

        <section className="bento-card skills-card" id="skills" aria-labelledby="skills-title">
          <CardHeader eyebrow="WHAT I WORK WITH" title="Skills" id="skills-title" />
          <div className="skill-groups">
            {skillGroups.map(({ title, icon: Icon, items }) => (
              <div className="skill-group" key={title}>
                <h3><Icon size={15} aria-hidden="true" /> {title}</h3>
                <ul>{items.map((item) => <li key={item}>{item}</li>)}</ul>
              </div>
            ))}
          </div>
        </section>

        <section className="bento-card education-card" id="education" aria-labelledby="education-title">
          <CardHeader eyebrow="ACADEMIC BACKGROUND" title="Education" id="education-title" />
          <EducationEntry degree="MCA" school="NIIS Institute of Engineering & Technology, Bhubaneswar" period="2025–present" note="Expected 2027" />
          <EducationEntry degree="BCA" school="NIIS Institute of Information Science & Management, Bhubaneswar" period="2022–2025" />
          <div className="certifications">
            <h3>Certifications</h3>
            <p>Web Development Training <span>· Internshala</span></p>
            <p>Web Development Fundamentals <span>· IBM</span></p>
            <p>Full Stack Development <span>· PW Skills</span></p>
          </div>
        </section>

        <section className="bento-card contact-card" id="contact" aria-labelledby="contact-title">
          <div><span className="eyebrow">GET IN TOUCH</span><h2 id="contact-title">Let’s connect.</h2></div>
          <a className="contact-email" href={`mailto:${email}`}><Mail size={17} aria-hidden="true" /><span>{email}</span><ArrowUpRight size={15} aria-hidden="true" /></a>
          <div className="contact-socials"><ExternalLink href={github} label="GitHub profile"><GithubMark /> GitHub <ArrowUpRight size={13} aria-hidden="true" /></ExternalLink><ExternalLink href={linkedin} label="LinkedIn profile"><LinkedInMark /> LinkedIn <ArrowUpRight size={13} aria-hidden="true" /></ExternalLink></div>
          <span className="contact-mark" aria-hidden="true">AP<span>.</span></span>
        </section>
      </div>

      <footer className="page-footer"><span>© 2026 Amar Anurag Praharaj</span><a href="#top">Back to top ↑</a></footer>
    </main>
  );
}

function ExternalLink({ href, children, label, className = "" }) {
  return <a className={className} href={href} target="_blank" rel="noreferrer" aria-label={label}>{children}</a>;
}

function ThemeToggle({ theme, onToggle }) {
  return (
    <button className="theme-toggle header-theme" type="button" onClick={onToggle} aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`} aria-pressed={theme === "light"}>
      {theme === "dark" ? <Sun size={14} aria-hidden="true" /> : <Moon size={14} aria-hidden="true" />}
      <span>{theme === "dark" ? "Light" : "Dark"}</span>
    </button>
  );
}

function CardHeader({ eyebrow, title, id }) {
  return <div className="card-heading"><div><span className="eyebrow">{eyebrow}</span><h2 id={id}>{title}</h2></div></div>;
}

function ProjectCard({ project, featured = false, reduceMotion }) {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <motion.article
      className={`bento-card project-card${featured ? " featured-card" : ""}`}
      whileHover={reduceMotion ? undefined : { y: -3 }}
      transition={{ duration: 0.18, ease: "easeOut" }}
      id={featured ? "projects" : undefined}
    >
      <a className={`project-visual ${project.image && !imageFailed ? "has-image" : `visual-${project.visual || "desk"}`}`} href={project.live} target="_blank" rel="noreferrer" aria-label={`Open ${project.name} live app`}>
        {project.image && !imageFailed ? (
          <img src={project.image} alt={project.imageAlt} width="1280" height="720" loading="lazy" onError={() => setImageFailed(true)} />
        ) : <ProjectArtwork kind={project.visual || "desk"} />}
        <span className="project-image-overlay"><strong>{project.name}</strong><span>VIEW PROJECT <ArrowUpRight size={15} aria-hidden="true" /></span></span>
      </a>
      <div className="project-copy">
        <div className="project-title-row"><div><span className="eyebrow">PROJECT {project.number}</span><h2>{project.name}</h2></div><span className="project-type">{project.subtitle}</span></div>
        <p>{project.description}</p>
        {project.detail && <p className="project-detail">{project.detail}</p>}
        <ul className="tech-list">{project.stack.map((item) => <li key={item}>{item}</li>)}</ul>
        <div className="project-links"><ExternalLink href={project.live}>Live app <ArrowUpRight size={14} aria-hidden="true" /></ExternalLink><ExternalLink href={project.source}>GitHub <ArrowUpRight size={14} aria-hidden="true" /></ExternalLink></div>
      </div>
    </motion.article>
  );
}

function ProjectArtwork({ kind }) {
  if (kind === "editor") {
    return <div className="art-window editor-art" aria-hidden="true"><div className="art-browser"><i /><i /><i /><span>RICH TEXT EDITOR</span></div><div className="editor-sheet"><div className="art-toolbar">B&nbsp;&nbsp; I&nbsp;&nbsp; U&nbsp;&nbsp; ↔</div><strong>Document title</strong><i /><i /><i className="short-line" /></div></div>;
  }
  if (kind === "tasks") {
    return <div className="art-window tasks-art" aria-hidden="true"><div className="tasks-top"><strong>TASKS</strong><span>+ NEW TASK</span></div><div className="task-columns">{["TO DO", "IN PROGRESS", "DONE"].map((title) => <div className="task-column" key={title}><b>{title}</b><i /><i /></div>)}</div></div>;
  }
  return <div className="art-window desk-art" aria-hidden="true"><div className="desk-top"><strong>DEV DESK</strong><span>TICKETS</span><i>+ NEW TICKET</i></div><div className="desk-lines"><b /><i /><i /><i /></div></div>;
}

function EducationEntry({ degree, school, period, note }) {
  return <article className="education-entry"><span className="education-icon"><GraduationCap size={16} aria-hidden="true" /></span><div><h3>{degree}</h3><p>{school}</p><span className="education-period">{period}{note ? ` · ${note}` : ""}</span></div></article>;
}

function GithubMark() {
  return <svg className="brand-icon" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.54v-2.1c-3.1.68-3.76-1.32-3.76-1.32-.5-1.3-1.24-1.65-1.24-1.65-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 .1.7 2.22 3.24 1.7.1-.72.39-1.2.7-1.48-2.48-.28-5.08-1.24-5.08-5.52 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.05 1.15a10.6 10.6 0 0 1 5.55 0c2.12-1.45 3.05-1.15 3.05-1.15.61 1.54.23 2.68.12 2.96.71.78 1.14 1.78 1.14 3.01 0 4.29-2.6 5.23-5.09 5.5.4.35.75 1.03.75 2.08v3.08c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" /></svg>;
}

function LinkedInMark() {
  return <svg className="brand-icon" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM7.93 18.7H4.98V9.18h2.95v9.52ZM6.45 7.88a1.71 1.71 0 1 1 0-3.42 1.71 1.71 0 0 1 0 3.42Zm12.27 10.82h-2.94v-4.63c0-1.1-.02-2.52-1.54-2.52-1.54 0-1.78 1.2-1.78 2.44v4.71H9.52V9.18h2.82v1.3h.04c.39-.75 1.35-1.54 2.78-1.54 2.97 0 3.56 1.95 3.56 4.48v5.28Z" /></svg>;
}

export default App;
