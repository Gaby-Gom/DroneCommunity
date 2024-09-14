import  { useState } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import { es } from 'date-fns/locale/es';
registerLocale ('es', es)
import "react-datepicker/dist/react-datepicker.css";
import {
  CitySelect,
  CountrySelect,
  StateSelect,
} from "react-country-state-city";
 import "react-country-state-city/dist/react-country-state-city.css";
import UploadFile from "../../../components/Servicios y Consultoria/UploadFile";
import ModalButton from "../../../components/ModalButton";

export const Rurales = () => {
     
 const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const [days, setDays] = useState(0);

  const handleStartDateChange = (date) => {
    setStartDate(date);

    // Si la fecha de fin es anterior a la de inicio, la reseteamos
    if (endDate && date > endDate) {
      setEndDate(null);
      setDays(0);
    }
  };

  

  const handleEndDateChange = (date) => {
    setEndDate(date);

    // Calcular la cantidad de días solicitados
    const diffTime = Math.abs(date - startDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
    setDays(diffDays);
  };

 const [countryid, setCountryid] = useState(0);
  const [stateid, setstateid] = useState(0);
  return (
<div className="bg-white w-full h-full flex flex-col items-center overflow-auto p-4 lg:p-10">
  
  <div className="bg-sky-200 w-full justify-center items-start p-4 lg:pl-10 border rounded-xl">
    <h1 className="font-bold uppercase mx-2 p-2 text-2xl md:text-3xl lg:text-4xl text-left">
      Inspecciones
    </h1>
    <h2 className="font-bold text-xl md:text-2xl lg:text-3xl mx-2 p-2 text-blue-600 text-left">
   Rurales
    </h2>
  </div>   
  
      <div className="lg:mt-2 w-full h-24 flex flex-col justify-center items-center mt-8">
        
         <div className="flex flex-col lg:flex-row justify-center items-center w-full lg:mt-0 mt-28">
           {/* <MenuResp selectedOption={selectedOption} setSelectedOption={setSelectedOption}/>  */}
        <p className="m-5 font-bold h-6 mt-3 text-colorFontPrimary text-xs leading-8 uppercase">Fecha inicio del servicio</p>
        <DatePicker
          selected={startDate}
          onChange={handleStartDateChange}
          locale="es"
          dateFormat="dd/MM/yyyy"
          minDate={new Date()} 
          className="border-none p-2 rounded-lg text-black focus:ring-2 focus:ring-sky-500 focus:outline-none bg-sky-100  font-bold text-center"
        />

        <p className="m-5 font-bold h-6 mt-3 text-colorFontPrimary text-xs leading-8 uppercase">Fecha fin del servicio</p>
        <DatePicker
          selected={endDate}
          onChange={handleEndDateChange}
          locale="es"
          dateFormat="dd/MM/yyyy"
          minDate={startDate} // No permitir fechas anteriores a la fecha de inicio
             className="border-none p-2 rounded-lg text-black focus:ring-2 focus:ring-sky-500 focus:outline-none bg-sky-100  font-bold text-center"
        />
            <div className=" flex  justify-center items-center"> 
        <p className="m-5 font-bold h-6 mt-3 text-colorFontPrimary text-xs leading-8 uppercase">Días solicitados</p>
        <input type="text" value={days} readOnly  className="border-none p-2 rounded-lg text-black focus:ring-2 focus:ring-sky-500 focus:outline-none bg-sky-100  font-bold  w-14 text-center" />
        </div>  
      </div>
</div>
        

  <div className="mt-36 lg:mt-2 w-full flex flex-col items-center">
    <div className="flex flex-wrap justify-center items-center w-full">
      <div className="flex m-5 justify-center items-center">
        <h6 className="m-5 font-bold h-6 mt-3 text-colorFontPrimary text-xs leading-8 uppercase">País</h6>
        <CountrySelect
          onChange={(e) => {
            setCountryid(e.id);
          }}
          placeHolder="Seleccionar País"
        />
      </div>

      <div className="flex m-5 justify-center items-center">
        <h6 className="m-5 font-bold h-6 mt-3 text-colorFontPrimary text-xs leading-8 uppercase">Provincia</h6>
        <StateSelect
          countryid={countryid}
          onChange={(e) => {
            setstateid(e.id);
          }}
          placeHolder="Seleccionar Provincía"
        />
      </div> 

       <div className="flex m-5 justify-center items-center">
        <h6 className="m-5 font-bold h-6 mt-3 text-colorFontPrimary text-xs leading-8 uppercase">Ciudad</h6>
        <CitySelect
          countryid={countryid}
          stateid={stateid}
          placeHolder="Seleccionar Ciudad"
          
        />
      </div>

      <div className="flex flex-col lg:flex-row justify-center items-center">
  <p className="m-5 font-bold h-6 mt-3 text-colorFontPrimary text-xs leading-8 uppercase">Dirección</p>
  <input 
    type="text" 
    className="border-none p-2 rounded-lg text-black focus:ring-2 focus:ring-sky-500 focus:outline-none bg-sky-100 w-80 text-left" 
  />
</div> 
    

    

      </div>
       <div className="flex flex-col lg:flex-row  justify-center items-center">
             <h6 className="m-5 font-bold h-6 mt-3 text-colorFontPrimary text-xs leading-8 uppercase">Adjuntar pdf descriptivo</h6>
          <UploadFile/> 
        </div> 

     <div className="flex flex-col  justify-center items-center w-full">
          <h6 className="m-5 font-bold h-6 mt-3 text-colorFontPrimary text-xs leading-8 uppercase">Detalle condiciones particulares del servicio solicitado</h6>
          <div className="bg-sky-50 p-1 border border-gray-200 rounded w-full lg:w-[800px] mt-5 lg:mt-0">
            <textarea
              placeholder=""
              maxLength="500"
              rows="4"
              className="border-none p-2 rounded-lg text-black focus:ring-2 focus:ring-sky-500 focus:outline-none bg-sky-50  w-full placeholder-sky-50 "
            />
          </div> 
          <p className="m-5 font-bold h-6 mt-3 text-colorFontPrimary text-xs leading-8 uppercase">En el periodo de 72 hs hábiles recibirá el presupuesto solicitado</p>
        </div>
      </div>
       <div className="h-full md:mb-10 ">
   
               <ModalButton/> 
              </div>
    </div>




  );
}

