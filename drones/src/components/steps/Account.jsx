import {useContext} from 'react';
import { StepperContext } from '../../contexts/Context';
import OAuth from "./../OAuth";

export default function Account () {
    const {userData, setUserData} =useContext(StepperContext);
    const handleChange =(e)=>{
        const {name, value}=e.target;
        setUserData({...userData, [name]: value});
    };
  return (
    <div className='flex flex-col  max-w-xl pr-5  lg:ml-5'>
     
      <div className='w-full mx-2 flex-2 '>
        <div className='font-bold h-6 mt-3 text-colorFontPrimary text-xs leading-8 uppercase'>
            {" "}
            Nombre
        </div>
        <div className='bg-white my-2 p-1 flex border border-gray-200 rounded'>
            <input
            onChange={handleChange}
            value={userData["username"] || " "}
            name='username'
            placeholder='Nombre'
            className='p-1 px-2 appearance-none outline-none w-full text-colorFontSecondary'/>
        </div>
        </div>
        <div className='w-full mx-2 flex-1'>
        <div className='font-bold h-6 mt-3 text-colorFontPrimary text-xs leading-8 uppercase'>
            {" "}
            Apellido
        </div>
        <div className='bg-white my-2 p-1 flex border border-gray-200 rounded'>
            <input
            onChange={handleChange}
            value={userData["lastname"] || " "}
            name='lastname'
            placeholder='Apellido'
            className='p-1 px-2 appearance-none outline-none w-full text-colorFontSecondary'/>
        </div>
        
      </div>
       <div className='w-full mx-2 flex-1'>
        <div className='font-bold h-6 mt-3 text-colorFontPrimary text-xs leading-8 uppercase'>
            {" "}
            Email
        </div>
        <div className='bg-white my-2 p-1 flex border border-gray-200 rounded'>
            <input
            onChange={handleChange}
            value={userData["email"] || " "}
            name='email'
            type="email"
            placeholder="drone@community.com"
            className='p-1 px-2 appearance-none outline-none w-full text-colorFontSecondary placeholder:text-colorFontSecondary'/>
        </div>
        
      </div>
       <div className='w-full mx-2 flex-1'>
        <div className='font-bold h-6 mt-3 text-colorFontPrimary text-xs leading-8 uppercase'>
            {" "}
            Télefono
        </div>
        <div className='bg-white my-2 p-1 flex border border-gray-200 rounded'>
            <input
            onChange={handleChange}
            value={userData["phone"] || " "}
            name='phone'
            placeholder='Teléfono'
            className='p-1 px-2 appearance-none outline-none w-full text-colorFontSecondary'/>
        </div>
        <div className=' flex justify-center items-center'>
 <OAuth/>
        </div>
  <div className="flex flex-col items-start">
          <div className="flex items-center mb-2">
            <input
              name="notification"
              className="shadow cursor-pointer border rounded"
              onChange={handleChange} value={userData['notification'] || ''}  id="notification"
              type="checkbox"
            />
            <label className="block text-colorFontPrimary px-2 text-sm font-bold" htmlFor="notification">
              Recibir notificaciones
            </label>
          </div>
      </div>
        
      </div>
    </div>
  );

}


