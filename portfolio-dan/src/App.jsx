import { useEffect } from 'react';
import Navbar from './components/shared/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Footer from './components/shared/Footer';

function App() {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className='bg-white dark:bg-slate-900'>
      {/* Navbar */}
      <Navbar />

      {/* Contenido principal */}
      <main className='relative z-10'>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
