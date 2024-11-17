import React from "react";
import { motion } from "framer-motion";
import BackgroundImage from "../../assets/empresas.jpg"; // Reemplaza con tu imagen

const CursosIA = () => {
  return (
    <section className="relative py-14 md:py-24 bg-cover bg-center" style={{ backgroundImage: `url(${BackgroundImage})` }}>
      {/* Overlay para oscurecer la imagen */}
      <div className="absolute inset-0 bg-black opacity-60"></div> {/* Incremento de opacidad a 60% */}

      <div className="relative container mx-auto text-white px-6 flex flex-col items-center space-y-8">
        {/* Texto de la sección */}
        <div className="flex flex-col items-center space-y-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl "
          >
            Algunos cursos para aprender de IA
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-lg md:text-xl max-w-1xl"
          >
            Explora algunos recursos y cursos en video para introducirte <br />en el mundo de la Inteligencia Artificial.
          </motion.p>
        </div>

        {/* Videos de YouTube */}
        <div className="flex flex-col items-center gap-4 w-full justify-center md:flex-row">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-full flex justify-center"
          >
            <iframe
              width="300" // Ajusta el ancho del iframe a un tamaño adecuado
              height="200"
              src="https://www.youtube.com/embed/VIDEO_ID_1" // Reemplaza VIDEO_ID_1 con el ID real del video
              title="Curso IA 1"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-md"
            ></iframe>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-full flex justify-center"
          >
            <iframe
              width="300" // Ajusta el ancho del iframe a un tamaño adecuado
              height="200"
              src="https://www.youtube.com/embed/VIDEO_ID_2" // Reemplaza VIDEO_ID_2 con el ID real del video
              title="Curso IA 2"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-md"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CursosIA;
