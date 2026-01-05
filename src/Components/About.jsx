// client/src/components/About.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaHeart, FaFutbol, FaPalette, FaBook } from 'react-icons/fa';

/**
 * About Component
 * Detailed personal introduction with journey, interests, and personality
 * Uses animated cards for different aspects of personality
 */
const About = () => {
    // Personal journey timeline
    const journey = [
        { year: '2024', event: 'Started learning programming basics', icon: <FaBook /> },
        { year: '2025', event: 'Mastered JavaScript & React', icon: <FaCode /> },
        { year: '2025', event: 'Became MERN Stack Developer', icon: <FaCode /> },
        { year: '2025', event: 'Working on complex projects', icon: <FaCode /> },
    ];

    // Hobbies and interests
    const hobbies = [
        { icon: <FaCode />, title: 'Coding', description: 'Building side projects & learning new tech' },
        { icon: <FaFutbol />, title: 'Sports', description: 'Football & Cricket enthusiast' },
        { icon: <FaPalette />, title: 'Design', description: 'UI/UX design and digital art' },
        { icon: <FaHeart />, title: 'Community', description: 'Helping fellow developers' },
    ];

    return (
        <section id="about" className="py-20 relative">
            {/* Section background */}
            <div className="absolute inset-0 bg-dark-card/10 backdrop-blur-xs"></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-dark-heading mb-4">
                        About <span className="text-dark-accent">Me</span>
                    </h2>
                    <div className="w-24 h-1 bg-dark-accent mx-auto mb-6"></div>
                    <p className="text-dark-text text-lg max-w-3xl mx-auto">
                        Get to know the person behind the code
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Left Column: Introduction */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="bg-dark-card/50 backdrop-blur-sm rounded-2xl p-8 border border-dark-card/30">
                            <h3 className="text-2xl font-bold text-dark-heading mb-6">
                                My Journey
                            </h3>

                            {/* Timeline */}
                            <div className="space-y-8">
                                {journey.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="flex items-start gap-4"
                                    >
                                        <div className="flex-shrink-0 w-12 h-12 bg-dark-accent/20 rounded-full flex items-center justify-center text-dark-accent">
                                            {item.icon}
                                        </div>
                                        <div>
                                            <div className="text-dark-accent font-semibold">{item.year}</div>
                                            <p className="text-dark-text">{item.event}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Personal Statement */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5 }}
                                className="mt-8 p-6 bg-dark-bg/50 rounded-xl border border-dark-accent/20"
                            >
                                <p className="text-dark-text italic">
                                    "I believe in writing clean, efficient code and creating user experiences
                                    that are both beautiful and functional. Every project is an opportunity
                                    to learn and grow."
                                </p>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Right Column: Details & Hobbies */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="space-y-8">
                            {/* Detailed Introduction */}
                            <div className="bg-dark-card/50 backdrop-blur-sm rounded-2xl p-8 border border-dark-card/30">
                                <h3 className="text-2xl font-bold text-dark-heading mb-6">
                                    Who I Am
                                </h3>
                                <div className="space-y-4 text-dark-text">
                                    <p>
                                        I'm <span className="text-dark-accent font-semibold">MD Foyzullah</span>,
                                        a passionate and dedicated MERN Stack Developer with a strong focus on
                                        building responsive, user-friendly, and performance-optimized web applications.
                                    </p>
                                    <p>
                                        I specialize in <span className="text-dark-accent">React, Node.js, Express, MongoDB</span>,
                                        and modern frontend technologies including <span className="text-dark-accent">Tailwind CSS</span>.
                                    </p>
                                    <p>
                                        I love solving complex problems, improving user experience, and transforming
                                        ideas into fully functional digital solutions. My goal is to continuously
                                        learn, grow, and deliver high-quality work that creates real impact.
                                    </p>
                                    <p>
                                        When I'm not coding, you'll find me exploring new technologies, contributing
                                        to open-source projects, or enjoying outdoor activities that keep me refreshed
                                        and inspired.
                                    </p>
                                </div>
                            </div>

                            {/* Hobbies Grid */}
                            <div>
                                <h4 className="text-xl font-bold text-dark-heading mb-6">
                                    Beyond Coding
                                </h4>
                                <div className="grid grid-cols-2 gap-4">
                                    {hobbies.map((hobby, index) => (
                                        <motion.div
                                            key={hobby.title}
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.1 }}
                                            whileHover={{ scale: 1.05 }}
                                            className="bg-dark-card/30 backdrop-blur-sm rounded-xl p-4 border border-dark-card/30 text-center group hover:border-dark-accent/30 transition-all duration-300"
                                        >
                                            <div className="text-2xl text-dark-accent mb-2 group-hover:scale-110 transition-transform duration-300">
                                                {hobby.icon}
                                            </div>
                                            <h5 className="font-semibold text-dark-heading mb-1">
                                                {hobby.title}
                                            </h5>
                                            <p className="text-sm text-dark-text">
                                                {hobby.description}
                                            </p>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Skills Preview */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 bg-linear-to-r from-dark-card/30 to-dark-bg/30 backdrop-blur-sm rounded-2xl p-8 border border-dark-card/30"
                >
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {[
                            { label: 'Projects Completed', value: '10+' },
                            { label: 'Happy Clients', value: '3+' },
                            { label: 'Years Experience', value: '1+' },
                            { label: 'Technologies', value: '10+' },
                        ].map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-3xl font-bold text-dark-accent mb-2">
                                    {stat.value}
                                </div>
                                <div className="text-dark-text">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;