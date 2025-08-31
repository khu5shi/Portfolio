import logo from "../assets/logo.png"
import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaBars, FaTimes } from "react-icons/fa";
import  { useState } from "react";
import { FaInstagram } from "react-icons/fa"
const Navbar = () => {
   const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className=" mb-20 flex items-center justify-between bg-gray-800/40 backdrop-blur-lg backdrop-saturate-150 shadow-lg backdrop-opacity-10 border-b-1 border-gray-600">
        <div className="flex flex-shrink-0 items-center ">
             <img src={logo} alt="logo" className="w-15 h-15 mx-20 " />
        </div>
         <ul className="hidden md:flex space-x-8">
          <li><a href="#home" className="hover:text-cyan-200 transition">Home</a></li>
          <li><a href="#about" className="hover:text-cyan-200 transition">About</a></li>
          <li><a href="#projects" className="hover:text-cyan-200 transition">Projects</a></li>
          <li><a href="#contact" className="hover:text-cyan-200 transition">Experience</a></li>
        </ul>
         <div className="flex">
          <div className="m-8 flex items-center justify-center gap-4 text-2xl ">
          <FaLinkedin className="hover:text-cyan-200"/>
          <FaGithub className="hover:text-cyan-200"/>
          <FaInstagram className="hover:text-cyan-200"/>
        </div>
         <button
          onClick={() => setIsOpen(!isOpen)}
          className="focus:outline-none md:hidden"
        >
          {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
        {isOpen && (
        <div className="bg-gray-800 md:hidden">
          <ul className="flex flex-col space-y-2 items-center py-2 px-4 ">
            <li>
              <a
                href="#home"
                onClick={() => setIsOpen(false)}
                className="hover:text-cyan-200 transition"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={() => setIsOpen(false)}
                className="hover:text-cyan-200 transition"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#projects"
                onClick={() => setIsOpen(false)}
                className="hover:text-cyan-200 transition"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="hover:text-cyan-200 transition"
              >
                Experience
              </a>
            </li>
          </ul>
        </div>
      )}
         </div>
       
        
    </nav>
  )
}

export default Navbar
