import React from "react";
import { MdOutlineKeyboardArrowRight, MdFileDownload } from "react-icons/md"; // Importamos icono de descarga
import { Link } from "react-scroll";
import "../styles/Scrollbar.css";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Home = () => {
  const [text] = useTypewriter({
    words: ["Bienvenido a mi porfolio"],
    typeSpeed: 130,
  });

  return (
    <div
      name="Inicio"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            {text}
            <span>
              <Cursor cursorColor="gray" cursorStyle="|" />
            </span>
          </h2>

          <p className="text-gray-500 py-4 max-w-md">
            Soy Tiago Rodriguez, Desarrollador Full Stack. Te invito a explorar
            mis proyectos y conocer las tecnologías con las que trabajo.
          </p>

          <div className="flex gap-4">
            <Link
              to="Proyectos"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer hover:scale-105 duration-300"
            >
              Proyectos
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>

            <a
              href="/Curriculum.pdf" // Asegúrate de poner el nombre correcto del archivo en public
              download={true}
              target="_blank"
              rel="noreferrer"
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md border-2 border-cyan-500 hover:bg-cyan-500/20 cursor-pointer hover:scale-105 duration-300"
            >
              Descargar CV
              <span className="group-hover:translate-y-1 duration-300">
                <MdFileDownload size={25} className="ml-2" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
