import { FaSearch } from 'react-icons/fa';
import { GiDeliveryDrone } from "react-icons/gi";
import { FaHandshake } from "react-icons/fa";
import { DiAndroid } from "react-icons/di";

import { LiaBookSolid } from "react-icons/lia";
import { HiBuildingLibrary } from "react-icons/hi2";
import { MdOutlineLocalLibrary } from "react-icons/md";
import { BsFiletypeAi } from "react-icons/bs";



const Dashboard = () => {
     const features = [
  {
    icon: <HiBuildingLibrary className='h-14 w-14'/>,
    title: "Licencias y Habilitaciones",
    text: "Ente Regulador Nacional",
    href: "#",
    
  },
  {
    icon: <LiaBookSolid className='h-14 w-14'/>,
    title: "Reglamentación Seguros",
    text: " Asesoramiento Legal",
    href: "#",
  },
  {
    icon: <GiDeliveryDrone className='h-14 w-14'/>,
    title: "Marketplace Drones y Sensores",
    text: "Compra vende y alquila",
    href: "/homes",
  },
  {
    icon: <DiAndroid className='h-14 w-14'/>,
    title: "Apps",
    text:"Las mejores apps para Android y IOS",
    href: "#",
  },
  {
    icon: <FaHandshake className='h-14 w-14'/>,
    title:"Servicios y Consultoría",
    text:"Solicitá servicios en diferentes áreas",
    href: "/servicios",
  },
  {
    icon: <MdOutlineLocalLibrary className='h-14 w-14'/>,
    title: "Licitaciones",
    text : "Información actualizada",
    href: "#",
  },
  {
    icon: <BsFiletypeAi className='h-14 w-14'/>,
    title: "Software IA para procesamiento",
    text: "Potenciá tu trabajo",
    href: "#",
  },
  {
    icon: <FaSearch className='h-14 w-14'/>,
    title: "Interés General",
     text: "Mantenete informado con las últimas noticias",
 href: "#",
  },
];


   return (
    <div className="relative bg-[#E3F1FC] mt-0 p-5 pb-10">
      <div className="text-center">
        <h2 className="text-3xl text-colorFontPrimary font-semibold sm:text-5xl lg:text-6xl mt-10 lg:mt-10 tracking-wide">
          Explora {" "}
          <span className="uppercase">DRONE COMMUNITY</span>
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center px-5 sm:px-10 lg:px-48 mt-10 lg:mt-20">
        {features.map((feature, index) => {
          // Clases para modo responsive
          const responsiveBgColorClass = index % 2 === 0 ? 'bg-colorDashoard' : 'bg-colorDashoardAlt';

           // Clases para pantallas medianas
          let mdBgColorClass;
          if (index <2) {
            mdBgColorClass = index % 2 === 0 ? 'md:bg-colorDashoard' : 'md:bg-colorDashoardAlt';
          } else {
            mdBgColorClass = index % 2 === 0 ? 'md:bg-colorDashoardAlt' : 'md:bg-colorDashoard';
          }

          // Clases para pantallas grandes
          let lgBgColorClass;
          if (index < 4) {
            lgBgColorClass = index % 2 === 0 ? 'lg:bg-colorDashoard' : 'lg:bg-colorDashoardAlt';
          } else {
            lgBgColorClass = index % 2 === 0 ? 'lg:bg-colorDashoardAlt' : 'lg:bg-colorDashoard';
          }

          return (
            <a key={index} href={feature.href} className="skills-card w-full flex justify-center">
              <div
                className={`relative flex flex-col justify-center items-center p-6 h-60 w-60 shadow-lg hover:shadow-colorBorderHover transition-shadow hover:shadow-md rounded-2xl cursor-pointer hover:scale-100 duration-00 ${responsiveBgColorClass} ${mdBgColorClass} ${lgBgColorClass}`}
              >
                <div className="flex items-center justify-center h-16 w-16 text-colorIcons rounded-lg mb-4">
                  {feature.icon}
                </div>
                <h5 className="text-xl font-semibold text-white text-center">{feature.title}</h5>
                <p className="text-white text-center">{feature.text}</p>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};
export default Dashboard;