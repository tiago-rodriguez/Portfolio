import React from "react";

const AboutMe = () => {
  return (
    <div
      name="Sobre mi"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="">
          <br></br>

          <p className="text-4xl font-bold inline border-b-4 border-cyan-500 mt-80">
            Sobre mi
          </p>
        </div>
        <div className="text-xl mt-10 space-y-4">
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
            Estoy listo para afrontar nuevos retos, aportar mis conocimientos y
            seguir creciendo profesionalmente.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
