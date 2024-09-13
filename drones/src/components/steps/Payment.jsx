import { FaRegCheckCircle } from "react-icons/fa";
      import {useContext, useState} from 'react';
import { StepperContext } from '../../contexts/Context';
import { TbDrone } from "react-icons/tb";

export default function Payment() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  const { userData, setUserData } = useContext(StepperContext);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const pricingOptions = [
    {
      title: "Free",
      price: "$0",
      features: ["Private board", "5 Gb Storage", "Web Analytics", "Private Mode"],
    },
    {
      title: "Pro",
      price: "$10",
      features: ["Private board", "8 Gb Storage", "Analytics (Advance)", "Private Mode"],
    },
    {
      title: "Avanced",
      price: "$200",
      features: ["Private board", "Unlimited Storage", "High Performance", "Private Mode"],
    },
  ];

  return (
    <div className='flex flex-col items-center'>
      <div className="flex flex-wrap justify-center">
        {pricingOptions.map((option, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-1 flex justify-center">
            <div
              className={`p-6 text-white border-2 bg-[#1F3C79] rounded-xl flex flex-col h-full w-full max-w-xs ${activeIndex === index ? 'border-4 border-orange-400 scale-105' : 'border-neutral-700'}`}
            >
              <p
                className={`text-4xl mb-6 font-bold text-center ${
                  option.title === "Free" ? 'text-green-500' : option.title === "Pro" ? 'text-blue-500' : 'text-orange-500'
                }`}
              >
                {option.title}
                {option.title === "Pro" && (
                  <span className="bg-gradient-to-r from-orange-500 to-red-400 text-transparent bg-clip-text text-xl mb-4 ml-2">
                    (Most Popular)
                  </span>
                )}
              </p>
              <p className="mb-4 text-center">
                <span className="text-4xl font-semibold mt-6 mr-2">{option.price}</span>
                <span className="text-neutral-400 tracking-tight">/Month</span>
              </p>
              <ul className="flex-grow">
                {option.features.map((feature, index) => (
                  <li key={index} className="mt-6 flex items-center">
                    <TbDrone className="h-8 w-8 text-sky-200" />
                    <span className="ml-2 text-white">{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                className="inline-flex bg-colorBorderHover justify-center items-center text-center w-full h-12 p-5 mt-10 tracking-tight text-xl hover:bg-orange-600 border border-orange-600 rounded-lg transition duration-200"
                onClick={() => handleClick(index)}
              >
                Subscribe
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}



