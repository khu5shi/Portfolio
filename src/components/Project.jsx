import logo from "../assets/projects/lingotongue.png"
import portfolio from "../assets/projects/portfolio.png"
import moreproject from "../assets/projects/moreproject.png"

const Project = () => {
    return (
        <div className="border-b border-neutral-900 pb-4 ">
            <h1 className=" my-10 text-4xl text-center font-bold">Projects</h1>
            <div className="flex flex-row gap-10 items-center justify-center ">
                {/* Lingo tongue */}
                <div className="w-80 rounded-xl mt-10 shadow-lg border-3 border-cyan-500 hover:border-1 hover:border-cyan-600">
                    <div className="rounded-lg bg-blue-900/10 backdrop-blur-md p-4 text-center flex flex-col ">
                        <div className="flex gap-3 ml-5 font-light text-2xs text-gray-400 ">
                            <div className="rounded-2xl border-1 border-cyan-200 w-20 hover:text-cyan-300">React</div>
                            <div className="rounded-2xl border-1 border-cyan-200 w-25 hover:text-cyan-300 ">Tailwind</div>
                            <div className="rounded-2xl border-1 border-cyan-200 w-30 hover:text-cyan-300">RapidAPI</div>
                        </div>
                        <img src={logo} alt="Lingotongue" />
                        <h1 className="font-semibold text-3xl bg-gradient-to-r from-pink-600 to-purple-700
                                     bg-clip-text
                                     text-transparent">LingoTongue</h1>
                        <p className="text-2sm font-light text-gray-300 mt-1">LingoTongue is a language translator app built with React.js and Tailwind CSS. It integrates the RapidAPI text translator to convert input text into multiple languages with a clean and responsive UI.</p>

                    </div>
                    <div className="flex  gap-3 mx-7 py-4">
                        <div className="border rounded-2xl w-29 px-4 hover:bg-cyan-500 hover:text-black text-gray-300 border-cyan-900">
                            <a href="#"> Live Demo</a>
                        </div>
                        <div className="border rounded-2xl w-33 px-4 hover:bg-cyan-500 hover:text-black text-gray-300 border-cyan-900">
                            <a href="#"> Source Code</a>
                        </div>
                    </div>
                </div>
                {/* portfolio */}
                <div className="w-80 rounded-xl mt-10 shadow-lg border-3 border-cyan-500 hover:border-1 hover:border-cyan-600 ">
                    <div className="rounded-lg bg-blue-900/10 backdrop-blur-md p-4 text-center flex flex-col">
                        <div className="flex gap-2 font-light text-2xs text-gray-400 ">
                            <div className="rounded-2xl border-1 border-cyan-200 w-20 hover:text-cyan-300">React</div>
                            <div className="rounded-2xl border-1 border-cyan-200 w-25 hover:text-cyan-300 ">Tailwind</div>
                            <div className="rounded-2xl border-1 border-cyan-200 w-40 hover:text-cyan-300">Framer Motion</div>
                        </div>
                        <img src={portfolio} alt="Lingotongue" width={250} height={250} className="mx-5" />
                        <h1 className="font-semibold text-3xl bg-gradient-to-r from-pink-600 to-purple-700
                                     bg-clip-text
                                     text-transparent">Portfolio</h1>
                        <p className="text-2sm font-light text-gray-300 mt-1">Personal Portfolio Website built to showcase my projects, skills, and achievements. The site features a modern responsive design, smooth animations, and interactive sections for education, work, and contact.</p>

                    </div>
                    <div className="flex  gap-3 mx-7 py-4">
                        <div className="border rounded-2xl w-29 px-4 hover:bg-cyan-500 hover:text-black text-gray-300 border-cyan-900">
                            <a href="#"> Live Demo</a>
                        </div>
                        <div className="border rounded-2xl w-33 px-4 hover:bg-cyan-500 hover:text-black text-gray-300 border-cyan-900">
                            <a href="#"> Source Code</a>
                        </div>
                    </div>
                </div>
                {/* view more */}
                <div className="w-80 rounded-xl mt-10 shadow-lg border-3 border-cyan-500  hover:border-1 hover:border-cyan-600">
                    <div className="rounded-lg bg-blue-900/10 backdrop-blur-md p-4 text-center flex flex-col">
                        <div className="flex gap-2 font-light text-2xs text-gray-400 ">
                            <div className="rounded-2xl border-1 border-cyan-200 w-25 hover:text-cyan-300">Netflix</div>
                            <div className="rounded-2xl border-1 border-cyan-200 w-35 hover:text-cyan-300 ">Leetmatrix</div>
                            <div className="rounded-2xl border-1 border-cyan-200 w-40 hover:text-cyan-300">InstaSmart</div>
                        </div>
                        <img src={moreproject} alt="Lingotongue" width={350} height={350} className="rounded-2xl py-7" />
                        <h1 className="font-semibold text-3xl bg-gradient-to-r from-pink-600 to-purple-700
                                     bg-clip-text
                                     text-transparent">More Projects</h1>
                        <p className="text-2sm font-light text-gray-300 mt-1">More Projects built using HTML, CSS, MERN stack, and Java, including InstaSmart, Netflix Clone, and LeetMatrix — showcasing responsive UI design and full-stack development skills.</p>

                    </div>
                   
                        <div className="py-4 flex items-center justify-center">
                        <div className="border rounded-2xl w-33 px-6 hover:bg-cyan-500 hover:text-black text-gray-300 border-cyan-900">
                            <a href="#">View More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project
