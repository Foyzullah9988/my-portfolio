// client/src/components/Education.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

/**
 * Education Component
 * Displays educational background with timeline and achievements
 * Includes certifications and additional qualifications
 */
const Education = () => {
    // Education timeline data
    const education = [
        {
            degree: 'Bachelor of Science in Mathematics',
            institution: 'Satkhira Govt. College',
            duration: '2023 - Present',
            location: 'Khulna, Bangladesh',
            gpa: 'pending',
            achievements: [
                `Everyone's Favorite`,
            ],
            icon: <FaGraduationCap />,
        },
        {
            degree: 'Higher Secondary Certificate (HSC)',
            institution: 'Satkhira Govt. College',
            duration: '2018-2021',
            location: 'Khulna, Bangladesh',
            gpa: '5.0/5.0',
            achievements: [
                'Science Group - GPA 5.0',
            ],
            icon: <FaGraduationCap />,
        },
    ];

    // Certifications
    const certifications = [
        {
            title: 'MERN Stack Certification',
            issuer: 'Programming Hero',
            year: '2025',
            credentialId: 'PH-MERN-2025-001',
        },
        // {
        //     title: 'React Developer Certification',
        //     issuer: 'Meta',
        //     year: '2022',
        //     credentialId: 'META-REACT-2022',
        // },
        // {
        //     title: 'AWS Cloud Practitioner',
        //     issuer: 'Amazon Web Services',
        //     year: '2023',
        //     credentialId: 'AWS-CP-2023',
        // },
        // {
        //     title: 'MongoDB University',
        //     issuer: 'MongoDB Inc.',
        //     year: '2021',
        //     credentialId: 'MDB-101',
        // },
    ];

    return (
        <section id="education" className="py-20 relative">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-dark-accent/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-dark-heading mb-4">
                        Education & <span className="text-dark-accent">Qualifications</span>
                    </h2>
                    <div className="w-24 h-1 bg-dark-accent mx-auto mb-6"></div>
                    <p className="text-dark-text text-lg max-w-3xl mx-auto">
                        Academic background and professional certifications
                    </p>
                </motion.div>

                {/* Education Timeline */}
                <div className="max-w-4xl mx-auto mb-16">
                    <div className="relative">
                        {/* Timeline line */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-dark-accent/30"></div>

                        {education.map((edu, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                className={`relative mb-12 w-full ${index % 2 === 0 ? 'pr-12 md:pr-0 md:pl-12' : 'pl-12 md:pl-0 md:pr-12'} ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                                    }`}
                            >
                                {/* Timeline dot */}
                                <div className={`absolute top-6 ${index % 2 === 0
                                    ? '-right-2 md:right-1/2 md:translate-x-1/2'
                                    : '-left-2 md:left-1/2 md:translate-x-1/2'
                                    } w-4 h-4 bg-dark-accent rounded-full border-4 border-dark-bg`}></div>

                                {/* Content Card */}
                                <div className={`bg-dark-card/50 backdrop-blur-sm rounded-2xl p-6 border border-dark-card/30 ${index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'
                                    }`}>
                                    {/* Degree and Institution */}
                                    <div className={`flex items-start gap-4 mb-4 ${index % 2 !== 0 ? '' : ' md:justify-end '
                                    }`}>
                                        <div className="w-12 h-12 bg-dark-accent/20 rounded-xl flex items-center justify-center text-dark-accent text-xl ">
                                            {edu.icon}
                                        </div>
                                        <div className="">
                                            <h3 className="text-xl font-bold text-dark-heading">{edu.degree}</h3>
                                            <p className="text-dark-accent font-semibold">{edu.institution}</p>
                                        </div>
                                    </div>

                                    {/* Details */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                        <div className={`flex items-center gap-2 text-dark-text ${index % 2 !== 0 ? '' : 'flex md:justify-end '
                                    } `}>
                                            <FaCalendarAlt className="text-dark-accent" />
                                            <span>{edu.duration}</span>
                                        </div>
                                        <div className={`flex items-center gap-2 text-dark-text ${index % 2 !== 0 ? '' : 'flex md:justify-end '
                                    }`}>
                                            <FaMapMarkerAlt className="text-dark-accent" />
                                            <span>{edu.location}</span>
                                        </div>
                                    </div>

                                    {/* GPA */}
                                    <div className="mb-4">
                                        <div className="inline-block px-4 py-1 bg-dark-accent/20 text-dark-accent rounded-full font-semibold ">
                                            GPA: {edu.gpa}
                                        </div>
                                    </div>

                                    {/* Achievements */}
                                    <div>
                                        <h4 className="font-semibold text-dark-heading mb-2">Key Achievements:</h4>
                                        <ul className="space-y-1">
                                            {edu.achievements.map((achievement, idx) => (
                                                <li key={idx} className={`flex items-start gap-2 text-dark-text ${index % 2 !== 0 ? '' : 'flex md:justify-end '
                                    }`}>
                                                    <span className="text-dark-accent mt-1">▸</span>
                                                    <span>{achievement}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Certifications Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                >
                    <h3 className="text-3xl font-bold text-dark-heading text-center mb-8">
                        Professional <span className="text-dark-accent">Certifications</span>
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {certifications.map((cert, index) => (
                            <motion.div
                                key={cert.title}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ scale: 1.05 }}
                                className="bg-dark-card/30 backdrop-blur-sm rounded-xl p-6 border border-dark-card/30 hover:border-dark-accent/30 transition-all duration-300"
                            >
                                <div className="mb-4">
                                    <div className="w-12 h-12 bg-dark-accent/20 rounded-lg flex items-center justify-center text-dark-accent mb-3">
                                        <FaGraduationCap />
                                    </div>
                                    <h4 className="text-lg font-bold text-dark-heading mb-2">{cert.title}</h4>
                                    <p className="text-dark-text text-sm mb-1">{cert.issuer}</p>
                                    <p className="text-dark-accent text-sm">Issued: {cert.year}</p>
                                </div>
                                <div className="pt-4 border-t border-dark-card/30">
                                    <p className="text-dark-text text-xs">Credential ID: {cert.credentialId}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Additional Learning */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="mt-16 bg-linear-to-r from-dark-card/30 to-dark-bg/30 backdrop-blur-sm rounded-2xl p-8 border border-dark-card/30"
                >
                    <h4 className="text-2xl font-bold text-dark-heading mb-6 text-center">
                        Continuous Learning
                    </h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        <div>
                            <div className="text-3xl font-bold text-dark-accent mb-2">200+</div>
                            <div className="text-dark-text">Hours of Online Courses</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-dark-accent mb-2">10+</div>
                            <div className="text-dark-text">Technical Workshops</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-dark-accent mb-2">300+</div>
                            <div className="text-dark-text">DSA Problems Solved</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-dark-accent mb-2">Daily</div>
                            <div className="text-dark-text">Code & Learn Routine</div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Education;