import profile from "../assets/profile.jpg"
import { LiaUniversitySolid } from "react-icons/lia";
import { HiOutlineArrowRight, HiDownload } from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./Contact"
import { motion } from "motion/react"

const container = (delay) => ({
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { 
      duration: 0.6, 
      delay: delay,
      ease: [0.25, 0.4, 0.25, 1]
    },
  }
})

const floatingAnimation = {
  y: [0, -20, 0],
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut"
  }
}

const scaleIn = (delay) => ({
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.5, delay: delay }
  }
})

const Hero = () => {
  return (
    <div className="relative border-b border-neutral-800/50 pb-20 lg:pb-32 pt-20 lg:pt-32 min-h-screen flex items-center overflow-hidden" id="home">
      {/* Animated background gradient blobs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 -left-1/4 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            x: [0, 100, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-pink-500/10 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          {/* Left Section - Content */}
          <div className="w-full lg:w-1/2 z-10">
            <div className="flex flex-col items-center lg:items-start space-y-6 lg:space-y-8">
              {/* Status Badge */}
              <motion.div
                variants={container(0)}
                initial="hidden"
                animate="visible"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full 
                          bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 
                          border border-cyan-500/30 backdrop-blur-md
                          hover:border-cyan-400/50 transition-all duration-300
                          shadow-lg shadow-cyan-500/5"
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500 shadow-lg shadow-cyan-500/50"></span>
                </span>
                <span className="text-sm font-medium bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Available for Opportunities
                </span>
              </motion.div>

              {/* Greeting */}
              <motion.p
                variants={container(0.1)}
                initial="hidden"
                animate="visible"
                className="text-lg sm:text-xl text-gray-400 font-light tracking-wide text-center lg:text-left"
              >
                👋 Hi there! Welcome to my portfolio
              </motion.p>

              {/* Main Heading */}
              <div className="space-y-2 text-center lg:text-left">
                <motion.h1
                  variants={container(0.2)}
                  initial="hidden"
                  animate="visible"
                  className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl 
                            font-bold tracking-tight leading-tight"
                >
                  <span className="block text-white mb-2">I'm</span>
                  <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400
                                bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                    Khushi Agrawal
                  </span>
                </motion.h1>
              </div>

              {/* Role */}
              <motion.div
                variants={container(0.3)}
                initial="hidden"
                animate="visible"
                className="relative group"
              >
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold
                              text-gray-300 text-center lg:text-left
                              hover:text-white transition-colors duration-300">
                  Full Stack Developer
                </h2>
                <motion.div 
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  className="h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 
                           rounded-full mt-2 origin-left"
                />
              </motion.div>

              {/* Short description */}
              <motion.p
                variants={container(0.4)}
                initial="hidden"
                animate="visible"
                className="text-gray-400 text-base sm:text-lg max-w-xl leading-relaxed text-center lg:text-left"
              >
                Passionate about building innovative web solutions and creating seamless user experiences 
                with modern technologies.
              </motion.p>

              {/* Education Card */}
              <motion.div
                variants={container(0.5)}
                initial="hidden"
                animate="visible"
                className="w-full max-w-md"
              >
                <div className="group relative p-5 rounded-2xl 
                              bg-gradient-to-br from-neutral-900/80 to-neutral-800/50
                              border border-neutral-700/50 backdrop-blur-md
                              hover:border-cyan-500/50 transition-all duration-500
                              hover:shadow-[0_0_40px_rgba(6,182,212,0.2)]
                              hover:transform hover:scale-[1.02]">
                  <div className="flex gap-4 items-start">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20
                                  group-hover:from-cyan-500/30 group-hover:to-purple-500/30
                                  transition-all duration-300 shadow-lg">
                      <LiaUniversitySolid className="w-7 h-7 text-cyan-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-sm font-bold text-gray-200 mb-1 group-hover:text-cyan-400 transition-colors">
                        KCC Institute of Technology & Management
                      </h3>
                      <p className="text-sm text-gray-400 mb-1">
                        Bachelor of Technology
                      </p>
                      <p className="text-xs text-gray-500 font-medium">
                        Computer Science Engineering • Class of 2026
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                variants={container(0.6)}
                initial="hidden"
                animate="visible"
                className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-4"
              >
                <a href="#contact" className="group w-full sm:w-auto">
                  <button className="relative w-full sm:w-auto px-8 py-4 rounded-full font-semibold
                                   bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500
                                   text-white shadow-lg shadow-cyan-500/30
                                   hover:shadow-2xl hover:shadow-cyan-500/50
                                   transform hover:scale-105 active:scale-95
                                   transition-all duration-300
                                   overflow-hidden">
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      Let's Connect
                      <HiOutlineArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </button>
                </a>
                
                <a href="/Khushi_Agrawal_CV.pdf" download className="group w-full sm:w-auto">
                  <button className="w-full sm:w-auto px-8 py-4 rounded-full font-semibold
                                   border-2 border-neutral-600 text-gray-300
                                   hover:border-cyan-400 hover:text-white
                                   hover:bg-cyan-500/10
                                   transform hover:scale-105 active:scale-95
                                   transition-all duration-300
                                   backdrop-blur-sm
                                   shadow-lg hover:shadow-cyan-500/20
                                   flex items-center justify-center gap-2">
                    <HiDownload className="group-hover:animate-bounce" />
                    Download CV
                  </button>
                </a>
              </motion.div>

              {/* Social Links */}
              <motion.div
                variants={container(0.7)}
                initial="hidden"
                animate="visible"
                className="flex gap-4 mt-2"
              >
                <a href="https://github.com" target="_blank" rel="noopener noreferrer"
                   className="p-3 rounded-full border border-neutral-700 text-gray-400
                            hover:border-cyan-500 hover:text-cyan-400 hover:bg-cyan-500/10
                            transform hover:scale-110 active:scale-95
                            transition-all duration-300 shadow-lg hover:shadow-cyan-500/30">
                  <FaGithub className="w-5 h-5" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                   className="p-3 rounded-full border border-neutral-700 text-gray-400
                            hover:border-cyan-500 hover:text-cyan-400 hover:bg-cyan-500/10
                            transform hover:scale-110 active:scale-95
                            transition-all duration-300 shadow-lg hover:shadow-cyan-500/30">
                  <FaLinkedin className="w-5 h-5" />
                </a>
              </motion.div>
            </div>
          </div>

          {/* Right Section - Image */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end z-10">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative group"
            >
              {/* Animated glow effect */}
              <motion.div 
                animate={floatingAnimation}
                className="absolute -inset-6 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 
                          rounded-[2.5rem] opacity-30 blur-3xl 
                          group-hover:opacity-50 group-hover:blur-[80px]
                          transition-all duration-700">
              </motion.div>
              
              {/* Rotating gradient ring */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-10 opacity-40">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/40 via-transparent 
                              to-purple-500/40 rounded-full blur-2xl"></div>
              </motion.div>

              {/* Image container with 3D effect */}
              <div className="relative perspective-1000">
                {/* Background gradient shape */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-purple-500 
                              rounded-[2rem] transform rotate-3 
                              group-hover:rotate-6 group-hover:scale-105
                              transition-all duration-500 shadow-2xl">
                </div>
                
                {/* Main image */}
                <div className="relative overflow-hidden rounded-[2rem] border-4 border-neutral-900
                              transform -rotate-3 group-hover:-rotate-6 group-hover:scale-105
                              transition-all duration-500 shadow-2xl">
                  <img
                    src={profile}
                    alt="Khushi Agrawal - Full Stack Developer"
                    className="w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 object-cover 
                             group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Overlay gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 via-transparent 
                                to-cyan-900/50 opacity-0 group-hover:opacity-100 
                                transition-opacity duration-500"></div>
                </div>
                
                {/* Decorative floating elements */}
                <motion.div 
                  animate={{ 
                    y: [0, -15, 0],
                    rotate: [0, 5, 0]
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -bottom-6 -right-6 w-28 h-28 bg-gradient-to-br 
                            from-pink-500 to-purple-600 rounded-3xl blur-2xl opacity-60
                            group-hover:opacity-90 transition-opacity duration-500">
                </motion.div>
                
                <motion.div 
                  animate={{ 
                    y: [0, 15, 0],
                    rotate: [0, -5, 0]
                  }}
                  transition={{ duration: 5, repeat: Infinity }}
                  className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br 
                            from-cyan-400 to-blue-600 rounded-3xl blur-2xl opacity-60
                            group-hover:opacity-90 transition-opacity duration-500">
                </motion.div>

                {/* Skill badges floating around image */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1, duration: 0.5 }}
                  className="absolute -left-8 top-1/4 hidden lg:block"
                >
                  <div className="px-4 py-2 rounded-full bg-neutral-900/90 backdrop-blur-md
                                border border-cyan-500/30 shadow-lg shadow-cyan-500/20">
                    <span className="text-sm font-semibold text-cyan-400">React</span>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.2, duration: 0.5 }}
                  className="absolute -right-8 top-1/3 hidden lg:block"
                >
                  <div className="px-4 py-2 rounded-full bg-neutral-900/90 backdrop-blur-md
                                border border-purple-500/30 shadow-lg shadow-purple-500/20">
                    <span className="text-sm font-semibold text-purple-400">Node.js</span>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.4, duration: 0.5 }}
                  className="absolute -bottom-4 left-1/4 hidden lg:block"
                >
                  <div className="px-4 py-2 rounded-full bg-neutral-900/90 backdrop-blur-md
                                border border-pink-500/30 shadow-lg shadow-pink-500/20">
                    <span className="text-sm font-semibold text-pink-400">MongoDB</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 cursor-pointer group"
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <span className="text-xs text-gray-500 group-hover:text-cyan-400 transition-colors">Scroll Down</span>
          <div className="w-6 h-10 border-2 border-cyan-500/50 rounded-full p-1 
                        group-hover:border-cyan-400 transition-colors">
            <motion.div 
              className="w-1.5 h-3 bg-cyan-500 rounded-full mx-auto"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </motion.div>

      {/* CSS for gradient animation */}
      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          animation: gradient 3s ease infinite;
        }
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </div>
  )
}

export default Hero