import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import {
  FaGraduationCap,
  FaBook,
  FaBriefcase,
  FaCertificate,
} from "react-icons/fa";

const Timeline = () => {
  // Estilo común para todas las cajas
  const contentStyle = {
    background: "linear-gradient(to bottom, #374151, #111827)",
    color: "#fff",
    border: "1px solid #374151",
    borderRadius: "12px",
  };

  const contentArrowStyle = {
    borderRight: "7px solid #374151",
  };

  return (
    <div
      name="Linea_de_tiempo"
      className="w-full h-screen bg-gradient-to-b from-black to-gray-800"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="experience">
          <VerticalTimeline lineColor="#92FA5C">
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              contentStyle={contentStyle}
              contentArrowStyle={contentArrowStyle}
              iconStyle={{ background: "#000000", color: "#fff" }}
              date="2019"
              icon={<FaGraduationCap />}
            >
              <h3 className="text-white font-bold">Finalicé el secundario.</h3>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              contentStyle={contentStyle}
              contentArrowStyle={contentArrowStyle}
              iconStyle={{ background: "#000000", color: "#fff" }}
              date="2020 - Actualidad"
              icon={<FaBook />}
            >
              <h3 className="text-white font-bold">Inicié la Universidad</h3>
              <p className="text-gray-300 font-medium">
                Inicié mi carrera de Licenciatura en Sistemas en la Universidad
                de Buenos Aires.
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              contentStyle={contentStyle}
              contentArrowStyle={contentArrowStyle}
              iconStyle={{ background: "#000000", color: "#fff" }}
              date="2023-2024"
              icon={<FaCertificate />}
            >
              <h3 className="text-white font-bold">
                Realicé un Coding Bootcamp
              </h3>
              <p className="text-gray-300 font-medium">
                Capacitación full-time en JavaScript y Stack PERN. Modalidad
                teórico-práctica y aplicando metodologías ágiles, Pair
                Programming y trabajo colaborativo. Más de 850 horas de
                formación en 15 semanas.
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              contentStyle={contentStyle}
              contentArrowStyle={contentArrowStyle}
              iconStyle={{ background: "#000000", color: "#fff" }}
              date="2024"
              icon={<FaBriefcase />}
            >
              <h3 className="text-white font-bold">
                Realicé mi primera pasantía
              </h3>
              <p className="text-gray-300 font-medium">
                Ingresé durante 3 meses como pasante para una empresa de
                Inglaterra. Mi objetivo era optimizar el código para una mayor
                fluidez del sitio web y mejorar la visualización.
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
