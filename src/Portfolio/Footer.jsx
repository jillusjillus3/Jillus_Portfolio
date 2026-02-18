import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-[#0a0a0a] text-white py-8 border-t border-white/10 font-sans">
            <div className="container mx-auto px-4 md:px-10 flex flex-col md:flex-row justify-between items-center text-sm md:text-base">
                <p className="text-gray-500 mb-4 md:mb-0">
                    &copy; 2026 D. Pravin Kumar. All rights reserved.
                </p>

                <div className="flex items-center space-x-6">
                    <a
                        href="https://www.linkedin.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-blue-400 transition"
                    >
                        LinkedIn
                    </a>
                    {/* Add more social links here if needed */}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
