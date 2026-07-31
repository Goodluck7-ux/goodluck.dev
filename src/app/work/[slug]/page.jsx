import { projects } from "@/lib/projects";
import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";

export function generateStaticParams() {
    return projects.map((p) => ({ slug: p.slug }));
}

export default async function CaseStudy({ params }) {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);
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

            <div className="relative w-full aspect-[16/10] rounded-[10px] overflow-hidden mb-8 bg-ink">
                <Image
                    src={project.screenshot}
                    alt={`${project.title} interface`}
                    fill
                    sizes="(max-width: 860px) 100vw, 860px"
                    className="object-cover object-top"
                />
            </div>

            <div className="flex flex-wrap gap-3 mb-10">
                {project.liveUrl && (

                    <a href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-cursor-hover
                        className="bg-ink text-paper px-5 py-3 rounded-full text-[13px] font-bold font-mono"
                    >
                        live demo ↗
                    </a>
                )}
                {project.githubUrl && (

                    <a href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-cursor-hover
                        className="border border-ink px-5 py-3 rounded-full text-[13px] font-bold font-mono hover:bg-ink hover:text-paper transition-colors"
                    >
                        view code
                    </a>
                )
                }
            </div >

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

            <div className="flex flex-col gap-8 max-w-[640px]">
                {project.problem && (
                    <div>
                        <p className="font-mono text-[11px] text-coral font-bold mb-2">THE PROBLEM</p>
                        <p className="text-[15px] text-ink-soft leading-[1.75]">{project.problem}</p>
                    </div>
                )}
                {project.fix && (
                    <div>
                        <p className="font-mono text-[11px] text-coral font-bold mb-2">WHAT I BUILT</p>
                        <p className="text-[15px] text-ink-soft leading-[1.75]">{project.fix}</p>
                    </div>
                )}
            </div>
        </div >
    );
}