import React from "react";
import { FaGithubAlt } from "react-icons/fa6";
import { GiGlowingArtifact } from "react-icons/gi";
import { FaEarthAsia } from "react-icons/fa6";
import { FaCode } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
import { IoPulseOutline } from "react-icons/io5";
import { motion } from "framer-motion";

const ServicesData = [
  {
    id: 1,
    title: "Chat-GPT",
    link: "#",
    icon: <FaEarthAsia />,
    delay: 0.2,
  },
  {
    id: 2,
    title: "Geminis Google",
    link: "#",
    icon: <GiGlowingArtifact />,
    delay: 0.3,
  },
  {
    id: 3,
    title: "Copilot Github",
    link: "#",
    icon: <FaGithubAlt />,
    delay: 0.4,
  },
  {
    id: 4,
    title: "DeepCode",
    link: "#",
    icon: <FaCode />,
    delay: 0.5,
  },
  {
    id: 5,
    title: "SEO optimization",
    link: "#",
    icon: <IoPulseOutline />,
    delay: 0.6,
  },
  {
    id: 6,
    title: "24/7 support",
    link: "#",
    icon: <BiSupport />,
    delay: 0.7,
  },
];

const SlideLeft = (delay) => {
  return {
    initial: {
      opacity: 0,
      x: 50,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        delay: delay,
        ease: "easeInOut",
      },
    },
  };
};
const Cursos = () => {
  return (
    <section className="bg-white">
      <div className="container pb-14 pt-16">
        <h1 className="text-3xl text-left pb-10">
          IA más utilizadas
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8">
          {ServicesData.map((service) => (
            <motion.div
              variants={SlideLeft(service.delay)}
              initial="initial"
              whileInView={"animate"}
              viewport={{ once: true }}
              className="bg-[#000000] rounded-2xl flex flex-col gap-4 items-center justify-center p-4 py-7 hover:bg-white  hover:scale-110 duration-300 hover:shadow-2xl"
            >
              <div className="text-4xl mb-4 text-white  hover:text-black"> {service.icon}</div>
              <h1 className="text-lg font-semibold text-center px-3 text-white  hover:text-black">
                {service.title}
              </h1>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cursos;
