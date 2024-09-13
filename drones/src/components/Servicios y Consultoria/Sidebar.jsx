import { Link } from 'react-router-dom';

import { FaHome } from "react-icons/fa";

// eslint-disable-next-line react/prop-types
const Sidebar = ({ selectedOption, setSelectedOption }) => {
  return (
    <div className="lg:w-56 w-32 h-full border-r rounded-lg border-blue-200 bg-blue-500 text-white font-bold hidden lg:block">
      <ul className="pt-12">
         <li
          className={`mb-4 px-4 cursor-pointer rounded py-2 w-full inline-block ${
            selectedOption === 'Menú' ? 'bg-gray-100 text-blue-500' : 'hover:bg-gray-100 hover:text-blue-500 ease-in duration-500'
          }`}
          onClick={() => setSelectedOption('Menú')}
        >
         <Link to='/servicios'>
        <span className="flex items-center text-sm lg:text-2xl">
       Menú
            <FaHome className='lg:text-3xl text-sm ml-2' />
        </span>
      </Link>
        </li>
          <li
          className={`mb-4 px-4 cursor-pointer rounded py-2 w-full inline-block ${
            selectedOption === 'RGB' ? 'bg-gray-100 text-blue-500' : 'hover:bg-gray-100 hover:text-blue-500 ease-in duration-500'
          }`}
          onClick={() => setSelectedOption('RGB')}
        >
             <span className="flex items-center text-sm  lg:text-2xl ">RGB</span>
        </li>
        <li
          className={`mb-4 px-4 cursor-pointer rounded py-2 w-full mr-1 inline-block ${
            selectedOption === 'Multiespectral' ? 'bg-gray-100 text-blue-500' : 'hover:bg-gray-100 hover:text-blue-500 ease-in duration-500'
          }`}
          onClick={() => setSelectedOption('Multiespectral')}
        >
             <span className="flex items-center text-sm lg:text-2xl ">Multiespectral</span>
        </li>
        <li
          className={`mb-4 px-4 cursor-pointer rounded py-2 w-full inline-block ${
            selectedOption === 'Térmica' ? 'bg-gray-100 text-blue-500' : 'hover:bg-gray-100 hover:text-blue-500 ease-in duration-500'
          }`}
          onClick={() => setSelectedOption('Térmica')}
        >
             <span className="flex items-center text-sm lg:text-2xl ">Térmica</span>
        </li>
      </ul>
    </div>
  );
};
export default Sidebar

