import about from "../assets/about.png"
import { ABOUT_TEXT } from "../constants/index"
import { motion } from "motion/react"

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4" id="about">
      <h2 className="my-20 text-center text-4xl font-bold">
        About <span className="text-neutral-500">Me</span>
      </h2>

      <div className="flex flex-wrap">
        {/* Left Side Image */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex items-center justify-center">
            <img
              src={about}
              alt="about"
              width={275}
              height={275}
              className="rounded-2xl bg-gradient-to-r from-fuchsia-900 to-cyan-900 p-2 
              bg-clip-padding outline-1 outline-cyan-300 
              shadow-[0_0_25px_5px_rgba(59,130,246,0.7)]"
            />
          </div>
        </motion.div>

        {/* Right Side Text */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2"
        >
          <div className="flex flex-col items-center lg:items-start px-4 lg:px-0">
            <p className="my-2 max-w-xl py-6 font-light tracking-tighter text-gray-300 mx-8">
              {ABOUT_TEXT}
            </p>
          </div>

          <span className="font-thin text-2xl block text-center lg:text-left text-cyan-500">
            Education
          </span>

          {/* Education Cards with Smooth Transition */}
          <div className="flex flex-col lg:flex-row gap-5 items-center lg:items-start justify-center lg:justify-start mt-6">
            
            {/* College */}
            <motion.div
              whileInView={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-50 rounded-xl shadow-lg border border-cyan-500"
            >
              <div className="rounded-lg bg-gray-900/40 backdrop-blur-md p-3 text-center">
                <h3 className="font-bold text-lg text-white">KCC ITM</h3>
                <p className="text-gray-200 font-medium">B.Tech CSE</p>
                <p className="text-sm text-gray-300">Aug 2022 – May 2026</p>
                <p className="font-semibold text-green-400">Grade: 7.5</p>
                <p className="text-sm text-gray-300 mt-1">Activities: Debate Society</p>
              </div>
            </motion.div>

            {/* 12th */}
            <motion.div
              whileInView={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="w-50 rounded-xl shadow-lg border border-cyan-500"
            >
              <div className="rounded-lg bg-gray-900/40 backdrop-blur-md p-3 text-center">
                <h3 className="font-bold text-lg text-white">SRA-(CBSE)</h3>
                <p className="text-gray-200 font-medium">12th, PCM</p>
                <p className="text-sm text-gray-300">2021</p>
                <p className="font-semibold text-green-400">Grade: 85%</p>
                <p className="text-sm text-gray-300 mt-1">Activities: Extracurriculars</p>
              </div>
            </motion.div>

            {/* 10th */}
            <motion.div
              whileInView={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="w-50 rounded-xl shadow-lg border border-cyan-500"
            >
              <div className="rounded-lg bg-gray-900/40 backdrop-blur-md p-3 text-center">
                <h3 className="font-bold text-lg text-white">SRA-(CBSE)</h3>
                <p className="text-gray-200 font-medium">10th</p>
                <p className="text-sm text-gray-300">2019</p>
                <p className="font-semibold text-green-400">Grade: 86%</p>
                <p className="text-sm text-gray-300 mt-1">Activities: Extracurriculars</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default About
