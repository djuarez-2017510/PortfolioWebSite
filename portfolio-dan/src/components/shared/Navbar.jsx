import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Container } from '../ui';

/**
 * NAVBAR - Navegación principal responsiva
 * Sticky, con mobile menu y smooth scroll
 */
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Inicio', href: '#hero' },
    { label: 'Sobre Mí', href: '#about' },
    { label: 'Stack', href: '#skills' },
    { label: 'Experiencia', href: '#experience' },
    { label: 'Proyectos', href: '#projects' },
  ];

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white dark:bg-slate-950 shadow-md'
          : 'bg-white/50 dark:bg-slate-950/50 backdrop-blur'
      }`}
    >
      <Container>
        <div className='flex items-center justify-between h-16'>
          {/* Logo */}
          <a
            href='#hero'
            className='text-2xl font-bold text-slate-900 dark:text-white'
          >
            DJ
          </a>

          {/* Desktop Navigation */}
          <div className='hidden md:flex items-center gap-8'>
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className='text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors text-sm font-medium'
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <div className='hidden md:block'>
            <a
              href='https://github.com/djuarez-2017510'
              target='_blank'
              rel='noopener noreferrer'
              className='px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-300 text-sm font-semibold'
            >
              GitHub
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className='md:hidden text-gray-700 dark:text-gray-300'
            onClick={() => setIsOpen(!isOpen)}
            aria-label='Toggle menu'
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className='md:hidden pb-4 animate-in slide-in-from-top-2'>
            <div className='flex flex-col gap-4'>
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className='text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors text-sm font-medium'
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href='https://github.com/djuarez-2017510'
                target='_blank'
                rel='noopener noreferrer'
                className='px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-300 text-sm font-semibold w-full text-center'
                onClick={() => setIsOpen(false)}
              >
                GitHub
              </a>
            </div>
          </div>
        )}
      </Container>
    </nav>
  );
}
