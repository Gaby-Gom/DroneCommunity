/* import { FaSearch } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set('searchTerm', searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get('searchTerm');
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);
  return (
    <header className='sticky top-0 z-50 py-3 bg-sky-800 w-auto backdrop-blur-lg border-b border-neutral-700/80 '>
      <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        <Link to='/'>
            
          <h1 className='font-bold text-sm sm:text-xl flex flex-wrap '>
             <img className="h-10 w-10 mr-2" src="/Logo.png" alt="Logo" />
           <span className="bg-gradient-to-r from-orange-500 to-red-700 text-transparent bg-clip-text  hidden lg:block">
          {" "}
          Drone Community
        </span>
             <span className='text-orange-500'>Community</span> 
          </h1>
        
        </Link>
        <form
          onSubmit={handleSubmit}
          className='bg-slate-100 p-3 rounded-lg flex items-center'
        >
          <input
            type='text'
            placeholder='Search...'
            className='bg-transparent focus:outline-none w-24 sm:w-64'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button>
            <FaSearch className='text-slate-600' />
          </button>
        </form>
        <ul className='flex gap-4'>
          {/* <Link to='/'>
            <li className='hidden sm:inline text-orange-700 hover:underline'>
              Home
            </li>
          </Link>
          <Link to='/about'>
            <li className='hidden sm:inline text-semibold text-orange-700 hover:underline'>
              About
            </li>
          </Link> 
          <Link to='/profile'>
            {currentUser ? (
              <img
                className='rounded-full  w-10 h-10 object-cover'
                src={currentUser.avatar}
                alt='profile'
              />
            ) : (
              <li className=' text-slate-700 hover:underline'> Sign in</li>
            )}
          </Link>
        </ul>
      </div>
    </header>
  );
} */
import { FaSearch } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
//import ModalHome from './ModalHome';

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set('searchTerm', searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get('searchTerm');
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);
  return (
    <header className='bg-white shadow-md'>
       
      <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        <Link to='/'>
           
         
             <img className="lg:h-[80px] lg:w-[80px] h-[50px] w-[50px] mr-2 z-40" src="/logoModif.jpg" alt="Logo" /> 
    
        </Link> 
        <form
          onSubmit={handleSubmit}
          className='bg-[#E3F1FC] text-colorFontPrimary p-3 rounded-lg flex items-center '
        >
          <input
            type='text'
            placeholder='Qué quieres encontrar?'
            className='bg-colorInputForm placeholder-colorFontPrimary   text-colorFontInputForm focus:outline-none  lg:w-96 w-24 lg:placeholder:visible placeholder:invisible sm:placeholder:invisible'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button>
            <FaSearch className='text-colorIcons' />
          </button>
        </form>
        <ul className='flex gap-4'>
          {/* <Link to='/'>
            <li className='hidden sm:inline text-slate-700 hover:underline'>
              Home
            </li>
          </Link>
          <Link to='/about'>
            <li className='hidden sm:inline text-slate-700 hover:underline'>
              About
            </li>
          </Link> */}
          <Link to='/profile'>
            {currentUser ? (
              <img
                className='rounded-full h-7 w-7 object-cover'
                src={currentUser.avatar}
                alt='profile'
              />
            ) : (
              <li className=' text-slate-700 hover:underline'> Sign in</li>
            )}
          </Link>
          <Link to='/'>
            <li className='hidden sm:inline text-colorFontPrimary font-medium hover:underline hover:decoration-solid  decoration-colorIcons'>
              Login
            </li>
          </Link>
        </ul>
      </div>
    </header>
  );
}