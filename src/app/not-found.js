import Link from "next/link";

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
            <p className="font-mono text-[13px] text-coral font-bold mb-4">404</p>
            <h1 className="font-display text-[32px] sm:text-[40px] font-extrabold tracking-tight mb-4">
                This page doesn&apos;t exist.
            </h1>
            <p className="text-[15px] text-ink-soft leading-relaxed max-w-[400px] mb-8">
                Whatever you were looking for isn&apos;t here — might&apos;ve been a bad link, or a project that hasn&apos;t shipped yet.
            </p>
            <Link
                href="/"
                data-cursor-hover
                className="bg-ink text-paper px-6 py-[13px] rounded-full text-[13px] font-bold font-mono"
            >
                back to home →
            </Link>
        </div>
    );
}