// client/src/components/Experience.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaTasks } from 'react-icons/fa';

/**
 * Experience Component
 * Showcases professional experience with timeline and detailed responsibilities
 * Includes internship experience if applicable
 */
const Experience = () => {
    // Professional experience data
    // const experiences = [
    //     {
    //         position: 'Senior MERN Stack Developer',
    //         company: 'Tech Innovators Inc.',
    //         duration: '2022 - Present',
    //         location: 'Remote',
    //         type: 'Full-time',
    //         responsibilities: [
    //             'Lead development of scalable web applications using React, Node.js, and MongoDB',
    //             'Implemented CI/CD pipelines reducing deployment time by 40%',
    //             'Mentored junior developers and conducted code reviews',
    //             'Optimized application performance, improving load times by 60%',
    //             'Collaborated with cross-functional teams to deliver features',
    //         ],
    //         technologies: [
    //             'React',
    //             'Node.js',
    //             'MongoDB',
    //             // 'AWS',
    //             // 'Docker',
    //             // 'GraphQL'
    //         ],
    //         icon: <FaBriefcase />,
    //     },
    //     {
    //         position: 'Full Stack Developer',
    //         company: 'Digital Solutions Ltd.',
    //         duration: '2021 - 2022',
    //         location: 'Khulna, Bangladesh',
    //         type: 'Full-time',
    //         responsibilities: [
    //             'Developed and maintained multiple client projects using MERN stack',
    //             'Built RESTful APIs serving thousands of daily requests',
    //             'Implemented real-time features using Socket.io',
    //             'Integrated third-party payment gateways',
    //             'Improved codebase quality through refactoring',
    //         ],
    //         technologies: ['React',
    //             'Express',
    //             'MongoDB',
    //             'Socket.io',
    //             // 'Redux',
    //             'JWT'],
    //         icon: <FaBriefcase />,
    //     },
    //     {
    //         position: 'Frontend Developer Intern',
    //         company: 'Startup Hub',
    //         duration: '2020 - 2021',
    //         location: 'Remote',
    //         type: 'Internship',
    //         responsibilities: [
    //             'Assisted in building responsive user interfaces',
    //             'Fixed bugs and implemented new features',
    //             'Participated in Agile development process',
    //             'Learned professional development workflows',
    //             'Contributed to open-source projects',
    //         ],
    //         technologies: ['React', 'CSS3', 'Git', 'Bootstrap', 'JavaScript'],
    //         icon: <FaBriefcase />,
    //     },
    // ];

    return (
        <section id="experience" className="py-20 relative">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-linear-to-b from-dark-bg to-dark-card/20"></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-dark-heading mb-4">
                        Work <span className="text-dark-accent">Experience</span>
                    </h2>
                    <div className="w-24 h-1 bg-dark-accent mx-auto mb-6"></div>
                    <p className="text-dark-text text-lg max-w-3xl mx-auto">
                        Professional journey and career milestones
                    </p>
                </motion.div>

                {/* Experience Timeline */}
                {/* <div className="max-w-6xl mx-auto">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="mb-12 last:mb-0"
                        >
                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                                <div className="lg:col-span-4">
                                    <div className="bg-dark-card/50 backdrop-blur-sm rounded-2xl p-6 border border-dark-card/30 h-full">

                                        <div className="flex items-start gap-4 mb-6">
                                            <div className="w-12 h-12 bg-dark-accent/20 rounded-xl flex items-center justify-center text-dark-accent text-xl">
                                                {exp.icon}
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold text-dark-heading">{exp.position}</h3>
                                                <p className="text-dark-accent font-semibold">{exp.company}</p>
                                            </div>
                                        </div>


                                        <div className="space-y-4">
                                            <div className="flex items-center gap-3 text-dark-text">
                                                <FaCalendarAlt className="text-dark-accent" />
                                                <span>{exp.duration}</span>
                                            </div>
                                            <div className="flex items-center gap-3 text-dark-text">
                                                <FaMapMarkerAlt className="text-dark-accent" />
                                                <span>{exp.location}</span>
                                            </div>
                                            <div>
                                                <span className={`px-3 py-1 rounded-full text-sm font-medium ${exp.type === 'Full-time'
                                                    ? 'bg-green-500/20 text-green-400'
                                                    : 'bg-blue-500/20 text-blue-400'
                                                    }`}>
                                                    {exp.type}
                                                </span>
                                            </div>
                                        </div>


                                        <div className="mt-6 pt-6 border-t border-dark-card/30">
                                            <h4 className="font-semibold text-dark-heading mb-3">Technologies:</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {exp.technologies.map((tech, idx) => (
                                                    <span
                                                        key={idx}
                                                        className="px-3 py-1 bg-dark-bg/50 text-dark-text text-sm rounded-full"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="lg:col-span-8">
                                    <div className="bg-dark-card/30 backdrop-blur-sm rounded-2xl p-6 border border-dark-card/30 h-full">
                                        <div className="flex items-center gap-3 mb-6">
                                            <FaTasks className="text-dark-accent text-xl" />
                                            <h4 className="text-xl font-bold text-dark-heading">Key Responsibilities & Achievements</h4>
                                        </div>

                                        <ul className="space-y-4">
                                            {exp.responsibilities.map((resp, idx) => (
                                                <motion.li
                                                    key={idx}
                                                    initial={{ opacity: 0, x: -20 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    viewport={{ once: true }}
                                                    transition={{ delay: idx * 0.1 }}
                                                    className="flex items-start gap-3"
                                                >
                                                    <span className="text-dark-accent mt-1">▸</span>
                                                    <span className="text-dark-text">{resp}</span>
                                                </motion.li>
                                            ))}
                                        </ul>

                                        <div className="mt-8 pt-6 border-t border-dark-card/30">
                                            <div className="flex items-center justify-between mb-2">
                                                <span className="text-dark-text">Project Impact</span>
                                                <span className="text-dark-accent font-bold">
                                                    {index === 0 ? 'High' : index === 1 ? 'Medium' : 'Learning'}
                                                </span>
                                            </div>
                                            <div className="w-full bg-dark-bg/50 rounded-full h-2">
                                                <div
                                                    className="h-full rounded-full bg-linear-to-r from-dark-accent to-blue-500"
                                                    style={{ width: `${100 - (index * 25)}%` }}
                                                ></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            {index < experiences.length - 1 && (
                                <div className="hidden lg:block">
                                    <div className="w-px h-12 bg-dark-accent/30 mx-auto"></div>
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div> */}

                {/* Additional Experience Info */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                    <div className="text-center p-6 bg-dark-card/30 rounded-xl">
                        <div className="text-3xl font-bold text-dark-accent mb-2">3+</div>
                        <h4 className="text-xl font-bold text-dark-heading mb-2">Projects Delivered</h4>
                        <p className="text-dark-text">Successfully completed projects for clients</p>
                    </div>

                    <div className="text-center p-6 bg-dark-card/30 rounded-xl">
                        <div className="text-3xl font-bold text-dark-accent mb-2">98%</div>
                        <h4 className="text-xl font-bold text-dark-heading mb-2">Client Satisfaction</h4>
                        <p className="text-dark-text">Positive feedback and repeat business</p>
                    </div>

                    <div className="text-center p-6 bg-dark-card/30 rounded-xl">
                        <div className="text-3xl font-bold text-dark-accent mb-2">1+</div>
                        <h4 className="text-xl font-bold text-dark-heading mb-2">Years Experience</h4>
                        <p className="text-dark-text">Professional development experience</p>
                    </div>
                </motion.div>

                {/* Call to Action */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center"
                >
                    <p className="text-dark-text text-lg mb-6">
                        Looking to add value to your team with my expertise?
                    </p>
                    <a
                        href="#contact"
                        className="inline-flex items-center gap-2 px-8 py-3 bg-dark-accent text-dark-bg font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-dark-accent/30"
                    >
                        <FaBriefcase />
                        Let's Work Together
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Experience;