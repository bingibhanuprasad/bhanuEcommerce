import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './NavBarcss.css';
import { useCart } from '../context/CartContext';
import logo from "/src/ecomlogo.jpg";
 
import { TbFridge } from 'react-icons/tb';
 
import { FaUserCircle } from 'react-icons/fa';
import { FaShoppingCart } from 'react-icons/fa';
import { FaMobileAlt, FaLaptop, FaClock, FaTv, FaSnowflake, FaUtensils, FaTshirt, FaFemale } from 'react-icons/fa';
import { MdSpeaker, MdKitchen, MdOutlineMan ,MdAcUnit} from 'react-icons/md';
import { FaBox, FaHeadset, FaSignOutAlt } from "react-icons/fa";

const Navbar = () => {
  const { cartItems } = useCart();
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser")); 
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser"); 
    navigate("/SignIn"); 
    window.location.reload();
  };

  return (
    <>
      <div className='navSection'>
        <div className='title'>
          <Link to="/">
            <img src={logo} alt='' />
          </Link>
          
        </div>

        {/* <div>
          <input type="text" placeholder='Search...' />
        </div> */}

        <div className='user'>
          <div className="user-details">
            {loggedInUser ? (
              <div className="dropdown">
                <a onClick={() => setDropdownOpen(!dropdownOpen)} className="user-btn">
                <FaUserCircle size={22} className="user-icon" />
                 {loggedInUser.name} ⏷
                </a>
                {dropdownOpen && (
                  <div className="dropdown-menu">
                    {/* <button className='dropdown-item logout-btn'>Account</button> */}
                    <button className='dropdown-item logout-btn'>  <FaBox className="icon" /> <Link to="/orders">Orders</Link></button>
                    <button className='dropdown-item logout-btn'>  <FaHeadset className="icon" /> <Link to="/customerService">Customer Service</Link></button>
                   
                    <button onClick={handleLogout} className="dropdown-item logout-btn"> <FaSignOutAlt className="icon" />Signout</button>
                  </div>
                )}
              </div>
            ) : (
              <Link to="/SignUp" className='user-btn'>
                  <FaUserCircle size={22} className="user-icon" />
                SignIn/SignUp</Link>
            )}
          </div>



           <div className='cart'>
            <Link to='/cart' className='user-btn'>
            <FaShoppingCart size={22} className="user-icon" />
               Cart <span>{cartItems.length}</span>
            </Link>
          </div> 

 
        </div>
      </div>


 





      <div className='subMenu'>
        <Link to='/mobiles'><li > <FaMobileAlt className="icon" /> Mobiles</li></Link>
        <Link to='/computers'><li> <FaLaptop className="icon" />Computers</li></Link>
        <Link to='/watches'><li> <FaClock className="icon" />Watches</li></Link>
        <Link to='/tvs'><li> <FaTv className="icon" />TVs</li></Link>
        <Link to='/ac'><li><MdAcUnit className="icon" /> AC</li></Link>
        <Link to='/fridge'><li> <TbFridge className="icon" />Fridge</li></Link>
        <Link to='/speaker'><li> <MdSpeaker className="icon" />Speaker</li></Link>
        <Link to='/kitchen'><li> <MdKitchen className="icon" />Kitchen</li></Link>
        <Link to='/men'><li> <MdOutlineMan className="icon" />Men</li></Link>
        <Link to='/women'><li> <FaFemale className="icon" /> Women</li></Link>
      </div>
     
     

    </>
  );
};

export default Navbar;
