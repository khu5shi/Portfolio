import { RiReactjsLine } from "react-icons/ri"
import { BiLogoNodejs } from "react-icons/bi";
import { SiMongodb, SiExpress, SiTailwindcss, SiPostman, SiCplusplus } from "react-icons/si"
import { PiFigmaLogoThin } from "react-icons/pi";
import { FaJava, FaGitAlt } from "react-icons/fa6";
import { TbBrandPython, TbBrandJavascript } from "react-icons/tb";
import { TiHtml5 } from "react-icons/ti";
import { IoLogoCss3 } from "react-icons/io5";
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
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h2 className="my-20 text-center text-4xl font-bold">Skills</h2>

      <div className="flex flex-wrap items-center justify-center gap-8 px-6 md:px-20 lg:px-40">
        
        {[
          { icon: <RiReactjsLine className="text-4xl text-cyan-300" />, duration: 2.5 },
          { icon: <SiTailwindcss className="text-4xl text-sky-600" />, duration: 3 },
          { icon: <BiLogoNodejs className="text-4xl text-gray-500" />, duration: 2.2 },
          { icon: <SiMongodb className="text-4xl text-green-700" />, duration: 2.8 },
          { icon: <SiExpress className="text-4xl text-yellow-200" />, duration: 2.4 },
          { icon: <SiPostman className="text-4xl text-orange-500" />, duration: 3 },
          { icon: <PiFigmaLogoThin className="text-4xl text-cyan-600" />, duration: 2.7 },
          { icon: <FaJava className="text-4xl text-sky-400" />, duration: 2.9 },
          { icon: <SiCplusplus className="text-4xl text-blue-600" />, duration: 2.3 },
          { icon: <TbBrandPython className="text-4xl text-amber-200" />, duration: 2.6 },
          { icon: <TiHtml5 className="text-4xl text-orange-300" />, duration: 2.1 },
          { icon: <IoLogoCss3 className="text-4xl text-blue-500" />, duration: 2.4 },
          { icon: <TbBrandJavascript className="text-4xl text-yellow-300" />, duration: 2.7 },
          { icon: <FaGitAlt className="text-4xl text-orange-500" />, duration: 3 },
        ].map((item, index) => (
          <motion.div
            key={index}
            variants={iconVariants(item.duration)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-2 border-neutral-800 p-4"
          >
            {item.icon}
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Technologies
