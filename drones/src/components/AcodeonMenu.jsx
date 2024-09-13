import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";
import { FaHandPointRight } from "react-icons/fa";



const AcodeonMenu = () => {
    const frequentlyAskQuestions = [
         {
    title: "En Argentina los drones se dividen en multirotores y ala fija según su peso.",
       description:"Clase ¨A¨ hasta 500 g.",
       descriptionOne: "Clase ¨B¨ de 500 g hasta 5 kg.",
       descriptionTwo: "Clase ¨C¨ de 5 kg a 25 kg.",
       descriptionTres:"Clase ¨D¨ de 25 kg a 150 kg.",
       descriptionFour: "Clase ¨E¨ más de 150 kg."
  },
  
  {
    title: "Si uso mi dron de forma recreativa. ",
    description:"Si es clase A no se debe realizar ningún trámite ni autorización.",
    descriptionOne: "Si es clase B se debén matricular e informar que se utilizará de forma recreativa.",
    descriptionTwo:"Si es superior a Clase B se debén realizar las habilitaciones y autorizaciones como si se tratara de un VANT para uso comercial.",
    descriptionTres:""
  },
  {
    title: "Si uso mi dron de forma comercial, se debén realizar los siguientes trámites independientemente de la Clase ",
    description:"Matricular mi drone.",
       descriptionOne: "Obtener la licencia de piloto en una CIAC (Centro de Instrucción Aeronáutico Civil habilitado por ANAC) acorde a la categoría de VANT que quiero operar.",
       descriptionTwo: "Asegurar mi drone.",
       descriptionTres:"Redactar mi MOE (Manual de Operación del Explotador).",
       descriptionFour: "Obtenidos los puntos anteriores se debe solicitar el CEVANT (Certificado de Explotador de Vehículos Aéreos NO Tripulados ante ANAC)."
  },

];
const [activeId, setActiveId] = useState(null);
   const togglerFunction = (index) => {
    if (activeId === index) {
      setActiveId(null);
    } else {
      setActiveId(index);
    }
  }; 


  return (
      <div className="mb-0">
    <h2 className="text-3xl sm:text-5xl lg:text-5xl font-semibold text-center my-12 pb-2 pt-10 tracking-wide text-[#2E4288] mb-2 ml-2">
        Cómo operar un dron en Argentina
    </h2>
    <div className="flex flex-wrap mt-10">
        <div className="w-full py-5 flex justify-center">
            <div className="w-[600px] rounded-lg overflow-hidden">
                {frequentlyAskQuestions.map((item, i) => (
                    <div key={i} className="border-b last:border-b-0 mb-2 border-[#E3F1FC] cursor-pointer">
                        <div
                            className={`px-5 py-4 flex items-center text-white justify-between border rounded-lg bg-gradient-to-r from-orange-500 to-orange-400 ${activeId === i ? "bg-gray-100" : ""}`}
                            onClick={() => togglerFunction(i)}
                        >
                            <p className="flex-1">{item.title}</p>
                            <span>
                                {activeId === i ? (
                                    <FaAngleUp />
                                ) : (
                                    <FaAngleDown />
                                )}
                            </span>
                        </div>
                        {activeId === i && (
                            <div>
                                {item.description && (
                                    <div className="px-5 py-4 flex items-center justify-start border rounded-lg bg-colorFontSecondary mb-2">
                                        <div><FaHandPointRight className="mr-2 w-4 text-white" /></div>
                                        <p className="flex items-center text-white">
                                            {item.description}
                                        </p>
                                    </div>
                                )}
                                {item.descriptionOne && (
                                    <div className="px-5 py-4 flex items-center justify-start border rounded-lg bg-colorFontSecondary mb-2">
                                        <div><FaHandPointRight className="mr-2 w-4 text-white" /></div>
                                        <p className="flex items-center text-white">
                                            {item.descriptionOne}
                                        </p>
                                    </div>
                                )}
                                {item.descriptionTwo && (
                                    <div className="px-5 py-4 flex items-center justify-start border rounded-lg bg-colorFontSecondary mb-2">
                                        <div><FaHandPointRight className="mr-2 w-4 text-white" /></div>
                                        <p className="flex items-center text-white">
                                            {item.descriptionTwo}
                                        </p>
                                    </div>
                                )}
                                {item.descriptionTres && (
                                    <div className="px-5 py-4 flex items-center justify-start border rounded-lg bg-colorFontSecondary mb-2">
                                        <div><FaHandPointRight className="mr-2 w-4 text-white" /></div>
                                        <p className="flex items-center text-white">
                                            {item.descriptionTres}
                                        </p>
                                    </div>
                                )}
                                {item.descriptionFour && (
                                    <div className="px-5 py-4 flex items-center justify-start border rounded-lg bg-colorFontSecondary mb-0">
                                        <div><FaHandPointRight className="mr-2 w-4 text-white" /></div>
                                        <p className="flex items-center text-white">
                                            {item.descriptionFour}
                                        </p>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    </div>
</div>

    );
}

export default AcodeonMenu;