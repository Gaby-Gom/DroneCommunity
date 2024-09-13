
const FirstForm = ({ formValues, onChange, option }) => {
  return (
    <div className="w-full bg-sky-400">
      <form className="bg-white shadow-md px-24 pt-10 pb-10 mb-8 rounded-md">
        <div className="grid gap-4 place-content-center items-center">
          <h1 className="text-gray-700 pb-4 font-bold text-2xl">Datos Personales</h1>
        </div>
        <div className="flex gap-4 place-content-center items-center p-8">
  <label className="flex items-center mr-6">
    <input type="radio" value="Persona" name="gender" className="mr-2" /> Persona
  </label>
  <label className="flex items-center">
    <input type="radio" value="Empresa" name="gender" className="mr-2" /> Empresa
  </label>
</div>
        <div className="grid grid-cols-2 gap-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">
              Nombre
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
              id="nombre"
              name="nombre"
              type="text"
              placeholder="Nombre"
              maxLength="50"
              minLength="10"
              onChange={onChange}
              value={formValues.name}
              required
            ></input>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="apellido">
              Apellido
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="apellido"
              name="apellido"
              onChange={onChange}
              value={formValues.lastname}
              type="text"
              placeholder="Apellido"
              required
            ></input>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Dni">
              Dni
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="dni"
              name="dni"
              onChange={onChange}
              value={formValues.dni}
              type="Number"
              placeholder="Dni"
              maxLength="8"
              minLength="6"
              required
            ></input>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="telefono">
              Télefono
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="telefono"
              name="telefono"
              onChange={onChange}
              value={formValues.phone}
              type="Number"
              placeholder="Télefono"
              maxLength="15"
              minLength="8"
              required
            ></input>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="direccion">
              Dirección
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="direccion"
              name="direccion"
              type="text"
              placeholder=" Dirección"
              value={formValues.address}
              onChange={onChange}
              maxLength="50"
              minLength="5"
              required
            ></input>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cp">
              CP
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="cp"
              type="text"
              name="cp"
              value={formValues.cp}
              onChange={onChange}
              placeholder="Código Postal"
            ></input>
          </div>
          <div className="mb-6 col-span-2">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="provincia">
              Provincia
            </label>
            <select
              className="block shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="city"
              name="city"
              onChange={onChange}
              value={formValues.city}
            >
              {option.map((state) => {
                return (
                  <option key={state.id} value={state.id}>
                    {state.name}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="text-red-600">Falta Pais</div>
        </div>
        <div className="flex items-center justify-between"></div>
      </form>
      <p className="text-center text-gray-500 text-xs">
        &copy;2022 Form Stepper. All rights reserved.
      </p>
    </div>
  );
};

export default FirstForm;
 