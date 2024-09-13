import { useState, useEffect } from "react"
import { Link } from 'react-router-dom';
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";

const sliderData=[
     {
        image:"/dron-florestal.jpg",
        heading:"drone community",
        desc: "Una comunidad donde encontrarás todo lo referido al fascinante mundo de los drones",
    },  
        {
        image:"/RapelMod.png",
        heading:"drone community",
        desc: "Una comunidad donde encontrarás todo lo referido al fascinante mundo de los drones",
    },
        {
        image:"/Cuenta-stock.png",
        heading:"drone community",
        desc: "Una comunidad donde encontrarás todo lo referido al fascinante mundo de los drones",
    },
   
       
]


const Slider = () => {
     const [currentSlide, setCurrentSlide]=useState(0);
     const slideLength=sliderData.length;

     const autoScroll = true;
     let slideInterval;
     let intervalTime =5000;

     const nextSlide=()=>{
        setCurrentSlide(currentSlide === slideLength -1 ? 0 : currentSlide +1);
     };

      const prevSlide=()=>{
        setCurrentSlide(currentSlide === 0 ? slideLength -1 : currentSlide -1);
      };
      function auto(){
        slideInterval = setInterval(nextSlide, intervalTime)
      }

     useEffect(()=>{
        setCurrentSlide(0)
     },[]);

     useEffect(()=>{
        if (autoScroll){
            auto();
        }
        return()=>clearInterval(slideInterval);

     },[currentSlide]);

  return (
   <div className="slider max-h-[600px] relative overflow-hidden">
  <MdKeyboardDoubleArrowRight className="arrow next" onClick={nextSlide}/>
  <MdOutlineKeyboardDoubleArrowLeft className="arrow prev" onClick={prevSlide} />

  {sliderData.map((slide, index) => {
    return (
      <div className={index === currentSlide ? "slide current" : "slide"} key={index}>
        {index === currentSlide && (
          <>
            <img src={slide.image} alt="Img-slide" className="w-full  object-cover" />
            <div className="content ">
              <h1 className="text-2xl md:text-5xl xl:text-7xl text-white text-center sm:text-center font-bold xl:leading-[4.5rem] uppercase">{slide.heading}</h1>
              <p className="text-white text-center sm:text-center lg:text-2xl md:text-xl text-sm px-4 lg:px-0">{slide.desc}</p>
              <hr />
              <div className="flex flex-col items-center gap-4">
                <Link to="/register" className="justify-center items-center">
                  <button className="bg-buttonRegister flex items-center shadow-lg shadow-gray/50 px-7 rounded-lg tracking-wide py-3 text-ms text-white hover:scale-110 duration-300 uppercase">Registrarse</button>
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    )
  })}
</div>

  )
}

export default Slider
