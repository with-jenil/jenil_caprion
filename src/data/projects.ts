
export interface Project {
    title: string;
    slug: string;
    category: string;
    description: string;
    fullDescription?: string;
    tags: string[];
    image: string;
    gradient: string;
    liveUrl?: string;
}

export const projects: Project[] = [
    {
        title: "My Sambandh",
        slug: "my-sambandh",
        category: "Matrimonial Platform",
        description: "Premium matchmaking service with holistic grooming and relationship management features.",
        fullDescription: "My Sambandh is a premium matchmaking service designed to help individuals find their perfect life partner. The platform offers a unique blend of traditional matchmaking values and modern technology, featuring holistic grooming sessions, personalized relationship management, and advanced compatibility algorithms.",
        tags: ["Next.js", "Node.js", "MongoDB", "AWS"],
        image: "/images/Gemini_Generated_Image_jyuq3rjyuq3rjyuq.png",
        gradient: "from-rose-500/20 to-orange-600/20",
        liveUrl: "https://mysambandh.com/",
    },
    {
        title: "Georgia Natural Gas",
        slug: "georgia-natural-gas",
        category: "Georgia government platform",
        description: "Official website of Georgia Natural Gas, a leading natural gas provider in Georgia.",
        fullDescription: "The official platform for Georgia Natural Gas provides customers with easy access to their accounts, bill payment options, service management, and energy-saving tips. The site emphasizes user-friendly navigation and secure data handling.",
        tags: ["React", "php", "sql"],
        image: "/images/GeorgiaNaturalGas.png",
        gradient: "from-emerald-500/20 to-teal-600/20",
        liveUrl: "https://gng.com/",
    },
    {
        title: "E-Commerce Engine",
        slug: "e-commerce-engine",
        category: "Web Application",
        description: "Scalable e-commerce platform with custom checkout flows and inventory management.",
        fullDescription: "A robust and scalable e-commerce engine built to handle high traffic and complex inventory requirements. Features include a customizable checkout flow, real-time inventory tracking, and seamless integration with payment gateways like Stripe.",
        tags: ["Next.js", "Stripe", "MongoDB", "AWS"],
        image: "/images/ecommerce-engine.png",
        gradient: "from-teal-500/20 to-cyan-600/20",
    },
    {
        title: "Healthcare Portal",
        slug: "healthcare-portal",
        category: "Enterprise Solution",
        description: "HIPAA-compliant patient management system with telehealth integration.",
        fullDescription: "An enterprise-grade patient management system designed with HIPAA compliance at its core. It facilitates secure patient data storage, appointment scheduling, and integrated telehealth video consultations.",
        tags: ["TypeScript", "GraphQL", "Docker", "Azure"],
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=2070",
        gradient: "from-green-500/20 to-emerald-600/20",
    },
    {
        title: "AI Marketing Tool",
        slug: "ai-marketing-tool",
        category: "SaaS Application",
        description: "Automated social media marketing platform with content generation and scheduling.",
        fullDescription: "This SaaS application leverages OpenAI's API to generate engaging social media content. It includes features for automated scheduling, analytics tracking, and multi-platform publishing.",
        tags: ["Python", "FastAPI", "React", "OpenAI"],
        image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=1974",
        gradient: "from-purple-500/20 to-pink-600/20",
    },
];
