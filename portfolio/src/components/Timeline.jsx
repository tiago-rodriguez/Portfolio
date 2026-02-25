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
    background: "linear-gradient(to bottom, #1f2937, #111827)", // Gris oscuro a negro (Tailwind gray-800 to gray-900)
    color: "#fff",
    border: "1px solid #374151", // Borde sutil
    borderRadius: "12px",
    boxShadow:
      "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
  };

  const contentArrowStyle = {
    borderRight: "7px solid #1f2937", // Que coincida con el fondo de la caja
  };

  return (
    <div
      name="Linea_de_tiempo"
      className="w-full h-auto min-h-screen bg-gradient-to-b from-black to-gray-800 pb-20 pt-40"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 mb-8 pl-4 sm:pl-0">
          {" "}
          <p className="text-4xl font-bold inline border-b-4 border-cyan-500 text-white">
            Mi Recorrido
          </p>
        </div>

        <div className="experience">
          <VerticalTimeline lineColor="#64FA38">
            {" "}
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              contentStyle={contentStyle}
              contentArrowStyle={contentArrowStyle}
              iconStyle={{
                background: "#000",
                color: "#64FA38",
                border: "2px solid #64FA38",
              }} // Icono negro con borde cyan
              date="2019"
              icon={<FaGraduationCap />}
            >
              <h3 className="text-white font-bold text-xl">
                Finalicé el secundario
              </h3>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              contentStyle={contentStyle}
              contentArrowStyle={contentArrowStyle}
              iconStyle={{
                background: "#000",
                color: "#37FA54",
                border: "2px solid #64FA38",
              }}
              date="2023 - 2024"
              icon={<FaCertificate />}
            >
              <h3 className="text-white font-bold text-xl">Coding Bootcamp</h3>
              <h4 className="text-gray-400 font-medium text-sm mb-2">
                Plataforma 5
              </h4>
              <p className="text-gray-300 text-sm">
                Capacitación intensiva (+850hs) en JavaScript y Stack PERN.
                Aprendizaje basado en proyectos reales, metodologías ágiles
                (Scrum) y Pair Programming.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              contentStyle={contentStyle}
              contentArrowStyle={contentArrowStyle}
              iconStyle={{
                background: "#000",
                color: "#64FA38",
                border: "2px solid #64FA38",
              }}
              date="2024"
              icon={<FaBriefcase />}
            >
              <h3 className="text-white font-bold text-xl">
                Pasantía Desarrollo Web
              </h3>
              <p className="text-gray-300 text-sm">
                Optimización de código y mejoras de performance para una empresa
                del Reino Unido. Enfoque en Clean Code y Responsive Design.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              contentStyle={contentStyle}
              contentArrowStyle={contentArrowStyle}
              iconStyle={{
                background: "#000",
                color: "#64FA38",
                border: "2px solid #64FA38",
              }}
              date="2025 - Actualidad"
              icon={<FaBook />}
            >
              <h3 className="text-white font-bold text-xl">
                Estudiante Universitario
              </h3>
              <h4 className="text-gray-400 font-medium text-sm">UADE</h4>
              <p className="text-gray-300 text-sm">
                Licenciatura en Gestión de Tecnología de la Información.
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
