import { useState } from 'react';
import axios from 'axios';

const UploadFile = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const handleFileUpload = (event) => {
    const file = event.target.files[0];

    if (file && file.type !== 'application/pdf') {
      setErrorMessage('Solo se permiten archivos PDF.');
      setSelectedFile(null);  // Limpiar el archivo seleccionado si no es PDF
    } else {
      setErrorMessage('');  // Limpiar el mensaje de error si es un PDF válido
      setSelectedFile(file);
    }
  };

  const handleUpload = () => {
    if (!selectedFile) {
      setErrorMessage('Por favor, seleccione un archivo PDF.');
      return;
    }

    const formData = new FormData();
    formData.append('file', selectedFile);

    axios.post('/api/upload', formData)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className='flex flex-col lg:flex-row items-center cursor-pointer'>
     
      <input 
        type="file" 
        onChange={handleFileUpload} 
        accept="application/pdf"  // Restringir la selección a archivos PDF
        className="text-colorFontPrimary cursor-pointer"
      />
      <div className="flex flex-col lg:flex-row items-center">
      {errorMessage && <p className="text-red-500 mr-2">{errorMessage}</p>}
      </div>
      <button onClick={handleUpload} className='bg-sky-500 text-white hover:bg-sky-300 rounded-lg
        p-2 ml-2 mt-2'>
        Subir 
      </button>
    </div>
  );
};

export default UploadFile;
