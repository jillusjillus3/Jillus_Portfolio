import React from 'react';

const Tech = () => {
    const techStack = [
        {
            category: "Primary Frontend",
            skills: ["React.js", "Next.js", "JavaScript (ES6+)", "TypeScript", "Modern React Hooks", "Component-based Architecture", "Client-side Rendering (CSR) & SSR"]
        },
        {
            category: "UI & Styling",
            skills: ["Tailwind CSS", "shadcn/ui", "Responsive Web Design", "Accessibility (a11y) Basics", "Modern UI Component Architecture", "Cross-Browser Compatibility"]
        },
        {
            category: "State & Data",
            skills: ["TanStack Query (React Query)", "Server State Management", "REST API Integration", "Client-side State Management", "Optimistic Updates", "Caching & Background Refetching", "Performance Optimization"]
        },
        {
            category: "Supporting",
            skills: ["Angular (Basic)", "NestJS (Basic)", "Prisma ORM (Basic)"]
        },
        {
            category: "Databases",
            skills: ["SQL (Basic)", "Relational Database Fundamentals", "PostgreSQL", "MySQL"]
        },
        {
            category: "Tools",
            skills: ["Git (Version Control)", "GitHub", "Git Bash", "VS Code", "Google Antigravity (AI-Powered IDE)"]
        }
    ];

    return (
        <section id="tech" className="bg-[#0a0a0a] text-white py-20 px-4 md:px-10 font-sans">
            <div className="container mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">Tech Stack</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        A curated list of technologies I use to build scalable and performant applications.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {techStack.map((tech, index) => (
                        <div key={index} className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition duration-300">
                            <div className="flex items-center mb-6">
                                <span className="w-8 h-1 bg-blue-500 rounded-full mr-3"></span>
                                <h3 className="text-xl font-bold">{tech.category}</h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {tech.skills.map((skill, idx) => (
                                    <span key={idx} className="bg-white/10 text-gray-300 text-sm py-1.5 px-3 rounded-full hover:bg-white/20 transition cursor-default">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Tech;
