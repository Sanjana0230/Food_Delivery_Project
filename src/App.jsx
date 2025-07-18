import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Cart from './Pages/Cart/Cart';
import Home from './Pages/Home/Home';
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder';
import Footer from './Components/Footer/Footer'; // Importing Footer component
import LoginPopup from './Components/LoginPopup/LoginPopup';
import { useState } from 'react';
function App() {
  const[showLogin, setShowLogin] = useState(false);
  return (
    <> 
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
    <div className="app">
      <Navbar  setShowLogin={setShowLogin}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<PlaceOrder />} />
      </Routes>  
    </div>
     <Footer/>
    
    </>
  );
}


export default App;
