import modal from "/modal.png";

export default function ContactModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm animate-fade-in">
      <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl shadow-[0_0_50px_rgba(255,255,255,0.05)] max-w-4xl w-full mx-4 overflow-hidden">
        <div className="flex flex-col md:flex-row">
          {/* Imagen con aura luminosa */}
          <aside className="w-full md:w-1/2 relative bg-gray-800">
            <div className="absolute z-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[380px] h-[300px] sm:h-[380px] rounded-full bg-gradient-to-tr from-purple-600 via-pink-500 to-indigo-500 blur-3xl opacity-30"></div>
            <img
              src={modal}
              alt="Ilustración contacto"
              className="h-[300px] sm:h-[360px] md:h-[440px] w-full object-cover relative z-10 rounded-t-xl md:rounded-none md:rounded-l-2xl"
            />
          </aside>

          {/* Formulario elegante */}
          <section className="p-6 md:p-8 w-full md:w-1/2 relative">
            <button
              onClick={onClose}
              className="absolute top-4 right-5 text-gray-400 hover:text-pink-400 text-2xl transition duration-300"
              title="Cerrar"
            >
              ✕
            </button>

            <header className="mb-6 text-center">
              <h2 className="text-3xl font-bold text-white drop-shadow-md">
                ¡Hablemos!
              </h2>
              <p className="text-gray-400 text-sm mt-1">
                Estoy disponible para nuevos proyectos
              </p>
            </header>

            <form className="space-y-4">
              <div>
                <label className="block text-sm text-gray-300 mb-1">Nombre</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                  placeholder="Tu nombre completo"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-300 mb-1">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                  placeholder="ejemplo@correo.com"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-300 mb-1">Mensaje</label>
                <textarea
                  rows="4"
                  className="w-full px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 resize-none"
                  placeholder="¿En qué te puedo ayudar?"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-700 via-pink-600 to-indigo-700 hover:brightness-110 text-white py-2 px-4 rounded-full font-semibold tracking-wide transition duration-300 shadow-lg"
              >
                Enviar mensaje
              </button>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
}
