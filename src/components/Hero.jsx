
import profile from "../assets/profile.jpg"
import { LiaUniversitySolid } from "react-icons/lia";

const Hero = () => {
    return (
        <div className="border-b 
                    border-neutral-900 
                      pb-4 
                      lg:mb-35">
            <div className="flex 
                          flex-wrap">
                <div className="w-full 
                              lg:w-1/2">
                    <div className="flex 
                                  flex-col 
                                  items-center 
                                  lg:items-start
                                  mx-40
                                  mt-13">
                        <h6 className="text-2xl font-thin tracking-tight text-cyan-600">Hi , WELCOME TO MY PORTFOLIO</h6>
                        <h1 className="pb-16 
                                     text-6xl 
                                     font-thin 
                                     tracking-tight
                                     lg:mt-10
                                     lg:text-7xl 
                                     
                                     ">
                            Khushi Agrawal
                        </h1>
                        <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500
                                     bg-clip-text
                                     text-3xl
                                     tracking-tight
                                     text-transparent">
                            Full Stack Developer
                        </span>
                        <p className="my-2
                                  max-w-xl
                                  py-6
                                  font-light
                                  tracking-tighter 
                                  flex
                                  gap-4
                                  text-gray-400 ">
                            <LiaUniversitySolid className="w-10 h-10 text-cyan-600" />
                            <div className="flex flex-col">
                                <span className="mt-2 text-gray-500 ">KCC INSTITUTE OF TECHNOLOGY AND MANAGMENT</span>
                                B.Tech CSE -2026

                                <button
                                    className="text-zinc-500 hover:text-zinc-200 backdrop-blur-lg bg-gradient-to-tr from-transparent via-[rgba(121,121,121,0.16)] to-transparent rounded-md py-2 px-6 shadow border-2 border-gray-700 hover:shadow-zinc-400 duration-700 my-7"
                                >
                                    Contact Me!
                                </button>

                            </div>
                        </p>
                    </div>
                </div>
                <div className="w-full 
                              lg:w-1/2
                              lg:p-8">
                    <div className="flex 
                                  justify-center">
                        <img src={profile} alt="Khushi Agrawal" width={275} height={275} className="rounded-2xl bg-gradient-to-r from-fuchsia-900  to-cyan-900 p-2 bg-clip-padding outline-1 outline-cyan-300 shadow-[0_0_25px_5px_rgba(59,130,246,0.7)]" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
