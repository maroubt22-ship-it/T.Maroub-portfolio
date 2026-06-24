import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';

function Footer() {
  return (
    <footer className="bg-forest-950 border-t border-forest-900 py-8 text-center">
      <p className="text-stone-500 text-sm">
        &copy; {new Date().getFullYear()} Taoufiq Maroub — Tous droits réservés.
      </p>
      <p className="text-stone-600 text-xs mt-1">
        Salé, Maroc · Infrastructures Digitales & Intelligence Artificielle
      </p>
    </footer>
  );
}

function App() {
  return (
    <div className="antialiased">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Projects />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
