import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-12">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-700 pb-6">
          <h2 className="text-xl font-semibold text-white">KA</h2>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="https://github.com/khu5shi"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <FaGithub size={22} />
            </a>
            <a
              href="https://www.linkedin.com/in/khushi-agrawal-08a21b25a/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <FaLinkedin size={22} />
            </a>

            <a
              href="mailto:khushi4608@gmail.com"
              className="hover:text-white transition"
            >
              <FaEnvelope size={22} />
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-6 text-sm">
          <p>© {new Date().getFullYear()} Happybug | All rights reserved.</p>
          <p className="mt-2 md:mt-0">
            Made with <span className="text-pink-500">♥</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
