import { useContext, useState } from 'react';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext'; // Assuming you have a StoreContext for global state management
import {Link} from 'react-router-dom'; // Use Link for navigation
import './Navbar.css'; // Assuming you have a CSS file for styling  
const Navbar = ({setShowLogin}) => {

const [menu,setMenu] =useState("home");
const{getTotalCartAmount} =useContext(StoreContext); // Assuming you have a StoreContext for global state management

  return (
    
      <div className="navbar">
        <Link to='/'><img src={assets.logo} alt="" className="logo" /></Link>
        <ul className="navbar-menu">
          <Link to='/' onClick={()=>setMenu("home")} className={menu==="home" ?"active":""}>Home</Link>
          <a href="#explore-menu" onClick={()=>setMenu("menu")} className={menu==="menu" ?"active":""}>Menu</a>
          <a href='#app-download' onClick={()=>setMenu("mobile-app")} className={menu==="mobile-app" ?"active":""}>Mobile-App</a>
          <a href='#footer' onClick={()=>setMenu("contact-us")} className={menu ==="contact-us" ?"active":""}>Contact-Us</a>
        </ul>
        <div className="navbar-right">
          <img src= {assets.search_icon}alt="" />
          <div className="navbar-search-icon">
           <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link> 
            <div className={getTotalCartAmount() ===0 ?"" :"dot"}></div>
          </div>
          <button onClick={()=>setShowLogin(true)}>Sign in</button>
        </div>
        
      </div>
   
  )
}

export default Navbar
