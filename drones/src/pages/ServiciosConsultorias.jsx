import { FaSearch } from 'react-icons/fa';
import { GiDeliveryDrone } from "react-icons/gi";
import { FaHandshake } from "react-icons/fa";
import { DiAndroid } from "react-icons/di";
import { Link } from 'react-router-dom';

import { LiaBookSolid } from "react-icons/lia";
import { HiBuildingLibrary } from "react-icons/hi2";
import { MdOutlineLocalLibrary } from "react-icons/md";
import { BsFiletypeAi } from "react-icons/bs";
import { FaHome } from "react-icons/fa";

const ServiciosConsultorias = () => {
      const features = [
  {
    icon: <HiBuildingLibrary className='h-14 w-14'/>,
    title: "Consultoría",
    text: "",
    href: "/consultoria",
  },
  {
    icon: <LiaBookSolid className='h-14 w-14'/>,
    title: "Fotogrametría",
    text: "",
    href: "/fotogrametria",
  },
  {
    icon: <GiDeliveryDrone className='h-14 w-14'/>,
    title: "Vigilancia y Seguridad",
    text: "",
    href: "/vigilancia",
  },
  {
    icon: <DiAndroid className='h-14 w-14'/>,
    title: "Mantenimiento y Reparación",
    text:"",
    href: "/mantenimiento",
  },
  {
    icon: <FaHandshake className='h-14 w-14'/>,
    title:"Fumigación",
    text:"",
    href: "/fumigacion",
  },
  {
    icon: <FaSearch className='h-14 w-14'/>,
    title: "Inspecciones",
     text: "",
 href: "#",
  },
  {
    icon: <MdOutlineLocalLibrary className='h-14 w-14'/>,
    title: "Filmación y Fotografía",
    text : "",
    href: "#",
  },
  {
    icon: <BsFiletypeAi className='h-14 w-14'/>,
    title: "Búsqueda y Rescate",
    text: "",
    href: "#",
  },
/*   {
    icon: <FaSearch className='h-14 w-14'/>,
    title: "IA",
     text: "",
 href: "#",
  }, */
  {
    icon: <FaSearch className='h-14 w-14'/>,
    title: "Logística",
     text: "",
 href: "#",
  },
  {
    icon: <FaSearch className='h-14 w-14'/>,
    title: "Detección de gases y particulas en el aire",
     text: "",
 href: "#",
  },
];
 
  return (
     <div className="bg-[#E3F1FC] w-full flex justify-center"> 
        <div className="relative  mt-0 p-10  pt-5 pb-10 w-full lg:w-[1400px] mx-auto">
      <div className="text-center">
        <h2 className="text-3xl text-colorFontPrimary font-semibold sm:text-5xl lg:text-6xl  tracking-wide">
          Servicios y Consultorías
       
        </h2>
      </div>
        <div className="flex justify-center items-center mx-auto mt-8">
       <Link to='/'>
        <span className="flex items-center text-sm font-bold text-colorBorderHover lg:text-4xl">
       Menú
            <FaHome className='lg:text-4xl text-sm ml-2' />
        </span>
        </Link>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-5 gap-6 justify-items-center lg:px-56 mt-10 lg:mt-18">
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
          if (index <5 ) {
            lgBgColorClass = index % 2 != 0 ? 'lg:bg-colorDashoard' : 'lg:bg-colorDashoardAlt';
          } else {
            lgBgColorClass = index % 2 === 0 ? 'lg:bg-colorDashoardAlt' : 'lg:bg-colorDashoard';
          }

          return (
            <a key={index} href={feature.href} className="skills-card w-full flex justify-center">
              <div
                className={`group relative flex flex-col justify-center items-center p-6 lg:h-40 h-[110px] w-[110px] lg:w-40 shadow-lg hover:shadow-colorBorderHover transition-shadow hover:shadow-md rounded-2xl cursor-pointer  hover:text-colorBorderHover    ${responsiveBgColorClass} ${mdBgColorClass} ${lgBgColorClass}`}
              >
           
                <h5 className="text-sm lg:text-xl font-semibold text-white group-hover:text-colorBorderHover text-center ease-in duration-500 ">{feature.title}</h5>
               
              </div>
            </a>
          );
        })}
      </div>
   
      
    </div>
    </div>
   
  );
};
export default ServiciosConsultorias;
