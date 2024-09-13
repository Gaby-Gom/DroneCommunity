import { FaRegCheckCircle } from "react-icons/fa";

const FourForm = ({ onChange, formValues }) => {
  const pricingOptions = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Private board sharing",
      "5 Gb Storage",
      "Web Analytics",
      "Private Mode",
    ],
  },
  {
    title: "Pro",
    price: "$10",
    features: [
      "Private board sharing",
      "10 Gb Storage",
      "Web Analytics (Advance)",
      "Private Mode",
    ],
  },
  {
    title: "Enterprise",
    price: "$200",
    features: [
      "Private board sharing",
      "Unlimited Storage",
      "High Performance Network",
      "Private Mode",
    ],
  },
];
  
  return (
   <div className="mt-20">
  <h1 className="text-3xl sm:text-5xl text-center my-3 tracking-wide">Subscripción</h1>

  <form className="flex flex-wrap">
    {pricingOptions.map((option, index) => (
      <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-1 flex">
        <div className="p-9 border border-neutral-700 rounded-xl flex flex-col h-full">
          <p className="text-4xl mb-6 text-center">
            {option.title}
            {option.title === "Pro" && (
              <span className="bg-gradient-to-r from-orange-500 to-red-400 text-transparent bg-clip-text text-xl mb-4 ml-2">
                (Most Popular)
              </span>
            )}
          </p>
          <p className="mb-6 text-center">
            <span className="text-5xl font-semibold mt-6 mr-2">{option.price}</span>
            <span className="text-neutral-400 tracking-tight">/Month</span>
          </p>
          <ul className="flex-grow">
            {option.features.map((feature, index) => (
              <li key={index} className="mt-6 flex items-center">
                <FaRegCheckCircle className="text-green-600" />
                <span className="ml-2">{feature}</span>
              </li>
            ))}
          </ul>
          <a
            href="#"
            className="inline-flex justify-center items-center text-center w-full h-12 p-5 mt-10 tracking-tight text-xl hover:bg-orange-900 border border-orange-900 rounded-lg transition duration-200"
          >
            Subscribe
          </a>
        </div>
      </div>
    ))}
  </form>
  <p className="text-center text-gray-500 text-xs">
    &copy;2022 Form Stepper. All rights reserved.
  </p>
</div>

  );
};


  

export default FourForm;