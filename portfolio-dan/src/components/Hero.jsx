import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import profile from "/profile.png";
import git from "/git.png";
import insta from "/insta.png";
import DanielJuarezCV from "/DanielJuarezCV.pdf";

export default function Hero() {
    const [text, setText] = useState("");
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [delta, setDelta] = useState(200);
    const toRotate = ["Web Developer Jr.", "Software Developer Jr.", "DevOps"];
    const period = 2000;

    useEffect(() => {
        const ticker = setTimeout(() => {
            tick();
        }, delta);

        return () => clearTimeout(ticker);
    }, [text]);

    const tick = () => {
        const i = loopNum % toRotate.length;
        const fullText = toRotate[i];
        const updatedText = isDeleting
            ? fullText.substring(0, text.length - 1)
            : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta((prevDelta) => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === "") {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(300);
        } else {
            setDelta(150);
        }
    };

    return (
        <div className='relative overflow-hidden min-h-[550px] sm:min-h-[600px] flex flex-col items-center'>
            <div className='md:h-[550px] h-[500px] w-[450px] bg-gradient-to-r absolute from-[#6d2897] via-[#8e6cf5] to-[#bb61c5] transform rotate-45 z-0 right-2 top-28 rounded-3xl'></div>
            <Navbar />

            <main
                id="home"
                className="flex flex-col md:flex-row items-center justify-center w-full px-4 md:px-52 pb-4 md:pb-24 md:pt-32 pt-24 mt-14 md:mt-0 z-10"
            >
                {/* TEXT */}
                <section
                    className="flex-1 mr-28 md:text-left mt-10 md:mt-0 relative"
                    data-aos="fade-up"
                    data-aos-delay="500"
                >
                    <div className="absolute -z-10 w-60 h-60 bg-[#cd3cf5] rounded-full blur-3xl opacity-50 -top-5 -left-12"></div>

                    <header>
                        <h1 className="text-4xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                            Daniel Juárez
                        </h1>
                        <h2 className="text-xl sm:text-4xl md:text-2xl font-bold text-[#3e0f4a] md:text-[#c744ec] mb-2">
                            <span className="inline-block border-r-2 border-purple-400 pr-2 animate-pulse">
                                {text}
                            </span>
                        </h2>
                    </header>

                    <p className="text-base sm:text-lg md:text-lg text-gray-200 mb-6">
                        Estudiante universitario apasionado por la programación, la tecnología y el desarrollo personal
                    </p>

                    <div className="flex items-center space-x-4 mb-6">
                        <a href="https://github.com/djuarez-2017510" target="_blank" rel="noopener noreferrer">
                            <img src={git} alt="github" className="w-8 h-8" />
                        </a>
                        <a href="https://www.instagram.com/danjua._?igsh=b3U1dzQ2bDJldTdr" target="_blank" rel="noopener noreferrer">
                            <img src={insta} alt="instagram" className="w-11 h-11" />
                        </a>
                    </div>


                    <a href={DanielJuarezCV} download>
                        <button className="inline-flex text-white border-2 py-2 px-6 focus:outline-none hover:bg-[#801b9c] hover:shadow-[0_0_40px_rgba(128,0,128,0.7)] rounded-full text-lg">
                            Descargar CV
                        </button>
                    </a>
                </section>

                {/* PROFILE IMAGE */}
                <figure
                    data-aos="fade-up"
                    data-aos-delay="500"
                    className="flex-1 flex justify-center md:justify-end mt-0"
                >
                    <div className="relative w-[420px] h-[420px] rounded-full p-1 bg-[conic-gradient(at_top_left,_#9333ea,_#ec4899,_#6366f1)] animate-spin-slow shadow-[0_0_40px_rgba(128,0,255,0.4)]">
                        <div className="w-full h-full rounded-full bg-gray-950 p-1">
                            <img
                                src={profile}
                                alt="Profile Image"
                                className="w-full h-full object-cover rounded-full border-4 border-white shadow-xl"
                            />
                        </div>
                    </div>
                </figure>
            </main>
        </div>
    );
}
