import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from '../redux/user/userSlice';
import OAuth from '../components/OAuth';

export default function SignIn() {
  const [formData, setFormData] = useState({});
  const { loading, error } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(signInStart());
      const res = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      if (data.success === false) {
        dispatch(signInFailure(data.message));
        return;
      }
      dispatch(signInSuccess(data));
      navigate('/');
    } catch (error) {
      dispatch(signInFailure(error.message));
    }
  };
  return (
  <div className='p-3 max-w-lg mx-auto '>
      <h1 className='text-3xl text-center text-colorFontSecondary font-bold my-7'>Iniciar Sesión</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <input
          type='email'
          placeholder='Email'
          className='border p-3 rounded-lg bg-colorInputForm text-colorFontPrimary border-colorInputForm  focus:outline-colorBorderHover placeholder-colorFontInputForm'
          id='email'
          onChange={handleChange}
        />
        <input
          type='password'
          placeholder='Contraseña'
          className='border p-3 rounded-lg bg-colorInputForm text-colorFontPrimary border-colorInputForm  focus:outline-colorBorderHover placeholder-colorFontInputForm'
          id='password'
          onChange={handleChange}
        />

        <button
          disabled={loading}
          className='bg-buttonRegister shadow-lg shadow-gray/50 border-2 border-colorBorderHover rounded-lg tracking-wide py-3 text-ms text-white hover:bg-orange-400 uppercase disabled:opacity-80'
        >
          {loading ? 'Loading...' : 'Iniciar sesión'}
        </button>
        <OAuth/>
      </form>
      <div className='flex gap-2 mt-5'>
        <p className="text-colorFontSecondary">No tienes usuario?</p>
        <Link to={'/sign-up'}>
          <span className='text-colorFontSecondary font-bold'>Registrarse</span>
        </Link>
      </div>
      {error && <p className='text-red-500 mt-5'>{error}</p>}
    </div>
  );
}