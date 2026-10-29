import { useEffect, useState, type ReactNode } from "react";
import {
  profile,
  socials,
  skills,
  education,
  experience,
  projects,
  type Project,
} from "./data";

const sections = [
  "home",
  "about",
  "skills",
  "education",
  "experience",
  "projects",
  "contact",
];

const btnPrimary =
  "inline-flex items-center justify-center rounded-full bg-indigo-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition hover:bg-indigo-400";
const btnOutline =
  "inline-flex items-center justify-center rounded-full border border-slate-600 px-5 py-2.5 text-sm font-medium text-slate-200 transition hover:border-indigo-400 hover:text-indigo-300";

function useHash() {
  const [hash, setHash] = useState(window.location.hash);
  useEffect(() => {
    const onChange = () => setHash(window.location.hash);
    window.addEventListener("hashchange", onChange);
    return () => window.removeEventListener("hashchange", onChange);
  }, []);
  return hash;
}

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#home" className="text-xl font-bold text-white">
          {profile.name}
          <span className="text-indigo-400">.</span>
        </a>
        <ul className="hidden gap-7 md:flex">
          {sections.map((s) => (
            <li key={s}>
              <a
                href={`#${s}`}
                className="text-sm capitalize text-slate-300 transition hover:text-indigo-400"
              >
                {s}
              </a>
            </li>
          ))}
        </ul>
        <button
          className="text-2xl text-slate-200 md:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>
      </nav>
      {open && (
        <ul className="border-t border-white/10 bg-slate-950 px-5 pb-4 md:hidden">
          {sections.map((s) => (
            <li key={s}>
              <a
                href={`#${s}`}
                onClick={() => setOpen(false)}
                className="block py-2.5 capitalize text-slate-300 hover:text-indigo-400"
              >
                {s}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-16 px-5 py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-2 text-3xl font-bold text-white sm:text-4xl">
          {title}
        </h2>
        <div className="mb-10 h-1 w-16 rounded bg-indigo-500" />
        {children}
      </div>
    </section>
  );
}

function Hero() {
  return (
    <section
      id="home"
      className="flex min-h-screen scroll-mt-16 items-center px-5 pb-16 pt-28"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
        <div className="order-2 md:order-1">
          <p className="mb-3 font-medium text-indigo-400">Hello, I'm</p>
          <h1 className="text-4xl font-extrabold text-white sm:text-6xl">
            {profile.name}
          </h1>
          <h2 className="mt-3 text-xl font-semibold text-cyan-300 sm:text-2xl">
            {profile.designation}
          </h2>
          <p className="mt-5 max-w-lg text-slate-400">{profile.tagline}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={profile.resume} download className={btnPrimary}>
              ⬇ View / Download Resume
            </a>
            <a href="#contact" className={btnOutline}>
              Hire Me
            </a>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className={btnOutline}
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
        <div className="order-1 flex justify-center md:order-2">
          <div className="rounded-full bg-linear-to-tr from-indigo-500 to-cyan-400 p-1.5 shadow-2xl shadow-indigo-500/30">
            <img
              src={profile.photo}
              alt={`${profile.name}, ${profile.designation}`}
              className="h-64 w-64 rounded-full bg-slate-900 object-cover sm:h-80 sm:w-80"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <Section id="about" title="About Me">
      <div className="grid gap-10 md:grid-cols-3">
        <div className="space-y-4 md:col-span-2">
          {profile.about.map((p, i) => (
            <p key={i} className="leading-relaxed">
              {p}
            </p>
          ))}
        </div>
        <div className="rounded-2xl border border-white/10 bg-slate-900 p-6">
          <h3 className="mb-4 font-semibold text-white">Beyond coding</h3>
          <ul className="space-y-2">
            {profile.hobbies.map((h) => (
              <li key={h} className="flex items-center gap-2">
                <span className="text-indigo-400">▹</span> {h}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}

function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="grid gap-6 md:grid-cols-3">
        {Object.entries(skills).map(([category, list]) => (
          <div
            key={category}
            className="rounded-2xl border border-white/10 bg-slate-900 p-6"
          >
            <h3 className="mb-5 font-semibold text-white">{category}</h3>
            <div className="space-y-4">
              {list.map((s) => (
                <div key={s.name}>
                  <div className="mb-1 flex justify-between text-sm">
                    <span>{s.name}</span>
                    <span className="text-slate-500">{s.level}%</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-slate-800">
                    <div
                      className="h-full rounded-full bg-linear-to-r from-indigo-500 to-cyan-400"
                      style={{ width: `${s.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Timeline({
  id,
  title,
  items,
}: {
  id: string;
  title: string;
  items: typeof education;
}) {
  return (
    <Section id={id} title={title}>
      <div className="space-y-6 border-l-2 border-indigo-500/40 pl-6">
        {items.map((it) => (
          <div
            key={it.title}
            className="relative rounded-2xl border border-white/10 bg-slate-900 p-6"
          >
            <span className="absolute -left-8.25 top-7 h-4 w-4 rounded-full border-4 border-slate-950 bg-indigo-500" />
            <p className="text-sm text-cyan-300">{it.period}</p>
            <h3 className="mt-1 text-lg font-semibold text-white">
              {it.title}
            </h3>
            <p className="text-slate-400">{it.place}</p>
            <p className="mt-2 text-sm">{it.note}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <article
            key={p.slug}
            className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900 transition hover:-translate-y-1 hover:border-indigo-500/50"
          >
            <img
              src={p.image}
              alt={p.name}
              className="h-48 w-full object-cover"
            />
            <div className="p-6">
              <h3 className="text-lg font-semibold text-white">{p.name}</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.stack.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-indigo-500/10 px-3 py-1 text-xs text-indigo-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <a
                href={`#/project/${p.slug}`}
                className={`${btnPrimary} mt-5 w-full`}
              >
                View Details
              </a>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

function Contact() {
  const items = [
    { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
    { label: "Phone", value: profile.phone, href: `tel:${profile.phone}` },
    {
      label: "WhatsApp",
      value: "Chat with me",
      href: `https://wa.me/${profile.whatsapp}`,
    },
  ];
  return (
    <Section id="contact" title="Contact Me">
      <p className="mb-8 max-w-xl">
        Have a project, an internship opportunity or just want to say hi? Reach
        out directly.
      </p>
      <div className="grid gap-6 sm:grid-cols-3">
        {items.map((c) => (
          <a
            key={c.label}
            href={c.href}
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl border border-white/10 bg-slate-900 p-6 transition hover:border-indigo-500/50"
          >
            <p className="text-sm text-cyan-300">{c.label}</p>
            <p className="mt-1 break-all font-medium text-white">{c.value}</p>
          </a>
        ))}
      </div>
    </Section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 px-5 py-8 text-center text-sm text-slate-500">
      <div className="mb-3 flex flex-wrap justify-center gap-5">
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noreferrer"
            className="hover:text-indigo-400"
          >
            {s.label}
          </a>
        ))}
      </div>
      © {new Date().getFullYear()} {profile.name}. Built with React, TypeScript
      & Tailwind CSS.
    </footer>
  );
}

function ProjectDetails({ project }: { project: Project }) {
  useEffect(() => window.scrollTo(0, 0), [project.slug]);
  const List = ({ title, items }: { title: string; items: string[] }) => (
    <div className="rounded-2xl border border-white/10 bg-slate-900 p-6">
      <h3 className="mb-3 font-semibold text-white">{title}</h3>
      <ul className="space-y-2">
        {items.map((i) => (
          <li key={i} className="flex gap-2">
            <span className="text-indigo-400">▹</span>
            {i}
          </li>
        ))}
      </ul>
    </div>
  );
  return (
    <main className="mx-auto max-w-4xl px-5 pb-20 pt-28">
      <a href="#projects" className="text-sm text-indigo-400 hover:underline">
        ← Back to projects
      </a>
      <h1 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
        {project.name}
      </h1>
      <img
        src={project.image}
        alt={project.name}
        className="mt-6 h-64 w-full rounded-2xl object-cover sm:h-96"
      />
      <div className="mt-8 space-y-6">
        <div>
          <h3 className="mb-2 font-semibold text-white">
            Main Technology Stack
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((t) => (
              <span
                key={t}
                className="rounded-full bg-indigo-500/10 px-3 py-1 text-sm text-indigo-300"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
        <div>
          <h3 className="mb-2 font-semibold text-white">Description</h3>
          <p className="leading-relaxed">{project.description}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className={btnPrimary}
          >
            🔗 Live Project
          </a>
          <a
            href={project.repo}
            target="_blank"
            rel="noreferrer"
            className={btnOutline}
          >
            GitHub (Client)
          </a>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <List title="Challenges Faced" items={project.challenges} />
          <List title="Future Improvements" items={project.future} />
        </div>
      </div>
    </main>
  );
}

export default function App() {
  const hash = useHash();
  const match = hash.match(/^#\/project\/(.+)$/);
  const project = match ? projects.find((p) => p.slug === match[1]) : undefined;

  // When returning from a project page, scroll to the requested section.
  useEffect(() => {
    if (project || hash.startsWith("#/")) return;
    const id = hash.slice(1);
    if (id) setTimeout(() => document.getElementById(id)?.scrollIntoView(), 0);
  }, [hash, project]);

  return (
    <>
      <Navbar />
      {project ? (
        <ProjectDetails project={project} />
      ) : (
        <main>
          <Hero />
          <About />
          <Skills />
          <Timeline id="education" title="Education" items={education} />
          <Timeline id="experience" title="Experience" items={experience} />
          <Projects />
          <Contact />
        </main>
      )}
      <Footer />
    </>
  );
}
