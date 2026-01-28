import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Internships from "./components/Internships";
import About from "./components/About";
import Certifications from "./components/Certifications";
import Services from "./components/Services";



export default function App() {
  return (
    <div className="bg-slate-50 text-slate-900 min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Education />
        <Certifications/>
        <Internships/>
        <Projects />
        <About/>
        <Services/>
        <Contact />
      </main>
    </div>
  );
}
