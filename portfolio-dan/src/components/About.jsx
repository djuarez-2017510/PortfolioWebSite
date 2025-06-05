import { useEffect, useState } from "react";
import about1 from "/about1.png";
import about2 from "/about2.png";
import about3 from "/about3.png";
import AboutCarousel from "./AboutCarousel";

const images = [about1, about2, about3];

export default function About() {
  const [positions, setPositions] = useState([0, 1, 2]);

  useEffect(() => {
    const interval = setInterval(() => {
      setPositions(([a, b, c]) => [c, a, b]);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="about"
      className="min-h-screen overflow-hidden flex items-center justify-center text-white px-4 sm:px-6 relative"
    >
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
        
        {/* IMÁGENES GIRATORIAS */}
        <figure className="relative w-full h-[500px] sm:h-[600px]">
          <div className="h-[300px] w-[300px] sm:w-[400px] lg:h-[300px] lg:w-[500px] bg-gradient-to-l from-[#6d2897] via-[#6c95f5] to-[#bb61c5] absolute rotate-12 z-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl opacity-30"></div>

          {/* TOP LEFT */}
          <img
            src={images[positions[1]]}
            alt="about small 1"
            className="absolute top-0 left-5 sm:left-10 w-28 h-28 sm:w-36 sm:h-36 rounded-xl shadow-lg z-20 transition-all duration-700"
          />

          {/* CENTER BIG */}
          <img
            src={images[positions[0]]}
            alt="about center"
            className="absolute top-1/2 left-1/2 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 transform -translate-x-1/2 -translate-y-1/2 rounded-xl shadow-2xl z-10 transition-all duration-700"
          />

          {/* BOTTOM RIGHT */}
          <img
            src={images[positions[2]]}
            alt="about small 2"
            className="absolute bottom-0 right-5 sm:right-10 w-28 h-28 sm:w-36 sm:h-36 rounded-xl shadow-lg z-20 transition-all duration-700"
          />
        </figure>

        {/* CARRUSEL TIPO PRESENTACIÓN */}
        <AboutCarousel />
      </div>
    </section>
  );
}