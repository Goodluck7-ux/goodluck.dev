import Sidebar from "@/components/Sidebar";
import Reveal from "@/components/Reveal";
import TiltCard from "@/components/TiltCard";
import MagneticButton from "@/components/MagneticButton";
import TypingCode from "@/components/TypingCode";
import { projects } from "@/lib/projects";

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
            <h1 className="font-display text-[36px] sm:text-[46px] md:text-[52px] leading-[1.05] font-extrabold tracking-tight mb-6">
              I build{" "}
              <span className="bg-[linear-gradient(180deg,transparent_62%,var(--color-coral)_62%)]">
                products
              </span>
              , not tutorials.
            </h1>
            <div className="text-[15px] sm:text-[15.5px] text-ink-soft leading-[1.75] flex flex-col gap-4">
              <p>
                A year into full-stack development, <span className="text-ink font-bold">five production-shaped projects in</span> — real auth, real databases, real AI integrations, each one shipped and deployed, not demoed once and forgotten.
              </p>
            </div>

            <TypingCode />

            <MagneticButton className="mt-7">

              <a href="#work"
                className="bg-ink text-paper px-6 py-[13px] rounded-full text-[13px] font-bold font-mono"
              >
                view work →
              </a>
            </MagneticButton>
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
                    <div
                      className="min-h-[200px] p-6"
                      style={{ background: "linear-gradient(160deg,#100E15,#1C1826)" }}
                    >
                      <div className="h-2 rounded-sm bg-coral/60 w-[35%] mb-2.5" />
                      <div className="h-2 rounded-sm bg-[#2A2636] w-[65%] mb-3" />
                      <div className="h-12 rounded-md bg-[#1C1826] border border-[#2A2636] flex items-center px-3.5 gap-2.5 mb-2.5">
                        <span className="w-2 h-2 rounded-full bg-violet flex-shrink-0" />
                        <div className="h-2 rounded-sm bg-[#2A2636] w-[55%]" />
                      </div>
                      <div className="h-12 rounded-md bg-[#1C1826] border border-[#2A2636] flex items-center px-3.5 gap-2.5">
                        <span className="w-2 h-2 rounded-full bg-[#3E9F5C] flex-shrink-0" />
                        <div className="h-2 rounded-sm bg-[#2A2636] w-[38%]" />
                      </div>
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

                <a href={`/work/${project.slug}`}
                  data-cursor-hover
                  className="font-mono text-[13px] font-bold text-ink border-b-2 border-coral pb-0.5"
                >
                  view case study →
                </a>
              </Reveal>
            ))}
          </div>
        </section >

        {/* Contact */}
        < section id="contact" className="max-w-[640px] scroll-mt-10" >
          <Reveal>
            <div className="flex items-center gap-3 mb-5">
              <span className="font-mono text-[12px] text-coral font-bold">04 — GET IN TOUCH</span>
              <div className="flex-1 h-px bg-line" />
            </div>
            <h2 className="font-display text-[26px] sm:text-[32px] font-extrabold tracking-tight mb-4">
              Open to freelance work, remote roles, and internships.
            </h2>
            <p className="text-[15px] text-ink-soft leading-relaxed max-w-[460px] mb-7">
              Currently taking on new freelance projects and open to remote full-time roles. If something here resonates, I&apos;d like to hear from you.
            </p>
            <div className="flex flex-wrap gap-3">
              <MagneticButton>

                <a href="mailto:your.email@example.com"
                  className="bg-ink text-paper px-6 py-[13px] rounded-full text-[13px] font-bold font-mono"
                >
                  email me →
                </a>
              </MagneticButton>

              <a href="https://github.com/your-username"
                target="_blank"
                rel="noopener noreferrer"
                data-cursor-hover
                className="border border-ink px-6 py-[13px] rounded-full text-[13px] font-bold font-mono hover:bg-ink hover:text-paper transition-colors"
              >
                GitHub
              </a>

              <a href="https://linkedin.com/in/your-username"
                target="_blank"
                rel="noopener noreferrer"
                data-cursor-hover
                className="border border-ink px-6 py-[13px] rounded-full text-[13px] font-bold font-mono hover:bg-ink hover:text-paper transition-colors"
              >
                LinkedIn
              </a >
            </div >
          </Reveal >
        </section >
      </main >
    </div >
  );
}