import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Technologies from "./components/Technologies"
import Experiences from "./components/Experiences"
import Project from "./components/Project"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Awards from "./components/Awards.jsx"



function App() {
  

  return (
  <div className="overflow-x-hidden
                 text-neutral-300
                  antialiased
                 selection:bg-yellow-100/60
                selection:text-black">
    <div className="fixed top-0 -z-10 h-full w-full">
      <div class="absolute 
                top-0 z-[-2] 
                min-h-screen w-full
                bg-neutral-950 
                bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
    </div>
    
    <div className="container mx-auto px-8"></div>
    <Navbar/>
    <Hero/>
    <About/>
    <Technologies/>
    <Project/>
    <Experiences/>
    <Awards/>
    <Contact/>
    <Footer/>
    </div>
  )
}

export default App
