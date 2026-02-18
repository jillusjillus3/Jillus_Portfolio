import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="bg-[#0a0a0a] text-white py-20 px-4 md:px-10 font-sans">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        I am currently open to freelance projects and full-time opportunities. Let's discuss how I can contribute to your team or bring your ideas to life.
                    </p>
                </div>

                <div className="flex flex-col md:flex-row gap-12 justify-center">

                    {/* Contact Information (Left Column) */}
                    <div className="md:w-1/3 space-y-8">
                        <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

                        <div className="flex items-start">
                            <div className="bg-[#111] p-3 rounded-lg mr-4 text-blue-500 border border-white/10">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <div>
                                <h4 className="text-white font-bold">Email Me</h4>
                                <a href="mailto:pravinkumar42001@gmail.com" className="text-gray-400 hover:text-blue-400 transition">pravinkumar42001@gmail.com</a>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <div className="bg-[#111] p-3 rounded-lg mr-4 text-blue-500 border border-white/10">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                            </div>
                            <div>
                                <h4 className="text-white font-bold">Call Me</h4>
                                <a href="tel:+917736288003" className="text-gray-400 hover:text-blue-400 transition block mb-1">+91 77362 88003</a>
                                <p className="text-gray-500 text-xs">Available: 10 AM – 10 PM IST (India)</p>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <div className="bg-[#111] p-3 rounded-lg mr-4 text-blue-500 border border-white/10">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                            <div>
                                <h4 className="text-white font-bold">Location</h4>
                                <p className="text-gray-400">Nagercoil, Tamil Nadu</p>
                            </div>
                        </div>

                        <div className="bg-[#111] border border-white/5 p-6 rounded-xl mt-8">
                            <p className="text-gray-400 italic text-sm leading-relaxed">
                                "Dedicated to delivering exceptional web experiences through clean code and user-centric design."
                            </p>
                        </div>
                    </div>

                    {/* Contact Form (Right Column) */}
                    <div className="md:w-1/2">
                        <div className="bg-[#111] p-8 md:p-10 rounded-2xl border border-white/10">
                            <form className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-bold text-gray-400 mb-2">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        placeholder="Enter your name"
                                        className="w-full bg-[#1a1a1a] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-bold text-gray-400 mb-2">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        placeholder="Enter your email"
                                        className="w-full bg-[#1a1a1a] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-bold text-gray-400 mb-2">Message</label>
                                    <textarea
                                        id="message"
                                        rows="4"
                                        placeholder="Tell me about your project..."
                                        className="w-full bg-[#1a1a1a] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition resize-none"
                                    ></textarea>
                                </div>
                                <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 flex items-center justify-center">
                                    Send Message
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                    </svg>
                                </button>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Contact;
