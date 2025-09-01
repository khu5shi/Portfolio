import { TfiCup } from "react-icons/tfi";
import { FaSun } from "react-icons/fa6";
import { TiStarburst } from "react-icons/ti";
import { GiStarsStack } from "react-icons/gi";
import { GiNinjaHeroicStance } from "react-icons/gi";

const Awards = () => {
  return (
    <div className="border-b border-neutral-800 w-full sm:w-11/12 md:w-4/5 lg:w-3/4 mx-auto px-4">
      <h1 className="py-20 text-2xl sm:text-3xl lg:text-4xl text-center font-bold">
        Awards
      </h1>

      {/* ✅ Responsive Grid Layout */}
      <div className="my-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {achievement.map((d, i) => (
          <div
            className="grid place-items-center text-white rounded-2xl border-cyan-800 border-2 hover:border-cyan-300 transition-colors duration-150 p-6 w-full hover:bg-gradient-to-r from-pink to-purple-900"
            key={i}
          >
            <div className="mt-2">{d.icons}</div>
            <div className="px-2 py-4 w-full">
              <p className="font-semibold text-center text-lg sm:text-xl lg:text-2xl mb-1">
                {d.title}
              </p>
              <p className="font-mono text-2xs text-gray-400 text-center mb-1 ">
                {d.year}
              </p>
              <p className="font-light text-center text-5xs sm:text-base lg:text-lg text-gray-100">
                {d.company}
              </p>
              
              <p className="font-light text-center text-sm sm:text-base">
                • {d.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const achievement = [
  {
    icons: <TfiCup size={150} className="text-blue-800" />,
    title: "Arcade Novice Tier",
    company: "Arcade Google Cloud",
    year: "Skill Boost",
    description:
      "Cloud learning milestone",
  },
  {
    icons: <FaSun size={150} className="text-yellow-500" />,
    title: "Postman API Fundamentals Challenge",
    company: "Postman",
    year: "Postman API Badge",
    description:
      "Postman student expert",
  },
  {
    icons: <TiStarburst size={150} className="text-orange-600" />,
    title: "Smart India Hackathon",
    company: "Government of India",
    year: "Innovation",
    description:
      "Qualified internal hackathon",
  },
  {
    icons: <GiStarsStack size={150} className="text-green-400" />,
    title: "300+ Question Solved",
    company: "Leetcode, GeekForGeeks, HackerRank, CodeChef",
    year: "Problem Solving",
    description:
      "Consistent problem solving across multiple platforms",
  },
  {
    icons: <GiNinjaHeroicStance size={150} className="text-gray-500"/>,
    title: "Ninja Dominator",
    company: "Coding Ninja",
    year: "League",
    description:
      "Coding excellence award",
  },
];

export default Awards;
