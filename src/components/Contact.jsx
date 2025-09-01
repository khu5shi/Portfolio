import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20 pt-24" id="contact">
      <h2 className="my-10 text-center text-4xl font-bold">
        Contact <span className="text-gray-500">Me</span>
      </h2>

      <div className="flex flex-col lg:flex-row justify-center items-center gap-10 px-6">
        {/* Left - Info */}
        <div className="backdrop-blur-lg bg-white/5 p-8 rounded-2xl shadow-lg border border-cyan-500 w-full max-w-md">
          <h3 className="text-2xl font-semibold text-white mb-4">Let’s Connect</h3>
          <p className="text-gray-400 mb-6 text-sm">
            Whether you have a project idea, a question, or just want to say hi —
            my inbox is always open.
          </p>
          <div className="flex flex-col gap-3 text-gray-300">
            <a href="mailto:khushi4608@gmail.com" className="flex items-center gap-3 hover:text-cyan-400 duration-300">
              <FaEnvelope /> khushi4608@gmail.com
            </a>
            <a href="tel:+917394874292" className="flex items-center gap-3 hover:text-cyan-400 duration-300">
              <FaPhone /> +91 7394874292
            </a>
            <a href="https://www.linkedin.com/in/khushi-agrawal-08a21b25a/" target="_blank" className="flex items-center gap-3 hover:text-cyan-400 duration-300">
              <FaLinkedin /> linkedin.com/in/yourprofile
            </a>
            <a href="https://github.com/khu5shi" target="_blank" className="flex items-center gap-3 hover:text-cyan-400 duration-300">
              <FaGithub /> github.com/khu5shi
            </a>
          </div>
        </div>

        {/* Right - Form */}
        <form className="backdrop-blur-lg bg-white/5 p-8 rounded-2xl shadow-lg border border-purple-500 w-full max-w-lg">
          <div className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="p-3 rounded-lg bg-transparent border border-gray-600 focus:border-cyan-500 outline-none text-white"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-3 rounded-lg bg-transparent border border-gray-600 focus:border-cyan-500 outline-none text-white"
            />
            <textarea
              placeholder="Your Message"
              rows="5"
              className="p-3 rounded-lg bg-transparent border border-gray-600 focus:border-cyan-500 outline-none text-white"
            ></textarea>
            <button
              type="submit"
              className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-3 rounded-lg font-semibold shadow-md hover:opacity-90 transition"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
