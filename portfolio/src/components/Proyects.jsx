import React from "react";
import preservate from "../assets/preservate.jpg";
import allio from "../assets/al_lio.png";
import hod from "../assets/hod.png";
import tmp from "../assets/the-movie-place.jpg";
import "../styles/Proyects.css";

const Proyects = () => {
  const portfolios = [
    {
      id: 1,
      nombre: "ONG Preservate",
      src: preservate,
      demo: "https://preservate.org",
      code: "https://github.com/tiago-rodriguez/redisenio-preservate",
    },
    {
      id: 2,
      nombre: "The Movie Place",
      src: tmp,
      demo: "https://the-movie-place.netlify.app/",
      code: "https://github.com/Titi24Pehuajo/TMDB",
    },
    {
      id: 3,
      nombre: "Al Lio Clothing Store",
      src: allio,
      code: "https://github.com/Titi24Pehuajo/Al-Lio-Clothing-Store",
    },
    {
      id: 4,
      nombre: "House Of Dev",
      src: hod,
      code: "https://github.com/Titi24Pehuajo/Proyecto-Integrador",
    },
  ];

  return (
    <div
      name="Proyectos"
      className="bg-gradient-to-b from-gray-800 to-black w-full text-white min-h-screen h-auto py-20"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-cyan-500">
            Proyectos
          </p>
          <p className="py-6">Mira algunos de mis proyectos aquí</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, code, nombre, demo }) => (
            <div
              key={id}
              data-aos="fade-up"
              data-aos-delay={`${id * 100}`}
              className="shadow-md shadow-cyan-600 rounded-lg duration-200 hover:scale-105 flex flex-col justify-between"
            >
              <img
                src={src}
                alt={nombre}
                className="rounded-t-md w-full h-48 object-cover"
              />

              <div className="flex items-center justify-center bg-gray-900 rounded-b-lg p-4">
                {demo ? (
                  <a
                    href={demo}
                    target="_blank"
                    rel="noreferrer"
                    className="w-1/2 px-6 py-2 m-2 duration-200 hover:text-cyan-400 text-center font-bold border border-gray-600 rounded hover:border-cyan-400"
                  >
                    Demo
                  </a>
                ) : (
                  <span className="w-1/2 px-6 py-2 m-2 text-gray-600 text-center cursor-not-allowed border border-gray-800 rounded">
                    Demo
                  </span>
                )}

                <a
                  href={code}
                  target="_blank"
                  rel="noreferrer"
                  className="w-1/2 px-6 py-2 m-2 duration-200 hover:text-cyan-400 text-center font-bold border border-gray-600 rounded hover:border-cyan-400"
                >
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Proyects;
