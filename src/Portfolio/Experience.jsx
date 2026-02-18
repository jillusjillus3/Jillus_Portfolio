import React from 'react';

const Experience = () => {
    const experiences = [
        {
            company: "ITOI Technologies",
            role: "Front-End Developer",
            period: "Nov 2024 – Present",
            description: "Developed SEO-optimized and high-performance web applications using Next.js. Built reusable and accessible UI components with Tailwind CSS and shadcn/ui. Implemented efficient data fetching using TanStack Query and integrated REST APIs."
        },
        {
            company: "Kanini Data Solutions",
            role: "XML Developer",
            period: "Sep 2024 – Oct 2024",
            description: "Converted and maintained structured XML content with high accuracy and consistency."
        }
    ];

    return (
        <section id="experience" className="bg-[#0a0a0a] text-white py-20 px-4 md:px-10 font-sans">
            <div className="container mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">Experience</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        My professional journey and career highlights.
                    </p>
                </div>

                <div className="relative max-w-4xl mx-auto">
                    {/* Vertical Line */}
                    <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-blue-900/40 md:-translate-x-1/2"></div>

                    {experiences.map((exp, index) => (
                        <div key={index} className={`relative flex flex-col md:flex-row items-center mb-12 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>

                            {/* Spacer for desktop alignment */}
                            <div className="hidden md:block w-1/2"></div>

                            {/* Timeline Node/Icon */}
                            <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center w-10 h-10 bg-blue-600 rounded-full border-4 border-[#0a0a0a] z-10 shadow-lg shadow-blue-500/20">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>

                            {/* Content Card */}
                            <div className={`w-full md:w-1/2 pl-20 md:pl-0 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                                <div className="bg-white/5 border border-white/10 p-6 rounded-xl hover:bg-white/10 transition duration-300">
                                    <h4 className="text-blue-400 font-bold mb-1 text-sm flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                        {exp.period}
                                    </h4>
                                    <h3 className="text-2xl font-bold mb-1">{exp.role}</h3>
                                    <p className="text-gray-400 font-medium mb-4">{exp.company}</p>
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        {exp.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
