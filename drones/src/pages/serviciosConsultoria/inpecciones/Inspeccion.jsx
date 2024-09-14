import { Link } from 'react-router-dom';
import { FaHome } from "react-icons/fa";

const Inspeccion = () => {
        const features = [
  {
    title: "WTG Eólicas",
    href: "/eolicas",
  },
  {
    title: "Oil & Gas",
    href: "/oilandgas",
  },
  {
    title: "Antenas",
    href: "/antenas",
  },
  {
    title: "Rurales",
    href: "/rurales",
  },
  {
   title:"Paneles Solares",
   href: "#",
  },
  {
   title: "Edilicias",
   href: "#",
  },
  {
   title: "Tendido Eléctrico",
    href: "#",
  },
  {
   title: "Otros",
   href: "#",
  },

];
  return ( 
     <div className="bg-[#E3F1FC] w-full flex justify-center"> 
        <div className="relative  mt-0 p-10  pt-5 pb-10 w-full lg:w-[1400px] mx-auto">
      <div className="text-center">
        <h2 className="text-3xl text-colorFontPrimary font-semibold sm:text-5xl lg:text-6xl  tracking-wide">
         Inspecciones
       
        </h2>
      </div>
        <div className="flex justify-center items-center mx-auto mt-8">
       <Link to='/servicios'>
        <span className="flex items-center text-sm font-bold text-colorBorderHover lg:text-4xl">
       Menú 
            <FaHome className='lg:text-4xl text-sm ml-2' />
        </span>
        </Link>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-4 gap-6 justify-items-center lg:px-56 mt-10 lg:mt-18">
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
   
  )
};

export default Inspeccion