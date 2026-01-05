// client/src/components/Hero.jsx
import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaGithub, FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa';
import Swal from 'sweetalert2';

// Import all technology icons
import { 
  SiHtml5, SiCss3, SiJavascript, SiReact, SiNodedotjs, SiExpress, 
  SiMongodb, SiVercel, SiNetlify, SiTailwindcss, SiGit, SiGithub, 
  SiFirebase, SiRedux, SiNextdotjs, SiTypescript, SiBootstrap, 
  SiFigma, SiPostman, SiNpm, SiYarn, 
  SiWordpress, SiReactrouter, 
  SiH3
} from 'react-icons/si';
import { TbApi } from 'react-icons/tb';
import { GiSurfBoard } from 'react-icons/gi';
import { VscCode } from 'react-icons/vsc';

/**
 * Hero Component
 * Main introduction section with professional designation, photo, and social links
 * Features animated text and glassmorphic design elements
 */
const Hero = () => {
    const [typedText, setTypedText] = useState('');
    const [isRotationPaused, setIsRotationPaused] = useState(false);
    const fullText = 'MERN Stack Developer';
    const containerRef = useRef(null);

    // Technology logos with their names
    const technologies = [
        { icon: <SiHtml5 />, name: 'HTML5', color: '#E34F26' },
        { icon: <SiCss3 />, name: 'CSS3', color: '#1572B6' },
        { icon: <SiJavascript />, name: 'JavaScript', color: '#F7DF1E' },
        { icon: <SiReact />, name: 'React', color: '#61DAFB' },
        { icon: <SiReactrouter />, name: 'React Router', color: '#CA4245' },
        { icon: <SiNodedotjs />, name: 'Node.js', color: '#339933' },
        { icon: <SiExpress />, name: 'Express.js', color: '#000000' },
        { icon: <SiMongodb />, name: 'MongoDB', color: '#47A248' },
        { icon: <SiVercel />, name: 'Vercel', color: '#000000' },
        { icon: <SiNetlify />, name: 'Netlify', color: '#00C7B7' },
        { icon: <SiTailwindcss />, name: 'Tailwind CSS', color: '#06B6D4' },
        { icon: <GiSurfBoard />, name: 'Surge', color: '#000000' },
        { icon: <SiGit />, name: 'Git', color: '#F05032' },
        { icon: <SiGithub />, name: 'GitHub', color: '#181717' },
        { icon: <SiRedux />, name: 'Redux', color: '#764ABC' },
        { icon: <SiNextdotjs />, name: 'Next.js', color: '#000000' },
        { icon: <SiTypescript />, name: 'TypeScript', color: '#3178C6' },
        { icon: <SiBootstrap />, name: 'Bootstrap', color: '#7952B3' },
        { icon: <SiH3 />, name: 'Material UI', color: '#0081CB' },
        { icon: <SiFirebase />, name: 'Firebase', color: '#FFCA28' },
        { icon: <SiFigma />, name: 'Figma', color: '#F24E1E' },
        { icon: <SiPostman />, name: 'Postman', color: '#FF6C37' },
        { icon: <TbApi />, name: 'REST API', color: '#FF6B6B' },
        { icon: <SiNpm />, name: 'npm', color: '#CB3837' },
        { icon: <SiYarn />, name: 'Yarn', color: '#2C8EBB' },
        { icon: <VscCode />, name: 'VS Code', color: '#007ACC' },
        { icon: <SiWordpress />, name: 'WordPress', color: '#21759B' }
    ];

    // Typewriter effect for designation
    useEffect(() => {
        let index = 0;
        const typingInterval = setInterval(() => {
            if (index <= fullText.length) {
                setTypedText(fullText.slice(0, index));
                index++;
            } else {
                clearInterval(typingInterval);
            }
        }, 100);

        return () => clearInterval(typingInterval);
    }, []);

    // Social media links
    const socialLinks = [
        { icon: <FaGithub />, url: 'https://github.com/Foyzullah9988', label: 'GitHub' },
        { icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/foyzullah-dev/', label: 'LinkedIn' },
        { icon: <FaFacebook />, url: 'https://www.facebook.com/foyzullah.foyzullah.98', label: 'Facebook' },
    ];

    // Handle resume download
    const handleResumeDownload = () => {
        console.log('Downloading resume...');

        // Show success message
        Swal.fire({
            toast: true,
            position: 'top',
            icon: 'success',
            title: 'Resume will be available soon!',
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true,
        });
    };

    // Calculate position for each logo in the circle
    const getLogoPosition = (index, total) => {
        const radius = window.innerWidth < 1024 ? 160 : 220; // Smaller radius for mobile
        const angle = (index / total) * 2 * Math.PI;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        return { x, y };
    };

    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center relative overflow-hidden"
        >
            {/* Glassmorphic background effect */}
            <div className="absolute inset-0 bg-linear-to-br from-dark-card/20 to-dark-bg/50 backdrop-blur-xs"></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column: Introduction Text */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-center lg:text-left"
                    >
                        {/* Greeting */}
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="text-dark-accent text-lg mb-4 font-mono"
                        >
                            Hi, my name is
                        </motion.p>

                        {/* Name */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7 }}
                            className="text-5xl md:text-7xl font-bold text-dark-heading mb-4"
                        >
                            MD Foyzullah
                        </motion.h1>

                        {/* Animated Designation */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1 }}
                            className="text-2xl md:text-4xl text-dark-text mb-6 h-12"
                        >
                            <span className="text-dark-accent font-mono">{typedText}</span>
                            <span className="animate-pulse">|</span>
                        </motion.div>

                        {/* Description */}
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.2 }}
                            className="text-dark-text text-lg mb-8 max-w-2xl"
                        >
                            I build exceptional digital experiences that are fast, accessible,
                            visually appealing, and responsive. Let's bring your ideas to life!
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.4 }}
                            className="flex flex-col sm:flex-row gap-4 items-center lg:items-start"
                        >
                            {/* Resume Download Button */}
                            <button
                                onClick={handleResumeDownload}
                                className="group relative px-8 py-3 bg-dark-accent text-dark-bg font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-dark-accent/30 hover:text-black border"
                            >
                                <span className="relative z-10 flex items-center gap-2">
                                    <FaDownload />
                                    Download Resume
                                </span>
                                <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                            </button>

                            {/* Contact Button */}
                            <a
                                href="#contact"
                                className="px-8 py-3 border-2 border-dark-accent text-dark-accent font-semibold rounded-lg transition-all duration-300 hover:bg-dark-accent hover:text-dark-bg hover:scale-105"
                            >
                                Get In Touch
                            </a>
                        </motion.div>

                        {/* Social Links */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.6 }}
                            className="mt-12 flex justify-center lg:justify-start gap-6"
                        >
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={social.label}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 1.8 + index * 0.1 }}
                                    whileHover={{ scale: 1.2, y: -5 }}
                                    className="text-2xl text-dark-text hover:text-dark-accent transition-colors duration-300"
                                    aria-label={social.label}
                                >
                                    {social.icon}
                                </motion.a>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Right Column: Profile Image with Rotating Logos */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="relative flex justify-center lg:justify-end"
                    >
                        <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                            {/* Outer glow */}
                            <div className="absolute inset-0 bg-linear-to-r from-dark-accent to-blue-500 rounded-full animate-pulse-slow blur-xl opacity-20"></div>

                            {/* Rotating Logos Container */}
                            <div 
                                ref={containerRef}
                                className={`absolute inset-0 w-full h-full ${isRotationPaused ? 'paused' : 'rotating'} transition-all duration-300`}
                                onMouseEnter={() => setIsRotationPaused(true)}
                                onMouseLeave={() => setIsRotationPaused(false)}
                            >
                                {technologies.map((tech, index) => {
                                    const position = getLogoPosition(index, technologies.length);
                                    return (
                                        <motion.div
                                            key={tech.name}
                                            className="absolute cursor-pointer group"
                                            style={{
                                                left: '50%',
                                                top: '50%',
                                                transform: `translate(-50%, -50%) translate(${position.x}px, ${position.y}px)`,
                                            }}
                                            whileHover={{ scale: 1.5, zIndex: 50 }}
                                            initial={{ opacity: 0, scale: 0 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: 2 + index * 0.02 }}
                                        >
                                            <div 
                                                className="relative flex items-center justify-center w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-dark-card/80 backdrop-blur-md rounded-full border border-dark-accent/30 shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:shadow-dark-accent/20 group-hover:scale-110"
                                                style={{ 
                                                    borderColor: tech.color,
                                                    boxShadow: `0 0 15px ${tech.color}40`
                                                }}
                                            >
                                                <div 
                                                    className="text-2xl md:text-3xl transition-transform duration-300 group-hover:scale-125"
                                                    style={{ color: tech.color }}
                                                >
                                                    {tech.icon}
                                                </div>
                                                
                                                {/* Tooltip */}
                                                <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-50">
                                                    <div className="bg-dark-card/90 backdrop-blur-md px-3 py-2 rounded-lg border border-dark-accent/30 whitespace-nowrap">
                                                        <span className="text-sm font-semibold text-white">{tech.name}</span>
                                                        <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-b-4 border-l-transparent border-r-transparent border-b-dark-card/90"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </div>

                            {/* Image container with glassmorphic effect */}
                            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-dark-accent/30 backdrop-blur-sm bg-dark-card/30">
                                {/* Profile Image */}
                                <div className="w-full h-full flex items-center justify-center bg-linear-to-br from-dark-card to-dark-bg">
                                    <img 
                                        src="/portfolio.png" 
                                        alt="MD Foyzullah - MERN Stack Developer" 
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* Floating elements */}
                                <div className="absolute -top-4 -left-4 w-20 h-20 bg-dark-accent/10 rounded-full animate-float"></div>
                                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-500/10 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
                            </div>

                            {/* Experience badge */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 2 }}
                                className="absolute -bottom-4 right-8 bg-dark-card/80 backdrop-blur-md px-6 py-3 rounded-full border border-dark-accent/30"
                            >
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 bg-dark-accent rounded-full animate-pulse"></div>
                                    <span className="text-sm font-semibold">1+ Years Experience</span>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>

                {/* Scroll indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.5 }}
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                >
                    <div className="animate-bounce">
                        <div className="w-6 h-10 border-2 border-dark-text rounded-full flex justify-center">
                            <div className="w-1 h-3 bg-dark-accent rounded-full mt-2 animate-pulse"></div>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Add CSS for rotation animation */}
            <style jsx>{`
                @keyframes rotate {
                    from {
                        transform: rotate(0deg);
                    }
                    to {
                        transform: rotate(360deg);
                    }
                }
                
                .rotating {
                    animation: rotate 40s linear infinite;
                }
                
                .paused {
                    animation-play-state: paused;
                }
                
                /* For smaller screens, adjust the rotation circle */
                @media (max-width: 1024px) {
                    @keyframes rotate {
                        from {
                            transform: rotate(0deg) scale(0.8);
                        }
                        to {
                            transform: rotate(360deg) scale(0.8);
                        }
                    }
                    
                    .rotating {
                        animation: rotate 35s linear infinite;
                        transform-origin: center;
                    }
                }
                
                /* For very small screens */
                @media (max-width: 640px) {
                    @keyframes rotate {
                        from {
                            transform: rotate(0deg) scale(0.7);
                        }
                        to {
                            transform: rotate(360deg) scale(0.7);
                        }
                    }
                    
                    .rotating {
                        animation: rotate 30s linear infinite;
                    }
                }
            `}</style>
        </section>
    );
};

export default Hero;