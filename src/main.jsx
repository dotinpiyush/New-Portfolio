import React from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowUpRight,
  CheckCircle2,
  Code2,
  Github,
  Instagram,
  Layers3,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Phone,
  Send,
  Sparkles,
  X,
} from "lucide-react";
import "./styles.css";

const navItems = ["home", "about", "work", "skills", "contact"];

const roles = ["Frontend Developer", "React Builder", "UI/UX Learner"];

const highlights = [
  { label: "Focus", value: "Responsive UI" },
  { label: "Stack", value: "React + JavaScript" },
  { label: "Mindset", value: "Clean, usable design" },
];

const services = [
  {
    icon: <Code2 size={22} />,
    title: "Frontend Development",
    description:
      "Building fast, accessible, and responsive interfaces with HTML, CSS, JavaScript, and React.",
  },
  {
    icon: <Layers3 size={22} />,
    title: "UI Implementation",
    description:
      "Turning visual ideas into clean layouts with strong spacing, hierarchy, and mobile behavior.",
  },
  {
    icon: <Sparkles size={22} />,
    title: "Polish & Optimization",
    description:
      "Improving interactions, consistency, performance, and details that make a site feel professional.",
  },
];

const projects = [
  {
    title: "IGDB Gaming Database",
    description:
      "A gaming discovery website for searching titles and browsing game information through a clean web interface.",
    link: "https://dotinpiyush.github.io/IGDB-AJAX/",
    tags: ["JavaScript", "API", "Responsive UI"],
  },
  {
    title: "Memory Game",
    description:
      "A browser card-matching game with replayable logic, simple feedback, and focused JavaScript interactions.",
    link: "https://dotinpiyush.github.io/Memory-game/",
    tags: ["Game Logic", "DOM", "CSS"],
  },
  {
    title: "Dictionary App",
    description:
      "A web dictionary project for searching word meanings through a simple, useful, and responsive interface.",
    link: "https://dotinpiyush.github.io/Dictionary/",
    tags: ["JavaScript", "API", "Search UI"],
  },
];

const skills = [
  { name: "HTML", value: 95, group: "Core" },
  { name: "CSS", value: 88, group: "Core" },
  { name: "JavaScript", value: 80, group: "Core" },
  { name: "React", value: 76, group: "Frontend" },
  { name: "MERN Stack", value: 74, group: "Full Stack" },
  { name: "Node.js", value: 70, group: "Backend" },
  { name: "MongoDB", value: 68, group: "Database" },
  { name: "Java", value: 78, group: "Programming" },
];

function App() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [roleIndex, setRoleIndex] = React.useState(0);
  const [status, setStatus] = React.useState("");

  React.useEffect(() => {
    const timer = window.setInterval(() => {
      setRoleIndex((current) => (current + 1) % roles.length);
    }, 2300);

    return () => window.clearInterval(timer);
  }, []);

  React.useEffect(() => {
    document.body.classList.toggle("menu-locked", menuOpen);
    return () => document.body.classList.remove("menu-locked");
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setStatus("Message prepared. Add EmailJS keys to send this form live.");
    event.currentTarget.reset();
  };

  return (
    <>
      <div className="background-grid" />

      {/* हिंदी: Header पूरे portfolio की navigation और mobile menu state संभालता है। */}
      <header className="navbar">
        <a className="brand" href="#home" onClick={closeMenu}>
          <span>PK</span>
          <strong>Piyush Kumar Badhan</strong>
        </a>

        <nav className={menuOpen ? "nav-links nav-open" : "nav-links"}>
          {navItems.map((item) => (
            <a key={item} href={`#${item}`} onClick={closeMenu}>
              {item}
            </a>
          ))}
        </nav>

        <button
          className="icon-button menu-button"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      <main>
        {/* हिंदी: Hero section recruiter को तुरंत role, value और CTA दिखाता है। */}
        <section id="home" className="hero section">
          <div className="hero-copy">
            <p className="eyebrow">Available for frontend opportunities</p>
            <h1>Building clean web experiences with React.</h1>
            <h2>
              Hi, I am Piyush Kumar Badhan, a{" "}
              <span>{roles[roleIndex]}</span>.
            </h2>
            <p>
              Computer Science graduate focused on modern responsive websites,
              thoughtful UI systems, and practical interfaces that work smoothly
              across desktop and mobile.
            </p>

            <div className="hero-actions">
              <a className="btn primary" href="#work">
                View Work <ArrowUpRight size={18} />
              </a>
              <a className="btn secondary" href="#contact">
                Contact Me
              </a>
            </div>
          </div>

          <aside className="hero-card" aria-label="Portfolio summary">
            <img
              src="/Contant/WhatsApp Image 2023-08-02 at 3.59.34 AM.jpeg"
              alt="Piyush Kumar Badhan"
            />
            <div className="hero-card-content">
              <p>Frontend Developer</p>
              <h3>Piyush Kumar Badhan</h3>
              <div className="quick-points">
                {highlights.map((item) => (
                  <div key={item.label}>
                    <span>{item.label}</span>
                    <strong>{item.value}</strong>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </section>

        <section id="about" className="about section">
          <SectionHeading
            eyebrow="About"
            title="A developer who cares about both code quality and visual detail."
          />
          <div className="about-layout">
            <div className="about-copy">
              <p>
                I am a B.Tech graduate in Computer Science Engineering with a
                strong interest in frontend development and modern UI/UX design.
                I enjoy building websites that feel clear, fast, and natural to
                use.
              </p>
              <p>
                My core toolkit includes HTML, CSS, JavaScript, React, Java,
                Node.js, and MongoDB. I like learning by building, refining
                details, and improving the structure behind every screen.
              </p>
            </div>

            <div className="service-grid">
              {services.map((service) => (
                <article className="service-card" key={service.title}>
                  <div className="service-icon">{service.icon}</div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* हिंदी: Project data array से cards बनते हैं, future projects add करना आसान है। */}
        <section id="work" className="projects section">
          <SectionHeading eyebrow="Work" title="Projects with practical UI thinking." />
          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <div>
                  <div className="project-topline">
                    <span>Featured Project</span>
                    <ArrowUpRight size={18} />
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tag-list">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
                <a href={project.link} target="_blank" rel="noreferrer">
                  Open project
                </a>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="skills section">
          <SectionHeading
            eyebrow="Skills"
            title="A focused stack for responsive, production-ready interfaces."
          />
          <div className="skill-grid">
            {skills.map((skill) => (
              <article className="skill" key={skill.name}>
                <div className="skill-label">
                  <div>
                    <span>{skill.group}</span>
                    <strong>{skill.name}</strong>
                  </div>
                  <b>{skill.value}%</b>
                </div>
                <div
                  className="bar"
                  role="progressbar"
                  aria-label={`${skill.name} skill level`}
                  aria-valuemin="0"
                  aria-valuemax="100"
                  aria-valuenow={skill.value}
                >
                  <div style={{ width: `${skill.value}%` }} />
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="process section" aria-label="Development process">
          <SectionHeading eyebrow="Process" title="How I approach frontend work." />
          <div className="process-list">
            {[
              "Understand the user flow and content priority.",
              "Build responsive structure before adding visual polish.",
              "Test spacing, interaction states, and mobile layouts.",
            ].map((item) => (
              <p key={item}>
                <CheckCircle2 size={19} /> {item}
              </p>
            ))}
          </div>
        </section>

        {/* हिंदी: Contact form अभी demo है; EmailJS keys जोड़ने पर live send हो सकता है। */}
        <section id="contact" className="contact section">
          <SectionHeading
            eyebrow="Contact"
            title="Have a frontend idea or role? Let us talk."
          />
          <div className="contact-grid">
            <div className="contact-panel">
              <a href="tel:+917018226235">
                <Phone size={18} /> +91 7018226235
              </a>
              <a href="mailto:piyushkb@gmail.com">
                <Mail size={18} /> piyushkb@gmail.com
              </a>
              <p>
                <MapPin size={18} /> India
              </p>
              <div className="socials">
                <SocialLink
                  href="https://www.linkedin.com/in/piyush-kumar-badhan/"
                  label="LinkedIn"
                  icon={<Linkedin size={22} />}
                />
                <SocialLink
                  href="https://github.com/dotinpiyush"
                  label="GitHub"
                  icon={<Github size={22} />}
                />
                <SocialLink
                  href="https://instagram.com/imregardo._"
                  label="Instagram"
                  icon={<Instagram size={22} />}
                />
              </div>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <label>
                <span>Name</span>
                <input type="text" name="name" placeholder="Your Name" required />
              </label>
              <label>
                <span>Email</span>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                />
              </label>
              <label>
                <span>Message</span>
                <textarea name="message" placeholder="Your Message" required />
              </label>
              <button className="btn primary" type="submit">
                <Send size={17} /> Send Message
              </button>
              {status && <p className="form-status">{status}</p>}
            </form>
          </div>
        </section>
      </main>

      <footer>
        <span>© 2026 Piyush Kumar Badhan</span>
        <a href="#home">Back to top</a>
      </footer>
    </>
  );
}

function SectionHeading({ eyebrow, title }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
    </div>
  );
}

function SocialLink({ href, label, icon }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" aria-label={label}>
      {icon}
    </a>
  );
}

createRoot(document.getElementById("root")).render(<App />);
