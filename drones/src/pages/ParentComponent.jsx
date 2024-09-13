import { useState } from "react";
import FirstForm from "../components/FormComponents/FirstForm";
import SecondForm from "../components/FormComponents/SecondForm";
import ThirdForm from "../components/FormComponents/ThirdForm.jsx";
import FourForm from "../components/FormComponents/FourForm.jsx";
import { TbDrone } from "react-icons/tb";
import { MdMiscellaneousServices } from "react-icons/md";
import { BsPersonFillCheck } from "react-icons/bs";
import { FaHandHoldingDollar } from "react-icons/fa6";


const ParentComponent = () => {
  const formList = ["FirstForm", "SecondForm", "ThirdForm", "FourForm"];

  const formLength = formList.length;

  const [page, setPage] = useState(0);

  const handlePrev = () => {
    setPage(page === 0 ? formLength - 1 : page - 1);
  };
  const handleNext = () => {
    setPage(page === formLength - 1 ? 0 : page + 1);
  };

  const initialValues = {
    name: "",
    lastname: "",
    dni:"",
    password: "",
    confirmPassword: "",
    username: "",
    city: "1",
    address: "",
    zip: "",
    terms: "",
    phone:"",
    nameFour:"",

  };
  const [values, setValues] = useState(initialValues);

  const handleForms = () => {
    switch (page) {
      case 0: {
        return (
          <div>
            <FirstForm formValues={values} onChange={onChange} option={states} ></FirstForm>
          </div>
        );
      }
      case 1: {
        return (
          <SecondForm
            formValues={values}
            onChange={onChange}
            option={states}
          ></SecondForm>
        );
      }
      case 2: {
        return <ThirdForm formValues={values} onChange={onChange}></ThirdForm>;
      }
        case 3: {
        return <FourForm formValues={values} onChange={onChange}></FourForm>;
      }
      default:
        return null;
    }
  };

 /*  const states = [
       { id: "0", name: "Mendoza" },
    { id: "1", name: "Misiones" },
    { id: "2", name: "Salta" },
    { id: "3", name: "La Pampa" },
  ]; */
 
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await setTimeout(() => {
      console.log("form", values);
    }, 2000);
    return response;
  };

  const setForm = (e) => {
    const name = e.target.innerText;
    switch (name) {
      case "Datos Personales": {
        return setPage(0);
      }
      case "Servicios": {
        return setPage(1);
      }
      case "Drones y Sensores": {
        return setPage(2);
      }
      case "Subscripción": {
        return setPage(3);
      }
      default:
        setPage(0);
    }
  };

  const onChange = (e) => {
    const { name, value, type, checked } = e.target;
    setValues({ ...values, [name]: type === "checkbox" ? checked : value });
  };

  return (
    <div className="grid gap-4 mt-5 place-content-center items-center h-screen place-items-center  ">
      <ul className="flex justify-between w-full">
        <li
          onClick={setForm}
          className={
            page === 0 ? "bg-blue-300 w-2/6 rounded-lg  " : "bg: transparent"
          }
        >
          <div className="flex items-center ">
            <span className="stepper-head-icon">
              {" "}
             <BsPersonFillCheck  className="h-8 w-8 text-blue-800" />
            </span>
            <span
              className={
                page === 0
                  ? "ml-2 text-white font-medium"
                  : "ml-2 text-blue-800 cursor-pointer"
              }
            >
             Datos Personales
            </span>
          </div>
        </li>
        <li
          onClick={setForm}
          className={
            page === 1 ? "bg-blue-300  w-2/6 rounded-lg" : "bg: transparent "
          }
        >
          <div className="flex items-center">
            <span className="stepper-head-icon">
              {" "}
          <MdMiscellaneousServices className="h-8 w-8 text-blue-800 "/>
            </span>
            <span
              className={
                page === 1
                  ? "ml-2 text-white font-medium"
                  : "ml-2 text-blue-800 cursor-pointer"
              }
            >
              Servicios{" "}
            </span>
          </div>
        </li>
        <li
          onClick={setForm}
          className={
            page === 2 ? "bg-blue-300 w-2/6 rounded-lg" : "bg: transparent"
          }
        >
          <div className="flex items-center">
            <span className="stepper-head-icon">
           <TbDrone className="h-8 w-8 text-blue-800" />
            </span>
            <span
              className={
                page === 2
                  ? "ml-2 text-white font-medium"
                  : "ml-2 text-blue-800 cursor-pointer"
              }
            >
              {" "}
              Drones y Sensores{" "}
            </span>
          </div>
          
        </li>
        <li
          onClick={setForm}
          className={
            page ===3 ? "bg-blue-300  w-2/6 rounded-lg" : "bg: transparent "
          }
        >
          <div className="flex items-center">
            <span className="stepper-head-icon">
              {" "}
             <FaHandHoldingDollar className="h-8 w-8 text-blue-800" />
            </span>
            <span
              className={
                page === 3
                  ? "ml-3 text-white font-medium"
                  : "ml-3 text-blue-800 cursor-pointer"
              }
            >
              Subscripción{" "}
            </span>
          </div>
        </li>
        
      </ul>
      <div className="flex-1">{handleForms()}</div>
      <div className="grid grid-cols-2 gap-4 place-content-center items-center">
        <button
          onClick={handlePrev}
          className="bg-blue-200  hover:bg-blue-300 rounded-md text-gray-800 font-bold py-2 px-4 disabled:bg-gray-400 "
          disabled={page === 0}
        >
          Anterior
        </button>
        {page === 3 ? (
          <button
            onClick={handleSubmit}
            className="bg-blue-200 hover:bg-blue-300 rounded-md text-gray-800 font-bold py-2 px-4 "
          >
            Enviar
          </button>
        ) : (
          <button
            onClick={handleNext}
            className="bg-blue-200 hover:bg-blue-300 rounded-md text-gray-800 font-bold py-2 px-4 "
          >
            Siguiente
          </button>
        )}
      </div>
    </div>
  );
};

export default ParentComponent;