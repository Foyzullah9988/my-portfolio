// client/src/components/Projects.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { FaFilter, FaSearch, FaExternalLinkAlt } from 'react-icons/fa';

/**
 * Projects Component
 * Showcases portfolio projects with filtering and search functionality
 * Displays projects in card format with view more/details button
 */
const Projects = () => {
    const [activeFilter, setActiveFilter] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');

    // Project categories
    const categories = [
        { id: 'all', label: 'All Projects' },
        { id: 'mern', label: 'MERN Stack' },
        { id: 'react', label: 'React' },
        { id: 'fullstack', label: 'Full Stack' },
        { id: 'frontend', label: 'Frontend' },
        { id: 'backend', label: 'Backend' },
    ];

    // Sample projects data
    const projects = [
        {
            id: 1,
            name: 'Online Ticket Booking Platform ',
            description: 'A full-featured online ticket booking client-side app built with React, allowing users to browse, book, and manage tickets for Bus, Train, Launch, Plane, and Car with responsive UI and real-time interactions.',
            image: 'https://plus.unsplash.com/premium_photo-1718674393999-568b9cd17828?q=80&w=737&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            technologies: [
                'React',
                'React Router',
                'Tailwind CSS',
                'Firebase Authentication',
                'Axios',
                'TanStack React Query',
                'Stripe',
                'Swiper.js',
                'Recharts',
                'React Hook Form',
                'Heroicons',
                'Lottie',
                'Date-fns',
                'Dotenv',
                'Framer Motion',
                'React-hot-toast',
                'React-icons',
                'Sweetalert2'
            ],
            category: 'mern',
            liveLink: 'https://ticket-bari-15f05.web.app/',
            githubLink: 'https://github.com/Foyzullah9988/ticketbari-client', // Update if actual repo differs
            status: 'Live',
            featured: true,
        }
        ,
        {
            id: 2,
            name: 'Local Food Lovers Network',
            description: 'A community-driven food review SPA where users can explore, review, rate, and favorite local foods. Includes authentication, protected routes, and a modern foodie-focused UI.',
            image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80',
            technologies: [
                'React',
                'Firebase',
                'MongoDB',
                'Express',
                'Node.js',
                'TailwindCSS',
                'DaisyUI'
            ],
            category: 'react',
            liveLink: 'https://food-lovers-c1f94.web.app/',
            githubLink: 'https://github.com/Foyzullah9988/food_lovers_client',
            status: 'Live',
            featured: true,
        }
        ,
        {
    id: 3,
    name: 'Skill Bazaar',
    description: 'A local skill exchange SPA where users can browse skills, view details, and book learning sessions. Built with React and Firebase featuring authentication, protected routes, and a modern responsive UI.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80',
    technologies: [
        'React',
        'Firebase',
        'React Router',
        'TailwindCSS',
        'DaisyUI',
        'Swiper'
    ],
    category: 'react',
    liveLink: 'https://skill-bazaar-f180d.web.app/',
    githubLink: 'https://github.com/programming-hero-web-course2/b12-a9-firesheild-Foyzullah9988',
    status: 'Live',
    featured: true,
}


    ];

    // Filter and search projects
    const filteredProjects = projects.filter(project => {
        const matchesCategory = activeFilter === 'all' || project.category === activeFilter;
        const matchesSearch = project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
            project.technologies.some(tech =>
                tech.toLowerCase().includes(searchQuery.toLowerCase())
            );
        return matchesCategory && matchesSearch;
    });

    return (
        <section id="projects" className="py-20 relative">
            {/* Background pattern */}
            <div className="absolute inset-0 bg-dots-pattern opacity-5"></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-dark-heading mb-4">
                        Featured <span className="text-dark-accent">Projects</span>
                    </h2>
                    <div className="w-24 h-1 bg-dark-accent mx-auto mb-6"></div>
                    <p className="text-dark-text text-lg max-w-3xl mx-auto">
                        A collection of my recent work and personal projects
                    </p>
                </motion.div>

                {/* Filters and Search */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="mb-12"
                >
                    <div className="flex flex-col md:flex-row gap-6 justify-between items-center">
                        {/* Category Filters */}
                        <div className="flex flex-wrap justify-center gap-2">
                            {categories.map((category) => (
                                <button
                                    key={category.id}
                                    onClick={() => setActiveFilter(category.id)}
                                    className={`px-4 py-2 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${activeFilter === category.id
                                        ? 'bg-dark-accent text-dark-bg'
                                        : 'bg-dark-card/50 text-dark-text hover:bg-dark-card hover:text-dark-accent'
                                        }`}
                                >
                                    <FaFilter className="text-xs" />
                                    {category.label}
                                </button>
                            ))}
                        </div>

                        {/* Search Bar */}
                        <div className="relative w-full md:w-64">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <FaSearch className="text-dark-text" />
                            </div>
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Search projects..."
                                className="w-full pl-10 pr-4 py-2 bg-dark-card/50 backdrop-blur-sm border border-dark-card/30 rounded-full text-dark-text placeholder-dark-text/50 focus:outline-none focus:ring-2 focus:ring-dark-accent focus:border-transparent"
                            />
                        </div>
                    </div>
                </motion.div>

                {/* Projects Grid */}
                {filteredProjects.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProjects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <ProjectCard project={project} />
                            </motion.div>
                        ))}
                    </div>
                ) : (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-16"
                    >
                        <div className="text-6xl mb-4">🔍</div>
                        <h3 className="text-2xl font-bold text-dark-heading mb-2">
                            No Projects Found
                        </h3>
                        <p className="text-dark-text">
                            Try adjusting your search or filter criteria
                        </p>
                    </motion.div>
                )}

                {/* Featured Projects Highlight */}
                {filteredProjects.some(p => p.featured) && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mt-16"
                    >
                        <h3 className="text-3xl font-bold text-dark-heading text-center mb-8">
                            <span className="text-dark-accent">Highlighted</span> Projects
                        </h3>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {filteredProjects
                                .filter(project => project.featured)
                                .slice(0, 2)
                                .map((project, index) => (
                                    <motion.div
                                        key={project.id}
                                        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.2 }}
                                        className="relative group"
                                    >
                                        <div className="absolute inset-0 bg-linear-to-r from-dark-accent/20 to-blue-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                                        <div className="relative bg-dark-card/50 backdrop-blur-sm rounded-2xl p-6 border border-dark-card/30">
                                            <div className="flex items-center justify-between mb-4">
                                                <span className="px-3 py-1 bg-dark-accent/20 text-dark-accent rounded-full text-sm font-medium">
                                                    Featured
                                                </span>
                                                <div className="flex gap-2">
                                                    <a
                                                        href={project.liveLink}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="p-2 bg-dark-bg/50 rounded-lg text-dark-text hover:text-dark-accent transition-colors"
                                                        title="Live Demo"
                                                    >
                                                        <FaExternalLinkAlt />
                                                    </a>
                                                </div>
                                            </div>

                                            <h4 className="text-2xl font-bold text-dark-heading mb-3">
                                                {project.name}
                                            </h4>

                                            <p className="text-dark-text mb-6">
                                                {project.description}
                                            </p>

                                            <div className="flex flex-wrap gap-2 mb-6">
                                                {project.technologies.slice(0, 4).map((tech, idx) => (
                                                    <span
                                                        key={idx}
                                                        className="px-3 py-1 bg-dark-bg/50 text-dark-text text-sm rounded-full"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                                {project.technologies.length > 4 && (
                                                    <span className="px-3 py-1 bg-dark-bg/50 text-dark-text text-sm rounded-full">
                                                        +{project.technologies.length - 4} more
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                        </div>
                    </motion.div>
                )}

                {/* Call to Action */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center"
                >
                    <p className="text-dark-text text-lg mb-6">
                        Want to see more projects or discuss a custom solution?
                    </p>
                    <a
                        href="#contact"
                        className="inline-flex items-center gap-2 px-8 py-3 bg-dark-accent text-dark-bg font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-dark-accent/30"
                    >
                        <FaExternalLinkAlt />
                        View All Projects
                    </a>
                </motion.div>
            </div>

            <style jsx>{`
        .bg-dots-pattern {
          background-image: radial-gradient(#64ffda0a 1px, transparent 1px);
          background-size: 20px 20px;
        }
      `}</style>
        </section>
    );
};

export default Projects;