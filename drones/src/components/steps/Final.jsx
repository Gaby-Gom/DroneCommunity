import { FaRegCheckCircle } from "react-icons/fa";

const Final = () => {
  return (
    <div className="container md:mt-10">
      <div className="flex flex-col items-center">
        <div className="text-green-400">
         <FaRegCheckCircle className="text-green-600 text-6xl " />
        </div>
        <div className="mt-1 font-semibold uppercase text-green-500">
          <h1 className="text-4xl xl:text-5xl text-colorBorderHover text-center sm:text-center font-bold xl:leading-[4.5rem] uppercase"> Bienvenidos a</h1>
       
        </div>
        <div className="text-lg font-semibold text-gray-500">
           {/* Bienvenidos  */}
           <img className="h-30 w-30  mr-2 " src="/logoModif.jpg" alt="Logo Drone Community" />
        </div>
        <a className="mt-10" href="/">
        <button className="h-10 px-5 text-white bg-orange-500 transition-colors duration-150 border border-gray-300 rounded-lg focus:shadow-outline hover:bg-green-500 hover:text-green-100">
          Cerrar
        </button>
        </a>
      </div>
    
    </div>
  )
}

export default Final
