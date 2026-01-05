// client/src/components/Skills.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaDatabase, FaTools, FaServer, FaMobile } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiTailwindcss, SiRedux, SiNextdotjs, SiGraphql } from 'react-icons/si';

/**
 * Skills Component
 * Visual representation of technical skills with progress bars and categories
 * Interactive filtering by skill category
 */
const Skills = () => {
    const [activeCategory, setActiveCategory] = useState('all');

    // Skill categories
    const categories = [
        { id: 'all', label: 'All Skills' },
        { id: 'frontend', label: 'Frontend' },
        { id: 'backend', label: 'Backend' },
        { id: 'database', label: 'Database' },
        { id: 'tools', label: 'Tools' },
    ];

    // Skills data with icons, proficiency, and categories
    const skills = [
        // Frontend
        { name: 'React.js', level: 95, icon: <FaReact />, category: 'frontend', color: '#61DAFB' },
        { name: 'Next.js', level: 85, icon: <SiNextdotjs />, category: 'frontend', color: '#000000' },
        // { name: 'Redux', level: 90, icon: <SiRedux />, category: 'frontend', color: '#764ABC' },
        { name: 'TypeScript', level: 80, icon: 'TS', category: 'frontend', color: '#3178C6' },
        { name: 'Tailwind CSS', level: 95, icon: <SiTailwindcss />, category: 'frontend', color: '#06B6D4' },
        { name: 'HTML5/CSS3', level: 98, icon: 'HC', category: 'frontend', color: '#E34F26' },

        // Backend
        { name: 'Node.js', level: 92, icon: <FaNodeJs />, category: 'backend', color: '#339933' },
        { name: 'Express.js', level: 90, icon: <SiExpress />, category: 'backend', color: '#000000' },
        { name: 'REST APIs', level: 88, icon: <FaServer />, category: 'backend', color: '#FF6B6B' },
        // { name: 'GraphQL', level: 75, icon: <SiGraphql />, category: 'backend', color: '#E10098' },

        // Database
        { name: 'MongoDB', level: 85, icon: <SiMongodb />, category: 'database', color: '#47A248' },
        { name: 'MySQL', level: 80, icon: <FaDatabase />, category: 'database', color: '#4479A1' },
        { name: 'Firebase', level: 75, icon: 'FB', category: 'database', color: '#FFCA28' },

        // Tools
        { name: 'Git/GitHub', level: 90, icon: <FaTools />, category: 'tools', color: '#F05032' },
        // { name: 'Docker', level: 70, icon: 'DC', category: 'tools', color: '#2496ED' },
        // { name: 'AWS', level: 65, icon: 'AWS', category: 'tools', color: '#FF9900' },
        // { name: 'CI/CD', level: 75, icon: 'CI', category: 'tools', color: '#00A4EF' },
    ];

    // Filter skills based on active category
    const filteredSkills = activeCategory === 'all'
        ? skills
        : skills.filter(skill => skill.category === activeCategory);

    return (
        <section id="skills" className="py-20 relative">
            {/* Background pattern */}
            <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-dark-heading mb-4">
                        Technical <span className="text-dark-accent">Skills</span>
                    </h2>
                    <div className="w-24 h-1 bg-dark-accent mx-auto mb-6"></div>
                    <p className="text-dark-text text-lg max-w-3xl mx-auto">
                        Technologies and tools I work with to bring ideas to life
                    </p>
                </motion.div>

                {/* Category Filter */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-wrap justify-center gap-4 mb-12"
                >
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setActiveCategory(category.id)}
                            className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${activeCategory === category.id
                                ? 'bg-dark-accent text-dark-bg'
                                : 'bg-dark-card/50 text-dark-text hover:bg-dark-card hover:text-dark-accent'
                                }`}
                        >
                            {category.label}
                        </button>
                    ))}
                </motion.div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredSkills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.02, y: -5 }}
                            className="bg-dark-card/50 backdrop-blur-sm rounded-xl p-6 border border-dark-card/30 hover:border-dark-accent/30 transition-all duration-300"
                        >
                            {/* Skill Header */}
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center gap-3">
                                    <div
                                        className="w-10 h-10 rounded-lg flex items-center justify-center text-xl"
                                        style={{ backgroundColor: `${skill.color}20` }}
                                    >
                                        <span style={{ color: skill.color }}>
                                            {typeof skill.icon === 'string' ? skill.icon : skill.icon}
                                        </span>
                                    </div>
                                    <h3 className="text-lg font-semibold text-dark-heading">
                                        {skill.name}
                                    </h3>
                                </div>
                                <span className="text-dark-accent font-bold">{skill.level}%</span>
                            </div>

                            {/* Progress Bar */}
                            <div className="w-full bg-dark-bg/50 rounded-full h-2.5 overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${skill.level}%` }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1, delay: index * 0.1 }}
                                    className="h-full rounded-full"
                                    style={{ backgroundColor: skill.color }}
                                />
                            </div>

                            {/* Proficiency Level */}
                            <div className="flex justify-between mt-2 text-sm text-dark-text">
                                <span>Basic</span>
                                <span>Intermediate</span>
                                <span>Advanced</span>
                                <span>Expert</span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Additional Info */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                    <div className="text-center p-6 bg-dark-card/30 rounded-xl">
                        <FaMobile className="text-3xl text-dark-accent mx-auto mb-4" />
                        <h4 className="text-xl font-bold text-dark-heading mb-2">Responsive Design</h4>
                        <p className="text-dark-text">Creating flawless experiences across all devices</p>
                    </div>

                    <div className="text-center p-6 bg-dark-card/30 rounded-xl">
                        <FaServer className="text-3xl text-dark-accent mx-auto mb-4" />
                        <h4 className="text-xl font-bold text-dark-heading mb-2">Performance</h4>
                        <p className="text-dark-text">Optimized applications for maximum speed</p>
                    </div>

                    <div className="text-center p-6 bg-dark-card/30 rounded-xl">
                        <FaTools className="text-3xl text-dark-accent mx-auto mb-4" />
                        <h4 className="text-xl font-bold text-dark-heading mb-2">Best Practices</h4>
                        <p className="text-dark-text">Following industry standards and clean code principles</p>
                    </div>
                </motion.div>
            </div>

            <style jsx>{`
        .bg-grid-pattern {
          background-image: linear-gradient(to right, #64ffda0a 1px, transparent 1px),
                            linear-gradient(to bottom, #64ffda0a 1px, transparent 1px);
          background-size: 50px 50px;
        }
      `}</style>
        </section>
    );
};

export default Skills;