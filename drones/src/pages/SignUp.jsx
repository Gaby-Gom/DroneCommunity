import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import OAuth from '../components/OAuth';



export default function SignUp(){
    const [formData, setFormData]= useState({});
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const handleChange=(e)=>{
        setFormData({
            ...formData,
            [e.target.id]:e.target.value,
        });
    };

    const handleSubmit =async (e)=>{
        e.preventDefault();
        try {
             setLoading(true);
        const res= await fetch ('/api/auth/signup',{
            method: "POST",
            headers: {
                'Content-Type':'application/json',
            },
            body:JSON.stringify(formData),
        });
        const data =await res.json();
        console.log(data);

        if(data.success === false){
            setLoading(false);
            setError(data.message);
            return;
        }
        setLoading(false);
        setError(null);
        navigate('/sign-in');
            
        } catch (error) {
            setLoading(false);
            setError(error.message);
        }
       
    };
  
  
    return(
        
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center text-colorFontSecondary font-bold my-7'>Registrar Usuario</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <input
          type='text'
          placeholder='Nombre de usuario'
          className="border p-3 rounded-lg bg-colorInputForm text-colorFontPrimary border-colorInputForm  focus:outline-colorBorderHover placeholder-colorFontInputForm"
          id='username'
          onChange={handleChange}
        />
     
        <input
          type='email'
          placeholder='Email'
          className="border p-3 rounded-lg bg-colorInputForm text-colorFontPrimary border-colorInputForm  focus:outline-colorBorderHover placeholder-colorFontInputForm"
          id='email'
          onChange={handleChange}
        />
        <input
          type='password'
          placeholder='Contraseña'
          className="border p-3 rounded-lg bg-colorInputForm text-colorFontPrimary border-colorInputForm  focus:outline-colorBorderHover placeholder-colorFontInputForm"
          id='password'
          onChange={handleChange}
        />

        <button
         disabled={loading}
          className='bg-buttonRegister shadow-lg shadow-gray/50 border-2 border-colorBorderHover rounded-lg tracking-wide py-3 text-ms text-white hover:bg-orange-400 uppercase disabled:opacity-80'
        >
         {loading ? 'Loading...' : 'Registrar ususario'} 
        </button>
         <OAuth/> 
      </form>
      <div className='flex gap-2 mt-5'>
       <div className='flex gap-2'>
              <input
                type='checkbox'
                id='sale'
                className='w-5 text-colorFontSecondary '
               
              />
              <span className='text-colorFontSecondary'>Recibir notificaciones</span>
            </div>
      </div>
      <div className='flex gap-2 mt-5'>
        <p className='text-colorFontSecondary'>Ya eres usuario?</p>
        <Link to={'/sign-in'}>
          <span className='text-colorFontSecondary font-bold '>Iniciar sesión</span>
        </Link>
      </div>
      
       {error && <p className='text-red-500 mt-5'>{error}</p>} 
    </div>
  );
    
}
