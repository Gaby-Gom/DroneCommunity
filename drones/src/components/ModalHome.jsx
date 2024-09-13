import { Link} from 'react-router-dom';
//import { useEffect, useState } from 'react';
import nft from '/logo.jpg';
/* 
const ModalHome = ({ open, onClose }) => {
  const [isFirstVisit, setIsFirstVisit] = useState(false);

  useEffect(() => {
    const hasVisited = localStorage.getItem('hasVisited');
    if (!hasVisited) {
      setIsFirstVisit(true);
      localStorage.setItem('hasVisited', 'true');
    }
  }, []); 

  if (!open || !isFirstVisit) return null;*/

  const ModalHome =  ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div onClick={onClose} className='overlay fixed top-0 bottom-0 right-0 left-0 flex  justify-center  items-center z-40 bg-gray-400 bg-opacity-75 '>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className='modalContainer  flex-col lg:flex-row md:flex-col pb-5 lg:pb-0 max-w-[600px] w-[100%] fixed lg:top-[40%] lg:left-[50%] md:top-[20%] md:left-[20%] lg:transform lg:translate-x-[-50%] lg:translate-y-[-50%] flex bg-white shadow-lg rounded-lg z-[1001]'
      >
        <img src={nft} alt="Logo Drone Community" className="w-[100%] lg:w-[280px] object-cover rounded-tl-lg rounded-bl-lg" />
           <div className="w-[100%]">
          <p className='closeBtn cursor-pointer font-bold' onClick={onClose}>
            X
          </p>
       <div className='content-modal flex flex-col justify-center text-center py-4 px-8 mt-10'>
            <p>Bienvenido a</p>
            <h1 className='text-orange-500 bold text-xl'>DRONE COMMUNITY</h1>
            
            <p>Te invitamos a vivir la experiencia</p>
          </div>
       <div className="flex flex-col  items-center gap-4">
            <Link to="/" className="justify-center items-center">
                    <button className="bg-buttonRegister flex items-center shadow-lg shadow-gray/50 px-7 rounded-lg tracking-wide py-3 text-ms text-white hover:scale-110 duration-300 uppercase"
                    onClick={onClose} >
            Ingresar
            </button>
              </Link>
           
          </div> 
        </div>
      </div>
    </div>
  );
};

export default ModalHome;