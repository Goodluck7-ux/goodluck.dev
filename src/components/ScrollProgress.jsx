"use client";

import { useEffect, useState } from "react";

export default function ScrollProgress() {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const h = document.documentElement;
            const scrollable = h.scrollHeight - h.clientHeight;
            const pct = scrollable > 0 ? (h.scrollTop / scrollable) * 100 : 0;
            setProgress(pct);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div
            className="fixed top-0 left-0 h-[2.5px] bg-coral z-[1000] transition-[width] duration-75"
            style={{ width: `${progress}%` }}
        />
    );
}