import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import Angular from "/Angular.png";
import icon_react from "/icon_react.png";
import tailwindcss from "/tailwindcss.png";
import javascript from "/javascript.png";
import Kotlin from "/Kotlin.png";
import Flutter from "/Flutter.png";


const skillsData = [
  { id: 1, image: javascript, title: "JavaScript", level: 80 },
  { id: 2, image: icon_react, title: "React.js", level: 70 },
  { id: 3, image: tailwindcss, title: "Tailwind CSS", level: 80 },
  { id: 4, image: Angular, title: "Angular", level: 75 },
  { id: 5, image: Kotlin, title: "Kotlin", level: 75 },
  { id: 6, image: Flutter, title: "Flutter", level: 75 },
];

const SkillBox = ({ image, title, level }) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: false, 
    threshold: 0.3,     
  });

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const duration = 1000;
    const stepTime = 20;
    const steps = Math.ceil(duration / stepTime);
    const increment = level / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= level) {
        clearInterval(timer);
        setCount(level);
      } else {
        setCount(Math.round(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [inView, level]);

  return (
    <article
      ref={ref}
      className="group bg-gray-800 p-6 rounded-xl shadow-lg text-center transform transition-all duration-300 hover:-translate-y-2 hover:shadow-purple-700/40 hover:shadow-2xl"
    >
      <figure className="flex justify-center mb-4 transition-all duration-300 group-hover:scale-110">
        <img
          src={image}
          alt={title}
          className="w-16 h-16 sm:w-20 sm:h-20 drop-shadow-[0_0_8px_rgba(147,51,234,0.4)]"
        />
      </figure>
      <header>
        <h3 className="text-lg sm:text-xl font-bold mb-4 text-purple-300">{title}</h3>
      </header>
      <div className="w-full bg-gray-700 rounded-full h-3 mb-2">
        <div
          className="bg-gradient-to-r from-purple-500 to-indigo-500 h-3 rounded-full transition-all duration-500 ease-in-out"
          style={{ width: `${count}%` }}
        ></div>
      </div>
      <p className="text-gray-300 text-sm font-semibold tracking-wide">{count}%</p>
    </article>
  );
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative min-h-screen overflow-hidden flex flex-col items-center justify-center text-white px-4 py-10"
    >
      {/* Fondo glow */}
      <div className="absolute z-0 w-72 h-36 sm:w-96 sm:h-44 bg-[#cd3cf5] rounded-full blur-3xl opacity-50 top-10 sm:top-28 left-1/2 transform -translate-x-1/2"></div>

    
      {/* Título */}
      <div
        data-aos="fade-up"
        data-aos-delay="300"
        className="relative z-20 text-center space-y-6 sm:space-y-10"
      >
        <header>
          <h1 className="text-3xl sm:text-4xl font-bold">
            <span className="text-purple-400">Habilidades</span>
          </h1>
          <p className="text-gray-400 mt-2 sm:mt-4 text-sm sm:text-base max-w-xl mx-auto">
            Tecnologías que he utilizado para la creación de aplicaciones
          </p>
        </header>
      </div>

      {/* Skill Grid */}
      <section
        data-aos="fade-up"
        data-aos-delay="500"
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mt-8 z-20"
      >
        {skillsData.map((skill) => (
          <SkillBox
            key={skill.id}
            image={skill.image}
            title={skill.title}
            level={skill.level}
          />
        ))}
      </section>

    </section>
  );
}
