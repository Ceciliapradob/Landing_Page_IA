import React from "react";
import { FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="py-12 bg-[#f7f7f7] text-dark2">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="container mx-auto px-6 text-center flex flex-col items-center"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center max-w-3xl w-full">
          {/* Sección Izquierda */}
          <div className="space-y-4 text-center md:text-left">
            <h1 className="text-2xl font-bold">Inteligencia Artificial</h1>
            <p className="text-base leading-relaxed">
              La inteligencia artificial transforma industrias, ofreciendo herramientas para optimizar procesos y mejorar la toma de decisiones en un mundo cada vez más digital.
            </p>
          </div>

          {/* Sección Derecha - Newsletter */}
          <div className="space-y-6 text-center md:text-left">
            <h1 className="text-2xl font-bold">Newsletter</h1>
            <div className="flex justify-center md:justify-start items-center">
              <input
                type="email"
                placeholder="Tu email"
                className="p-3 rounded-l-md bg-white w-60 py-2 focus:ring-0 focus:outline-none placeholder:text-dark2"
              />
              <button className="bg-primary text-white font-semibold py-2 px-4 rounded-r-md">
                Enviar
              </button>
            </div>
            {/* Iconos de redes sociales */}
            <div className="flex justify-center md:justify-start space-x-6 pt-4 mb-6">
              <a href="#" className="text-dark2 hover:text-primary">
                <FaWhatsapp size={24} />
              </a>
              <a href="#" className="text-dark2 hover:text-primary">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="text-dark2 hover:text-primary">
                <FaYoutube size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Sub-sección de derechos de autor */}
        <div className="pt-8 text-center text-sm text-dark2 border-t border-gray-300 mt-10 w-full max-w-3xl">
          © 2024 - Todos los derechos reservados
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
