import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./stores/Pages/LandingPage";
import MobilePage from "./stores/Pages/MobilePage";
import './App.css';
import MobileSingle from "./singles/MobileSingle";
import UserCart from "./stores/UserCart";
import SignUp from "./stores/Components/SignUp";
import SignIn from "./stores/Components/SignIn";
import logo from "./ecomlogo.jpg";  
import PlaceOrder from "./PlaceOrder";
import ConfirmOrder from "./ConfirmOrder";
import ComputerPage from "./stores/Pages/ComputerPage";
import WatchPage from "./stores/Pages/WatchPage";
import TvPage from "./stores/Pages/TvPage";
import AcPage from "./stores/Pages/AcPage";
import FridgePage from "./stores/Pages/FridgePage";
import KitchenPage from "./stores/Pages/KitchenPage";
import MenPage from "./stores/Pages/MenPage";
import WomanPage from "./stores/Pages/WomanPage";
import ComputerSingle from "./singles/ComputerSingle";
import AcSingle from "./singles/AcSingle";
import FridgeSingle from "./singles/FridgeSingle";
import KitchenSingle from "./singles/KitchenSingle";
import MenSingle from "./singles/MenSingle";
import WomanSingle from "./singles/WomanSingle";
import WatchSingle from "./singles/WatchSingle";
import TvSingle from "./singles/TvSingle";
import Orders from "./stores/Components/Orders";
import CusotmerService from "./stores/Components/CusotmerService";
import Speaker from "./stores/Pages/Speaker";
import SpeakerSingle from "./singles/SpeakerSingle";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); 

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="splash-screen">
        <img src={logo} alt="Site Logo" className="logo" /><br/>
    
      </div>
    );
  }

  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/mobiles" element={<MobilePage />} />
        <Route path="/computers" element={<ComputerPage/>}/>
        <Route path="/watches" element={<WatchPage/>}/>
        <Route path="/tvs" element={<TvPage/>}/>
        <Route path="/ac" element={<AcPage/>}/>
         <Route path="/fridge" element={<FridgePage/>}/>
<Route path="/kitchen" element={<KitchenPage/>}/>
<Route path="/men" element={<MenPage/>}/>
<Route path="/women" element={<WomanPage/>}/>
<Route path="/speaker" element={<Speaker/>}/>

        <Route path="/cart" element={<UserCart />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/mobiles/:id" element={<MobileSingle />} />
        <Route path="/computers/:id" element={<ComputerSingle/>}/>
        <Route path="/ac/:id" element={<AcSingle/>}/>

        <Route path="/speaker/:id" element={<SpeakerSingle/>}/>
        <Route path="/fridge/:id" element={<FridgeSingle/>}/>
        <Route path="/kitchen/:id" element={<KitchenSingle/>}/>
        <Route path="/men/:id" element={<MenSingle/>}/>
        <Route path="/Women/:id" element={<WomanSingle/>}/>
        <Route path="/watches/:id" element={<WatchSingle/>}/>
        <Route path="/tvs/:id" element={<TvSingle/>}/>
        <Route path="/PlaceOrder" element={<PlaceOrder/>}/>
        <Route path="/ConfirmOrder" element={<ConfirmOrder/>}/>
          <Route path="/orders" element={<Orders/>}/>
          <Route path="/customerService" element={<CusotmerService/>}/>
          

      </Routes>
    </div>
  );
};

export default App;
