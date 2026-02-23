import React from "react"
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart, FaArrowUp, FaPhone } from "react-icons/fa"
import { SiInstagram } from "react-icons/si"
import { FaXTwitter } from "react-icons/fa6"
import { motion } from "motion/react"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Awards", href: "#awards" },
    { name: "Contact", href: "#contact" },
  ]

  const socialLinks = [
    {
      icon: FaGithub,
      href: "https://github.com/khu5shi",
      label: "GitHub",
      color: "hover:text-gray-300"
    },
    {
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/khushi-agrawal-08a21b25a/",
      label: "LinkedIn",
      color: "hover:text-blue-400"
    },
    {
      icon: SiInstagram,
      href: "https://www.instagram.com/khushi_agrawal7589?igsh=YWVtd3FkdnhrMXU1",
      label: "Instagram",
      color: "hover:text-pink-400"
    },
    {
      icon: FaXTwitter,
      href: "#",
      label: "Twitter",
      color: "hover:text-sky-400"
    },
    {
      icon: FaEnvelope,
      href: "mailto:khushi4608@gmail.com",
      label: "Email",
      color: "hover:text-cyan-400"
    },
  ]

  const contactInfo = [
    { icon: FaEnvelope, text: "khushi4608@gmail.com", href: "mailto:khushi4608@gmail.com" },
    { icon: FaPhone, text: "+91 7394874292", href: "tel:+917394874292" },
  ]

  return (
    <footer className="relative bg-gradient-to-b from-neutral-900 to-black border-t border-neutral-800/50 overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.03, 0.05, 0.03],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.03, 0.05, 0.03],
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Column 1 - Branding */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="mb-6">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 
                           bg-clip-text text-transparent mb-2">
                Khushi Agrawal
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Full Stack Developer passionate about building innovative web solutions and creating seamless user experiences.
              </p>
            </div>
            
            {/* Logo/Initials with gradient */}
            <motion.div
              whileHover={{ scale: 1.05, rotate: 5 }}
              className="inline-flex items-center justify-center w-16 h-16 rounded-xl
                       bg-gradient-to-br from-cyan-500 to-purple-500 shadow-lg
                       text-white font-bold text-2xl"
            >
              KA
            </motion.div>
          </motion.div>

          {/* Column 2 - Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
              <span className="w-6 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full"></span>
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300
                             text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-gray-600 rounded-full group-hover:bg-cyan-400 
                                   transition-colors duration-300"></span>
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3 - Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
              <span className="w-6 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></span>
              Get In Touch
            </h4>
            <ul className="space-y-3">
              {contactInfo.map((info, index) => {
                const Icon = info.icon
                return (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <a
                      href={info.href}
                      className="flex items-center gap-3 text-gray-400 hover:text-cyan-400 
                               transition-colors duration-300 text-sm group"
                    >
                      <Icon className="w-4 h-4 text-cyan-500 group-hover:scale-110 transition-transform" />
                      <span>{info.text}</span>
                    </a>
                  </motion.li>
                )
              })}
            </ul>

            {/* Location */}
            <div className="mt-4 flex items-start gap-3 text-gray-400 text-sm">
              <svg className="w-4 h-4 text-purple-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              <span>New Delhi, India</span>
            </div>
          </motion.div>

          {/* Column 4 - Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
              <span className="w-6 h-1 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full"></span>
              Stay Connected
            </h4>
            <p className="text-gray-400 text-sm mb-4">
              Follow me on social media for updates on my latest projects and tech insights.
            </p>
            
            {/* Social Links */}
            <div className="flex flex-wrap gap-2">
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-3 rounded-lg bg-neutral-800/50 border border-neutral-700
                              ${social.color} transition-all duration-300
                              hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/20`}
                    title={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                )
              })}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="relative mb-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-neutral-800"></div>
          </div>
          <div className="relative flex justify-center">
            <div className="px-4 bg-gradient-to-r from-transparent via-neutral-900 to-transparent">
              <div className="w-2 h-2 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center gap-4"
        >
          {/* Copyright */}
          <div className="text-center md:text-left">
            <p className="text-gray-400 text-sm">
              © {currentYear}{" "}
              <span className="font-semibold bg-gradient-to-r from-cyan-400 to-purple-400 
                             bg-clip-text text-transparent">
                Khushi Agrawal
              </span>
              . All rights reserved.
            </p>
            <p className="text-gray-500 text-xs mt-1">
              Made with <FaHeart className="inline text-pink-500 animate-pulse" /> and ☕ in India
            </p>
          </div>

          {/* Additional Links */}
          <div className="flex items-center gap-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
              Privacy Policy
            </a>
            <span className="text-gray-700">•</span>
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
              Terms of Service
            </a>
          </div>
        </motion.div>

        {/* Scroll to Top Button */}
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.1, y: -3 }}
          whileTap={{ scale: 0.95 }}
          className="fixed bottom-8 right-8 p-4 rounded-full
                   bg-gradient-to-r from-cyan-500 to-purple-500
                   text-white shadow-lg shadow-cyan-500/30
                   hover:shadow-xl hover:shadow-cyan-500/50
                   transition-all duration-300 z-50
                   hidden lg:flex items-center justify-center"
          aria-label="Scroll to top"
        >
          <FaArrowUp className="w-5 h-5" />
        </motion.button>
      </div>

      {/* Bottom accent line */}
      <div className="h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500"></div>
    </footer>
  )
}

export default Footer