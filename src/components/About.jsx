
import about from "../assets/about.png"
import {ABOUT_TEXT} from "../constants/index"
const About = () => {
  return (
      <div className="border-b
                    border-neutral-900
                    pb-4
                    ">
          <h2 className="my-20
                        text-center
                        text-4xl">
              About
              <span className="text-neutral-500">
                  Me
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
                      <img src={about} alt="about" className="w-65 rounded-2xl" />
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
                                    tracking-tighter">{ABOUT_TEXT}</p>
                  </div>
              </div>
          </div>


      </div>
  )
}

export default About
