
import Proyecto11 from "/Proyecto11.png";
import Proyecto12 from "/Proyecto12.png";
import Proyecto13 from "/Proyecto13.png";
import Proyecto21 from "/Proyecto21.png";
import Proyecto22 from "/Proyecto22.png";
import Proyecto23 from "/Proyecto23.png";
import Proyecto31 from "/Proyecto31.png";
import Proyecto32 from "/Proyecto32.png";
import Proyecto33 from "/Proyecto33.png";
import Proyecto41 from "/Proyecto41.png";
import Proyecto42 from "/Proyecto42.png";
import Proyecto43 from "/Proyecto43.png";
import { useEffect, useState } from "react";

const ProjectCard = ({ images, title, description, link }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); 

    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <article className="relative max-w-sm bg-gray-800 rounded overflow-hidden shadow-lg group">
      <div className="absolute z-0 w-40 h-40 sm:w-60 sm:h-60 bg-[#3c48f5] rounded-full blur-3xl opacity-50 -top-5 left-10"></div>

      <div className="relative z-10">
        <figure className="relative">
          <img
            src={images[currentImageIndex]}
            alt={title}
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute h-[202px] inset-0 flex items-center justify-center bg-[#2d0b57] bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <button className="bg-white font-medium text-black py-2 px-4 rounded-3xl shadow hover:text-white hover:bg-[#2879d5]">
              Github
            </button>
          </a>
        </figure>
        <div className="px-6 py-4">
          <header>
            <h3 className="text-white font-bold text-xl mb-2">{title}</h3>
          </header>
          <p className="text-gray-200 text-base">{description}</p>
        </div>
      </div>
    </article>
  );
};


export default function Projects() {
    const listProjects = [
  {
    images: [Proyecto11, Proyecto12, Proyecto13],
    title: 'Control Comercial',
    description: 'Página web diseñada para facilitar la gestión integral de una tienda, permitiendo administrar múltiples sedes, controlar el inventario y llevar un registro detallado de las ventas. ',
    link: 'https://github.com/jruiz002/ControlComercial_Back',
  },
  {
    images: [Proyecto21, Proyecto22, Proyecto23],
    title: 'App Horas Beca',
    description: 'Aplicación Android para gestionar las Horas Beca de la Universidad, tanto para estudiantes beneficiarios como para quienes ofrecen las horas.',
    link: 'https://github.com/AlejandroJavierGarciaGarcia/2024_APP_Horas_Beca_UVG',
  },
  {
    images: [Proyecto31, Proyecto32, Proyecto33],
    title: 'Eduvial',
    description: 'Aplicación móvil educativa diseñada para apoyar el aprendizaje de las leyes de tránsito de Guatemala. Su objetivo es facilitar la comprensión de normas viales, señales de tránsito y reglamentos.',
    link: 'https://github.com/Jonialen/EduVial-Backend',
  },
  {
    images: [Proyecto41, Proyecto42, Proyecto43],
    title: 'Ecommerce',
    description: 'Sitio web que simula una tienda en línea especializada en productos de motocross. Incluye un catálogo interactivo, detalles de productos, carrito de compras.',
    link: 'https://github.com/djuarez-2017510/Ecommerce',
  },
];
    return (
        <main className="p-4" id="projects">
  <section data-aos='fade-up' data-aos-delay='300'>
    <header className="text-center">
      <h1 className="text-3xl text-white sm:text-4xl font-bold mb-6">
        <span className="text-purple-400">Proyectos</span>
      </h1>
      <p className="text-gray-400 mt-2 sm:mt-4 text-sm sm:text-base">
        Estos son algunos de los proyectos en los que he trabajado
      </p>
    </header>
  </section>

  <section
  data-aos='fade-up'
  data-aos-delay='500'
  className="flex flex-wrap gap-4 justify-center mt-6"
>
  {listProjects.map((project, index) => (
    <ProjectCard
      key={index}
      images={project.images}
      title={project.title}
      description={project.description}
      link={project.link}
    />
  ))}
</section>
</main>

    );
}
