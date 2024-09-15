import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import SignUp from "./pages/SignUp";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Header from "./components/Header";
import PrivateRoute from './components/PrivateRoute';
import CreateListing from './pages/CreateListing';
import UpdateListing from './pages/UpdateListing';

import Search from './pages/Search';
import Footer from "./components/Footer";
//import Modal from "./components/Modal";
import Registrar from "./pages/Registrar";
import ParentComponent from "./pages/ParentComponent";
import ServiciosConsultorias from "./pages/ServiciosConsultorias";
import Consultoria from "./pages/serviciosConsultoria/Consultoria";
import Fotogrametria from "./pages/serviciosConsultoria/Fotogrametria";
import VigilanciaSeguridad from "./pages/serviciosConsultoria/VigilanciaSeguridad";
import Fumigacion from "./pages/serviciosConsultoria/Fumigacion";
import MantenimientoRep from "./pages/serviciosConsultoria/mantenimiento/MantenimientoRep";
import Listing from './pages/Listing';
import Inspeccion from "./pages/serviciosConsultoria/inpecciones/Inspeccion";
import Homes from "./pages/Homes";
import { Eolicas } from "./pages/serviciosConsultoria/inpecciones/Eolicas";
import {OilAndGas} from "./pages/serviciosConsultoria/inpecciones/OilAndGas";
import {Rurales} from "./pages/serviciosConsultoria/inpecciones/Rurales";
import {Antenas} from "./pages/serviciosConsultoria/inpecciones/Antenas";
import MantenimientoMenu from "./pages/serviciosConsultoria/mantenimiento/MantenimientoMenu";
import PlanMantenimiento from "./pages/serviciosConsultoria/mantenimiento/PlanMantenimiento";
import Reparacion from "./pages/serviciosConsultoria/mantenimiento/Reparacion";
import Multirotor from "./pages/serviciosConsultoria/mantenimiento/Multirotor";
import AlaFija from "./pages/serviciosConsultoria/mantenimiento/AlaFija";
import AlaFijaA from "./pages/serviciosConsultoria/mantenimiento/AlaFijaA";
import MultirotorA from "./pages/serviciosConsultoria/mantenimiento/MultirotoA";




export default function App(){
  return <BrowserRouter>
    <Header/>  

  <Routes>
   
    
    <Route path="/" element={<Home/>}/>
    <Route path="/homes" element={<Homes/>}/>
    <Route path="/sign-in" element={<Signin/>}/>
    <Route path="/sign-up" element={<SignUp/>}/>
    <Route path="/about" element={<About/>}/>
       <Route path='/about' element={<About />} />
       <Route path='/search' element={<Search />} />
         <Route path='/listing/:listingId' element={<Listing />} />  
    <Route element={<PrivateRoute/>}>
     <Route path='/profile' element={<Profile />} />
          <Route path='/create-listing' element={<CreateListing />} />
           <Route
            path='/update-listing/:listingId'
            element={<UpdateListing />}
          /> 
    <Route path="/register" element={<Registrar/>}/>
    <Route path="/servicios" element={<ServiciosConsultorias/>}/>
    <Route path="/consultoria" element={<Consultoria/>}/>
    <Route path="/fotogrametria" element={<Fotogrametria/>}/>
    <Route path="/inspecciones" element={<Inspeccion/>}/>
    <Route path="/eolicas" element={<Eolicas/>}/>
        <Route path="/oilandgas" element={<OilAndGas/>}/>
        <Route path="/antenas" element={<Antenas/>}/>
         <Route path="/rurales" element={<Rurales/>}/>
    <Route path="/vigilancia" element={<VigilanciaSeguridad/>}/>
    <Route path="/fumigacion" element={<Fumigacion/>}/>
     <Route path="/mantenimiento" element={<MantenimientoRep/>}/>
      <Route path="/mantenimientoMenu" element={<MantenimientoMenu/>}/>
         <Route path="/reparacion" element={<Reparacion/>}/>
          <Route path="/multirotor" element={<Multirotor/>}/>
             <Route path="/alafija" element={<AlaFija/>}/>
             <Route path="/alafijaA" element={<AlaFijaA/>}/>
             <Route path="/multirotorA" element={<MultirotorA/>}/>
       <Route path="/planMantenimiento" element={<PlanMantenimiento/>}/>
    <Route path="/data" element={<ParentComponent/>}/>
    </Route>

  </Routes>
   <Footer/>  
  </BrowserRouter>;

  
}