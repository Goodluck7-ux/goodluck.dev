"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
    const cursorRef = useRef(null);
    const ringRef = useRef(null);
    const [enabled, setEnabled] = useState(false);

    useEffect(() => {
        // Never enable on touch devices — there's no cursor to replace, and
        // cursor:none would just make the page unusable on mobile.
        const isTouch = window.matchMedia("(pointer: coarse)").matches;
        if (isTouch) return;
        setEnabled(true);

        let mx = 0, my = 0, rx = 0, ry = 0;
        let raf;

        const handleMove = (e) => {
            mx = e.clientX;
            my = e.clientY;
            if (cursorRef.current) {
                cursorRef.current.style.left = `${mx}px`;
                cursorRef.current.style.top = `${my}px`;
            }
        };

        const animateRing = () => {
            rx += (mx - rx) * 0.15;
            ry += (my - ry) * 0.15;
            if (ringRef.current) {
                ringRef.current.style.left = `${rx}px`;
                ringRef.current.style.top = `${ry}px`;
            }
            raf = requestAnimationFrame(animateRing);
        };

        window.addEventListener("mousemove", handleMove);
        animateRing();

        const interactive = document.querySelectorAll("a, button, [data-cursor-hover]");
        const grow = () => {
            if (ringRef.current) {
                ringRef.current.style.width = "48px";
                ringRef.current.style.height = "48px";
                ringRef.current.style.borderColor = "var(--color-coral)";
            }
        };
        const shrink = () => {
            if (ringRef.current) {
                ringRef.current.style.width = "30px";
                ringRef.current.style.height = "30px";
                ringRef.current.style.borderColor = "var(--color-ink)";
            }
        };
        interactive.forEach((el) => {
            el.addEventListener("mouseenter", grow);
            el.addEventListener("mouseleave", shrink);
        });

        return () => {
            window.removeEventListener("mousemove", handleMove);
            cancelAnimationFrame(raf);
            interactive.forEach((el) => {
                el.removeEventListener("mouseenter", grow);
                el.removeEventListener("mouseleave", shrink);
            });
        };
    }, []);

    if (!enabled) return null;

    return (
        <>
            <div
                ref={ringRef}
                className="fixed top-0 left-0 w-[30px] h-[30px] rounded-full border-[1.5px] border-ink pointer-events-none z-[998] -translate-x-1/2 -translate-y-1/2 transition-[width,height,border-color] duration-200 hidden md:block"
            />
            <div
                ref={cursorRef}
                className="fixed top-0 left-0 w-[10px] h-[10px] rounded-full bg-coral pointer-events-none z-[999] -translate-x-1/2 -translate-y-1/2 hidden md:block"
            />
        </>
    );
}