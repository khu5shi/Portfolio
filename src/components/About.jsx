
import about from "../assets/about.png"
import { ABOUT_TEXT } from "../constants/index"
const About = () => {
    return (
        <div className="border-b
                    border-neutral-900
                    pb-4
                    ">
            <h2 className="my-20
                        text-center
                        text-4xl
                        font-bold">
                About <span className="text-neutral-500">Me
                </span>
            </h2>
            <div className="flex
                          flex-wrap">
                <div className="w-full
                              lg:w-1/2
                              lg:p-8">
                    <div className="flex
                                  items-center
                                  justify-center">
                        <img src={about} alt="about" width={275} height={275} className="rounded-2xl bg-gradient-to-r from-fuchsia-900  to-cyan-900 p-2 bg-clip-padding outline-1 outline-cyan-300 shadow-[0_0_25px_5px_rgba(59,130,246,0.7)]" />
                    </div>
                </div>
                <div className="w-full
                              lg:w-1/2
                             ">
                    <div className="flex 
                                  flex-col 
                                  items-center 
                                  lg:items-start
                                  mx-30">
                        <p className="my-2
                                    max-w-xl
                                    py-6
                                    font-light
                                    tracking-tighter
                                    text-gray-300">{ABOUT_TEXT}</p>
                    </div>
                    <span className="font-thin text-2xl mx-30 text-cyan-500">Education</span>
                      <div className="flex gap-5 mx-30">
                    <div className="w-40 rounded-xl mt-10 shadow-lg border-1 border-cyan-500">
                        <div className="rounded-lg bg-gray-900/40 backdrop-blur-md p-1 text-center">
                            <h3 className="font-bold text-lg text-white">KCC ITM</h3>
                            <p className="text-gray-200 font-medium">B.Tech CSE</p>
                            <p className="text-sm text-gray-300">Aug 2022 – May 2026</p>
                            <p className="font-semibold text-green-400">Grade: 7.5</p>
                            <p className="text-sm text-gray-300 mt-1">Activities: Debate Society</p>
                        </div>
                    </div>
                     <div className="w-40 rounded-xl mt-10 shadow-lg border-1 border-cyan-500">
                        <div className="rounded-lg bg-gray-900/40 backdrop-blur-md p-1 text-center">
                            <h3 className="font-bold text-lg text-white">SRA-(CBSE)</h3>
                            <p className="text-gray-200 font-medium">12th, PCM</p>
                            <p className="text-sm text-gray-300">2021</p>
                            <p className="font-semibold text-green-400">Grade: 85%</p>
                            <p className="text-sm text-gray-300 mt-1">Activities: Extracurriculars</p>
                        </div>
                    </div>
                     <div className="w-40 rounded-xl mt-10 shadow-lg border-1 border-cyan-500">
                        <div className="rounded-lg bg-gray-900/40 backdrop-blur-md p-1 text-center">
                            <h3 className="font-bold text-lg text-white">SRA-(CBSE)</h3>
                            <p className="text-gray-200 font-medium">10th</p>
                            <p className="text-sm text-gray-300">2019</p>
                            <p className="font-semibold text-green-400">Grade: 86%</p>
                            <p className="text-sm text-gray-300 mt-1">Activities: Extracurriculars</p>
                        </div>
                    </div>
                   </div>
                </div>
            </div>
        </div>
    )
}

export default About
