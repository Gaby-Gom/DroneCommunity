import { Link } from 'react-router-dom';
import { FaHandPointer } from "react-icons/fa";
function HeroSection() {
  return (
/*  <section className="bg-center bg-no-repeat bg-[url('/eolica1.png')] bg-gray-500 bg-blend-multiply bg-fixed bg-cover lg:flex ">
 <div className="p-20 pb-70 grid max-w-7xl mx-auto w-full justify-center items-center gap-4 px-2 sm:grid-cols-2 lg:grid-cols-2">
  <div className="content-start w-full cursor-pointer hover:scale-105 duration-200">
 
  </div>
  <div className="flex flex-col mt-40 items-center sm:items-start justify-center rounded-lg my-6 text-center sm:text-left">
    <h1 className="textShadow text-4xl mb-8 font-semibold tracking-tight leading-none text-white  md:text-4xl lg:text-5xl px-4 lg:px-0 ">
    DRONE COMMUNITY
    </h1>
    <p className="text-sky-100 mb-8 lg:text-left md:text-center sm:text-center lg:text-xl px-4 lg:px-0">
      Una comunidad donde encontrarás todo lo referido al fascinante mundo de los drones
    </p>
    <div className="flex flex-col sm:flex-row justify-center items-center sm:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
     
      <Link to="/sign-up" className="justify-center items-center">
      <button className="bg-gradient-to-r flex items-center   from-orange-500 to-orange-800 shadow-lg shadow-gray/50 px-7 rounded-lg tracking-wide py-3 text-ms text-white hover:scale-110 duration-300 uppercase">
        registrarse <FaHandPointer className='animate-bounce ml-4' />
      </button>
      </Link>
    </div>
  </div>
</div>
</section>
 */


<section className="bg-center bg-no-repeat bg-[url('/eolica1.png')] bg-gray-500 bg-blend-multiply bg-fixed bg-cover lg:flex lg:justify-end">
<div className="min-h-[90vh] grid grid-cols-1 xl:grid-cols-1">
  {/* Información */}
  {/* <div className="col-span-1 xl:col-span-3"></div> */}
  <div className="md:col-span-2 xl:col-span-2 flex items-center justify-end p-8 xl:p-16">
    <div className="flex flex-col gap-4 md:items-center md:justify-center">
      <h1 className="text-5xl xl:text-7xl text-white text-center sm:text-center font-bold xl:leading-[6.5rem] uppercase">
        drone community
      
      </h1>
     
       <p className="text-white mb-8 lg:text-right text-center sm:text-center lg:text-2xl text-xl px-4 lg:px-0">
      Una comunidad donde encontrarás todo lo referido al fascinante mundo de los drones
    </p>
   
      <div className="flex flex-col  items-center gap-4">
         <Link to="/sign-up" className="justify-center items-center">
          <button className="bg-buttonRegister flex items-center shadow-lg shadow-gray/50 px-7 rounded-lg tracking-wide py-3 text-ms text-white hover:scale-110 duration-300 uppercase">
            Registrarse <FaHandPointer className='animate-bounce ml-4 text-white' />
          </button>
        </Link>
      </div>
    </div>
  </div>
</div>
</section>

  );
}

export default HeroSection;