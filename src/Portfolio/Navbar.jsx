import React from 'react';

const Navbar = () => {
    return (
        <nav className="bg-[#0a0a0a] text-white p-4 font-sans">
            <div className="container mx-auto flex justify-between items-center px-4 md:px-10">
                {/* Brand */}
                <div className="text-[#3b82f6] font-bold text-2xl tracking-wide">
                    Jillus
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    <a href="#about" className="text-gray-300 hover:text-white transition duration-300 text-sm font-medium">About</a>
                    <a href="#tech" className="text-gray-300 hover:text-white transition duration-300 text-sm font-medium">Tech</a>
                    <a href="#experience" className="text-gray-300 hover:text-white transition duration-300 text-sm font-medium">Experience</a>
                    <a href="#education" className="text-gray-300 hover:text-white transition duration-300 text-sm font-medium">Education</a>
                    <a href="#projects" className="text-gray-300 hover:text-white transition duration-300 text-sm font-medium">Projects</a>
                    <a href="#contact" className="text-gray-300 hover:text-white transition duration-300 text-sm font-medium">Contact</a>

                    {/* Theme Toggle (Sun Icon) */}
                    <button className="text-gray-300 hover:text-white focus:outline-none p-2 rounded-full bg-gray-800/50">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
