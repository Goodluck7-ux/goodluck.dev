export const projects = [
    {
        slug: "engineering-os",
        tag: "AI-POWERED LEARNING PLATFORM",
        screenshot: "/screenshots/engineering-os.png",
        title: "Engineering OS",
        description:
            "An end-to-end learning platform with a Socratic AI mentor, structured code review, and a 9-stage mission pipeline.",
        problem:
            "Most platforms that teach software engineering are built like online courses — videos, quizzes, isolated exercises — even though nobody actually learns to engineer that way.",
        fix:
            "An AI mentor built to ask diagnostic questions instead of giving answers, a 9-stage mission pipeline (Concept through Reflection), real auth and progress tracking, and a structured AI code review pipeline — all built end to end, including a cost-safe mock mode so the mentor and reviewer work identically with or without a live API key.",
        stack: ["Next.js", "MongoDB", "Claude API", "Auth.js"],
        liveUrl: "https://engineering-os-lime.vercel.app/",
        githubUrl: "",
        featured: true,
    },
    {
        slug: "hopelight",
        tag: "FULL-STACK / CUSTOM PAYMENT FLOW",
        screenshot: "/screenshots/hopelight.png",
        title: "Hopelight",
        description:
            "A donation platform built to help non-profits accept local bank transfers in places where Stripe isn't available.",
        problem:
            "Standard payment systems like Stripe don't work everywhere, making it hard for local organizations to collect donations online.",
        fix:
            "A custom transfer verification flow — donors send money directly and upload a receipt, with status tracked from pending through verified to approved so organizers can confirm payments easily.",
        stack: ["Next.js", "MongoDB", "Resend"],
        liveUrl: "https://globaloutreach.vercel.app/",
        githubUrl: "",
        featured: false,
    },
    {
        slug: "aegis-trust-fund",
        tag: "FRONTEND & STATE MANAGEMENT",
        screenshot: "/screenshots/aegis-trust-fund.png",
        title: "Aegis Trust Fund",
        description:
            "A digital asset management platform demo showing how real-world financial apps handle user activity smoothly.",
        problem:
            "Financial dashboards need to feel instantly responsive without hammering the database on every user action.",
        fix:
            "Search debouncing to cut unnecessary requests, an in-app notification center for real-time updates, and JWT-secured sessions protecting account pages.",
        stack: ["Next.js", "MongoDB"],
        liveUrl: "https://trust-fund-one.vercel.app/",
        githubUrl: "",
        featured: false,
    },
];