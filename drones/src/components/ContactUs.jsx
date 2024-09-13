

export const ContactUs = () => {
  return (
    <div className="bg-center bg-no-repeat bg-[url('/fondoContact.png')] bg-gray-600 bg-blend-multiply bg-fixed bg-cover lg:flex lg:justify-end pt-8 pb-8 mt-12 mb-0 h-full ">
      
     
        <div className='p-3 max-w-lg mx-auto' >
          
     <h2 className="text-3xl sm:text-5xl lg:text-5xl font-semibold text-center my-8 pb-2 tracking-wide text-white mb-4 ml-2 ">Contáctanos</h2> 
    
      <form  className='flex flex-col  gap-4 opacity-1 '>
         <input
          type='text'
          placeholder='Nombre'
          id='username'
          className="border p-3 rounded-lg bg-gray-700  text-white border-colorFontPrimary  focus:outline-colorDashoardPrimary placeholder-white "
         
        />
        
        <input
          type='email'
          placeholder='Email'
          className='border p-3 rounded-lg  bg-gray-700 text-white border-colorFontPrimary  focus:outline-colorDashoardPrimary placeholder-white'
          id='email'
        
        />
        <textarea
          type='textarea'
          placeholder='Mensaje'
          maxLength="500"
         
          rows="4"
                    className='border p-3 rounded-lg  bg-gray-700 text-white border-colorFontPrimary  focus:outline-colorDashoardPrimary placeholder-white'
          id='password'
      
        />

        <button
         
          className='bg-buttonRegister shadow-lg shadow-gray/50 border-2 border-colorBorderHover rounded-lg tracking-wide py-3 text-ms text-white hover:bg-orange-400 uppercase disabled:opacity-80'
        > Enviar   </button>
     
      </form>
    </div>
    </div>
    
  )
}
