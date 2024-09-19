import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'; // Social Media Icons
import { motion } from 'framer-motion'; // Import Framer Motion for animation
import { useInView } from 'react-intersection-observer'; // For detecting scroll into view
import '../css/FooterComponent.css'; // Tailwind CSS can also be used inline

const FooterComponent = () => {
    const { ref, inView } = useInView({
        triggerOnce: true, // Animation will trigger only once
        threshold: 0.1,    // Trigger when 10% of the footer is visible
    });

    // Animation variants for Framer Motion
    const fadeInUp = {
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0, transition: { duration: 1 } },
    };

    return (
        <motion.footer
            ref={ref}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={fadeInUp}
            className="bg-gradient-to-r from-blue-900 via-indigo-800 to-blue-900 text-white py-10"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                    {/* Contact Section */}
                    <motion.div
                        className="space-y-4"
                        variants={fadeInUp}
                        transition={{ delay: 0.2 }}
                    >
                        <h4 className="text-xl font-semibold text-yellow-400">Contact Us</h4>
                        <ul className="space-y-2">
                            <li>Phone: +123 456 7890</li>
                            <li>Email: contact@company.com</li>
                            <li>Address: 123 Main St, City, Country</li>
                        </ul>
                    </motion.div>

                    {/* Social Media Section */}
                    <motion.div
                        className="space-y-4"
                        variants={fadeInUp}
                        transition={{ delay: 0.4 }}
                    >
                        <h4 className="text-xl font-semibold text-yellow-400">Follow Us</h4>
                        <div className="flex justify-center md:justify-start space-x-6">
                            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-400">
                                <FaLinkedinIn className="w-8 h-8 transition transform hover:scale-110" />
                            </a>
                            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-400">
                                <FaInstagram className="w-8 h-8 transition transform hover:scale-110" />
                            </a>
                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-400">
                                <FaFacebookF className="w-8 h-8 transition transform hover:scale-110" />
                            </a>
                        </div>
                    </motion.div>

                    {/* Vlogs Section */}
                    <motion.div
                        className="space-y-4"
                        variants={fadeInUp}
                        transition={{ delay: 0.6 }}
                    >
                        <h4 className="text-xl font-semibold text-yellow-400">Vlogs & Updates</h4>
                        <p>Check out our latest vlogs and updates on our blog!</p>
                    </motion.div>
                </div>

                {/* Footer Bottom Section */}
                <motion.div
                    className="text-center border-t border-gray-700 pt-6 mt-8"
                    variants={fadeInUp}
                    transition={{ delay: 0.8 }}
                >
                    <p className="text-gray-400">
                        © {new Date().getFullYear()} Company Name. All Rights Reserved.
                    </p>
                </motion.div>
            </div>
        </motion.footer>
    );
};

export default FooterComponent;
