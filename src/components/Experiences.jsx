import { FaLaptopCode } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { HiAcademicCap } from "react-icons/hi2";
import { FaUserGraduate } from "react-icons/fa6";

const Experiences = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="border-b border-neutral-800 w-full sm:w-1/3 lg:w-1/2 mx-auto px-4 " id="experience">
      <h2 className="py-20 text-2xl sm:text-3xl lg:text-4xl text-center font-bold">Experience</h2>
      <div className="my-8">
        <Slider {...settings}>
          {experience.map((d, i) => (
            <div
              className="grid place-items-center text-white rounded-2xl border-cyan-800 border-2 hover:border-cyan-300 transition-colors duration-150 p-6"
              key={i}
            >
              <div className="mt-2 text-gray-500">{d.icon}</div>
              <div className="px-2 py-4 w-full">
                <p className="font-semibold text-center text-lg sm:text-xl lg:text-2xl mb-2">{d.title}</p>
                <p className="font-normal text-center text-base sm:text-lg">{d.company}</p>
                <p className="font-light text-xs text-gray-400 text-center mb-2">{d.year}</p>
                <p className="font-light text-center">• {d.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

const experience = [
  {
    icon: <FaLaptopCode size={80} />,
    title: "Open Source Contributor",
    company: "GirlScript Summer of Code",
    year: "Aug 2025-Present",
    description: "Contributed to open-source projects, enhanced UI/UX, and implemented new features in MERN stack applications."
  },
  {
    icon: <HiAcademicCap size={80}/>,
    title: "Finalist of Designathon'25",
    company: "Kalakriti DTU",
    year: "18th-19th April, 2025",
    description: "Built a sustainable app that promotes eco-friendly habits by engaging users in tasks to maintain animals’ health and happiness."
  },
  {
    icon: <FaUserGraduate size={80}/>,
    title: "Internship",
    company: "CodexIntern",
    year: "1st july-31st july,2025",
    description: "Completed a one-month internship (July 2025) focused on React.js, UI design, and responsive web development."
  },
];

export default Experiences;
