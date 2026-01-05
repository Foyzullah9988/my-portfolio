// client/src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaHome, FaUser, FaTools, FaGraduationCap, FaBriefcase, FaProjectDiagram, FaEnvelope } from 'react-icons/fa';

/**
 * Navbar Component
 * Responsive navigation bar with smooth animations and active route highlighting
 * Features glassmorphic design and mobile-friendly hamburger menu
 */
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    // Handle scroll effect for navbar background
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    // Navigation items with icons
    const navItems = [
        { path: '/', label: 'Home', icon: <FaHome /> },
        { path: '#about', label: 'About', icon: <FaUser /> },
        { path: '#skills', label: 'Skills', icon: <FaTools /> },
        { path: '#education', label: 'Education', icon: <FaGraduationCap /> },
        { path: '#experience', label: 'Experience', icon: <FaBriefcase /> },
        { path: '#projects', label: 'Projects', icon: <FaProjectDiagram /> },
        { path: '#contact', label: 'Contact', icon: <FaEnvelope /> },
    ];

    // Handle smooth scrolling to sections
    const handleNavClick = (hash) => {
        if (hash.startsWith('#')) {
            const element = document.querySelector(hash);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    return (
        <>
            {/* Main Navbar */}
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
                className={`fixed w-full z-50 transition-all duration-300 ${scrolled
                        ? 'bg-dark-card/80 backdrop-blur-md shadow-lg'
                        : 'bg-transparent'
                    }`}
            >
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo/Brand */}
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="flex-shrink-0"
                        >
                            <Link to="/" className="text-2xl font-bold text-dark-accent">
                                {/* First name in accent color, last name in light */}
                                <span className="text-dark-accent">MD </span>
                                <span className="text-dark-heading">Foyzullah</span>
                            </Link>
                        </motion.div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                {navItems.map((item) => (
                                    <motion.div
                                        key={item.label}
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <button
                                            onClick={() => handleNavClick(item.path)}
                                            className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 flex items-center gap-2 ${location.hash === item.path ||
                                                    (location.pathname === '/' && item.path === '/')
                                                    ? 'text-dark-accent bg-dark-card'
                                                    : 'text-dark-text hover:text-dark-accent hover:bg-dark-card/50'
                                                }`}
                                        >
                                            {item.icon}
                                            {item.label}
                                        </button>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Mobile menu button */}
                        <div className="md:hidden">
                            <motion.button
                                whileTap={{ scale: 0.9 }}
                                onClick={() => setIsOpen(!isOpen)}
                                className="inline-flex items-center justify-center p-2 rounded-md text-dark-text hover:text-dark-accent focus:outline-none"
                            >
                                <span className="sr-only">Open main menu</span>
                                {isOpen ? (
                                    <FaTimes className="block h-6 w-6" />
                                ) : (
                                    <FaBars className="block h-6 w-6" />
                                )}
                            </motion.button>
                        </div>
                    </div>
                </div>

                {/* Mobile Navigation Menu */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="md:hidden bg-dark-card/95 backdrop-blur-md"
                        >
                            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                                {navItems.map((item) => (
                                    <motion.div
                                        key={item.label}
                                        initial={{ x: -20, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{ delay: navItems.indexOf(item) * 0.1 }}
                                    >
                                        <button
                                            onClick={() => handleNavClick(item.path)}
                                            className={`w-full text-left px-3 py-2 rounded-md text-base font-medium flex items-center gap-3 ${location.hash === item.path
                                                    ? 'text-dark-accent bg-dark-bg/30'
                                                    : 'text-dark-text hover:text-dark-accent hover:bg-dark-bg/30'
                                                }`}
                                        >
                                            {item.icon}
                                            {item.label}
                                        </button>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.nav>

            {/* Spacer to prevent content from hiding behind fixed navbar */}
            <div className="h-16"></div>
        </>
    );
};

export default Navbar;