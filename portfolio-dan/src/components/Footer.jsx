export default function Footer() {
  return (
    <footer className="bg-gradient-to-tr from-purple-900 via-indigo-900 to-purple-800 text-white py-6 shadow-inner mt-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <h1 className="text-2xl sm:text-3xl font-bold italic tracking-wide hover:scale-105 transition-transform duration-300">
          Portafolio
        </h1>
        
        <div className="text-sm text-center md:text-right mt-4 md:mt-0 opacity-80">
          <p className="leading-tight">
            © {new Date().getFullYear()} Daniel Juárez. All rights reserved.
          </p>
          <p className="text-xs mt-1 text-purple-200">
            Desiseñado por mi
          </p>
        </div>
      </div>
    </footer>
  );
}
