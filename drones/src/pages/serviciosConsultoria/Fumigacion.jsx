import { Link } from "react-router-dom";
import UploadFile from "../../components/Servicios y Consultoria/UploadFile";
import ModalButton from "../../components/ModalButton";

const Fumigacion = () => {
  return (
   
<div className="bg-white w-full h-full flex flex-col items-center overflow-auto p-4 lg:p-10">
  
  <div className="bg-sky-200 w-full justify-center items-start p-4 lg:pl-10 border rounded-xl">
    <h1 className="font-bold uppercase mx-2 p-2 text-2xl md:text-3xl lg:text-4xl text-left">
      Servicios y Consultorías
    </h1>
    <h2 className="font-bold text-xl md:text-2xl lg:text-3xl mx-2 p-2 text-blue-600 text-left">
   Fumigación
    </h2>
  </div>     
  
  <div className="mt-2 w-full flex flex-col items-center">
    <div className="flex flex-wrap justify-center items-center w-full">
      
      {/* Contenedor para alinear SevSolicitados, Gsd y UploadFile en una línea */}
      <div className="flex flex-col lg:flex-row justify-center items-center w-full lg:mr-5">
        <h6 className="m-5 font-bold h-6 mt-3 text-colorFontPrimary text-xs leading-8 uppercase">
          Adjuntar pdf descriptivo
        </h6>
        <UploadFile />
      </div>

      {/* Superficie en su propia línea */}
      <div className="flex flex-col justify-center items-center w-full">
        <h6 className="m-5 font-bold h-6 mt-3 text-colorFontPrimary text-xs leading-8 uppercase text-center lg:text-left">
          Detalle condiciones particulares del servicio solicitado
        </h6>
        <div className="bg-sky-50 p-1 border border-gray-200 rounded w-full lg:w-[800px]">
          <textarea
            placeholder=""
            maxLength="500"
            rows="4"
            className="border-none p-2 rounded-lg text-black focus:ring-2 focus:ring-sky-500 focus:outline-none bg-sky-50 w-full placeholder-sky-50"
          />
        </div>
        <p className="m-5 font-bold h-6 mt-3 text-colorFontPrimary text-xs leading-8 uppercase text-center lg:text-left">
          En el periodo de 72 hs hábiles recibirá el presupuesto solicitado
        </p>
      </div>
    </div>
  </div>
  
  <div className="mb-5 w-full lg:w-auto">
  {/*   <Link to="/"
      className="inline-flex text-white bg-colorBorderHover justify-center items-center text-center w-full lg:w-auto h-12 p-5 mt-10 tracking-tight text-xl hover:bg-orange-600 border border-colorBorderHover rounded-lg transition duration-200"
    >
      Enviar
    </Link> */}
    <ModalButton/>
  </div>
  
</div>

  )
}

export default Fumigacion