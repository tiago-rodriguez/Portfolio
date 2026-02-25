import React from "react";
// Importa tu foto aquí. Asegúrate de que sea cuadrada para que el círculo quede perfecto.
import profilePic from "../assets/Foto CV.png";

const AboutMe = () => {
  return (
    <div
      name="Sobre mi"
      className="w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white py-24"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-cyan-500">
            Sobre mí
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-12 mt-10">
          <div className="w-full md:w-1/3 flex justify-center relative group">
            <div className="rounded-full p-1 bg-gradient-to-tr from-cyan-500 to-blue-500 shadow-xl shadow-cyan-500/20 hover:scale-105 duration-500">
              <img
                src={profilePic}
                alt="Tiago Rodriguez"
                className="rounded-full w-64 h-64 object-cover border-4 border-gray-900 bg-gray-900 grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>

          <div className="w-full md:w-2/3 text-xl space-y-6 text-gray-300 text-center md:text-left">
            <p>
              Soy un desarrollador Full Stack con una fuerte afinidad por el
              Front-End. Mis primeros meses en la universidad despertaron mi
              pasión por el mundo de la programación.
            </p>
            <p>
              Desde entonces, mi entusiasmo por aprender y perfeccionar mis
              habilidades me ha impulsado a explorar continuamente nuevas
              tecnologías y desafíos.
            </p>
            <p>
              Actualmente estoy cursando la{" "}
              <strong className="text-white font-semibold">
                Licenciatura en Gestión de Tecnología de la Información
              </strong>{" "}
              y busco mi primera oportunidad profesional para aportar valor
              real, como lo hice con el proyecto de la ONG Preservate.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
