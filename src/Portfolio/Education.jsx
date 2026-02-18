import React from 'react';

const Education = () => {
    const certifications = [
        "JavaScript Fundamentals (Great Learning)",
        "Front-End Web Development (Coursera)",
        "Responsive Web Design (Coursera)",
        "UI/UX Design Fundamentals (Coursera)"
    ];

    return (
        <section id="education" className="bg-[#0a0a0a] text-white py-20 px-4 md:px-10 font-sans">
            <div className="container mx-auto max-w-5xl">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">Education & Certifications</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        My academic background and professional certifications.
                    </p>
                </div>

                {/* Education Section */}
                <div className="mb-16">
                    <h3 className="text-2xl font-bold mb-8 flex items-center text-blue-400">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                        </svg>
                        Education
                    </h3>

                    <div className="bg-white/5 border border-white/10 p-8 rounded-2xl flex flex-col md:flex-row justify-between items-start md:items-center hover:bg-white/10 transition duration-300">
                        <div>
                            <h4 className="text-xl md:text-2xl font-bold mb-2">B.E. Computer Science and Engineering</h4>
                            <p className="text-gray-400 text-lg">MET Engineering College</p>
                        </div>
                        <span className="bg-blue-600/20 text-blue-400 py-1 px-4 rounded-full text-sm font-semibold mt-4 md:mt-0">
                            2024
                        </span>
                    </div>
                </div>

                {/* Certifications Section */}
                <div>
                    <h3 className="text-2xl font-bold mb-8 flex items-center text-blue-400">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Certifications
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {certifications.map((cert, index) => (
                            <div key={index} className="bg-white/5 border border-white/10 p-6 rounded-xl flex items-center hover:bg-white/10 transition duration-300">
                                <span className="w-2 h-2 bg-blue-500 rounded-full mr-4"></span>
                                <span className="text-gray-200 font-medium">{cert}</span>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Education;
