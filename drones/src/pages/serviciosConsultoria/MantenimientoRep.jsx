import { FaHome } from "react-icons/fa";
import { Link } from 'react-router-dom';

const mantenimientoRep = () => {
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
  
</div>
  )
}

export default mantenimientoRep