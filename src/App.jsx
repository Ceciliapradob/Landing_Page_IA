import React from "react";
import Hero from "./components/Hero/Hero";
import Herramientas from "./components/Herramientas/Herramientas";
import Recursos from "./components/Info/Recursos";
import Cursos from "./components/CursosIa/CursosIa";
import Nosotros from "./components/Info/Nosotros";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <main className="overflow-x-hidden bg-white text-dark">
      <Hero />
      <Herramientas />
      <Nosotros />
      <Recursos />
      <Cursos />
      <Footer />
    </main>
  );
};

export default App;
