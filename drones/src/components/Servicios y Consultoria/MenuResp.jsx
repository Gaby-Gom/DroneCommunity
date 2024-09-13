import { Link } from 'react-router-dom';

import { FaHome } from "react-icons/fa";

// eslint-disable-next-line react/prop-types
const MenuResp = ({ selectedOption, setSelectedOption }) => {
  return (
<div className="w-full  border-r rounded-lg border-blue-200 bg-blue-500 text-white font-bold lg:hidden block my-4">
  <ul className="flex justify-evenly items-center ">
    <li
      className={` cursor-pointer rounded py-2 flex items-center ${
        selectedOption === 'Menu' ? 'bg-gray-100 text-blue-500' : 'hover:bg-gray-100 hover:text-blue-500 ease-in duration-500'
      }`}
      onClick={() => setSelectedOption('Menu')}
    >
      <Link to='/servicios'>
        <span className="flex items-center text-sm lg:text-2xl">
         
          <FaHome className='lg:text-3xl text-sm ml-2' />
          Menú
        </span>
      </Link>
    </li>
    
    <li
      className={`px-2 cursor-pointer rounded py-2 flex items-center ${
        selectedOption === 'RGB' ? 'bg-gray-100 text-blue-500' : 'hover:bg-gray-100 hover:text-blue-500 ease-in duration-500'
      }`}
      onClick={() => setSelectedOption('RGB')}
    >
      <span className="flex items-center text-sm lg:text-2xl">RGB</span>
    </li>
    
    <li
      className={`px-2  cursor-pointer rounded py-2 flex items-center ${
        selectedOption === 'Multiespectral' ? 'bg-gray-100 text-blue-500' : 'hover:bg-gray-100 hover:text-blue-500 ease-in duration-500'
      }`}
      onClick={() => setSelectedOption('Multiespectral')}
    >
      <span className="flex items-center text-sm lg:text-2xl">Multiespectral</span>
    </li>
    
    <li
      className={`px-2  cursor-pointer rounded py-2 flex items-center ${
        selectedOption === 'Térmica' ? 'bg-gray-100 text-blue-500' : 'hover:bg-gray-100 hover:text-blue-500 ease-in duration-500'
      }`}
      onClick={() => setSelectedOption('Térmica')}
    >
      <span className="flex items-center text-sm lg:text-2xl">Térmica</span>
    </li>
  </ul>
</div>

  );
};
export default MenuResp

