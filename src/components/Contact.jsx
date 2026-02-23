import { FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
import { SiInstagram } from "react-icons/si"
import { motion } from "motion/react"
import { useState } from "react"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus("success")
      setFormData({ name: "", email: "", subject: "", message: "" })
      
      setTimeout(() => setSubmitStatus(null), 5000)
    }, 1500)
  }

  const contactInfo = [
    {
      icon: FaEnvelope,
      label: "Email",
      value: "khushi4608@gmail.com",
      href: "mailto:khushi4608@gmail.com",
      color: "from-cyan-500 to-blue-500"
    },
    {
      icon: FaPhone,
      label: "Phone",
      value: "+91 7394874292",
      href: "tel:+917394874292",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: FaMapMarkerAlt,
      label: "Location",
      value: "New Delhi, India",
      href: "#",
      color: "from-purple-500 to-pink-500"
    }
  ]

  const socialLinks = [
    {
      icon: FaLinkedin,
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/khushi-agrawal-08a21b25a/",
      color: "hover:text-blue-500",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      icon: FaGithub,
      name: "GitHub",
      href: "https://github.com/khu5shi",
      color: "hover:text-gray-300",
      gradient: "from-gray-600 to-gray-800"
    },
    {
      icon: SiInstagram,
      name: "Instagram",
      href: "https://www.instagram.com/khushi_agrawal7589?igsh=YWVtd3FkdnhrMXU1",
      color: "hover:text-pink-500",
      gradient: "from-pink-500 to-purple-600"
    },
    {
      icon: FaXTwitter,
      name: "Twitter",
      href: "#",
      color: "hover:text-sky-400",
      gradient: "from-sky-500 to-blue-500"
    }
  ]

  return (
    <div className="border-b border-neutral-800/50 py-20 lg:py-32 overflow-hidden" id="contact">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 lg:mb-20"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 rounded-full text-sm font-semibold
                     bg-gradient-to-r from-cyan-500/10 to-purple-500/10
                     border border-cyan-500/30 text-cyan-400 mb-4"
          >
            Get In Touch
          </motion.span>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            Let's{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 
                           bg-clip-text text-transparent">
              Connect
            </span>
          </h2>
          
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="h-1 w-24 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 
                     rounded-full mx-auto mt-4"
          />

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg">
            Have a project in mind or just want to chat? Feel free to reach out. I'm always open to discussing new opportunities and collaborations.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 max-w-7xl mx-auto">
          {/* Left Side - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-8"
          >
            {/* Contact Info Cards */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <span className="w-8 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full"></span>
                Contact Information
              </h3>
              
              {contactInfo.map((info, index) => {
                const Icon = info.icon
                return (
                  <motion.a
                    key={info.label}
                    href={info.href}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="group flex items-center gap-4 p-4 rounded-xl
                             bg-gradient-to-br from-neutral-900/80 to-neutral-800/50
                             border border-neutral-700/50 backdrop-blur-sm
                             hover:border-cyan-500/50 transition-all duration-300
                             hover:shadow-[0_0_30px_rgba(6,182,212,0.2)]"
                  >
                    <div className={`p-3 rounded-lg bg-gradient-to-br ${info.color} 
                                  shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-medium">{info.label}</p>
                      <p className="text-white font-semibold group-hover:text-cyan-400 transition-colors">
                        {info.value}
                      </p>
                    </div>
                  </motion.a>
                )
              })}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <span className="w-8 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></span>
                Follow Me
              </h3>
              
              <div className="grid grid-cols-2 gap-3">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon
                  return (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      className="group relative overflow-hidden p-4 rounded-xl
                               bg-gradient-to-br from-neutral-900/80 to-neutral-800/50
                               border border-neutral-700/50 backdrop-blur-sm
                               hover:border-cyan-500/50 transition-all duration-300
                               flex flex-col items-center gap-2"
                    >
                      <div className={`absolute inset-0 bg-gradient-to-br ${social.gradient} opacity-0 
                                    group-hover:opacity-10 transition-opacity duration-300`} />
                      <Icon className={`w-6 h-6 text-gray-400 ${social.color} transition-colors duration-300 relative z-10`} />
                      <span className="text-xs text-gray-400 group-hover:text-white transition-colors relative z-10">
                        {social.name}
                      </span>
                    </motion.a>
                  )
                })}
              </div>
            </motion.div>

            {/* Additional Info Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="p-6 rounded-xl bg-gradient-to-br from-cyan-500/10 to-purple-500/10
                       border border-cyan-500/30 backdrop-blur-sm"
            >
              <h4 className="text-lg font-bold text-white mb-2">Quick Response</h4>
              <p className="text-sm text-gray-400">
                I typically respond within 24 hours. For urgent matters, feel free to call me directly.
              </p>
            </motion.div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="relative p-8 rounded-2xl
                                                     bg-gradient-to-br from-neutral-900/80 to-neutral-800/50
                                                     border border-neutral-700/50 backdrop-blur-sm
                                                     shadow-2xl">
              {/* Gradient background effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-purple-500/5 to-pink-500/5 
                            rounded-2xl -z-10" />

              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <FaPaperPlane className="text-cyan-400" />
                Send Me a Message
              </h3>

              <div className="space-y-5">
                {/* Name Input */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-lg
                             bg-neutral-800/50 border-2 border-neutral-700
                             focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20
                             outline-none text-white placeholder-gray-500
                             transition-all duration-300"
                  />
                </motion.div>

                {/* Email Input */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-lg
                             bg-neutral-800/50 border-2 border-neutral-700
                             focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20
                             outline-none text-white placeholder-gray-500
                             transition-all duration-300"
                  />
                </motion.div>

                {/* Subject Input */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Collaboration"
                    className="w-full px-4 py-3 rounded-lg
                             bg-neutral-800/50 border-2 border-neutral-700
                             focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20
                             outline-none text-white placeholder-gray-500
                             transition-all duration-300"
                  />
                </motion.div>

                {/* Message Textarea */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    placeholder="Tell me about your project or idea..."
                    className="w-full px-4 py-3 rounded-lg
                             bg-neutral-800/50 border-2 border-neutral-700
                             focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20
                             outline-none text-white placeholder-gray-500
                             transition-all duration-300 resize-none"
                  ></textarea>
                </motion.div>

                {/* Submit Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 rounded-lg font-bold text-white
                             bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500
                             shadow-lg shadow-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/50
                             transition-all duration-300 flex items-center justify-center gap-2
                             disabled:opacity-50 disabled:cursor-not-allowed
                             relative overflow-hidden group"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <FaPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </>
                      )}
                    </span>
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.button>
                </motion.div>

                {/* Success Message */}
                {submitStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-lg bg-green-500/20 border border-green-500/50 text-green-400 text-center"
                  >
                    ✓ Message sent successfully! I'll get back to you soon.
                  </motion.div>
                )}
              </div>
            </form>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-block p-6 rounded-2xl bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10
                         border border-cyan-500/30 backdrop-blur-sm">
            <p className="text-gray-400 mb-4">
              Prefer email? Drop me a line at{" "}
              <a href="mailto:khushi4608@gmail.com" className="text-cyan-400 hover:text-cyan-300 font-semibold">
                khushi4608@gmail.com
              </a>
            </p>
            <p className="text-sm text-gray-500">
              I'm always excited to work on new projects and meet interesting people!
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Contact