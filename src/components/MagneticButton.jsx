"use client";

import { useRef } from "react";

export default function MagneticButton({ children, className = "", ...props }) {
    const ref = useRef(null);

    const handleMove = (e) => {
        const el = ref.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        el.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
    };

    const handleLeave = () => {
        if (ref.current) ref.current.style.transform = "translate(0, 0)";
    };

    return (
        <span
            ref={ref}
            onMouseMove={handleMove}
            onMouseLeave={handleLeave}
            className={`inline-flex transition-transform duration-150 ease-out ${className}`}
            data-cursor-hover
            {...props}
        >
            {children}
        </span>
    );
}