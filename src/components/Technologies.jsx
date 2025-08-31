
import { RiReactjsLine } from "react-icons/ri"
import { BiLogoNodejs } from "react-icons/bi";
import { SiMongodb } from "react-icons/si"
import { SiExpress } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiPostman } from "react-icons/si";
import { PiFigmaLogoThin } from "react-icons/pi";
import { FaJava } from "react-icons/fa6";
import { SiCplusplus } from "react-icons/si";
import { TbBrandPython } from "react-icons/tb";
import { TiHtml5 } from "react-icons/ti";
import { IoLogoCss3 } from "react-icons/io5";
import { TbBrandJavascript } from "react-icons/tb";
import { FaGitAlt } from "react-icons/fa";

const Technologies = () => {
  return (
    <div className="border-b 
                  border-neutral-800
                    pb-24">
        <h2 className="my-20
                       text-center
                       text-4xl
                       font-bold">
            Skills
        </h2>
        <div className="flex
                        flex-wrap
                        items-center
                        justify-center
                        mx-60
                        gap-4">
            
            <div className="rounded-2xl
                            border-2
                            border-neutral-800
                            p-4">
                       <RiReactjsLine className="text-4xl text-cyan-300"/>
            </div>
            <div className="rounded-2xl
                            border-2
                            border-neutral-800
                            p-4">
                       <SiTailwindcss className="text-4xl text-sky-600"/>
            </div>
            <div className="rounded-2xl
                            border-2
                            border-neutral-800
                            p-4">
                       <BiLogoNodejs className="text-4xl text-gray-500"/>
            </div>
            <div className="rounded-2xl
                            border-2
                            border-neutral-800
                            p-4">
                       <SiMongodb className="text-4xl text-green-700"/>
            </div>
            <div className="rounded-2xl
                            border-2
                            border-neutral-800
                            p-4">
                       <SiExpress className="text-4xl text-yellow-200"/>
            </div>
            <div className="rounded-2xl
                            border-2
                            border-neutral-800
                            p-4">
                       <SiPostman className="text-4xl text-orange-500"/>
            </div>
            <div className="rounded-2xl
                            border-2
                            border-neutral-800
                            p-4">
                       < PiFigmaLogoThin className="text-4xl text-cyan-600"/>
            </div>
             <div className="rounded-2xl
                            border-2
                            border-neutral-800
                            p-4">
                       < FaJava className="text-4xl text-sky-400 "/>
            </div>
            <div className="rounded-2xl
                            border-2
                            border-neutral-800
                            p-4">
                       < SiCplusplus className="text-4xl text-blue-600"/>
            </div>
            <div className="rounded-2xl
                            border-2
                            border-neutral-800
                            p-4">
                       < TbBrandPython className="text-4xl text-amber-200"/>
            </div>
            <div className="rounded-2xl
                            border-2
                            border-neutral-800
                            p-4">
                       < TiHtml5 className="text-4xl text-orange-300"/>
            </div>
            <div className="rounded-2xl
                            border-2
                            border-neutral-800
                            p-4">
                       < IoLogoCss3 className="text-4xl text-blue-500"/>
            </div>
            <div className="rounded-2xl
                            border-2
                            border-neutral-800
                            p-4">
                       < TbBrandJavascript className="text-4xl text-yellow-300"/>
            </div>
            <div className="rounded-2xl
                            border-2
                            border-neutral-800
                            p-4">
                       < FaGitAlt className="text-4xl text-orange-500"/>
            </div>
        </div>
    </div>
  )
}

export default Technologies
