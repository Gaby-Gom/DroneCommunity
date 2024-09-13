import AcodeonMenu from "../components/AcodeonMenu.jsx";
import { ContactUs } from "../components/ContactUs.jsx";
import Dashboard from "../components/Dashboard.jsx";

import Slider from "../components/Slider.jsx";
import WhatsApp from "../components/WhatApp.jsx";
import ModalHome from "../components/ModalHome.jsx";
import { useState, useEffect } from 'react';



export default function Home(){
    const [modalOpen, setModalOpen] = useState(true);

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    setModalOpen(true);
  }, []);
    

    return(
        <>
     
      <Slider/>
            <Dashboard/>
       <WhatsApp/>
      
       <AcodeonMenu/> 
        <ContactUs/>   
     <ModalHome open={modalOpen} onClose={handleCloseModal} />
    
        </>
         
    )
}
