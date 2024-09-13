import { useState } from "react";
import Stepper from "./../components/Stepper.jsx"
import StepperControl from "./../components/StepperControl";
//import Account from "./../components/steps/Account";
import Detail from "./../components/steps/Detail";
import Final from "../components/steps/Final";
import  Payment  from "./../components/steps/Payment";
import { StepperContext } from "../contexts/Context.js";
import Services from "./../components/steps/Services";
import Drones from "./../components/steps/Drones";

const Registrar = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const [userData, setUserData]= useState('');
  const [finalData, setFinalData]=useState([]);

  const steps = [
    // "Registro",
    "Datos Personales",
    "Servicios",
    "Drones y Sensores",
    "Subcripción",
    "Confirmar"
  ];

  const displayStep = (step) => {
    switch (step) {
    /*   case 1:
        return <Account />; */
      case 1:
        return <Detail />;
          case 2:
        return <Services />;
       case  3: 
        return<Drones/>;
         case 4: 
        return<Payment/>;
      case 5:
        return <Final />;
      default:
        return null;
    }
  };

  const handleClick =(direction)=>{
    let newStep = currentStep;

    direction==="next"? newStep ++ : newStep --;

    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);

  }
  

  return (
    <div className="bg-left bg-no-repeat bg-[url('/dronLuces.jpg')] bg-gray-500 bg-blend-multiply bg-fixed bg-cover lg:flex lg:justify-start items-start">
     
      <div className="md:w-1/2  mx-auto mt-0  shadow-xl rounded-2xl pb-0 pt-0 bg-gray-100">
        <div className="container  horizontal mt-2">
          <Stepper
            steps={steps}
            currentStep={currentStep}
            
          />
       <div className="ml-16 mt-14 mb-0"><h1 className="text-black font-bold uppercase text-2xl">{steps[currentStep - 1]}</h1></div>

          <div className="my-2 p-3">
            <StepperContext.Provider value={{
              userData,
              setUserData,
              finalData,
              setFinalData
            }}>
              {displayStep(currentStep)}
            </StepperContext.Provider>
          </div>
        </div>
         {currentStep !== steps.length &&
          <StepperControl 
          handleClick={handleClick}
          currentStep={currentStep}
          steps={steps}         
          />
}
      </div>
     
    </div>
  );
};

export default Registrar;