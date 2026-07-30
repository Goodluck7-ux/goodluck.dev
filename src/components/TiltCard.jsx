"use client";

import { useRef } from "react";

export default function TiltCard({ children, className = "" }) {
    const ref = useRef(null);

    const handleMove = (e) => {
        const el = ref.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        el.style.transform = `rotateY(${x * 8}deg) rotateX(${-y * 8}deg) translateY(-4px)`;
        el.style.boxShadow = `${x * 20}px ${10 - y * 10}px 40px rgba(16,14,21,0.15)`;
    };

    const handleLeave = () => {
        const el = ref.current;
        if (!el) return;
        el.style.transform = "rotateY(0) rotateX(0) translateY(0)";
        el.style.boxShadow = "none";
    };

    return (
        <div style={{ perspective: "1000px" }}>
            <div
                ref={ref}
                onMouseMove={handleMove}
                onMouseLeave={handleLeave}
                className={`transition-[transform,box-shadow] duration-100 ease-out ${className}`}
            >
                {children}
            </div>
        </div>
    );
}