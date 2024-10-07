
import { Link } from 'react-router-dom';
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
const resourcesLinks = [
  // { href: "#", icon: "Documentation", },
  { href: "#", text: "Licencias y Habilitaciones" },
  { href: "#", text: "Apps" },
   { href: "#", text: "Reglamentación" },
/*   { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" }, */
];

 const platformLinks = [
   { href: "#", text: "Marketplace" },
  { href: "#", text: "Servicios y Consultorías" },
   { href: "#", text: "Licitaciones" },
   // { href: "#", text: "Downloads" },

];

 const communityLinks = [

  { href: "#", text: "Interes General" },
  { href: "#", text: "Sofware IA" },
  // { href: "#", text: "Hackathons" },

];



  return (
    <footer className="mt-0 border-t py-4 border-neutral-700 bg-colorFontPrimary">
      <div className="grid grid-cols-1 lg:grid-cols-6 gap-2  ml-2 lg:ml-40 sm:grid-cols-2 md:grid-cols-5">
        <div className="flex justify-center gap-x-2 mt-6">
              <Link href="/" className="transition ease-in-out delay-150 text-white hover:-translate-y-1 hover:scale-110 hover:text-colorIcons duration-300">
                <FaInstagram className="h-6 w-6" />
              </Link>
              <Link href="/" className="transition ease-in-out delay-150 text-white hover:-translate-y-1 hover:scale-110 hover:text-colorIcons duration-300">
                <FaFacebook className="h-6 w-6" />
              </Link>
             <Link href="/" className="transition ease-in-out delay-150 text-white hover:-translate-y-1 hover:scale-110 hover:text-colorIcons duration-300">
                <FaXTwitter className="h-6 w-6" />
              </Link>
            
            </div>
        <div className=" ">
          {/* <h3 className="text-md text-colorBorderHover uppercase font-semibold mb-4">
            Resource</h3> */}
          <ul className="space-y-2">
            {resourcesLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-neutral-300 hover:text-colorBorderHover"
                >
                  {link.text}
                </a>
              </li>
            ))}
             </ul>
        </div>
        <div>
          {/* <h3 className="text-md text-colorBorderHover uppercase font-semibold mb-4">Platform</h3> */}
          <ul className="space-y-2">
            {platformLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-neutral-300 hover:text-colorBorderHover"
                >
                  {link.text}
                </a>
              </li>
            ))}
                </ul>
       
        </div>
        <div>
          {/* <h3 className="text-md text-colorBorderHover uppercase font-semibold mb-4">Community</h3> */}
          <ul className="space-y-2">
            {communityLinks.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.href}
                  className="text-neutral-300 hover:text-colorBorderHover"
                >
                  {link.text}
                </Link>
              </li>
            ))}
           
          </ul>
          {/* <div>
             
          </div> */}
        </div>
    
        <div className=" lg:flex justify-center items-center mt-2 hidden">
          <Link to='/'>       
             <img className="h-28 w-28  mr-2 " src="/LogoCompleto.svg" alt="Logo Drone Community" />
            </Link>
            </div>

              
      
      </div>
      <div className="flex justify-center">
      <hr className="my-4 border-colorBorderHover w-[80%] sm:mx-auto  lg:my-6" />
      </div>
        <div className="flex items-end justify-center ">
          
          <span className="text-sm text-white sm:text-center">
            © {new Date().getFullYear()}
            <Link href="/" className="text-white hover:text-colorBorderHover">
              {" "}
              Drone Community™
            </Link>
            . All Rights Reserved.
          </span>
        </div>
    </footer>
  );
};

export default Footer;
