import { projects } from "@/lib/projects";
import Sidebar from "@/components/Sidebar";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams() {
    return projects.map((p) => ({ slug: p.slug }));
}

export default function CaseStudy({ params }) {
    const project = projects.find((p) => p.slug === params.slug);
    if (!project) notFound();

    return (
        <div className="max-w-[860px] mx-auto px-6 sm:px-10 py-14">
            <Link
                href="/#work"
                data-cursor-hover
                className="font-mono text-[13px] text-ink-soft hover:text-coral transition-colors"
            >
                ← back to work
            </Link>

            <p className="font-mono text-[11px] font-extrabold text-violet tracking-wide mt-8">
                {project.tag}
            </p>
            <h1 className="font-display text-[34px] sm:text-[44px] font-extrabold tracking-tight mt-2 mb-6">
                {project.title}
            </h1>

            <div
                className="rounded-[10px] overflow-hidden mb-10"
                style={{ background: "linear-gradient(160deg,#100E15,#1C1826)" }}
            >
                <div className="min-h-[280px] flex items-center justify-center font-mono text-[12px] text-[#6b6480]">
                    [ {project.title} screenshot ]
                </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-10">
                {project.stack.map((tech) => (
                    <span
                        key={tech}
                        className="text-[11px] px-2.5 py-1 rounded-full bg-paper border border-ink text-ink font-mono font-bold"
                    >
                        {tech}
                    </span>
                ))}
            </div>

            <div className="text-[15.5px] text-ink-soft leading-[1.75] flex flex-col gap-5 max-w-[640px]">
                <p>{project.description}</p>
                <p className="italic text-[14px]">
                    Full case study write-up coming soon — the problem, the decisions, and what I&apos;d do differently.
                </p>
            </div>
        </div>
    );
}