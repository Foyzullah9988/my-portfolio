// client/src/components/ProjectDetails.jsx
import React from 'react';
import { useParams, Link } from 'react-router';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaArrowLeft, FaCalendar, FaUsers, FaLightbulb } from 'react-icons/fa';

/**
 * ProjectDetails Component
 * Detailed view of individual project with comprehensive information
 * Includes technology stack, challenges, and future plans
 */
const ProjectDetails = () => {
    const { id } = useParams();

    // Sample project data - in real app, this would come from API
    const project = {
        id: parseInt(id),
        name: 'TicketBari – Online Ticket Booking Platform',
        description: 'A full-featured online ticket booking client-side application for booking Bus, Train, Launch, Plane, and Car tickets.',
        longDescription: 'TicketBari is a large-scale React-based platform featuring role-based dashboards for Users, Vendors, and Admins. Users can search, filter, book tickets, and make payments via Stripe, while vendors and admins manage tickets, users, and advertisements.',
        image: 'https://images.unsplash.com/photo-1549921296-3f4c36e3b6b7?auto=format&fit=crop&w=1200&q=80',
        technologies: [
            { name: 'React', category: 'Frontend' },
            { name: 'React Router', category: 'Routing' },
            { name: 'Tailwind CSS', category: 'UI' },
            { name: 'Firebase Authentication', category: 'Authentication' },
            { name: 'Axios', category: 'Data Fetching' },
            { name: 'TanStack React Query', category: 'State Management' },
            { name: 'Stripe', category: 'Payment' },
            { name: 'Swiper.js', category: 'UI' },
            { name: 'Recharts', category: 'Charts' },
            { name: 'Framer Motion', category: 'Animation' },
        ],
        features: [
            'Fully responsive design with dark/light mode',
            'Role-based dashboards (User, Vendor, Admin)',
            'Search, filter, sort, and paginate tickets',
            'Private ticket details page with countdown timer',
            'Stripe payment integration and transaction history',
            'Vendor ticket management and revenue overview',
            'Admin user and ticket management',
            'Protected routes with Firebase Authentication',
        ],
        challenges: [
            'Managing role-based access control',
            'Implementing secure Stripe payment flow',
            'Handling ticket expiration and quantity validation',
            'Optimizing performance with pagination',
        ],
        improvements: [
            'Seat selection system',
            'Refund and cancellation feature',
            'Real-time notifications',
            'Mobile app version',
        ],
        liveLink: 'https://ticket-bari-15f05.web.app/',
        githubLink: 'https://github.com/Foyzullah9988/ticketbari-client',
        startDate: 'Nov 2024',
        endDate: 'Dec 2024',
        status: 'Completed',
        role: 'Frontend Developer',
    };

    // Group technologies by category
    const techByCategory = project.technologies.reduce((acc, tech) => {
        if (!acc[tech.category]) acc[tech.category] = [];
        acc[tech.category].push(tech.name);
        return acc;
    }, {});

    return (
        <section className="min-h-screen py-20 relative">
            {/* Background */}
            <div className="absolute inset-0 bg-dark-bg/95"></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Back Button */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="mb-8"
                >
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 text-dark-text hover:text-dark-accent transition-colors"
                    >
                        <FaArrowLeft />
                        Back to Projects
                    </Link>
                </motion.div>

                {/* Project Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="mb-12"
                >
                    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-8">
                        <div>
                            <h1 className="text-4xl md:text-5xl font-bold text-dark-heading mb-4">
                                {project.name}
                            </h1>
                            <p className="text-dark-text text-lg max-w-3xl">
                                {project.description}
                            </p>
                        </div>
                        <div className="flex gap-4">
                            <a
                                href={project.liveLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-6 py-3 bg-dark-accent text-dark-bg font-semibold rounded-lg hover:scale-105 transition-transform"
                            >
                                <FaExternalLinkAlt />
                                Live Demo
                            </a>
                            <a
                                href={project.githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-6 py-3 border border-dark-accent text-dark-accent font-semibold rounded-lg hover:bg-dark-accent hover:text-dark-bg transition-all"
                            >
                                <FaGithub />
                                View Code
                            </a>
                        </div>
                    </div>

                    {/* Project Metadata */}
                    <div className="flex flex-wrap gap-6">
                        <div className="flex items-center gap-2 text-dark-text">
                            <FaCalendar />
                            <span>{project.startDate} - {project.endDate}</span>
                        </div>
                        <div className="flex items-center gap-2 text-dark-text">
                            <FaUsers />
                            <span>{project.role}</span>
                        </div>
                        <div className={`px-3 py-1 rounded-full text-sm font-medium ${project.status === 'Completed'
                            ? 'bg-green-500/20 text-green-400'
                            : 'bg-blue-500/20 text-blue-400'
                            }`}>
                            {project.status}
                        </div>
                    </div>
                </motion.div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column: Project Image & Tech Stack */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Project Image */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                            className="rounded-2xl overflow-hidden border border-dark-card/30"
                        >
                            <div
                                className="h-64 md:h-96 bg-linear-to-br from-dark-card to-dark-bg"
                                style={{
                                    backgroundImage: `url(${project.image})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                }}
                            />
                        </motion.div>

                        {/* Detailed Description */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="bg-dark-card/50 backdrop-blur-sm rounded-2xl p-8 border border-dark-card/30"
                        >
                            <h3 className="text-2xl font-bold text-dark-heading mb-6">Project Overview</h3>
                            <p className="text-dark-text mb-6">{project.longDescription}</p>

                            <h4 className="text-xl font-bold text-dark-heading mb-4">Key Features</h4>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                {project.features.map((feature, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <span className="text-dark-accent mt-1">✓</span>
                                        <span className="text-dark-text">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Challenges & Solutions */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="bg-dark-card/50 backdrop-blur-sm rounded-2xl p-8 border border-dark-card/30"
                        >
                            <h3 className="text-2xl font-bold text-dark-heading mb-6 flex items-center gap-3">
                                <FaLightbulb />
                                Challenges & Solutions
                            </h3>

                            <div className="space-y-6">
                                {project.challenges.map((challenge, index) => (
                                    <div key={index} className="flex gap-4">
                                        <div className="flex-shrink-0 w-8 h-8 bg-dark-accent/20 rounded-full flex items-center justify-center text-dark-accent">
                                            {index + 1}
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-dark-heading mb-2">
                                                Challenge: {challenge}
                                            </h4>
                                            <p className="text-dark-text">
                                                Implemented solution using optimized database queries, caching strategies, and real-time updates.
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column: Tech Stack & Future Plans */}
                    <div className="space-y-8">
                        {/* Technology Stack */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                            className="bg-dark-card/50 backdrop-blur-sm rounded-2xl p-8 border border-dark-card/30"
                        >
                            <h3 className="text-2xl font-bold text-dark-heading mb-6">Technology Stack</h3>

                            <div className="space-y-6">
                                {Object.entries(techByCategory).map(([category, techs]) => (
                                    <div key={category}>
                                        <h4 className="font-semibold text-dark-heading mb-3">{category}</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {techs.map((tech, index) => (
                                                <span
                                                    key={index}
                                                    className="px-3 py-2 bg-dark-bg/50 text-dark-text rounded-lg text-sm"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Future Improvements */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 }}
                            className="bg-dark-card/50 backdrop-blur-sm rounded-2xl p-8 border border-dark-card/30"
                        >
                            <h3 className="text-2xl font-bold text-dark-heading mb-6">Future Plans</h3>

                            <ul className="space-y-4">
                                {project.improvements.map((improvement, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-6 h-6 border-2 border-dark-accent rounded-full flex items-center justify-center">
                                            <div className="w-2 h-2 bg-dark-accent rounded-full"></div>
                                        </div>
                                        <span className="text-dark-text">{improvement}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-6 p-4 bg-dark-bg/30 rounded-lg border border-dark-accent/20">
                                <p className="text-dark-text text-sm">
                                    <span className="text-dark-accent font-semibold">Note:</span> These improvements are planned for future updates based on user feedback and market trends.
                                </p>
                            </div>
                        </motion.div>

                        {/* Project Links */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5 }}
                            className="bg-dark-card/50 backdrop-blur-sm rounded-2xl p-8 border border-dark-card/30"
                        >
                            <h3 className="text-2xl font-bold text-dark-heading mb-6">Project Links</h3>

                            <div className="space-y-4">
                                <a
                                    href={project.liveLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-between p-4 bg-dark-bg/30 rounded-lg border border-dark-card/30 hover:border-dark-accent/50 transition-all group"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-dark-accent/20 rounded-lg flex items-center justify-center text-dark-accent">
                                            <FaExternalLinkAlt />
                                        </div>
                                        <div>
                                            <div className="font-semibold text-dark-heading">Live Demo</div>
                                            <div className="text-sm text-dark-text">Visit the live application</div>
                                        </div>
                                    </div>
                                    <div className="text-dark-text group-hover:text-dark-accent transition-colors">
                                        →
                                    </div>
                                </a>

                                <a
                                    href={project.githubLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-between p-4 bg-dark-bg/30 rounded-lg border border-dark-card/30 hover:border-dark-accent/50 transition-all group"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-dark-accent/20 rounded-lg flex items-center justify-center text-dark-accent">
                                            <FaGithub />
                                        </div>
                                        <div>
                                            <div className="font-semibold text-dark-heading">GitHub Repository</div>
                                            <div className="text-sm text-dark-text">View source code</div>
                                        </div>
                                    </div>
                                    <div className="text-dark-text group-hover:text-dark-accent transition-colors">
                                        →
                                    </div>
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectDetails;