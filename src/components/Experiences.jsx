import { FaLaptopCode, FaBriefcase, FaAward, FaCode } from "react-icons/fa"
import { PiStudent } from "react-icons/pi";
import { HiAcademicCap } from "react-icons/hi2"
import { FaUserGraduate } from "react-icons/fa6"
import { motion } from "motion/react"
import { useState } from "react"

const Experiences = () => {
  const [activeTab, setActiveTab] = useState("all")

  // Centralized experience data - Easy to add more experiences!
  const experienceData = [
    {
      id: 1,
      icon: FaLaptopCode,
      title: "Open Source Contributor",
      company: "GirlScript Summer of Code",
      period: "Aug 2025 - Oct 2025",
      year: "2025",
      type: "contribution",
      description: "Contributed to open-source projects, enhanced UI/UX, and implemented new features in MERN stack applications.",
      achievements: [
        "Merged 10+ pull requests",
        "Improved UI/UX for 3 major projects",
        "Collaborated with 200+ developers globally"
      ],
      technologies: ["React","Tailwind CSS","React Frameworks", "Node.js", "Git"],
      gradient: "from-cyan-500 to-blue-500",
      current: true
    },
    {
      id: 2,
      icon: HiAcademicCap,
      title: "Finalist of Designathon'25",
      company: "Kalakriti DTU",
      period: "April 18-19, 2025",
      year: "2025",
      type: "achievement",
      description: "Built a sustainable app that promotes eco-friendly habits by engaging users in tasks to maintain animals' health and happiness.",
      achievements: [
        "Top 10 finalist among 100+ teams",
        "Developed complete prototype in 24 hours",
        "Received recognition for innovation"
      ],
      technologies: ["Figma", "Canva"],
      gradient: "from-purple-500 to-pink-500",
      current: false
    },
    {
      id: 3,
      icon: FaUserGraduate,
      title: "Web Development Intern",
      company: "CodexIntern",
      period: "July 1 - July 31, 2025",
      year: "2025",
      type: "internship",
      description: "Completed a one-month intensive internship focused on React.js, UI design, and responsive web development.",
      achievements: [
        "Built 5+ responsive web applications",
        "Mastered modern React patterns",
        "Received excellent performance rating"
      ],
      technologies: ["React", "JavaScript", "CSS3", "Responsive Design"],
      gradient: "from-green-500 to-emerald-500",
      current: false
    },
    {
      id: 4,
      icon: PiStudent,
      title: "Java web Development with AI",
      company: "HCLTech",
      period: " November - March 18, 2025",
      year: "2025",
      type: "Training",
      description: "Completed Java Web Development with AI program with HCLTech",
      achievements: [
        "Built 5+ responsive web applications",
        "Mastered modern React patterns",
        "Received excellent performance rating"
      ],
      technologies: ["Java", "Servelet", "HTMI", "Responsive Design"],
      gradient: "from-blue-500 to-emerald-500",
      current: false

    }
    // Add more experiences here easily!
    // {
    //   id: 4,
    //   icon: FaCode,
    //   title: "Your New Experience",
    //   company: "Company Name",
    //   period: "Month Year - Month Year",
    //   year: "2025",
    //   type: "internship", // or "contribution", "achievement", "work"
    //   description: "Description of your role...",
    //   achievements: ["Achievement 1", "Achievement 2", "Achievement 3"],
    //   technologies: ["Tech1", "Tech2", "Tech3"],
    //   gradient: "from-orange-500 to-red-500",
    //   current: false
    // },
  ]

  const tabs = [
    { id: "all", label: "All Experiences", icon: FaBriefcase },
    { id: "internship", label: "Internships", icon: FaUserGraduate },
    { id: "contribution", label: "Contributions", icon: FaLaptopCode },
    { id: "achievement", label: "Achievements", icon: FaAward },
  ]

  // Filter experiences based on active tab
  const filteredExperiences = activeTab === "all" 
    ? experienceData 
    : experienceData.filter(exp => exp.type === activeTab)

  return (
    <div className="border-b border-neutral-800/50 py-20 lg:py-32 overflow-hidden" id="experience">
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
            My Journey
          </motion.span>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            Experience &{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 
                           bg-clip-text text-transparent">
              Achievements
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
            Professional experiences, contributions, and milestones that shaped my journey as a developer
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {tabs.map((tab) => {
            const Icon = tab.icon
            return (
              <motion.button
                key={tab.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-full text-sm font-semibold
                         transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg shadow-cyan-500/30"
                    : "bg-neutral-800/50 text-gray-400 hover:text-white border border-neutral-700 hover:border-cyan-500/50"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span className="hidden sm:inline">{tab.label}</span>
                <span className="sm:hidden">{tab.label.split(' ')[0]}</span>
              </motion.button>
            )
          })}
        </motion.div>

        {/* Experiences Timeline */}
        <div className="relative max-w-6xl mx-auto">
          {/* Timeline Line - Hidden on mobile */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full 
                         bg-gradient-to-b from-cyan-500 via-purple-500 to-pink-500 opacity-20" />

          <div className="space-y-8 lg:space-y-12">
            {filteredExperiences.map((exp, index) => {
              const Icon = exp.icon
              const isEven = index % 2 === 0

              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative flex flex-col lg:flex-row items-center gap-8 
                            ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                >
                  {/* Timeline Dot - Desktop */}
                  <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 z-10">
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className={`w-16 h-16 rounded-full bg-gradient-to-br ${exp.gradient} 
                               flex items-center justify-center shadow-lg border-4 border-neutral-900`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </motion.div>
                  </div>

                  {/* Content Card */}
                  <div className={`w-full lg:w-[calc(50%-4rem)] ${isEven ? 'lg:pr-8' : 'lg:pl-8'}`}>
                    <motion.div
                      whileHover={{ scale: 1.02, y: -5 }}
                      className="group relative p-6 sm:p-8 rounded-2xl 
                               bg-gradient-to-br from-neutral-900/80 to-neutral-800/50
                               border border-neutral-700/50 backdrop-blur-sm
                               hover:border-cyan-500/50 transition-all duration-500
                               hover:shadow-[0_0_40px_rgba(6,182,212,0.3)]
                               overflow-hidden"
                    >
                      {/* Background gradient */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${exp.gradient} opacity-0 
                                    group-hover:opacity-5 transition-opacity duration-500`} />

                      {/* Mobile Icon */}
                      <div className="lg:hidden flex items-center gap-4 mb-4">
                        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${exp.gradient} 
                                      flex items-center justify-center shadow-lg`}>
                          <Icon className="w-7 h-7 text-white" />
                        </div>
                        {exp.current && (
                          <span className="px-3 py-1 rounded-full text-xs font-semibold
                                       bg-gradient-to-r from-green-500/20 to-emerald-500/20
                                       border border-green-500/30 text-green-400
                                       animate-pulse">
                            Current
                          </span>
                        )}
                      </div>

                      {/* Period Badge - Desktop */}
                      <div className="hidden lg:flex justify-between items-start mb-4">
                        <span className="px-4 py-2 rounded-full text-sm font-semibold
                                     bg-gradient-to-r from-cyan-500/20 to-purple-500/20
                                     border border-cyan-500/30 text-cyan-400">
                          {exp.period}
                        </span>
                        {exp.current && (
                          <span className="px-3 py-1 rounded-full text-xs font-semibold
                                       bg-gradient-to-r from-green-500/20 to-emerald-500/20
                                       border border-green-500/30 text-green-400
                                       animate-pulse">
                            Current
                          </span>
                        )}
                      </div>

                      {/* Period Badge - Mobile */}
                      <span className="lg:hidden inline-block px-3 py-1 rounded-full text-xs font-medium
                                   bg-gradient-to-r from-cyan-500/20 to-purple-500/20
                                   border border-cyan-500/30 text-cyan-400 mb-4">
                        {exp.period}
                      </span>

                      {/* Title & Company */}
                      <div className="relative z-10 mb-4">
                        <h3 className={`text-2xl sm:text-3xl font-bold mb-2 bg-gradient-to-r ${exp.gradient} 
                                     bg-clip-text text-transparent group-hover:scale-105 
                                     transition-transform duration-300 origin-left`}>
                          {exp.title}
                        </h3>
                        <p className="text-lg text-gray-300 font-semibold flex items-center gap-2">
                          <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${exp.gradient}`} />
                          {exp.company}
                        </p>
                      </div>

                      {/* Description */}
                      <p className="text-gray-400 leading-relaxed mb-6">
                        {exp.description}
                      </p>

                      {/* Achievements */}
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-gray-300 mb-3 flex items-center gap-2">
                          <FaAward className="text-cyan-400" />
                          Key Achievements
                        </h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, i) => (
                            <motion.li
                              key={i}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.5, delay: i * 0.1 }}
                              viewport={{ once: true }}
                              className="text-sm text-gray-400 flex items-start gap-2"
                            >
                              <span className={`mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r ${exp.gradient} flex-shrink-0`} />
                              <span>{achievement}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="text-sm font-semibold text-gray-300 mb-3 flex items-center gap-2">
                          <FaCode className="text-purple-400" />
                          Technologies
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 text-xs font-medium rounded-full
                                       border border-purple-500/30 text-purple-400
                                       bg-purple-500/10 hover:bg-purple-500/20
                                       transition-colors duration-300"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Corner decoration */}
                      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-500/10 to-transparent 
                                    rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </motion.div>
                  </div>

                  {/* Empty space for alternating layout on desktop */}
                  <div className="hidden lg:block w-[calc(50%-4rem)]" />
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Experience Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 lg:mt-20"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { 
                number: experienceData.length, 
                label: "Total Experiences",
                gradient: "from-cyan-500 to-blue-500"
              },
              { 
                number: experienceData.filter(e => e.type === "internship").length, 
                label: "Internships",
                gradient: "from-purple-500 to-pink-500"
              },
              { 
                number: experienceData.filter(e => e.type === "contribution").length, 
                label: "Contributions",
                gradient: "from-green-500 to-emerald-500"
              },
              { 
                number: experienceData.filter(e => e.type === "achievement").length, 
                label: "Achievements",
                gradient: "from-orange-500 to-red-500"
              },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="relative group"
              >
                <div className="p-6 rounded-2xl bg-gradient-to-br from-neutral-900/80 to-neutral-800/50
                              border border-neutral-700/50 backdrop-blur-sm
                              hover:border-cyan-500/50 transition-all duration-500
                              hover:shadow-[0_0_30px_rgba(6,182,212,0.2)]
                              text-center overflow-hidden">
                  
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 
                                group-hover:opacity-10 transition-opacity duration-500`} />
                  
                  <div className="relative z-10">
                    <div className={`text-4xl sm:text-5xl font-bold mb-2 bg-gradient-to-r ${stat.gradient} 
                                   bg-clip-text text-transparent`}>
                      {stat.number}
                    </div>
                    <div className="text-gray-400 text-sm font-medium">
                      {stat.label}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Experiences