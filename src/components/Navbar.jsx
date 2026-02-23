import logo from "../assets/logo.png"
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa"
import { FaBars, FaTimes } from "react-icons/fa"
import { HiDownload } from "react-icons/hi"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "motion/react"
import "./About"
import "./Hero"
import "./Project"
import "./Experiences"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      // Update active section based on scroll position
      const sections = ["home", "about", "projects", "experience"]
      const current = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (current) setActiveSection(current)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu when clicking outside
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
  ]

  const socialLinks = [
    { 
      Icon: FaLinkedin, 
      href: "https://www.linkedin.com/in/khushi-agrawal-08a21b25a/",
      color: "hover:text-blue-400",
      label: "LinkedIn"
    },
    { 
      Icon: FaGithub, 
      href: "https://github.com/khu5shi",
      color: "hover:text-gray-300",
      label: "GitHub"
    },
    { 
      Icon: FaInstagram, 
      href: "https://www.instagram.com/khushi_agrawal7589?igsh=YWVtd3FkdnhrMXU1",
      color: "hover:text-pink-400",
      label: "Instagram"
    },
  ]

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-neutral-900/95 backdrop-blur-xl shadow-lg shadow-neutral-900/50 border-b border-neutral-800/50"
            : "bg-neutral-900/80 backdrop-blur-md border-b border-neutral-800/30"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <div className="relative">
                {/* Animated glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 
                              rounded-full blur-md opacity-0 group-hover:opacity-60 
                              transition-opacity duration-300"></div>
                <img 
                  src={logo} 
                  alt="Khushi Agrawal - Portfolio Logo" 
                  className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full 
                           border-2 border-transparent group-hover:border-cyan-400/50
                           transition-all duration-300 shadow-lg"
                />
              </div>
              <span className="hidden sm:block text-lg font-bold bg-gradient-to-r 
                             from-cyan-400 to-purple-400 bg-clip-text text-transparent
                             group-hover:from-cyan-300 group-hover:to-pink-300
                             transition-all duration-300">
                Portfolio
              </span>
            </motion.div>

            {/* Desktop Navigation */}
            <ul className="hidden md:flex items-center space-x-1 lg:space-x-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className={`relative px-4 py-2 text-sm lg:text-base font-medium 
                              transition-all duration-300 rounded-lg group
                              ${
                                activeSection === link.href.slice(1)
                                  ? "text-cyan-400"
                                  : "text-gray-300 hover:text-white"
                              }`}
                  >
                    <span className="relative z-10">{link.name}</span>
                    
                    {/* Active indicator */}
                    {activeSection === link.href.slice(1) && (
                      <motion.div
                        layoutId="activeSection"
                        className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 
                                 rounded-lg border border-cyan-500/30"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    
                    {/* Hover effect */}
                    <span className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 to-purple-500/0 
                                   group-hover:from-cyan-500/10 group-hover:to-purple-500/10 
                                   rounded-lg transition-all duration-300"></span>
                  </a>
                </li>
              ))}
            </ul>

            {/* Right Section - Social Icons & CTA */}
            <div className="flex items-center gap-2 lg:gap-4">
              {/* Social Icons - Desktop */}
              <div className="hidden lg:flex items-center gap-2">
                {socialLinks.map(({ Icon, href, color, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-2 rounded-lg text-gray-400 ${color}
                              bg-neutral-800/50 hover:bg-neutral-700/50
                              border border-neutral-700/50 hover:border-neutral-600
                              transition-all duration-300 shadow-lg hover:shadow-cyan-500/20`}
                    aria-label={label}
                  >
                    <Icon className="w-4 h-4" />
                  </motion.a>
                ))}
              </div>

              {/* CTA Button - Desktop */}
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="hidden md:flex items-center gap-2 px-4 lg:px-6 py-2 lg:py-2.5 
                         bg-gradient-to-r from-cyan-500 to-purple-500
                         text-white text-sm font-semibold rounded-full
                         shadow-lg shadow-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/40
                         transition-all duration-300 group"
              >
                <span>Contact Me</span>
                <HiDownload className="w-4 h-4 group-hover:animate-bounce" />
              </motion.a>

              {/* Mobile Menu Toggle */}
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden p-2 rounded-lg text-gray-300 
                         bg-neutral-800/50 hover:bg-neutral-700/50
                         border border-neutral-700/50
                         transition-all duration-300"
                aria-label="Toggle menu"
              >
                {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setIsOpen(false)}
            />

            {/* Mobile Menu */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-[280px] sm:w-[320px] 
                       bg-gradient-to-br from-neutral-900 to-neutral-800
                       border-l border-neutral-700/50 shadow-2xl z-50 md:hidden
                       overflow-y-auto"
            >
              {/* Mobile Menu Header */}
              <div className="flex items-center justify-between p-6 border-b border-neutral-700/50">
                <div className="flex items-center gap-3">
                  <img src={logo} alt="Logo" className="w-10 h-10 rounded-full" />
                  <span className="text-lg font-bold bg-gradient-to-r from-cyan-400 to-purple-400 
                                 bg-clip-text text-transparent">
                    Menu
                  </span>
                </div>
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-lg text-gray-400 hover:text-white
                           bg-neutral-800/50 hover:bg-neutral-700/50
                           transition-all duration-300"
                >
                  <FaTimes size={20} />
                </motion.button>
              </div>

              {/* Mobile Navigation Links */}
              <div className="p-6">
                <ul className="space-y-2">
                  {navLinks.map((link, index) => (
                    <motion.li
                      key={link.name}
                      initial={{ x: 50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <a
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className={`block px-4 py-3 rounded-lg text-base font-medium
                                  transition-all duration-300 group
                                  ${
                                    activeSection === link.href.slice(1)
                                      ? "bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 border border-cyan-500/30"
                                      : "text-gray-300 hover:text-white hover:bg-neutral-700/30"
                                  }`}
                      >
                        <span className="flex items-center justify-between">
                          {link.name}
                          {activeSection === link.href.slice(1) && (
                            <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>
                          )}
                        </span>
                      </a>
                    </motion.li>
                  ))}
                </ul>

                {/* Mobile CTA Button */}
                <motion.a
                  href="#contact"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 w-full mt-6 px-6 py-3
                           bg-gradient-to-r from-cyan-500 to-purple-500
                           text-white font-semibold rounded-full
                           shadow-lg shadow-cyan-500/30
                           transition-all duration-300"
                >
                  <span>Get In Touch</span>
                  <HiDownload className="w-4 h-4" />
                </motion.a>

                {/* Mobile Social Links */}
                <div className="mt-8 pt-6 border-t border-neutral-700/50">
                  <p className="text-sm text-gray-500 mb-4">Connect with me</p>
                  <div className="flex gap-3">
                    {socialLinks.map(({ Icon, href, color, label }, index) => (
                      <motion.a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                        whileTap={{ scale: 0.9 }}
                        className={`flex-1 flex items-center justify-center p-3 rounded-lg
                                  text-gray-400 ${color}
                                  bg-neutral-800/50 hover:bg-neutral-700/50
                                  border border-neutral-700/50
                                  transition-all duration-300`}
                        aria-label={label}
                      >
                        <Icon className="w-5 h-5" />
                      </motion.a>
                    ))}
                  </div>
                </div>

                {/* Mobile Menu Footer */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="mt-8 pt-6 border-t border-neutral-700/50"
                >
                  <p className="text-xs text-gray-500 text-center">
                    © 2026 Khushi Agrawal
                  </p>
                  <p className="text-xs text-gray-600 text-center mt-1">
                    Full Stack Developer
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar