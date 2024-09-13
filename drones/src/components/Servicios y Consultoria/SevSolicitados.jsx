

const SevSolicitados = () => {
  const gsd = [
  { name: "cn", label: "Curvas a Nivel" },
  { name: "ortomosaico", label: "Ortomosaico" },
  { name: "ch", label: "Cuencas Hídricas" },
  { name: "cv", label: "Cálculos Volumétricos" },
  { name: "pt", label: "Pefiles Topográficos" },
  { name: "np", label: "Nube de Puntos" },
  { name: "mdt", label: "Modelo Diagnóstico de Terreno" },
  { name: "mdt", label: "Modelo Diagnóstico de Superficies" },
];
      

  return (
   
        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
      
           <select
          id="gsd-select"
          name="gsd-select"
          className="p-1 px-2 outline-none w-full text-colorFontPrimary cursor-pointer"
        >
          <option value="">Seleccione una opción</option>
         {gsd.map((item) => (
  <option key={item.name} value={item.name}>
    {item.label}
  </option>
))}
        </select>
      </div>
   
   
  );
};

export default SevSolicitados;

