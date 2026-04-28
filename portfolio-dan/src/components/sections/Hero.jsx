import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Button, Container, Section } from '../ui';
import { PROFILE } from '../../constants/portfolioData';
import { FaArrowDown } from 'react-icons/fa';

/**
 * HERO SECTION - Sección principal con typing animation
 */
export default function Hero() {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  const roles = ['Software Developer', 'Full Stack Developer', 'Problem Solver', 'Creative Coder'];
  const fullText = roles[currentIndex];

  useEffect(() => {
    if (displayText.length < fullText.length) {
      const timer = setTimeout(() => {
        setDisplayText(fullText.slice(0, displayText.length + 1));
      }, 80);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setDisplayText('');
        setCurrentIndex((currentIndex + 1) % roles.length);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [displayText, fullText, currentIndex]);

  return (
    <Section
      id='hero'
      className='min-h-screen flex items-center justify-center pt-16 bg-white dark:bg-slate-950'
    >
      <Container>
        <div className='text-center'>
          {/* Animated Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className='mb-8'
          >
            <span className='inline-block px-4 py-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-sm font-medium'>
              
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className='text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white mb-6 leading-tight'
          >
            Hola, soy Daniel Juárez
          </motion.h1>

          {/* Typing Animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className='mb-8'
          >
            <p className='text-lg md:text-xl text-slate-600 dark:text-slate-400 h-8'>
              {displayText}
              <span className='animate-pulse'>|</span>
            </p>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className='text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-10'
          >
            Estudiante de 4to año de Ingeniería en Ciencias de la Computación en la UVG. Enfocado en el desarrollo web y móvil
            , con el objetivo de crear experiencias digitales fluidas y funcionales
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className='flex flex-col sm:flex-row gap-4 justify-center items-center mb-12'
          >
            <Button
              variant='primary'
              size='lg'
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Ver Proyectos
            </Button>
            <Button
              variant='secondary'
              size='lg'
              onClick={() => window.open(PROFILE.cv, '_blank')}
            >
              Descargar CV
            </Button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className='flex justify-center'
          >
            <FaArrowDown className='text-blue-400 text-2xl' />
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
