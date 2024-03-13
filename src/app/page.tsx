'use client';


import About from "../../components/About";
import Certificates from "../../components/Certificates";
import Contactme from "../../components/Contactme";
import Education from "../../components/Education";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import Projects from "../../components/Projects";
import Skills from "../../components/Skills";

export default function Home() {
  return (
    <main >
      <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-x overflow-y-scroll z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#c13f3f]/80">
     <Header/>
     {/*Hero*/}
      <section id="hero" className="snap-center">
     <Hero />
      </section>
     {/*About*/}
     <section id="about" className="snap-center">
      <About />
     </section>
     {/*Skills*/}
     
     <section id="skills" className="snap-start">
      <Skills/>
      </section>
     {/*Experience*/}
     <section id="education" className="snap-center">
      <Education />
     </section>
     {/*Project*/}
    <section id="projects" className="snap-start">
    <Projects/>
    </section>
    <section id="certificates" className="snap-start">
    <Certificates/>
    </section>
     {/*Contact Me*/}
     <section id="contactme" className="snap-start">
    <Contactme/>
    </section>

      </div>
    </main>
  );
}
