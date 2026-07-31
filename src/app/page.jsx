import Sidebar from "@/components/Sidebar";
import Reveal from "@/components/Reveal";
import TiltCard from "@/components/TiltCard";
import MagneticButton from "@/components/MagneticButton";
import TypingCode from "@/components/TypingCode";
import { projects } from "@/lib/projects";
import Image from "next/image";

const TECH_SNAPSHOT = ["Next.js", "React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "JavaScript (ES6+)", "Git"];

const SERVICES = [
  {
    title: "Web App Development (MVPs)",
    body: "Clean web applications with secure user logins, working databases, and responsive dashboards — built from scratch.",
    tools: "Next.js · Node.js · MongoDB",
  },
  {
    title: "Custom Checkout & Payment Flows",
    body: "Custom payment flows and receipt tracking for businesses standard tools like Stripe don't fully support.",
    tools: "Custom Workflows · File Uploads · APIs",
  },
  {
    title: "Website Redesign & Speed-Up",
    body: "Rebuilds with Next.js and Tailwind so an existing site loads fast on mobile and looks current.",
    tools: "Tailwind CSS · Next.js · Responsive Design",
  },
];

const PROCESS = [
  { n: "01", t: "Discovery & Chat", d: "We talk through your project goals and what you need built." },
  { n: "02", t: "Build & Updates", d: "I build your app while sharing regular progress updates." },
  { n: "03", t: "Launch & Hand-off", d: "We go live, test everything together, and I walk you through managing it." },
];

export default function Home() {
  return (
    <div className="md:grid md:grid-cols-[300px_1fr] max-w-[1280px] mx-auto">
      <Sidebar />

      <main className="px-6 sm:px-10 md:px-14 py-12 md:py-16">
        {/* About */}
        <section id="about" className="max-w-[640px] mb-24 md:mb-32 scroll-mt-10">
          <Reveal>
            <div className="flex items-center gap-3 mb-5">
              <span className="font-mono text-[12px] text-coral font-bold">01</span>
              <div className="flex-1 h-px bg-line" />
            </div>

            <h1 className="font-display text-[34px] sm:text-[44px] md:text-[50px] leading-[1.08] font-extrabold tracking-tight mb-6">
              I build fast, easy-to-use web apps that{" "}
              <span className="bg-[linear-gradient(180deg,transparent_62%,var(--color-coral)_62%)]">
                actually solve problems.
              </span>
            </h1>

            <div className="text-[15px] sm:text-[15.5px] text-ink-soft leading-[1.75] flex flex-col gap-4">
              <p>
                A year into full-stack development, working mainly with Next.js, Node.js, MongoDB, and Tailwind — <span className="text-ink font-bold">five production-shaped projects in</span>, each one shipped and deployed, not demoed once and forgotten.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mt-5">
              {TECH_SNAPSHOT.map((t) => (
                <span key={t} className="text-[11px] px-2.5 py-1 rounded-full border border-line text-ink-soft font-mono">
                  {t}
                </span>
              ))}
            </div>

            <TypingCode />

            <div className="flex flex-wrap gap-3 mt-7">
              <MagneticButton>
                <a href="#work" className="bg-ink text-paper px-6 py-[13px] rounded-full text-[13px] font-bold font-mono">
                  check out my work ↓
                </a>
              </MagneticButton>
              <MagneticButton>
                <a href="#contact" className="border border-ink px-6 py-[13px] rounded-full text-[13px] font-bold font-mono hover:bg-ink hover:text-paper transition-colors">
                  work with me
                </a>
              </MagneticButton>
            </div>
          </Reveal>
        </section>

        {/* Experience */}
        <section id="experience" className="max-w-[640px] mb-24 md:mb-32 scroll-mt-10">
          <Reveal>
            <div className="flex items-center gap-3 mb-5">
              <span className="font-mono text-[12px] text-coral font-bold">02 — EXPERIENCE</span>
              <div className="flex-1 h-px bg-line" />
            </div>
            <div className="grid grid-cols-[90px_1fr] sm:grid-cols-[110px_1fr] gap-5 py-5 border-t border-line">
              <span className="font-mono text-[12px] text-ink-soft pt-0.5">2025 — now</span>
              <div>
                <h4 className="text-[15px] font-bold mb-1">Full-Stack Developer, Freelance</h4>
                <p className="text-[13.5px] text-ink-soft leading-relaxed">
                  Building production Next.js applications — payment platforms, marketplaces, and AI-integrated tools, end to end.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-[90px_1fr] sm:grid-cols-[110px_1fr] gap-5 py-5 border-t border-line">
              <span className="font-mono text-[12px] text-ink-soft pt-0.5">2025</span>
              <div>
                <h4 className="text-[15px] font-bold mb-1">Full-Stack Developer Certification, Next.js</h4>
                <p className="text-[13.5px] text-ink-soft leading-relaxed">
                  Elite Corporation internship — hands-on full-stack engineering across the Next.js ecosystem.
                </p>
              </div>
            </div>
          </Reveal>
        </section>

        {/* Work */}
        <section id="work" className="max-w-[640px] mb-24 md:mb-32 scroll-mt-10">
          <Reveal>
            <div className="flex items-center gap-3 mb-5">
              <span className="font-mono text-[12px] text-coral font-bold">03 — SELECTED WORK</span>
              <div className="flex-1 h-px bg-line" />
            </div>
          </Reveal>

          <div className="flex flex-col gap-16">
            {projects.map((project) => (
              <Reveal key={project.slug}>
                <TiltCard>

                  <a href={`/work/${project.slug}`}
                    data-cursor-hover
                    className="block border border-line rounded-[10px] overflow-hidden mb-5"
                  >
                    <div className="flex items-center gap-1.5 px-3.5 py-2.5 bg-ink">
                      <span className="w-2 h-2 rounded-full bg-[#2A2636]" />
                      <span className="w-2 h-2 rounded-full bg-[#2A2636]" />
                      <span className="w-2 h-2 rounded-full bg-[#2A2636]" />
                      <span className="ml-2 font-mono text-[10.5px] text-[#6b6480]">
                        {project.slug}.vercel.app
                      </span>
                    </div>
                    <div className="relative w-full aspect-[16/10] bg-ink">
                      <Image
                        src={project.screenshot}
                        alt={`${project.title} interface`}
                        fill
                        sizes="(max-width: 768px) 100vw, 640px"
                        className="object-cover object-top"
                      />
                    </div>
                  </a>
                </TiltCard>

                <p className="font-mono text-[11px] font-extrabold text-violet tracking-wide">
                  {project.tag}
                </p>
                <h3 className="font-display text-[21px] font-extrabold mt-2 mb-2">
                  {project.title}
                </h3>
                <p className="text-[14px] text-ink-soft leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] px-2.5 py-1 rounded-full bg-paper border border-ink text-ink font-mono font-bold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 items-center flex-wrap">

                  <a href={`/work/${project.slug}`}
                    data-cursor-hover
                    className="font-mono text-[13px] font-bold text-ink border-b-2 border-coral pb-0.5"
                  >
                    view case study →
                  </a>
                  {project.liveUrl && (

                    <a href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-cursor-hover
                      className="font-mono text-[13px] font-bold text-ink-soft hover:text-coral transition-colors"
                    >
                      live demo ↗
                    </a>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Services */}
        <section id="services" className="max-w-[640px] mb-24 md:mb-32 scroll-mt-10">
          <Reveal>
            <div className="flex items-center gap-3 mb-5">
              <span className="font-mono text-[12px] text-coral font-bold">04 — HOW I CAN HELP</span>
              <div className="flex-1 h-px bg-line" />
            </div>
            <p className="text-[15px] text-ink-soft leading-relaxed mb-8 max-w-[560px]">
              Available for freelance projects alongside remote roles and internships.
            </p>

            <div className="flex flex-col gap-5 mb-12">
              {SERVICES.map((s) => (
                <div key={s.title} className="border border-line rounded-[10px] p-6">
                  <h4 className="font-display text-[17px] font-bold mb-2">{s.title}</h4>
                  <p className="text-[13.5px] text-ink-soft leading-relaxed mb-3">{s.body}</p>
                  <p className="text-[11px] font-mono text-ink-soft">{s.tools}</p>
                </div>
              ))}
            </div>

            <p className="font-mono text-[12px] text-ink-soft mb-4">HOW WE&apos;D WORK TOGETHER</p>
            <div className="flex flex-col gap-4">
              {PROCESS.map((step) => (
                <div key={step.n} className="flex gap-4">
                  <span className="font-mono text-[12px] text-coral font-bold pt-0.5">{step.n}</span>
                  <div>
                    <p className="text-[14px] font-bold">{step.t}</p>
                    <p className="text-[13px] text-ink-soft">{step.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        {/* Contact */}
        <section id="contact" className="max-w-[640px] scroll-mt-10">
          <Reveal>
            <div className="flex items-center gap-3 mb-5">
              <span className="font-mono text-[12px] text-coral font-bold">05 — GET IN TOUCH</span>
              <div className="flex-1 h-px bg-line" />
            </div>
            <h2 className="font-display text-[26px] sm:text-[32px] font-extrabold tracking-tight mb-4">
              Let&apos;s build something together.
            </h2>
            <p className="text-[15px] text-ink-soft leading-relaxed max-w-[460px] mb-7">
              I&apos;m currently looking for remote software developer roles, internships, and freelance projects. If you have an idea, an open role, or just want to chat, feel free to reach out.
            </p>
            <div className="flex flex-wrap gap-3">
              <MagneticButton>

                <a href="mailto:goodluckmichael503@gmail.com"
                  className="bg-ink text-paper px-6 py-[13px] rounded-full text-[13px] font-bold font-mono"
                >
                  send me an email ✉
                </a>
              </MagneticButton>
              <MagneticButton>

                <a href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-ink px-6 py-[13px] rounded-full text-[13px] font-bold font-mono hover:bg-ink hover:text-paper transition-colors"
                >
                  download résumé 📄
                </a>
              </MagneticButton>
            </div>
          </Reveal>
        </section>
      </main>
    </div>
  );
}