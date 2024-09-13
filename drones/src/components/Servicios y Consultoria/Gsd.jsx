

const Gsd = () => {
  // Generar el array de opciones del 1 al 20
  const gsd = Array.from({ length: 20 }, (_, index) => ({
    opcion: index + 1,
    value: index + 1,
  }));

  return (

      <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
        <select
          id="gsd-select"
          name="gsd-select"
          className="p-1 px-2 outline-none w-full text-colorFontPrimary cursor-pointer"
        >
          <option value="">Opción</option>
          {gsd.map((item) => (
            <option key={item.value} value={item.value}>
              {item.opcion}
            </option>
          ))}
        </select>
      </div>
    
  );
};

export default Gsd;
