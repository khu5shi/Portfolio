import Blog from "../assets/projects/Blog.avif"
import Worker from "../assets/projects/Worker.jpeg"
import Translator from "../assets/projects/translators.jpeg"
import portfolio from "../assets/projects/portfolio.png"
import moreproject from "../assets/projects/moreproject.png"
import { motion } from "motion/react"
import { FaExternalLinkAlt, FaGithub, FaArrowRight } from "react-icons/fa"
import { useState } from "react"

const Project = () => {
  const [showAll, setShowAll] = useState(false)

  // Centralized project data - Easy to add more projects!
  const projectsData = [
    {
      id: 1,
      title: "DevTales",
      description: "DevTales is a AI-powered MERN blog platform integrating Google Gemini for automated content generation.  Offloaded media storage and transformations to ImageKit, improving frontend render performance and reducing backend load.",
      image: Blog,
      technologies: ["MERN", "Tailwind", " Gemini API", "ImageKit", "JWT"],
      liveDemo: "https://dev-tales-dusky.vercel.app/",
      sourceCode: "https://github.com/khu5shi/DevTales",
      gradient: "from-pink-600 to-purple-700",
      featured: true
    },
    {
      id: 2,
      title: "Local Sathi",
      description: "Built a full-stack service discovery platform enabling users to search, filter, and book local service providers via a mobile-first UI. Implemented multi-language UI, enabling scalable localization without duplicating components.",
      image: Worker,
      technologies: ["MERN", "Tailwind", "REST APIs", "OSM", "react-i18next", "JWT"],
      liveDemo: "https://local-sathi-sandy.vercel.app/",
      sourceCode: "https://github.com/khu5shi/LocalSathi",
      gradient: "from-cyan-600 to-blue-700",
      featured: true
    },
    {
      id: 3,
      title: "LingoTongue",
      description: "LingoTongue is a language translator app built with React.js and Tailwind CSS. It integrates the RapidAPI text translator to convert input text into multiple languages with a clean and responsive UI.",
      technologies: ["React", "Tailwind", "RapidAPI"],
      image: Translator,
      liveDemo: "https://lingo-tongue.vercel.app/",
      sourceCode: "https://github.com/khu5shi/lingoTounge",
      gradient: "from-pink-600 to-purple-700",
      featured: true
    },
    {
      id: 4,
      title: "Netflix Clone",
      description: "A fully responsive Netflix clone with user authentication, movie browsing, and video streaming capabilities. Built with MERN stack and integrated with TMDB API for real-time movie data.",
      image: moreproject,
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      liveDemo: "#",
      sourceCode: "#",
      gradient: "from-red-600 to-pink-700",
      featured: true
    },
    {
      id: 5,
      title: "LeetMatrix",
      description: "A coding practice platform inspired by LeetCode, featuring algorithm challenges, code editor, and automated test cases. Helps developers improve their problem-solving skills.",
      image: moreproject,
      technologies: ["React", "Node.js", "MongoDB", "CodeMirror"],
      liveDemo: "#",
      sourceCode: "#",
      gradient: "from-green-600 to-emerald-700",
      featured: false
    },
    {
      id: 6,
      title: "InstaSmart",
      description: "A modern social media platform with photo sharing, stories, real-time chat, and user interactions. Features include likes, comments, and a beautiful Instagram-inspired UI.",
      image: moreproject,
      technologies: ["React", "Firebase", "Tailwind", "Socket.io"],
      liveDemo: "#",
      sourceCode: "#",
      gradient: "from-purple-600 to-pink-700",
      featured: false
    },
    // Add more projects here easily!
    // {
    //   id: 6,
    //   title: "Your New Project",
    //   description: "Description of your new project...",
    //   image: yourImage,
    //   technologies: ["Tech1", "Tech2", "Tech3"],
    //   liveDemo: "#",
    //   sourceCode: "#",
    //   gradient: "from-blue-600 to-indigo-700",
    //   featured: false
    // },
  ]

  // Filter projects based on showAll state
  const displayedProjects = showAll ? projectsData : projectsData.filter(p => p.featured)
  const hasMoreProjects = projectsData.length > projectsData.filter(p => p.featured).length

  return (
    <div className="border-b border-neutral-800/50 py-20 lg:py-32 overflow-hidden" id="projects">
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
            My Work
          </motion.span>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            Featured{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 
                           bg-clip-text text-transparent">
              Projects
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
            Showcasing my recent work and passion projects built with modern technologies
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.slice(0,3).map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="relative h-full rounded-2xl bg-gradient-to-br from-neutral-900/80 to-neutral-800/50
                            border border-neutral-700/50 backdrop-blur-sm
                            hover:border-cyan-500/50 transition-all duration-500
                            hover:shadow-[0_0_40px_rgba(6,182,212,0.3)]
                            overflow-hidden flex flex-col">
                
                {/* Background gradient on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 
                              group-hover:opacity-5 transition-opacity duration-500`} />

                {/* Image Container */}
                <div className="relative overflow-hidden rounded-t-2xl aspect-video bg-neutral-900">
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/50 to-transparent 
                                opacity-0 group-hover:opacity-100 transition-opacity duration-500
                                flex items-center justify-center gap-4">
                    <motion.a
                      href={project.liveDemo}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-3 rounded-full bg-cyan-500 text-white shadow-lg
                               hover:bg-cyan-400 transition-colors duration-300"
                      title="Live Demo"
                    >
                      <FaExternalLinkAlt className="w-5 h-5" />
                    </motion.a>
                    <motion.a
                      href={project.sourceCode}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-3 rounded-full bg-purple-500 text-white shadow-lg
                               hover:bg-purple-400 transition-colors duration-300"
                      title="Source Code"
                    >
                      <FaGithub className="w-5 h-5" />
                    </motion.a>
                  </div>

                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold
                                  bg-gradient-to-r from-cyan-500 to-purple-500 text-white
                                  shadow-lg animate-pulse">
                      Featured
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 p-6 flex flex-col">
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs font-medium rounded-full
                                 border border-cyan-500/30 text-cyan-400
                                 bg-cyan-500/10 hover:bg-cyan-500/20
                                 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Title */}
                  <h3 className={`text-2xl font-bold mb-3 bg-gradient-to-r ${project.gradient} 
                                bg-clip-text text-transparent group-hover:scale-105 
                                transition-transform duration-300 origin-left`}>
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1">
                    {project.description}
                  </p>

                  {/* Action Buttons */}
                  <div className="flex gap-3 mt-auto">
                    <motion.a
                      href={project.liveDemo}
                      whileHover={{ scale: 1.05, x: 5 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 
                               rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500
                               text-white text-sm font-semibold
                               shadow-lg hover:shadow-cyan-500/50
                               transition-all duration-300 group/btn"
                    >
                      Live Demo
                      <FaExternalLinkAlt className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                    </motion.a>
                    <motion.a
                      href={project.sourceCode}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-4 py-2.5 rounded-lg border-2 border-neutral-600
                               text-gray-300 hover:text-white hover:border-cyan-500
                               hover:bg-cyan-500/10 text-sm font-semibold
                               transition-all duration-300 flex items-center gap-2"
                    >
                      <FaGithub className="w-4 h-4" />
                      Code
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Load More / Show Less Button */}
        {hasMoreProjects && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex justify-center mt-12"
          >
            <motion.button
              onClick={() => setShowAll(!showAll)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center gap-3 px-8 py-4 rounded-full
                       bg-gradient-to-r from-cyan-500/10 to-purple-500/10
                       border-2 border-cyan-500/30 hover:border-cyan-500
                       text-white font-semibold text-lg
                       hover:shadow-[0_0_30px_rgba(6,182,212,0.3)]
                       transition-all duration-300"
            >
              {showAll ? "Show Less Projects" : "View All Projects"}
              <motion.div
                animate={{ rotate: showAll ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <FaArrowRight className="w-5 h-5" />
              </motion.div>
            </motion.button>
          </motion.div>
        )}

        {/* Project Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 lg:mt-20"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { 
                number: projectsData.length, 
                label: "Total Projects",
                gradient: "from-cyan-500 to-blue-500"
              },
              { 
                number: projectsData.filter(p => p.featured).length, 
                label: "Featured Works",
                gradient: "from-purple-500 to-pink-500"
              },
              { 
                number: "10+", 
                label: "Technologies Used",
                gradient: "from-green-500 to-emerald-500"
              },
              { 
                number: "100%", 
                label: "Open Source",
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
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400 mb-6">
            Want to collaborate on a project or have an idea in mind?
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
            Let's Work Together
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </div>
  )
}

export default Project