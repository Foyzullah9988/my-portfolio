// client/src/components/ProjectCard.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router';
import { FaGithub, FaExternalLinkAlt, FaEye, FaCode } from 'react-icons/fa';

/**
 * ProjectCard Component
 * Individual project card displaying project details with hover effects
 * Includes links to live demo and GitHub repository
 */
const ProjectCard = ({ project }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            whileHover={{ y: -10 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="group relative h-full"
        >
            {/* Card Container */}
            <div className="relative h-full bg-dark-card/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-dark-card/30 group-hover:border-dark-accent/30 transition-all duration-500">
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                    <div
                        className="w-full h-full bg-linear-to-br from-dark-card to-dark-bg"
                        style={{
                            backgroundImage: `url(${project.image})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    >
                        {/* Status Badge */}
                        <div className="absolute top-4 right-4">
                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${project.status === 'Completed'
                                    ? 'bg-green-500/20 text-green-400'
                                    : project.status === 'Live'
                                        ? 'bg-blue-500/20 text-blue-400'
                                        : 'bg-yellow-500/20 text-yellow-400'
                                }`}>
                                {project.status}
                            </span>
                        </div>

                        {/* Overlay on hover */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: isHovered ? 1 : 0 }}
                            className="absolute inset-0 bg-dark-accent/80 flex items-center justify-center"
                        >
                            <div className="flex gap-4">
                                <a
                                    href={project.liveLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 bg-dark-bg rounded-full text-white hover:bg-dark-accent hover:text-dark-bg transition-all"
                                    title="Live Demo"
                                >
                                    <FaExternalLinkAlt />
                                </a>
                                <a
                                    href={project.githubLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 bg-dark-bg rounded-full text-white hover:bg-dark-accent hover:text-dark-bg transition-all"
                                    title="GitHub"
                                >
                                    <FaGithub />
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                    {/* Project Name and Category */}
                    <div className="flex items-center justify-between mb-3">
                        <h3 className="text-xl font-bold text-dark-heading group-hover:text-dark-accent transition-colors">
                            {project.name}
                        </h3>
                        <span className="text-xs px-2 py-1 bg-dark-bg/50 text-dark-text rounded">
                            {project.category.toUpperCase()}
                        </span>
                    </div>

                    {/* Project Description */}
                    <p className="text-dark-text mb-4 line-clamp-2">
                        {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="mb-6">
                        <div className="flex flex-wrap gap-2">
                            {project.technologies.slice(0, 3).map((tech, index) => (
                                <span
                                    key={index}
                                    className="px-2 py-1 bg-dark-bg/30 text-dark-text text-xs rounded"
                                >
                                    {tech}
                                </span>
                            ))}
                            {project.technologies.length > 3 && (
                                <span className="px-2 py-1 bg-dark-bg/30 text-dark-text text-xs rounded">
                                    +{project.technologies.length - 3}
                                </span>
                            )}
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center justify-between pt-4 border-t border-dark-card/30">
                        <Link
                            to={`/project/${project.id}`}
                            className="flex items-center gap-2 text-dark-accent hover:text-white transition-colors group/view-more"
                        >
                            <FaEye />
                            <span className="text-sm font-medium group-hover/view-more:underline">
                                View Details
                            </span>
                        </Link>

                        <div className="flex gap-3">
                            <a
                                href={project.githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-dark-text hover:text-dark-accent transition-colors"
                                title="GitHub"
                            >
                                <FaCode />
                            </a>
                            <a
                                href={project.liveLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-dark-text hover:text-dark-accent transition-colors"
                                title="Live Demo"
                            >
                                <FaExternalLinkAlt />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute -inset-1 bg-linear-to-r from-dark-accent/20 to-blue-500/20 blur-xl"></div>
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;