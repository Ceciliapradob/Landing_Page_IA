import React from "react";
import { FaGithubAlt } from "react-icons/fa6";
import { GiGlowingArtifact } from "react-icons/gi";
import { FaEarthAsia } from "react-icons/fa6";
import { FaCode } from "react-icons/fa";
import { motion } from "framer-motion";

const plataformas = [
  {
    id: 1,
    title: "Chat-GPT",
    link: "https://openai.com/index/chatgpt/",
    icon: <FaEarthAsia />,
    delay: 0.2,
  },
  {
    id: 2,
    title: "Geminis Google",
    link: "https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwiMpa3TpMuJAxUWN0QIHcM_JxsYABABGgJkeg&ae=2&aspm=1&co=1&ase=2&gclid=Cj0KCQiA57G5BhDUARIsACgCYnxDx5bEkTs0vcMjadsZq8ik5KjNfzKFqlp9oNDyR_Ug6IhL3gU70hwaAnc6EALw_wcB&ohost=www.google.com&cid=CAESVeD2q2tJCU6GJ4JoKKaBHul1UFLbwYXMElj6JFSmLEQtBtppk_7h3W44SjXBSKfO-azIZZxCcUXoFzKxSSrWdjqNLaEaCDbxEQybCEtD7Je35sT3d8A&sig=AOD64_3BVuZ3RofAo9a68LugjU-DcCRs7w&q&nis=4&adurl&ved=2ahUKEwitkaTTpMuJAxWuBrkGHXEZM3gQ0Qx6BAgLEAE",
    icon: <GiGlowingArtifact />,
    delay: 0.3,
  },
  {
    id: 3,
    title: "Copilot Github",
    link: "https://copilot.microsoft.com/",
    icon: <FaGithubAlt />,
    delay: 0.4,
  },
  {
    id: 4,
    title: "DeepCode",
    link: "https://www.deepcode.ca/",
    icon: <FaCode />,
    delay: 0.5,
  },
  {
    id: 5,
    title: "Bard",
    link: "https://bard.google.com/",
    icon: <FaEarthAsia />,
    delay: 0.6,
  },
  {
    id: 6,
    title: "DALL-E",
    link: "https://openai.com/dall-e/",
    icon: <FaCode />,
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

const Herramientas = () => {
  return (
    <section className="bg-white">
      <div className="container pb-14 pt-16">
        <h1 className="text-3xl text-left pb-10">IA más utilizadas</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8">
          {plataformas.map((plataforma) => (
            <motion.a
              key={plataforma.id}
              href={plataforma.link}
              target="_blank"
              rel="noopener noreferrer"
              variants={SlideLeft(plataforma.delay)}
              initial="initial"
              whileInView={"animate"}
              viewport={{ once: true }}
              className="bg-[#000000] rounded-2xl flex flex-col gap-4 items-center justify-center p-4 py-7 transition-transform duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              <div className="text-4xl mb-4 text-white">{plataforma.icon}</div>
              <h1 className="text-lg font-semibold text-center px-3 text-white">
                {plataforma.title}
              </h1>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Herramientas;
