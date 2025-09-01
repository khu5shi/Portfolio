import profile from "../assets/profile.jpg"
import { LiaUniversitySolid } from "react-icons/lia";
import "./Contact"
import { motion } from "motion/react"

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  }
})

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35 mt-30 min-h-full" id="home">
      <div className="flex flex-wrap">
        {/* Left Section */}
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start px-6 sm:px-10 lg:mx-20 mt-10">
            <motion.h6
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="text-xl sm:text-2xl font-thin tracking-tight text-cyan-600 text-center lg:text-left"
            >
              Hi, WELCOME TO MY PORTFOLIO
            </motion.h6>
            <motion.h1
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="pb-6 sm:pb-10 
                        text-4xl sm:text-5xl lg:text-7xl 
                        font-thin tracking-tight 
                        mt-6 lg:mt-10 text-center lg:text-left"
            >
              Khushi Agrawal
            </motion.h1>
            <motion.span
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500
                        bg-clip-text text-2xl sm:text-3xl
                        tracking-tight text-transparent text-center lg:text-left"
            >
              Full Stack Developer
            </motion.span>

            <div
              className="my-4 max-w-xl py-6 font-light tracking-tighter 
                         flex gap-4 text-gray-400 items-start"
            >
              <LiaUniversitySolid className="w-8 h-8 sm:w-10 sm:h-10 text-cyan-600" />
              <div className="flex flex-col">
                <span className="text-gray-500 text-sm sm:text-base">
                  KCC INSTITUTE OF TECHNOLOGY AND MANAGEMENT
                </span>
                <span className="text-sm sm:text-base">B.Tech CSE - 2026</span>
                <a href="#contact" className="mt-6 w-fit">
                  <div
                    className="text-center text-zinc-500 hover:text-zinc-200 
                               backdrop-blur-lg bg-gradient-to-tr from-transparent 
                               via-[rgba(121,121,121,0.16)] to-transparent 
                               rounded-md py-2 px-6 sm:px-10 shadow border-2 
                               border-gray-700 hover:shadow-zinc-400 duration-700"
                  >
                    Contact Me!
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-1/2 lg:p-8 mt-10 lg:mt-0">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              src={profile}
              alt="Khushi Agrawal"
              width={275}
              height={275}
              className="rounded-2xl bg-gradient-to-r from-fuchsia-900 to-cyan-900 p-2 
                         bg-clip-padding outline-1 outline-cyan-300 
                         shadow-[0_0_25px_5px_rgba(59,130,246,0.7)]"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
