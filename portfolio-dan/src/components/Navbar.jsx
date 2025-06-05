import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import ContactModal from './ContactModal'; 


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showContact, setShowContact] = useState(false);

  const NavbarLinks = [
    { id: 1, name: 'Inicio', link: '#home' },
    { id: 2, name: 'Sobre mi', link: '#about' },
    { id: 3, name: 'Habilidades', link: '#skills' },
    { id: 4, name: 'Proyectos', link: '#projects' },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-gray-950/80 backdrop-blur-md shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <a
            href="#home"
            className="text-3xl font-extrabold italic text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400"
          >
            Portafolio
          </a>
          <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FiX className="w-7 h-7" /> : <FiMenu className="w-7 h-7" />}
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {NavbarLinks.map((link) => (
              <a
                key={link.id}
                href={link.link}
                className="text-white hover:text-purple-400 font-medium transition duration-200"
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={() => setShowContact(true)}
              className="bg-gradient-to-r from-purple-600 to-pink-500 text-white py-2 px-5 rounded-full shadow hover:scale-105 transition-all duration-300"
            >
              Contacto
            </button>
          </nav>
        </div>

        {/* Mobile Menu */}
        <div className={`${isOpen ? 'block' : 'hidden'} md:hidden px-6 pb-6`}>
          <nav className="flex flex-col items-center bg-gray-900 rounded-xl py-6 space-y-4">
            {NavbarLinks.map((link) => (
              <a
                key={link.id}
                href={link.link}
                className="text-white hover:text-purple-400 text-lg font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={() => {
                setIsOpen(false);
                setShowContact(true);
              }}
              className="bg-gradient-to-r from-purple-600 to-pink-500 text-white py-2 px-5 rounded-full shadow hover:scale-105 transition-all duration-300"
            >
              Contacto
            </button>
          </nav>
        </div>
      </header>

      {/* Modal de contacto */}
      <ContactModal isOpen={showContact} onClose={() => setShowContact(false)} />
    </>
  );
}
