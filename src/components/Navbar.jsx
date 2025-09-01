import logo from "../assets/logo.png"
import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import { FaInstagram } from "react-icons/fa"
import "./About";
import "./Hero"
import "./Project"
import "./Experiences"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between bg-gray-800/60 backdrop-blur-lg backdrop-saturate-150 shadow-lg border-b border-gray-700 px-6 py-4">
      {/* Logo */}
      <div className="flex items-center">
        <img src={logo} alt="logo" className="w-12 h-12" />
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-8 text-white">
        <li><a href="#home" className="hover:text-cyan-200 transition">Home</a></li>
        <li><a href="#about" className="hover:text-cyan-200 transition">About</a></li>
        <li><a href="#projects" className="hover:text-cyan-200 transition">Projects</a></li>
        <li><a href="#experience" className="hover:text-cyan-200 transition">Experience</a></li>
      </ul>

      {/* Social Icons + Mobile Toggle */}
      <div className="flex items-center gap-4 text-2xl text-white">
        <a href="https://www.linkedin.com/in/khushi-agrawal-08a21b25a/"><FaLinkedin className="hover:text-cyan-200" /></a>
        <a href="https://github.com/khu5shi"><FaGithub className="hover:text-cyan-200" /></a>
        <a href="https://www.instagram.com/khushi_agrawal7589?igsh=YWVtd3FkdnhrMXU1"><FaInstagram className="hover:text-cyan-200" /></a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
        >
          {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-gray-900/95 text-white shadow-lg md:hidden">
          <ul className="flex flex-col space-y-4 items-center py-6">
            <li>
              <a href="#home" onClick={() => setIsOpen(false)} className="hover:text-cyan-200 transition">Home</a>
            </li>
            <li>
              <a href="#about" onClick={() => setIsOpen(false)} className="hover:text-cyan-200 transition">About</a>
            </li>
            <li>
              <a href="#projects" onClick={() => setIsOpen(false)} className="hover:text-cyan-200 transition">Projects</a>
            </li>
            <li>
              <a href="#experience" onClick={() => setIsOpen(false)} className="hover:text-cyan-200 transition">Experience</a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
