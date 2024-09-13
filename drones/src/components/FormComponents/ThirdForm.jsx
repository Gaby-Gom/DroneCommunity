const ThirdForm = ({ onChange, formValues }) => {
  return (
    <div className="w-full max-w-sm">
  <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <div className="text-center mb-8">
      <h1 className="text-gray-700 font-bold text-2xl">Drones y Sensores</h1>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      <div>
        <div className="text-center mb-4">
          <h2 className="text-lg font-bold">Drones</h2>
        </div>
        <div className="flex items-center">
          <input
            name="consultoria"
            className="shadow cursor-pointer border rounded"
            type="checkbox"
          />
          <label className="block text-gray-700 px-2 text-sm font-bold" htmlFor="Consultoría">
            DJLI
          </label>
        </div>
        <div className="flex items-center">
          <input
            name="busqueda"
            className="shadow cursor-pointer border rounded"
            type="checkbox"
          />
          <label className="block text-gray-700 px-2 text-sm font-bold" htmlFor="Busqueda">
            AUTEL
          </label>
        </div>
        <div className="flex items-center">
          <input
            name="fotogrametria"
            className="shadow cursor-pointer border rounded"
            type="checkbox"
          />
          <label className="block text-gray-700 px-2 text-sm font-bold" htmlFor="Fotogrametria">
            GOPRO
          </label>
        </div>
        <div className="flex items-center">
          <input
            name="seguridad"
            className="shadow cursor-pointer border rounded"
            type="checkbox"
          />
          <label className="block text-gray-700 px-2 text-sm font-bold" htmlFor="Seguridad">
            PARROT
          </label>
        </div>
      </div>
      <div>
        <div className="text-center mb-4">
          <h2 className="text-lg font-bold">Sensores</h2>
        </div>
        <div className="flex items-center">
          <input
            name="mantenimiento"
            className="shadow cursor-pointer border rounded"
            type="checkbox"
          />
          <label className="block text-gray-700 px-2 text-sm font-bold" htmlFor="Mantenimiento">
            FLYABILITY
          </label>
        </div>
        <div className="flex items-center">
          <input
            name="software"
            className="shadow cursor-pointer border rounded"
            type="checkbox"
          />
          <label className="block text-gray-700 px-2 text-sm font-bold" htmlFor="Software">
            ALTI
          </label>
        </div>
        <div className="flex items-center">
          <input
            name="software"
            className="shadow cursor-pointer border rounded"
            type="checkbox"
          />
          <label className="block text-gray-700 px-2 text-sm font-bold" htmlFor="Software">
            EBBE
          </label>
        </div>
        <div className="flex items-center">
          <input
            name="software"
            className="shadow cursor-pointer border rounded"
            type="checkbox"
          />
          <label className="block text-gray-700 px-2 text-sm font-bold" htmlFor="Software">
            OTROS
          </label>
        </div>
      </div>
    </div>
  </form>
  <p className="text-center text-gray-500 text-xs">
    &copy;2022 Form Stepper. All rights reserved.
  </p>
</div>


  );
};

export default ThirdForm;