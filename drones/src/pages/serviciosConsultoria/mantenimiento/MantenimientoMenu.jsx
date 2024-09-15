import { FaHome } from "react-icons/fa";
import { Link } from 'react-router-dom';

const MantenimientoMenu = () => {
           const features = [
  {
    title: "Cursos de Mantenimiento",
    href: "#",
  },
  {
    title: "Plan de Mantenimiento para Flotas o Empresas",
    href: "/planMantenimiento",
  },
   {
    title: "Mantenimiento Preventivo",
    href: "#",
  },
 
 

];
  return (
   <div className="bg-white w-full h-full flex flex-col items-center overflow-auto p-4 lg:p-10">
  
  <div className="bg-sky-200 w-full justify-center items-start p-4 lg:pl-10 border rounded-xl">
    <h1 className="font-bold uppercase mx-2 p-2 text-2xl md:text-3xl lg:text-4xl text-left">
      Servicios y Consultorías
    </h1>
    <h2 className="font-bold text-xl md:text-2xl lg:text-3xl mx-2 p-2 text-blue-600 text-left">
    Mantenimiento y Reparación
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
      <div className="grid grid-cols-1 lg:grid-cols-3  gap-6 justify-items-center lg:px-56 mt-10 lg:mt-18">
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
  )
}

export default MantenimientoMenu