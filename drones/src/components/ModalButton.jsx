import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ModalButtonComp from "./../components/ModalButtonComp";

export default function ModalButton() {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate();

  const handleAccept = () => {
    navigate("/"); // Redirige a la página Home
  };

  return (
    <main className="">
      <button className="inline-flex text-white bg-colorBorderHover justify-center items-center text-center w-full lg:w-auto h-12 p-5 mt-10 tracking-tight text-xl hover:bg-orange-600 border border-colorBorderHover rounded-lg transition duration-200" onClick={() => setOpen(true)}>
     Enviar
      </button>

      <ModalButtonComp open={open} onClose={() => setOpen(false)}>
        <div className="text-center w-56">
          {/* <Trash size={56} className="mx-auto text-red-500" /> */}
          <div className="mx-auto my-4 w-58">
            <h3 className="text-lg font-black text-colorFontPrimary">SOLICITUD ENVIADA</h3>
            <p className="text-sm lg:text-lg text-gray-500">
              En el transcurso de 72 hs hábiles nos pondremos en contacto
            </p>
          </div>
          <div className="flex gap-4">
            <button onClick={handleAccept} className="flex gap-2 items-center justify-center py-2 px-4 font-semibold shadow-md rounded-lg text-white bg-green-500 shadow-green-400/40 w-full">Aceptar</button>
         
          </div>
        </div>
      </ModalButtonComp>
    </main>
  )
}