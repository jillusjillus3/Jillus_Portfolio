import React from 'react';

const Project = () => {
    const projects = [
        {
            title: "Teledoctor",
            category: "Frontend / Partial Backend",
            image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
            description: "A telemedicine platform frontend built with Next.js, featuring secure login and user-friendly interface for digital health services.",
            tags: ["#Next.js", "#React", "#Tailwind CSS"]
        },
        {
            title: "Church Management System",
            category: "Frontend",
            image: "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1473&q=80",
            description: "A comprehensive management system for churches to handle memberships, events, and community outreach in one unified dashboard.",
            tags: ["#Angular", "#Tailwind CSS"]
        }
    ];

    return (
        <section id="projects" className="bg-[#0a0a0a] text-white py-20 px-4 md:px-10 font-sans">
            <div className="container mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto mb-8">
                        A selection of projects that demonstrate my skills and passion for building.
                    </p>
                    <button className="bg-blue-600/20 text-blue-400 py-2 px-6 rounded-full font-semibold hover:bg-blue-600/30 transition duration-300">
                        Projects
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-[#111] rounded-2xl overflow-hidden border border-white/10 hover:border-blue-500/50 transition duration-300 group">
                            {/* Image Container with Overlay */}
                            <div className="relative h-64 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
                                />
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition duration-300"></div>
                                <div className="absolute top-4 right-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                                    {project.category}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-8">
                                <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-400 transition duration-300">{project.title}</h3>
                                <p className="text-gray-400 mb-6 leading-relaxed">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-3">
                                    {project.tags.map((tag, idx) => (
                                        <span key={idx} className="text-gray-500 text-sm font-medium">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Project;
