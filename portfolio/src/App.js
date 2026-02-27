import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Importamos los estilos de las animaciones

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import SocialLinks from "./components/SocialLinks";
import AboutMe from "./components/AboutMe";
import Proyects from "./components/Proyects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import ParticlesBackground from "./components/ParticlesBackground";
import Timeline from "./components/Timeline";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <>
      <div>
        <Navbar />
        <ParticlesBackground />
      </div>
      <SocialLinks />
      <Home />
      <AboutMe />
      <Timeline />
      <Proyects />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
