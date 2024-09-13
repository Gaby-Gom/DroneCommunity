import React, { useState, useContext } from 'react';
import { StepperContext } from '../../contexts/Context';

export default function Services() {
  const [showInspections, setShowInspections] = useState(false);

  const handleCheckboxChange = (event) => {
    if (event.target.name === 'inspecciones') {
      setShowInspections(event.target.checked);
    }
  };

  const { userData, setUserData } = useContext(StepperContext);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-5 p-6 ">
    
      <div className="grid lg:grid-cols-3 md:grid-cols-2 md:ml-0 gap-8 ml-10 "> {/* Use flex-wrap for multi-line wrapping */}
        {[
         { name: 'consultoria', label: 'Consultoría' },
        { name: 'busqueda', label: 'Búsqueda y rescate', onChange: handleCheckboxChange },
        { name: 'fotogrametria', label: 'Fumigación', onChange: handleCheckboxChange },
        { name: 'seguridad', label: 'Seguridad', onChange: handleCheckboxChange },
        { name: 'mantenimiento', label: 'Mantenimiento Reparación', onChange: handleCheckboxChange },
        { name: 'software', label: 'Software IA', onChange: handleCheckboxChange },
        { name: 'filmaciones', label: 'Filmaciones', onChange: handleCheckboxChange },
        { name: 'fotogrametria', label: 'Fotogrametría', onChange: handleCheckboxChange },
        { name: 'logistica', label: 'Logística', onChange: handleCheckboxChange },
        { name: 'inspecciones', label: 'Inspecciones', onChange: handleCheckboxChange },
        ].map((item) => (
          <div key={item.name} className="service-item flex items-center space-x-2">
            <input
              name={item.name}
              className="shadow cursor-pointer border rounded"
              type="checkbox"
              onChange={item.onChange || handleChange} // Handle both checkbox and text input changes
            />
            <label className="text-colorFontSecondary text-sm font-bold" htmlFor={item.name}>
              {item.label}
            </label>
          </div>
        ))}
      </div>

      <div 
        className={`bg-gray-200 grid grid-cols-1 md:grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 p-6 shadow-xl rounded-2xl ${
          showInspections ? '' : 'hidden'
        }`}
      >
     {[
        { name: 'wtg', label: 'WTG eólicas' },
        { name: 'oilgas', label: 'Oil & Gas' },
        { name: 'rurales', label: 'Rurales' },
        { name: 'antenas', label: 'Antenas' },
        { name: 'paneles', label: 'Paneles Solares' },
        { name: 'edilicias', label: 'Edilicias' },
        { name: 'tendido', label: 'Tendido Eléctrico' },
      ].map((item) => (
        <div key={item.name} className="flex flex-col items-start">
          <div className="flex items-center justify-start space-x-2">
            <input
              name={item.name}
              className="shadow cursor-pointer border rounded"
              type="checkbox"
            />
            <label
              className="text-colorFontSecondary text-sm font-bold"
              htmlFor={item.name}
            >
              {item.label}
            </label>
          </div>
        </div>
      ))}
       <div className="flex flex-col items-start">
        <div className="flex items-center justify-start space-x-2">
          <label
            className="text-colorFontSecondary text-sm font-bold"
            htmlFor="otrasInsp"
          >
            Otras
          </label>
          <input
            name="otrasInsp"
            className="shadow border text-colorFontPrimary border-colorFontSecondary rounded focus:border-none"
            type="text"
          />
        </div>
      </div>  
  </div>   
  </div>
)}