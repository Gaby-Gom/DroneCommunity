import { useContext, useState } from 'react';
import { StepperContext } from '../../contexts/Context';
import Switch from 'react-switch'; 
import {
  CitySelect,
  CountrySelect,
  StateSelect,
} from "react-country-state-city";
 import "react-country-state-city/dist/react-country-state-city.css";

export default function Detail() {
  const [checked, setChecked] = useState(true);

  const handleChanger = (nextChecked) => {
    setChecked(nextChecked);
  };

  const { userData, setUserData } = useContext(StepperContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

 const [countryid, setCountryid] = useState(0);
  const [stateid, setstateid] = useState(0);


  return (
    <div className="flex flex-col items-center">
    
      <div className="w-full mx-2 flex-2 pl-5 max-w-xl">
        <div className="flex gap-2 place-content-center items-center p-4">
          
          <label className="flex items-center gap-2">
            <span className="text-colorFontSecondary font-bold">
              Soy:
                {/* {checked ? 'Persona' : 'Empresa'} */}
            </span>
            <Switch
              onChange={handleChanger}
              checked={checked}
              checkedIcon={
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100%',
                    fontSize: 12,
                    fontWeight: 'bold',
                    color: 'white',
                    paddingRight: 2
                  }}
                >
                  Persona
                </div>
              }
              uncheckedIcon={
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100%',
                    fontSize: 13,
                    fontWeight: 'bold',
                    color: 'white',
                    paddingRight: 2
                  }}
                >
                  Empresa
                </div>
              }
              onColor="#008000"
              offColor="#1F3C79"
              handleDiameter={28}
              height={34}
              width={100}
            />
          </label>
        </div>
          <div className="flex justify-center items-center mb-1">
            <input
              name="solicitarServicio"
              className="shadow cursor-pointer border rounded"
              onChange={handleChange} value={userData['solicitarServicio'] || ''}  id="solicitarServicio"
              type="checkbox"
            />
            
            <label className="block text-colorFontSecondary px-2 text-sm font-bold" htmlFor="solicitarServicio">
              Solicitar servicios
            </label>
             <input
              name="ofrecerServicio"
              className="shadow cursor-pointer border rounded"
              onChange={handleChange} value={userData['ofrecerServicio'] || ''}  id="ofrecerServicio"
              type="checkbox"
            />
            
            <label className="block text-colorFontSecondary px-2 text-sm font-bold" htmlFor="ofrecerServicio">
             Ofrecer servicios
            </label>
          </div>

        {checked ? (
          <div className="persona grid grid-cols-1 md:grid-cols-2 gap-2">
            <div>
              <div className="font-bold h-6 mt-3 text-colorFontSecondary text-xs leading-8 uppercase">Nombre <span className="text-xl text-red-600">*</span></div>
              <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
                <input
                  onChange={handleChange}
                  value={userData['nombre'] || ''}
                  name="nombre"
                  type="text"
                  className="p-1 px-2 appearance-none outline-none w-full text-colorFontPrimary"
                  required
                  minLength="5"
                  maxLength="50"
                />
              </div>
            </div>
            <div>
              <div className="font-bold h-6 mt-3 text-colorFontSecondary text-xs leading-8 uppercase">Apellido
                <span className="text-xl text-red-600">*</span>
              </div>
              <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
                <input
                  onChange={handleChange}
                  value={userData['apellido'] || ''}
                  name="apellido"
                  type="text"
                  className="p-1 px-2 appearance-none outline-none w-full text-colorFontPrimary"
                />
              </div>
            </div>
            <div>
              <div className="font-bold h-6 mt-3 text-colorFontSecondary text-xs leading-8 uppercase">Dni
                <span className="text-xl text-red-600">*</span>
              </div>
              <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
                <input
                  onChange={handleChange}
                  value={userData['dni'] || ''}
                  name="dni"
                  type="number"
                  className="p-1 px-2 appearance-none outline-none w-full text-colorFontPrimary"
                  required
                  minLength="6"
                  maxLength="8"                                  />
              </div>
            </div>
            <div>
              <div className="font-bold h-6 mt-3 text-colorFontSecondary text-xs leading-8 uppercase">Teléfono<span className="text-xl text-red-600">*</span></div>
              <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
                <input
                  onChange={handleChange}
                  value={userData['telefono'] || ''}
                  name="telefono"
                  type="number"
                  className="p-1 px-2 appearance-none outline-none w-full text-colorFontPrimary"
                  required
                  minLength="8"
                  maxLength="15"
                                  />
              </div>
            </div>
         
            <div>
              <div className="font-bold h-6 mt-3 text-colorFontSecondary text-xs leading-8 uppercase">País
                <span className="text-xl text-red-600">*</span>
              </div>
              {/* <div className="bg-white my-2 p-1 flex border border-gray-200 rounded"> */}
                 <CountrySelect
          onChange={(e) => {
            setCountryid(e.id);
          }}
          placeHolder="Seleccionar País"
        />
              {/*   <select
                  onChange={handleChange}
                  value={userData['country'] || ''}
                  id="country"
                  name="country"
                  className="p-1 px-2 appearance-none outline-none w-full text-colorFontPrimary"
                >
                  <option value="Argentina">Argentina</option>
                  <option value="Uruguay">Uruguay</option>
                </select> */}
              {/* </div> */}
            </div>
            <div>
              <div className="font-bold h-6 mt-3 text-colorFontSecondary text-xs leading-8 uppercase">Provincia
                <span className="text-xl text-red-600">*</span>
              </div>
              {/* <div className="bg-white my-2 p-1 flex border border-gray-200 rounded"> */}
                 <StateSelect
          countryid={countryid}
          onChange={(e) => {
            setstateid(e.id);
          }}
          

          placeHolder="Seleccionar Provincía"
        />
                {/* <select
                  onChange={handleChange}
                  value={userData['city'] || ''}
                  id="city"
                  name="city"
                  className="p-1 px-2 appearance-none outline-none w-full text-colorFontPrimary"
                >
                  <option value="Salta">Salta</option>
                  <option value="Chubut">Chubut</option>
                </select> */}
              {/* </div> */}
            </div>
            <div>
              <div className="font-bold h-6 mt-3 text-colorFontSecondary text-xs leading-8 uppercase">Ciudad
                <span className="text-xl text-red-600">*</span>
              </div>
            <CitySelect
          countryid={countryid}
          stateid={stateid}
          placeHolder="Seleccionar Ciudad"
          
        />
        </div>
               <div>
              <div className="font-bold h-6 mt-3 text-colorFontSecondary text-xs leading-8 uppercase">Dirección <span className="text-xl text-red-600">*</span></div>
              <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
                <input
                  onChange={handleChange}
                  value={userData['direccion'] || ''}
                  name="direccion"
                  type="text"
                  className="p-1 px-2 appearance-none outline-none w-full text-colorFontPrimary"
                  required
                  minLength="5"
                  maxLength="50"
                                 />
              </div>
            </div>
            <div>
              <div className="font-bold h-6 mt-3 text-colorFontSecondary text-xs leading-8 uppercase">Código postal</div>
              <div className="bg-white my-2 w-24 p-1 flex border border-gray-200 rounded">
                <input
                  onChange={handleChange}
                  value={userData['cp'] || ''}
                  name="cp"
                  type="text"
                  className="p-1 px-2 appearance-none outline-none w-full text-colorFontPrimary"
                  
                />
              </div>
            </div>
          </div>
          
        ) : (
          <div className="empresa grid grid-cols-1 md:grid-cols-2 gap-3">
            <div>
              <div className="font-bold h-6 mt-3 text-colorFontSecondary text-xs leading-8 uppercase">Razón Social
                <span className="text-xl text-red-600">*</span>
              </div>
              <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
                <input
                  onChange={handleChange}
                  value={userData['razonSocial'] || ''}
                  name="razonSocial"
                  type="text"
                  required
                  className="p-1 px-2 appearance-none outline-none w-full text-colorFontPrimary"
                />
              </div>
            </div>
            <div>
              <div className="font-bold h-6 mt-3 text-colorFontSecondary text-xs leading-8 uppercase">Nombre de Fantasía</div>
              <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
                <input
                  onChange={handleChange}
                  value={userData['nombreFantasia'] || ''}
                  name="nombreFantasia"
                  type="text"
                  className="p-1 px-2 appearance-none outline-none w-full text-colorFontPrimary"
                />
              </div>
            </div>
            <div>
              <div className="font-bold h-6 mt-3 text-colorFontSecondary text-xs leading-8 uppercase">Cuit-Cuil<span className="text-xl text-red-600">*</span></div>
              <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
                <input
                  onChange={handleChange}
                  value={userData['cuit'] || ''}
                  name="cuit"
                  type="number"
                  className="p-1 px-2 appearance-none outline-none w-full text-colorFontPrimary"
                  required
                  minLength="3"
                  maxLength="10"                                  />
              </div>
            </div>
            <div>
              <div className="font-bold h-6 mt-3 text-colorFontSecondary text-xs leading-8 uppercase">Telefono <span className="text-xl text-red-600">*</span></div>
              <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
                <input
                  onChange={handleChange}
                  value={userData['telefono'] || ''}
                  name="telefono"
                  type="number"
                  className="p-1 px-2 appearance-none outline-none w-full text-colorFontPrimary"
                />
              </div>
            </div>
                  <div>
              <div className="font-bold h-6 mt-3 text-colorFontSecondary text-xs leading-8 uppercase">Condición Fiscal<span className="text-xl text-red-600">*</span></div>
              <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
                  <select
            id="condicionFiscal"
            name="condicionFiscal"
            className="p-1 px-2 outline-none w-full text-colorFontPrimary cursor-pointer">
            <option className="text-black cursor-pointer  text-center" value="RI">Responsable Inscripto</option>
            <option  className="text-black cursor-pointer text-center" value="Mono">Monotributo</option>
            <option  className="text-black cursor-pointer text-center" value="Ex">Excento</option>
          </select>
              </div>
            </div>
                             <div>
              <div className="font-bold h-6 mt-3 text-colorFontSecondary text-xs leading-8 uppercase">País<span className="text-xl text-red-600">*</span></div>
              {/* <div className="bg-white my-2 p-1 flex border border-gray-200 rounded"> */}
                 <CountrySelect
          onChange={(e) => {
            setCountryid(e.id);
          }}
          placeHolder="Seleccionar País"
        />
            </div>
             <div>
              <div className="font-bold h-6 mt-3 text-colorFontSecondary text-xs leading-8 uppercase">Provincia<span className="text-xl text-red-600">*</span></div>
              {/* <div className="bg-white my-2 p-1 flex border border-gray-200 rounded"> */}
                 <StateSelect
          countryid={countryid}
          onChange={(e) => {
            setstateid(e.id);
          }}
          placeHolder="Seleccionar Provincía"
        />
                   </div>
                    <div>
              <div className="font-bold h-6 mt-3 text-colorFontSecondary text-xs leading-8 uppercase">Ciudad<span className="text-xl text-red-600">*</span></div>
            <CitySelect
          countryid={countryid}
          stateid={stateid}
          placeHolder="Seleccionar Ciudad"
          
        />
        </div>
             <div>
              <div className="font-bold h-6 mt-3 text-colorFontSecondary text-xs leading-8 uppercase">Dirección<span className="text-xl text-red-600">*</span></div>
              <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
                <input
                  onChange={handleChange}
                  value={userData['direccion'] || ''}
                  name="direccion"
                  type="text"
                  className="p-1 px-2 appearance-none outline-none w-full text-colorFontPrimary"
                  required
                />
              </div>
            </div>
                 <div>
              <div className="font-bold h-6 mt-3 text-colorFontSecondary text-xs leading-8 uppercase">Código postal</div>
              <div className="bg-white my-2 w-24 p-1 flex border border-gray-200 rounded">
                <input
                  onChange={handleChange}
                  value={userData['cp'] || ''}
                  name="cp"
                  type="text"
                  className="p-1 px-2 appearance-none outline-none w-full text-colorFontPrimary"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
