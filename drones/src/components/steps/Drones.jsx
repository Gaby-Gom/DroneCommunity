import {useContext, useState} from 'react';
import { StepperContext } from '../../contexts/Context';

export default function Drones () {
const [showOtrosDrones, setShowOtrosDrones] = useState(false);
  const [showOtrosSensores, setShowOtrosSensores] = useState(false);

  const handleDronesChange = (event) => {
    if (event.target.name === 'otros') {
      setShowOtrosDrones(event.target.checked);
    }
    handleCheckboxChange(event); // Mantener el comportamiento original
  };

  const handleSensoresChange = (event) => {
    if (event.target.name === 'otrosSensores') {
      setShowOtrosSensores(event.target.checked);
    }
    handleCheckboxChange(event); // Mantener el comportamiento original
  };

    const {userData, setUserData} =useContext(StepperContext);
    const handleChange =(e)=>{
        const {name, value}=e.target;
        setUserData({...userData, [name]: value});
    };
  return (
    <div className="flex flex-col items-center ">
      
  <div className="w-full mx-2 flex-2 flex justify-center">
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-16 items-start justify-items-center">
      
      {/* Drones */}
      <div className="flex flex-col items-center lg:items-start">
        <div className="text-center  mb-4">
          <h2 className="text-lg font-bold text-colorFontSecondary uppercase">Drones</h2>
        </div>
        <div className="flex flex-col items-start">
          <div className="flex items-center mb-2">
            <input
              name="djli"
              className="shadow cursor-pointer border rounded"
              onChange={handleChange} value={userData['djli'] || ''}  id="djli"
              type="checkbox"
            />
            <label className="block text-colorFontSecondary px-2 text-sm font-bold" htmlFor="djli">
              DJLI
            </label>
          </div>
         <div className="flex items-center mb-2">
                <input
                  name="autel"
                  className="shadow cursor-pointer border rounded"
                  type="checkbox"
                />
                <label className="block text-colorFontSecondary px-2 text-sm font-bold" htmlFor="autel">
                  AUTEL
                </label>
              </div>
              <div className="flex items-center mb-2">
                <input
                  name="gopro"
                  className="shadow cursor-pointer border rounded"
                  type="checkbox"
                />
                <label className="block text-colorFontSecondary px-2 text-sm font-bold" htmlFor="gopro">
                  GOPRO
                </label>
              </div>
              <div className="flex items-center mb-2">
                <input
                  name="parrot"
                  className="shadow cursor-pointer border rounded"
                  type="checkbox"
                />
                <label className="block text-colorFontSecondary px-2 text-sm font-bold" htmlFor="parrot">
                  PARROT
                </label>
              </div>
              <div className="flex items-center mb-2">
                <input
                  name="flyability"
                  className="shadow cursor-pointer border rounded"
                  type="checkbox"
                />
                <label className="block text-colorFontSecondary px-2 text-sm font-bold" htmlFor="flyability">
                  FLYABILITY
                </label>
              </div>
              <div className="flex items-center mb-2">
                <input
                  name="alti"
                  className="shadow cursor-pointer border rounded"
                  type="checkbox"
                />
                <label className="block text-colorFontSecondary px-2 text-sm font-bold" htmlFor="alti">
                  ALTI
                </label>
              </div>
              <div className="flex items-center mb-2">
                <input
                  name="ebee"
                  className="shadow cursor-pointer border rounded"
                  type="checkbox"
                />
                <label className="block text-colorFontSecondary px-2 text-sm font-bold" htmlFor="ebee">
                  EBEE
                </label>
              </div>
              <div className="flex items-center mb-2">
                <input
                  name="otros"
                  className="shadow cursor-pointer border rounded"
                  type="checkbox"
                  onChange={handleDronesChange}
                />
                <label className="block text-colorFontSecondary px-2 text-sm font-bold" htmlFor="otros">
                  OTROS
                </label>
              </div>
              {showOtrosDrones && (
                <div className="flex items-center mb-2">
                  <label className="block text-colorFontSecondary px-2 text-sm font-bold" htmlFor="otrosDrones">
                    Cuál?
                  </label>
                  <input
                    name="otrosDrones"
                    className="shadow text-colorFontPrimary border rounded"
                    type="text"
                  />
                </div>
              )}
            </div>
          </div>

          {/* Sensores */}
          <div className="flex flex-col items-center lg:items-start">
            <div className="text-center mb-4">
              <h2 className="text-lg text-colorFontSecondary uppercase font-bold">Sensores</h2>
            </div>
            <div className="flex flex-col items-start">
              <div className="flex items-center mb-2">
                <input
                  name="sensorFlyability"
                  className="shadow cursor-pointer border rounded"
                  type="checkbox"
                />
                <label className="block text-colorFontSecondary px-2 text-sm font-bold" htmlFor="sensorFlyability">
                  FLYABILITY
                </label>
              </div>
              <div className="flex items-center mb-2">
                <input
                  name="sensorLidiar"
                  className="shadow cursor-pointer border rounded"
                  type="checkbox"
                />
                <label className="block text-colorFontSecondary px-2 text-sm font-bold" htmlFor="sensorLidiar">
                  LIDIAR
                </label>
              </div>
              <div className="flex items-center mb-2">
                <input
                  name="sensorMulti"
                  className="shadow cursor-pointer border rounded"
                  type="checkbox"
                />
                <label className="block text-colorFontSecondary px-2 text-sm font-bold" htmlFor="sensorMulti">
                  MULTIESPECTRAL
                </label>
              </div>
              <div className="flex items-center mb-2">
                <input
                  name="sensorNdvi"
                  className="shadow cursor-pointer border rounded"
                  type="checkbox"
                />
                <label className="block text-colorFontSecondary px-2 text-sm font-bold" htmlFor="sensorNdvi">
                  NDVI
                </label>
              </div>
              <div className="flex items-center mb-2">
                <input
                  name="sensorRgb"
                  className="shadow cursor-pointer border rounded"
                  type="checkbox"
                />
                <label className="block text-colorFontSecondary px-2 text-sm font-bold" htmlFor="sensorRgb">
                  CAMARA RGB
                </label>
              </div>
              <div className="flex items-center mb-2">
                <input
                  name="sensorFumigacion"
                  className="shadow cursor-pointer border rounded"
                  type="checkbox"
                />
                <label className="block text-colorFontSecondary px-2 text-sm font-bold" htmlFor="sensorFumigacion">
                  FUMIGACION
                </label>
              </div>
              <div className="flex items-center mb-2">
                <input
                  name="otrosSensores"
                  className="shadow cursor-pointer border rounded"
                  type="checkbox"
                  onChange={handleSensoresChange}
                />
                <label className="block text-colorFontSecondary px-2 text-sm font-bold" htmlFor="otrosSensores">
                  OTROS
                </label>
              </div>
              {showOtrosSensores && (
                <div className="flex items-center mb-2">
                  <label className="block text-colorFontSecondary px-2 text-sm font-bold" htmlFor="otrosSensoresModelo">
                    Cuál?
                  </label>
                  <input
                    name="otrosSensoresModelo"
                    className="shadow text-colorFontPrimary border rounded"
                    type="text"
                  />
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
