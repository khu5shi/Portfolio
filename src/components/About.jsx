import about from "../assets/about.png"
import { ABOUT_TEXT } from "../constants/index"
import { motion } from "motion/react"
import { FaGraduationCap, FaAward, FaUserGraduate } from "react-icons/fa"
import { HiAcademicCap } from "react-icons/hi"

const About = () => {
  const educationData = [
    {
      icon: HiAcademicCap,
      title: "KCC ITM",
      subtitle: "Bachelor of Technology",
      degree: "Computer Science Engineering",
      period: "Aug 2022 – May 2026",
      grade: "CGPA: 7.84",
      activities: "Debate Society Member",
      color: "from-cyan-500 to-blue-500",
      delay: 0.2
    },
    {
      icon: FaUserGraduate,
      title: "SRA (CBSE)",
      subtitle: "Senior Secondary",
      degree: "PCM Stream",
      period: "2021",
      grade: "85%",
      activities: "Extracurricular Activities",
      color: "from-purple-500 to-pink-500",
      delay: 0.4
    },
    {
      icon: FaGraduationCap,
      title: "SRA (CBSE)",
      subtitle: "Secondary School",
      degree: "10th Standard",
      period: "2019",
      grade: "82.4%",
      activities: "Extracurricular Activities",
      color: "from-pink-500 to-rose-500",
      delay: 0.6
    }
  ]

  const skills = [
    { name: "Problem Solving", level: 90 },
    { name: "Team Collaboration", level: 85 },
    { name: "Quick Learner", level: 95 },
    { name: "Communication", level: 80 }
  ]

  return (
    <div className="border-b border-neutral-800/50 py-20 lg:py-32 overflow-hidden" id="about">
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
            Get To Know Me
          </motion.span>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            About{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 
                           bg-clip-text text-transparent">
              Me
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
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          {/* Left Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full lg:w-5/12"
          >
            <div className="relative group">
              {/* Floating glow effect */}
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -inset-4 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 
                         rounded-3xl opacity-30 blur-2xl group-hover:opacity-50 transition-opacity duration-500"
              />

              {/* Background decoration */}
              <div className="absolute -inset-2 bg-gradient-to-br from-cyan-500 to-purple-500 
                           rounded-3xl transform rotate-3 group-hover:rotate-6 
                           transition-transform duration-500" />

              {/* Main image */}
              <div className="relative overflow-hidden rounded-3xl border-4 border-neutral-900
                           transform -rotate-3 group-hover:-rotate-6 group-hover:scale-105
                           transition-all duration-500 shadow-2xl">
                <img
                  src={about}
                  alt="Khushi Agrawal - About Me"
                  className="w-full h-auto object-cover group-hover:scale-110 
                           transition-transform duration-700"
                />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 via-transparent 
                             to-cyan-900/60 opacity-0 group-hover:opacity-100 
                             transition-opacity duration-500" />
              </div>

              {/* Decorative elements */}
              <motion.div
                animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br 
                         from-pink-500 to-purple-600 rounded-3xl blur-2xl opacity-60
                         group-hover:opacity-90 transition-opacity"
              />
              
              <motion.div
                animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute -top-6 -left-6 w-28 h-28 bg-gradient-to-br 
                         from-cyan-400 to-blue-600 rounded-3xl blur-2xl opacity-60
                         group-hover:opacity-90 transition-opacity"
              />
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <div className="w-full lg:w-7/12">
            {/* About Text */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <div className="space-y-4">
                <p className="text-lg text-gray-300 leading-relaxed">
                  {ABOUT_TEXT}
                </p>
                
                {/* Stats Row */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
                  {[
                    { label: "Projects", value: "7+" },
                    { label: "Technologies", value: "20+" },
                    { label: "Achievements", value: "5+" }
                  ].map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="text-center p-4 rounded-xl bg-gradient-to-br from-neutral-900/80 to-neutral-800/50
                               border border-neutral-700/50 backdrop-blur-sm
                               hover:border-cyan-500/50 transition-all duration-300
                               hover:transform hover:scale-105"
                    >
                      <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 
                                   bg-clip-text text-transparent mb-1">
                        {stat.value}
                      </div>
                      <div className="text-xs text-gray-500">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Skills Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <FaAward className="text-cyan-400" />
                Key Strengths
              </h3>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-cyan-400 text-sm font-semibold">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-neutral-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                        viewport={{ once: true }}
                        className="h-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 
                                 rounded-full relative overflow-hidden"
                      >
                        <motion.div
                          animate={{ x: ['-100%', '100%'] }}
                          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                        />
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Education Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <FaGraduationCap className="text-cyan-400" />
                Education Journey
              </h3>
              
              <div className="space-y-4">
                {educationData.map((edu, index) => {
                  const Icon = edu.icon
                  return (
                    <motion.div
                      key={edu.title + edu.period}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: edu.delay }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.02, x: 10 }}
                      className="group relative"
                    >
                      {/* Connecting line for timeline effect */}
                      {index !== educationData.length - 1 && (
                        <div className="absolute left-6 top-16 w-0.5 h-12 bg-gradient-to-b from-cyan-500/50 to-transparent" />
                      )}
                      
                      <div className="relative p-5 rounded-2xl bg-gradient-to-br from-neutral-900/80 to-neutral-800/50
                                   border border-neutral-700/50 backdrop-blur-sm
                                   hover:border-cyan-500/50 transition-all duration-500
                                   hover:shadow-[0_0_30px_rgba(6,182,212,0.2)]
                                   overflow-hidden">
                        {/* Animated gradient background on hover */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${edu.color} opacity-0 
                                      group-hover:opacity-5 transition-opacity duration-500`} />
                        
                        <div className="relative flex gap-4">
                          {/* Icon */}
                          <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${edu.color}
                                        flex items-center justify-center shadow-lg
                                        group-hover:scale-110 transition-transform duration-300`}>
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                          
                          {/* Content */}
                          <div className="flex-1 min-w-0">
                            <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                              <div>
                                <h4 className="text-lg font-bold text-white group-hover:text-cyan-400 
                                             transition-colors duration-300">
                                  {edu.title}
                                </h4>
                                <p className="text-sm text-gray-400 font-medium">{edu.subtitle}</p>
                              </div>
                              <span className="px-3 py-1 rounded-full text-xs font-semibold
                                           bg-gradient-to-r from-green-500/20 to-emerald-500/20
                                           border border-green-500/30 text-green-400
                                           whitespace-nowrap">
                                {edu.grade}
                              </span>
                            </div>
                            
                            <p className="text-sm text-gray-300 mb-2">{edu.degree}</p>
                            
                            <div className="flex flex-wrap gap-3 text-xs text-gray-500">
                              <span className="flex items-center gap-1">
                                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                                {edu.period}
                              </span>
                              <span className="flex items-center gap-1">
                                <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                                {edu.activities}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About