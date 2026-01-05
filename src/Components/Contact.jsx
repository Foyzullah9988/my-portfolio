// client/src/components/Contact.jsx
import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FaEnvelope, FaPhone, FaWhatsapp, FaMapMarkerAlt, FaPaperPlane, FaCheckCircle } from 'react-icons/fa';

const Contact = () => {
    const formRef = useRef();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    // Contact information
    const contactInfo = [
        {
            icon: <FaEnvelope />,
            title: 'Email',
            value: 'lmdifoylzullahi@gmail.com',
            link: 'mailto:lmdifoylzullahi@gmail.com',
        },
        {
            icon: <FaPhone />,
            title: 'Phone',
            value: '+880 1708-099988',
            link: 'tel:+8801708099988',
        },
        {
            icon: <FaWhatsapp />,
            title: 'WhatsApp',
            value: '+880 1708-099988',
            link: 'https://wa.me/8801708099988',
        },
        {
            icon: <FaMapMarkerAlt />,
            title: 'Location',
            value: 'Dhaka, Bangladesh',
            link: 'https://maps.google.com/?q=Dhaka,Bangladesh',
        },
    ];

    // Handle form input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const serviceID = import.meta.env.REACT_APP_EMAILJS_SERVICE_ID;
            const templateID = import.meta.env.REACT_APP_EMAILJS_TEMPLATE_ID;
            const publicKey = import.meta.env.REACT_APP_EMAILJS_PUBLIC_KEY;

            // Send email
            await emailjs.sendForm(
                serviceID,
                templateID,
                formRef.current,
                publicKey
            );

            // Success
            setSubmitStatus('success');
            setFormData({
                name: '',
                email: '',
                subject: '',
                message: '',
            });

            setTimeout(() => setSubmitStatus(null), 5000);

        } catch (error) {
            console.error('Email send error:', error);
            setSubmitStatus('error');
            setTimeout(() => setSubmitStatus(null), 5000);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="py-20 relative">
            <div className="absolute inset-0 bg-gradient-to-b from-dark-bg to-dark-card/30"></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-dark-heading mb-4">
                        Get In <span className="text-dark-accent">Touch</span>
                    </h2>
                    <div className="w-24 h-1 bg-dark-accent mx-auto mb-6"></div>
                    <p className="text-dark-text text-lg max-w-3xl mx-auto">
                        Have a project in mind or want to discuss opportunities? Feel free to reach out!
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div className="bg-dark-card/50 backdrop-blur-sm rounded-2xl p-8 border border-dark-card/30">
                            <h3 className="text-2xl font-bold text-dark-heading mb-6">Contact Information</h3>
                            <div className="space-y-6">
                                {contactInfo.map((info, index) => (
                                    <motion.a
                                        key={index}
                                        href={info.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="flex items-center gap-4 p-4 bg-dark-bg/30 rounded-xl border border-dark-card/30 hover:border-dark-accent/50 transition-all group"
                                    >
                                        <div className="w-12 h-12 bg-dark-accent/20 rounded-xl flex items-center justify-center text-dark-accent text-xl group-hover:scale-110 transition-transform">
                                            {info.icon}
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-dark-heading">{info.title}</h4>
                                            <p className="text-dark-text group-hover:text-dark-accent transition-colors">
                                                {info.value}
                                            </p>
                                        </div>
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="bg-dark-card/50 backdrop-blur-sm rounded-2xl p-8 border border-dark-card/30">
                            <h3 className="text-2xl font-bold text-dark-heading mb-6">Send a Message</h3>

                            {submitStatus === 'success' && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-xl"
                                >
                                    <div className="flex items-center gap-3">
                                        <FaCheckCircle className="text-green-500" />
                                        <div>
                                            <p className="font-semibold text-green-400">✓ Message Sent Successfully!</p>
                                            <p className="text-sm text-dark-text">I'll get back to you within 24 hours.</p>
                                        </div>
                                    </div>
                                </motion.div>
                            )}

                            {submitStatus === 'error' && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="mb-6 p-4 bg-red-500/20 border border-red-500/30 rounded-xl"
                                >
                                    <p className="text-red-400">✗ Failed to send. Please email me directly: lmdifoylzullahi@gmail.com</p>
                                </motion.div>
                            )}

                            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-dark-text mb-2">
                                            Your Name *
                                        </label>
                                        <input
                                            type="text"
                                            name="from_name"
                                            defaultValue={formData.name}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 bg-dark-bg/50 border border-dark-card/30 rounded-lg text-dark-text focus:outline-none focus:ring-2 focus:ring-dark-accent"
                                            placeholder="John Doe"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-dark-text mb-2">
                                            Email Address *
                                        </label>
                                        <input
                                            type="email"
                                            name="from_email"
                                            defaultValue={formData.email}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 bg-dark-bg/50 border border-dark-card/30 rounded-lg text-dark-text focus:outline-none focus:ring-2 focus:ring-dark-accent"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-dark-text mb-2">
                                        Subject *
                                    </label>
                                    <input
                                        type="text"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 bg-dark-bg/50 border border-dark-card/30 rounded-lg text-dark-text focus:outline-none focus:ring-2 focus:ring-dark-accent"
                                        placeholder="Project Inquiry"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-dark-text mb-2">
                                        Message *
                                    </label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        required
                                        rows="6"
                                        className="w-full px-4 py-3 bg-dark-bg/50 border border-dark-card/30 rounded-lg text-dark-text focus:outline-none focus:ring-2 focus:ring-dark-accent resize-none"
                                        placeholder="Tell me about your project..."
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`w-full flex items-center justify-center gap-3 px-8 py-4 font-semibold rounded-lg transition-all border ${isSubmitting
                                            ? 'bg-dark-accent/50 cursor-not-allowed'
                                            : 'bg-dark-accent hover:scale-105'
                                        }`}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            <FaPaperPlane />
                                            Send Message
                                        </>
                                    )}
                                </button>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;