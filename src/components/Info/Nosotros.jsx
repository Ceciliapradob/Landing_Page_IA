import React from "react";
import Equipo from "../../assets/equipo_IA.jpg";
import { motion } from "framer-motion";

const Nosotros = () => {
  return (
    <section>
      <div className="container py-14 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-8 space-y-6 md:space-y-0 md:mr-10">
        {/* Banner Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="flex flex-col justify-center"
        >
          <div className="text-center md:text-left space-y-4 lg:max-w-[450px]">
            <h1 className="text-4xl !leading-snug">Sobre nosotros</h1>
            <p className="text-dark2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae iusto minima ad ut id eos accusantium aut, aperiam quis
              incidunt!
            </p>
            <a
              href="https://es.wikipedia.org/wiki/Inteligencia_artificial"
              className="primary-btn !mt-8"
            >
              Más información
            </a>
          </div>
        </motion.div>
        {/* Banner Image */}
        <div className="flex justify-center items-center">
          <motion.img
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            src={Equipo}
            alt="Equipo"
            className="w-[380px] md:max-w-[450px] object-cover drop-shadow"
          />
        </div>
      </div>
    </section>
  );
};

export default Nosotros;
