import { TfiCup } from "react-icons/tfi"
import { FaFreeCodeCamp } from "react-icons/fa";
import { FaChalkboardTeacher } from "react-icons/fa";
import { FaSun, FaMedal, FaTrophy, FaAward } from "react-icons/fa6"
import { TiStarburst } from "react-icons/ti"
import { GiStarsStack, GiNinjaHeroicStance, GiLaurelCrown } from "react-icons/gi"
import { motion } from "motion/react"
import { useState } from "react"

const Awards = () => {
  const [filter, setFilter] = useState("all")

  // Centralized awards data - Easy to add more awards!
  const awardsData = [
    {
      id: 1,
      icon: TfiCup,
      iconColor: "text-blue-400",
      title: "Arcade Novice Tier",
      organization: "Google Cloud",
      category: "Skill Boost",
      year: "2025",
      type: "certification",
      description: "Cloud learning milestone achievement for completing Google Cloud training modules",
      gradient: "from-blue-500 to-cyan-500",
      glowColor: "rgba(59, 130, 246, 0.3)"
    },
    {
      id: 2,
      icon: FaSun,
      iconColor: "text-yellow-400",
      title: "Postman API Fundamentals",
      organization: "Postman",
      category: "API Badge",
      year: "2025",
      type: "certification",
      description: "Postman student expert certification for mastering API fundamentals and testing",
      gradient: "from-yellow-500 to-orange-500",
      glowColor: "rgba(234, 179, 8, 0.3)"
    },
    {
      id: 3,
      icon: TiStarburst,
      iconColor: "text-orange-500",
      title: "Smart India Hackathon",
      organization: "Government of India",
      category: "Innovation",
      year: "2025",
      type: "competition",
      description: "Qualified internal hackathon round for national-level innovation challenge",
      gradient: "from-orange-500 to-red-500",
      glowColor: "rgba(249, 115, 22, 0.3)"
    },
    {
      id: 4,
      icon: GiStarsStack,
      iconColor: "text-green-400",
      title: "300+ Problems Solved",
      organization: "Competitive Programming",
      category: "Problem Solving",
      year: "2023-2026",
      type: "achievement",
      description: "Consistent problem solving across LeetCode, GeeksforGeeks, HackerRank",
      gradient: "from-green-500 to-emerald-500",
      glowColor: "rgba(34, 197, 94, 0.3)"
    },
    {
      id: 5,
      icon: GiNinjaHeroicStance,
      iconColor: "text-purple-400",
      title: "Ninja Dominator",
      organization: "Coding Ninjas",
      category: "League Award",
      year: "2025",
      type: "achievement",
      description: "Coding excellence award for outstanding performance in coding challenges",
      gradient: "from-purple-500 to-pink-500",
      glowColor: "rgba(168, 85, 247, 0.3)"
    },
    {
      id: 6,
      icon: FaFreeCodeCamp,
      iconColor: "text-green-400",
      title: "GFG 160 days Coding Challenge ",
      organization: "GeekForGeek",
      category: "Coding Challenge",
      year: "2025",
      type: "achievement",
      description: "Completed 160 days of coding challenge at gfg",
      gradient: "from-green-700 to-green-500",
      glowColor: "rgba(168, 85, 247, 0.3)"
    },
    {
      id: 7,
      icon: FaChalkboardTeacher,
      iconColor: "text-blue-400",
      title: " SQL Basics",
      organization: "HackerRank",
      category: "Coding Challenge",
      year: "2025",
      type: "certification",
      description: "Completed SQL basics questions at hackerrank",
      gradient: "from-blue-800 to-blue-500",
      glowColor: "rgba(168, 85, 247, 0.3)"
    },
    
    // Add more awards here easily!
    // {
    //   id: 6,
    //   icon: FaTrophy,
    //   iconColor: "text-amber-400",
    //   title: "Your New Award",
    //   organization: "Organization Name",
    //   category: "Category",
    //   year: "2025",
    //   type: "competition", // certification, competition, achievement
    //   description: "Description of the award...",
    //   gradient: "from-amber-500 to-yellow-500",
    //   glowColor: "rgba(245, 158, 11, 0.3)"
    // },
  ]

  const filterButtons = [
    { id: "all", label: "All Awards", icon: FaAward },
    { id: "certification", label: "Certifications", icon: FaMedal },
    { id: "competition", label: "Competitions", icon: FaTrophy },
    { id: "achievement", label: "Achievements", icon: GiLaurelCrown },
  ]

  // Filter awards based on type
  const filteredAwards = filter === "all" 
    ? awardsData 
    : awardsData.filter(award => award.type === filter)

  return (
    <div className="border-b border-neutral-800/50 py-20 lg:py-32 overflow-hidden" id="awards">
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
            Recognition & Achievements
          </motion.span>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            Awards &{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 
                           bg-clip-text text-transparent">
              Certifications
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
            Recognition and achievements that validate my skills and dedication to continuous learning
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {filterButtons.map((btn) => {
            const Icon = btn.icon
            return (
              <motion.button
                key={btn.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFilter(btn.id)}
                className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-full text-sm font-semibold
                         transition-all duration-300 ${
                  filter === btn.id
                    ? "bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg shadow-cyan-500/30"
                    : "bg-neutral-800/50 text-gray-400 hover:text-white border border-neutral-700 hover:border-cyan-500/50"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span className="hidden sm:inline">{btn.label}</span>
                <span className="sm:hidden">{btn.label.split(' ')[0]}</span>
              </motion.button>
            )
          })}
        </motion.div>

        {/* Awards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredAwards.map((award, index) => {
            const Icon = award.icon
            
            return (
              <motion.div
                key={award.id}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative"
              >
                <div className="relative h-full rounded-2xl bg-gradient-to-br from-neutral-900/80 to-neutral-800/50
                              border-2 border-neutral-700/50 backdrop-blur-sm
                              hover:border-transparent transition-all duration-500
                              overflow-hidden p-8 flex flex-col items-center text-center">
                  
                  {/* Animated gradient border on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${award.gradient} opacity-0 
                                group-hover:opacity-100 transition-opacity duration-500 -z-10`} />
                  <div className="absolute inset-[2px] bg-gradient-to-br from-neutral-900 to-neutral-800 
                                rounded-2xl -z-10" />

                  {/* Glow effect */}
                  <motion.div
                    animate={{
                      boxShadow: [
                        `0 0 20px ${award.glowColor}`,
                        `0 0 60px ${award.glowColor}`,
                        `0 0 20px ${award.glowColor}`,
                      ],
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-20 blur-xl"
                  />

                  {/* Icon Container */}
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className="relative mb-6"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${award.gradient} blur-2xl opacity-50 
                                  group-hover:opacity-80 transition-opacity duration-500`} />
                    <div className={`relative w-32 h-32 rounded-2xl bg-gradient-to-br ${award.gradient} 
                                  flex items-center justify-center shadow-2xl
                                  group-hover:shadow-[0_0_40px_rgba(6,182,212,0.5)]
                                  transition-all duration-500`}>
                      <Icon className={`text-7xl ${award.iconColor}`} />
                    </div>
                  </motion.div>

                  {/* Year Badge */}
                  <motion.span
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                    viewport={{ once: true }}
                    className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold
                             bg-gradient-to-r from-cyan-500/20 to-purple-500/20
                             border border-cyan-500/30 text-cyan-400"
                  >
                    {award.year}
                  </motion.span>

                  {/* Content */}
                  <div className="relative z-10 flex-1 flex flex-col">
                    {/* Title */}
                    <h3 className={`text-xl sm:text-2xl font-bold mb-2 bg-gradient-to-r ${award.gradient} 
                                 bg-clip-text text-transparent min-h-[3.5rem] flex items-center justify-center`}>
                      {award.title}
                    </h3>

                    {/* Organization */}
                    <p className="text-base sm:text-lg text-gray-300 font-semibold mb-1">
                      {award.organization}
                    </p>

                    {/* Category Badge */}
                    <div className="mb-4">
                      <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-medium
                                     bg-gradient-to-r ${award.gradient} bg-opacity-20
                                     border border-current text-transparent bg-clip-text`}
                            style={{ 
                              borderImage: `linear-gradient(to right, var(--tw-gradient-stops)) 1`,
                              WebkitBackgroundClip: 'text',
                              backgroundImage: `linear-gradient(to right, ${award.gradient.split(' ')[1]}, ${award.gradient.split(' ')[3]})`
                            }}>
                        {award.category}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-sm sm:text-base text-gray-400 leading-relaxed mb-4 flex-1">
                      {award.description}
                    </p>

                    {/* Achievement Indicator */}
                    <div className="flex items-center justify-center gap-2 pt-4 border-t border-neutral-700/50">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${award.gradient} animate-pulse`} />
                      <span className="text-xs text-gray-500 uppercase tracking-wider font-semibold">
                        {award.type}
                      </span>
                    </div>
                  </div>

                  {/* Corner decorations */}
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-cyan-500/10 to-transparent 
                                rounded-tr-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-purple-500/10 to-transparent 
                                rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Awards Stats */}
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
                number: awardsData.length, 
                label: "Total Awards",
                gradient: "from-cyan-500 to-blue-500"
              },
              { 
                number: awardsData.filter(a => a.type === "certification").length, 
                label: "Certifications",
                gradient: "from-purple-500 to-pink-500"
              },
              { 
                number: awardsData.filter(a => a.type === "competition").length, 
                label: "Competitions",
                gradient: "from-green-500 to-emerald-500"
              },
              { 
                number: awardsData.filter(a => a.type === "achievement").length, 
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

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400 mb-6">
            Committed to continuous learning and professional development
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-3 
                     bg-gradient-to-r from-cyan-500 to-purple-500
                     text-white font-semibold rounded-full
                     shadow-lg shadow-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/40
                     transition-all duration-300"
          >
            Let's Connect
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </div>
  )
}

export default Awards