"use client";

import { useEffect, useRef, useState } from "react";

const CODE_LINES = [
    { text: "const mentor = askDontAnswer(learner);", keyword: "const" },
    { text: "if (learner.stuck) {", keyword: "if" },
    { text: '  guideWith("diagnostic question");', str: true },
    { text: "}" },
];

export default function TypingCode() {
    const ref = useRef(null);
    const [started, setStarted] = useState(false);
    const [displayedLines, setDisplayedLines] = useState([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !started) {
                    setStarted(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.5 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [started]);

    useEffect(() => {
        if (!started) return;

        let lineIndex = 0;
        let charIndex = 0;
        let timeoutId;

        const typeNextChar = () => {
            if (lineIndex >= CODE_LINES.length) return;

            const fullText = CODE_LINES[lineIndex].text;
            charIndex++;

            setDisplayedLines((prev) => {
                const next = [...prev];
                next[lineIndex] = fullText.slice(0, charIndex);
                return next;
            });

            if (charIndex < fullText.length) {
                timeoutId = setTimeout(typeNextChar, 14);
            } else {
                lineIndex++;
                charIndex = 0;
                timeoutId = setTimeout(typeNextChar, 150);
            }
        };

        typeNextChar();
        return () => clearTimeout(timeoutId);
    }, [started]);

    return (
        <div
            ref={ref}
            className="bg-ink text-ink-soft rounded-[10px] px-6 py-[22px] mt-7 font-mono text-[12.5px] leading-[1.8] min-h-[110px]"
        >
            {displayedLines.map((line, i) => (
                <p key={i} className="m-0 mb-1 whitespace-pre">
                    {line}
                    {i === displayedLines.length - 1 && (
                        <span className="inline-block w-[7px] h-[14px] bg-coral ml-0.5 align-middle animate-caret" />
                    )}
                </p>
            ))}
        </div>
    );
}