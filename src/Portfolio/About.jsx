import React from 'react';

const About = () => {
    return (
        <section id="about" className="bg-[#0a0a0a] text-white py-20 px-4 md:px-10 font-sans">
            <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between">

                {/* Left Column: Text Content */}
                <div className="md:w-1/2 mb-10 md:mb-0 space-y-6">
                    <h3 className="text-[#3b82f6] font-bold tracking-wider text-sm uppercase">
                        Web Developer
                    </h3>

                    <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                        Hi, I'm <br />
                        <span className="text-[#3b82f6]">Jillus</span>
                    </h1>

                    <p className="text-gray-400 text-lg leading-relaxed max-w-lg">
                        Frontend developer passionate about crafting performant, user-centric web applications using React, Next.js, and TypeScript, with a strong focus on scalability and modern UI practices.
                    </p>

                    <div className="flex items-center space-x-4 pt-4">
                        <button className="bg-[#3b82f6] hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-full transition duration-300 flex items-center">
                            Download Resume
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                        </button>

                        <a href="#" className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition duration-300">
                            {/* LinkedIn Icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-gray-300">
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                            </svg>
                        </a>

                        <a href="#" className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition duration-300">
                            {/* Email Icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </a>
                    </div>
                </div>

                {/* Right Column: Image */}
                <div className="md:w-1/2 flex justify-center md:justify-end">
                    <div className="relative w-full max-w-md aspect-square rounded-2xl overflow-hidden shadow-2xl bg-gray-900 border border-gray-800">
                        {/* Placeholder for the laptop image */}
                        <img
                            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80"
                            alt="Developer Workspace"
                            className="object-cover w-full h-full opacity-80 hover:opacity-100 transition duration-500"
                        />
                        {/* Optional overlay gradient to match the dark theme better if needed */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-50"></div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default About;
