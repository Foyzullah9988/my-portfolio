// client/src/components/Footer.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook, FaHeart, FaArrowUp } from 'react-icons/fa';

/**
 * Footer Component
 * Simple and elegant footer with social links and copyright information
 * Includes back-to-top functionality
 */
const Footer = () => {
    const currentYear = new Date().getFullYear();

    // Social media links
    const socialLinks = [
        { icon: <FaGithub  className='text-xl lg:text-3xl'/>, url: 'https://github.com/Foyzullah9988', label: 'GitHub' },
        { icon: <FaLinkedin  className='text-xl lg:text-3xl'/>, url: 'https://www.linkedin.com/in/foyzullah-dev/', label: 'LinkedIn' },
        // { icon: <FaTwitter />, url: 'https://twitter.com/foyzullah', label: 'Twitter' },
        { icon: <FaFacebook className='text-xl lg:text-3xl'/>, url: 'https://www.facebook.com/foyzullah.foyzullah.98', label: 'Facebook' },
    ];

    // Back to top functionality
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <footer className="relative bg-dark-card/30 backdrop-blur-sm border-t border-dark-card/30">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="h-full w-full bg-grid-pattern"></div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Main Footer Content */}
                <div className="py-12">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {/* Brand Column */}
                        <div className="md:col-span-2">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="mb-6"
                            >
                                <a href="/" className="text-2xl font-bold">
                                    <span className="text-dark-accent">MD </span>
                                    <span className="text-dark-heading">Foyzullah</span>
                                </a>
                            </motion.div>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="text-dark-text max-w-md"
                            >
                                Passionate MERN Stack Developer creating exceptional digital experiences.
                                Let's build something amazing together!
                            </motion.p>

                            {/* Social Links */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="flex gap-4 mt-6"
                            >
                                {socialLinks.map((social, index) => (
                                    <motion.a
                                        key={social.label}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.2, y: -5 }}
                                        whileTap={{ scale: 0.9 }}
                                        className="w-10 h-10 bg-dark-bg/50 rounded-lg flex items-center justify-center text-dark-text hover:text-dark-accent hover:bg-dark-accent/20 transition-all duration-300"
                                        aria-label={social.label}
                                    >
                                        {social.icon}
                                    </motion.a>
                                ))}
                            </motion.div>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <motion.h3
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="text-lg font-bold text-dark-heading mb-4"
                            >
                                Quick Links
                            </motion.h3>

                            <motion.ul
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="space-y-3"
                            >
                                {[
                                    { label: 'Home', href: '#home' },
                                    { label: 'About', href: '#about' },
                                    { label: 'Skills', href: '#skills' },
                                    { label: 'Projects', href: '#projects' },
                                    { label: 'Contact', href: '#contact' },
                                ].map((link, index) => (
                                    <li key={index}>
                                        <a
                                            href={link.href}
                                            className="text-dark-text hover:text-dark-accent transition-colors"
                                        >
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </motion.ul>
                        </div>

                        {/* Contact Info */}
                        <div>
                            <motion.h3
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="text-lg font-bold text-dark-heading mb-4"
                            >
                                Contact Info
                            </motion.h3>

                            <motion.ul
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="space-y-3"
                            >
                                <li className="text-dark-text">
                                    Email: lmdifoylzullahi@gmail.com
                                </li>
                                <li className="text-dark-text">
                                    Phone: +880 1708-099988
                                </li>
                                <li className="text-dark-text">
                                    Location: Khulna, Bangladesh
                                </li>
                            </motion.ul>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="py-6 border-t border-dark-card/30">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        {/* Copyright */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-dark-text text-sm"
                        >
                            © {currentYear} MD Foyzullah. All rights reserved.
                            <span className="inline-flex items-center gap-1 ml-2">
                                Made with <FaHeart className="text-red-500 animate-pulse" />
                            </span>
                        </motion.div>

                        {/* Back to Top Button */}
                        <motion.button
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={scrollToTop}
                            className="flex items-center gap-2 px-4 py-2 bg-dark-accent/20 text-dark-accent rounded-lg hover:bg-dark-accent/30 transition-all"
                        >
                            <FaArrowUp />
                            Back to Top
                        </motion.button>
                    </div>
                </div>
            </div>

            <style jsx>{`
        .bg-grid-pattern {
          background-image: linear-gradient(to right, #64ffda0a 1px, transparent 1px),
                            linear-gradient(to bottom, #64ffda0a 1px, transparent 1px);
          background-size: 20px 20px;
        }
      `}</style>
        </footer>
    );
};

export default Footer;