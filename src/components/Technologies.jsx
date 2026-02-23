import { RiReactjsLine } from "react-icons/ri"
import { BiLogoNodejs } from "react-icons/bi"
import { DiMysql } from "react-icons/di";
import { FaAws } from "react-icons/fa";
import { SiMongodb, SiExpress, SiTailwindcss, SiPostman, SiCplusplus } from "react-icons/si"
import { PiFigmaLogoThin } from "react-icons/pi"
import { FaGithub } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa6"
import { TbBrandPython, TbBrandJavascript } from "react-icons/tb"
import { TiHtml5 } from "react-icons/ti"
import { IoLogoCss3 } from "react-icons/io5"
import { motion } from "motion/react"

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
})

const cardVariants = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { 
    opacity: 1, 
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
}

const Technologies = () => {
  const skillCategories = [
    {
      category: "Frontend",
      color: "from-cyan-500 to-blue-500",
      skills: [
        { icon: <RiReactjsLine className="text-5xl" />, name: "React", color: "text-cyan-400", level: 90, duration: 2.5 },
        { icon: <TiHtml5 className="text-5xl" />, name: "HTML5", color: "text-orange-500", level: 95, duration: 2.1 },
        { icon: <IoLogoCss3 className="text-5xl" />, name: "CSS3", color: "text-blue-500", level: 90, duration: 2.4 },
        { icon: <TbBrandJavascript className="text-5xl" />, name: "JavaScript", color: "text-yellow-400", level: 85, duration: 2.7 },
        { icon: <SiTailwindcss className="text-5xl" />, name: "Tailwind", color: "text-sky-400", level: 88, duration: 3 },
      ]
    },
    {
      category: "Backend",
      color: "from-green-500 to-emerald-500",
      skills: [
        { icon: <BiLogoNodejs className="text-5xl" />, name: "Node.js", color: "text-green-500", level: 85, duration: 2.2 },
        { icon: <SiExpress className="text-5xl" />, name: "Express", color: "text-gray-400", level: 82, duration: 2.4 },
        ]
    },
    {
      category: "DataBase",
      color: "from-green-500 to-emerald-500",
      skills: [
       { icon: <DiMysql className="text-5xl" />, name: "SQL", color: "text-gray-400", level: 82, duration: 2.4 },
        { icon: <SiMongodb className="text-5xl" />, name: "MongoDB", color: "text-green-600", level: 80, duration: 2.8 },
      ]
    },

    {
      category: "Languages",
      color: "from-purple-500 to-pink-500",
      skills: [
        { icon: <SiCplusplus className="text-5xl" />, name: "C++", color: "text-blue-600", level: 78, duration: 2.3 },
        { icon: <TbBrandPython className="text-5xl" />, name: "Python", color: "text-yellow-300", level: 80, duration: 2.6 },
        { icon: <TbBrandJavascript className="text-5xl" />, name: "JavaScript", color: "text-yellow-400", level: 85, duration: 2.7 },
        
      ]
    },
    {
      category: "Tools & Others",
      color: "from-orange-500 to-red-500",
      skills: [
        { icon: <FaGitAlt className="text-5xl" />, name: "Git", color: "text-orange-600", level: 85, duration: 3 },
        { icon: <FaGithub className="text-5xl" />, name: "GitHub", color: "", level: 75, duration: 2.7 },
        { icon: <PiFigmaLogoThin className="text-5xl" />, name: "Figma", color: "text-purple-500", level: 75, duration: 2.7 },
        { icon: <SiPostman className="text-5xl" />, name: "Postman", color: "text-orange-500", level: 80, duration: 3 },
        { icon: <FaAws className="text-5xl" />, name: "AWS-S3", color: "text-yellow-400", level: 85, duration: 2.7 },
      ]
    }
  ]

  return (
    <div className="border-b border-neutral-800/50 py-20 lg:py-32 overflow-hidden" id="skills">
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
            Technical Expertise
          </motion.span>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            Skills &{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 
                           bg-clip-text text-transparent">
              Technologies
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
            A comprehensive toolkit of modern technologies and frameworks I use to build amazing digital experiences
          </p>
        </motion.div>

        {/* Skills Categories */}
        <div className="space-y-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className={`h-1 w-12 rounded-full bg-gradient-to-r ${category.color}`} />
                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                  {category.category}
                </h3>
                <div className={`h-1 flex-1 rounded-full bg-gradient-to-r ${category.color} opacity-20`} />
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    variants={cardVariants}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    transition={{ delay: skillIndex * 0.1 }}
                    whileHover={{ 
                      scale: 1.05,
                      rotateY: 5,
                      z: 50
                    }}
                    className="group relative perspective-1000"
                  >
                    <div className="relative h-full rounded-2xl bg-gradient-to-br from-neutral-900/80 to-neutral-800/50
                                  border border-neutral-700/50 backdrop-blur-sm
                                  hover:border-cyan-500/50 transition-all duration-500
                                  hover:shadow-[0_0_30px_rgba(6,182,212,0.3)]
                                  overflow-hidden p-6 flex flex-col items-center justify-center gap-4
                                  transform-gpu">
                      
                      {/* Animated gradient background */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 
                                    group-hover:opacity-10 transition-opacity duration-500`} />
                      
                      {/* Glow effect on hover */}
                      <motion.div
                        className={`absolute -inset-2 bg-gradient-to-r ${category.color} rounded-2xl blur-xl opacity-0
                                  group-hover:opacity-30 transition-opacity duration-500`}
                      />

                      {/* Floating Icon */}
                      <motion.div
                        variants={iconVariants(skill.duration)}
                        initial="initial"
                        animate="animate"
                        className={`relative ${skill.color} z-10`}
                      >
                        {skill.icon}
                      </motion.div>

                      {/* Skill Name */}
                      <div className="relative z-10 text-center">
                        <h4 className="text-white font-semibold text-base sm:text-lg mb-2
                                     group-hover:text-cyan-400 transition-colors duration-300">
                          {skill.name}
                        </h4>
                        
                        {/* Proficiency Level */}
                        <div className="space-y-1">
                          <div className="flex justify-between items-center text-xs">
                            <span className="text-gray-500">Proficiency</span>
                            <span className="text-cyan-400 font-semibold">{skill.level}%</span>
                          </div>
                          <div className="h-1.5 bg-neutral-700 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              transition={{ duration: 1, delay: skillIndex * 0.1 + 0.3 }}
                              viewport={{ once: true }}
                              className={`h-full bg-gradient-to-r ${category.color} rounded-full relative`}
                            >
                              <motion.div
                                animate={{ x: ['-100%', '100%'] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                              />
                            </motion.div>
                          </div>
                        </div>
                      </div>

                      {/* Corner decoration */}
                      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-cyan-500/10 to-transparent 
                                    rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-purple-500/10 to-transparent 
                                    rounded-tr-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Overall Stats */}
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
                number: "20+", 
                label: "Technologies Mastered",
                gradient: "from-cyan-500 to-blue-500"
              },
              { 
                number: "4", 
                label: "Skill Categories",
                gradient: "from-purple-500 to-pink-500"
              },
              { 
                number: "85%", 
                label: "Average Proficiency",
                gradient: "from-green-500 to-emerald-500"
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
                  
                  {/* Background gradient */}
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
            Always learning and exploring new technologies to stay ahead in the ever-evolving tech landscape
          </p>
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-3 
                     bg-gradient-to-r from-cyan-500 to-purple-500
                     text-white font-semibold rounded-full
                     shadow-lg shadow-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/40
                     transition-all duration-300"
          >
            See Projects Built With These Skills
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.a>
        </motion.div>
      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-gpu {
          transform: translateZ(0);
          backface-visibility: hidden;
        }
      `}</style>
    </div>
  )
}

export default Technologies