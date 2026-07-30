"use client";

import { useState, useEffect } from "react";

export default function ThemeToggle() {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        setIsDark(document.documentElement.classList.contains("dark"));
    }, []);

    const toggle = () => {
        const next = !isDark;
        setIsDark(next);
        document.documentElement.classList.toggle("dark", next);
        localStorage.setItem("theme", next ? "dark" : "light");
    };

    return (
        <button
            onClick={toggle}
            aria-label="Toggle dark mode"
            className="w-8 h-8 flex items-center justify-center rounded-full border border-line text-[13px] hover:border-ink transition-colors"
        >
            {isDark ? "☀" : "☾"}
        </button>
    );
}