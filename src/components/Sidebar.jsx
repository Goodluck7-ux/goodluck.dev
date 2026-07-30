"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import ThemeToggle from "./ThemeToggle";

const navItems = [
    { id: "about", num: "01.", label: "about" },
    { id: "experience", num: "02.", label: "experience" },
    { id: "work", num: "03.", label: "work" },
    { id: "services", num: "04.", label: "services" },
    { id: "contact", num: "05.", label: "contact" },
];

export default function Sidebar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeId, setActiveId] = useState("about");

    useEffect(() => {
        const sections = navItems
            .map((item) => document.getElementById(item.id))
            .filter(Boolean);

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) setActiveId(entry.target.id);
                });
            },
            { threshold: 0.4 }
        );

        sections.forEach((section) => observer.observe(section));
        return () => observer.disconnect();
    }, []);

    return (
        <>
            {/* Mobile top bar — everything below is inside ONE wrapper, hidden at md and up */}
            <div className="md:hidden sticky top-0 z-50 flex items-center justify-between px-5 py-4 border-b border-line bg-paper/90 backdrop-blur-sm">
                <div className="flex items-center gap-2.5">
                    <Image
                        src="/profile.jpg"
                        alt="Goodluck Michael"
                        width={32}
                        height={32}
                        className="rounded-full object-cover border-2 border-ink"
                        priority
                    />
                    <span className="font-display text-[16px] font-bold tracking-tight">
                        Goodluck Michael O.
                    </span>
                </div>
                <div className="flex items-center gap-2">
                    <ThemeToggle />
                    <button
                        onClick={() => setMenuOpen(true)}
                        aria-label="Open menu"
                        className="w-9 h-9 flex items-center justify-center rounded-full border border-line"
                    >
                        <span className="font-mono text-[16px]">≡</span>
                    </button>
                </div>
            </div>

            {/* Mobile slide-in overlay menu */}
            {menuOpen && (
                <div className="md:hidden fixed inset-0 z-50 bg-paper flex flex-col px-6 py-5">
                    <div className="flex items-center justify-between mb-10">
                        <span className="font-display text-[17px] font-bold">Goodluck Michael</span>
                        <button
                            onClick={() => setMenuOpen(false)}
                            aria-label="Close menu"
                            className="w-9 h-9 flex items-center justify-center rounded-full border border-line"
                        >
                            <span className="font-mono text-[18px]">×</span>
                        </button>
                    </div>
                    <nav className="flex flex-col gap-6">
                        {navItems.map((item) => (

                            <a key={item.id}
                                href={`#${item.id}`}
                                onClick={() => setMenuOpen(false)}
                                className="flex items-center gap-3 text-[20px] font-display font-semibold"
                            >
                                <span className="text-coral text-[14px] font-mono">{item.num}</span>
                                {item.label}
                            </a>
                        ))}
                    </nav>
                    <div className="mt-auto flex gap-5">

                        <a href="https://github.com/Goodluck7-ux"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[13px] font-mono text-ink-soft"
                        >
                            github
                        </a>
                        <span className="text-[13px] font-mono text-ink-soft/50 cursor-default">
                            linkedin · soon
                        </span>
                        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="text-[13px] font-mono text-ink-soft">
                            résumé ↗
                        </a>
                    </div>
                </div>
            )}

            {/* Desktop sidebar — completely separate from the mobile bar above */}
            <aside className="hidden md:flex md:sticky md:top-0 md:h-screen border-r border-line px-9 py-14 flex-col justify-between">
                <div>
                    <div className="flex items-start justify-between gap-3 mb-4">
                        <Image
                            src="/profile.jpg"
                            alt="Goodluck Michael"
                            width={56}
                            height={56}
                            className="rounded-full object-cover border-2 border-ink"
                            priority
                        />
                        <ThemeToggle />
                    </div>
                    <p className="font-display text-[24px] font-bold tracking-tight mb-1.5">
                        Goodluck Michael O.
                    </p>
                    <p className="text-[13.5px] text-ink-soft mb-10 max-w-[220px] leading-relaxed">
                        Full-stack developer building real, production-shaped software.
                    </p>
                </div>

                <nav className="flex flex-col gap-[18px]">
                    {navItems.map((item) => {
                        const isActive = activeId === item.id;
                        return (

                            <a key={item.id}
                                href={`#${item.id}`}
                                data-cursor-hover
                                className={`relative flex items-baseline gap-2.5 text-[13px] font-mono font-semibold transition-colors ${isActive ? "text-ink" : "text-ink-soft hover:text-ink"
                                    }`}
                            >
                                {isActive && (
                                    <span className="absolute -left-9 top-1/2 -translate-y-1/2 w-5 h-[1.5px] bg-coral" />
                                )}
                                <span className={isActive ? "text-coral" : "text-[#A8A3B5]"}>{item.num}</span>
                                {item.label}
                            </a>
                        );
                    })}
                </nav>

                <div className="mt-auto flex gap-4 pt-10 border-t border-line">

                    <a href="https://github.com/Goodluck7-ux"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[12px] font-mono text-ink-soft hover:text-coral transition-colors mt-4"
                    >
                        github
                    </a>
                    <span className="text-[12px] font-mono text-ink-soft/50 cursor-default mt-4">
                        linkedin · soon
                    </span>

                    <a href="/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[12px] font-mono text-ink-soft hover:text-coral transition-colors mt-4"
                    >
                        résumé ↗
                    </a>
                </div>
            </aside>
        </>
    );
}