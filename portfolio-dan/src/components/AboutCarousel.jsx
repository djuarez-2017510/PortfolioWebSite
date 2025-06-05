import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    title: "¿Quién soy?",
    description:
      "Hola, soy Daniel Juárez, estudiante de Ingeniería en Ciencias de la Computación y Tecnologías de la Información en la Universidad del Valle de Guatemala.",
  },
  {
    title: "Que hago",
    description:
      "Tengo experiencia construyendo aplicaciones con Kotlin, así como desarrollos web usando HTML, CSS, JavaScript, React y Vite. También he trabajado con APIs REST y herramientas como Git para control de versiones",
  },
  {
    title: "Mi objetivo",
    description:
      "Me destaco por mi compromiso, responsabilidad y una fuerte motivación por seguir creciendo tanto profesional como personalmente. La empatía y la capacidad de trabajo en equipo son cualidades que me caracterizan.",
  },
];

export default function AboutCarousel() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => setIndex((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setIndex((prev) => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about-carousel" className="text-white px-4 py-12 flex flex-col items-center">
      <div className="relative w-full max-w-3xl bg-gradient-to-r from-purple-800 to-indigo-800 rounded-xl shadow-2xl p-8 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center text-center space-y-4"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white">{slides[index].title}</h2>
            <p className="text-gray-300 text-lg sm:text-xl">{slides[index].description}</p>
          </motion.div>
        </AnimatePresence>

        <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
          <button
            onClick={prevSlide}
            className="text-white text-2xl hover:text-pink-400 transition"
          >
            ‹
          </button>
        </div>
        <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
          <button
            onClick={nextSlide}
            className="text-white text-2xl hover:text-pink-400 transition"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}
