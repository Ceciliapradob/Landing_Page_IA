import React from "react";
import Hero from "./components/Hero/Hero";
import Cursos from "./components/Cursos/Cursos";
import Banner from "./components/Banner/Banner";
// import Subscribe from "./components/Subscribe/Subscribe";
import Banner2 from "./components/Banner/Banner2";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <main className="overflow-x-hidden bg-white text-dark">
      <Hero />
      <Cursos />
      <Banner2 />
      <Banner />
      <Footer />
    </main>
  );
};

export default App;
