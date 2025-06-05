import { useEffect } from 'react';
import { CoverParticles } from "./components/CoverParticles";
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      {/* Fondo animado */}
      <CoverParticles />

      {/* Contenido encima del fondo */}
      <main className='relative z-10 bg-transparent bg-opacity-90'>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Footer />
      </main>
    </>
  );
}

export default App;
