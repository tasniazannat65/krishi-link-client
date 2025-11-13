import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router';
import logo from '../../assets/logo.png'
import Container from '../../Container/Container';
import { FiLogIn } from "react-icons/fi";
import { FaHome, FaShoppingCart, FaUserPlus } from "react-icons/fa";
import { FaSeedling } from "react-icons/fa6";
import MyLink from './MyLink';
import { AuthContext } from '../../Context/AuthContext';
import { IoLogOut } from 'react-icons/io5';


const Navbar = () => {
  const {user, signOutUser} = useContext(AuthContext);

    return (
<div className='bg-[#cfe2a3c4] relative'>
    <Container>
           <div className="navbar  poppins-font">
  <div className="navbar-start">
    <div className="dropdown lg:hidden md:hidden">
      <div tabIndex={0} role="button" className="btn btn-ghost md:hidden lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow">
       <li className='hover:bg-yellow-500 text-green-600 hover:text-white text-xl'>
        <NavLink to='/'>Home</NavLink>
       </li>
       <li className='hover:bg-yellow-500 text-green-600 hover:text-white text-xl'>
        <NavLink to='/all-crops'>All Crops</NavLink>
       </li>
          <li>
        <Link to='/register' className='btn bg-gradient-to-r from-[#1B5E20] to-[#4CAF50]   text-lg font-semibold rounded-md text-white'>
    <FaUserPlus/>
    Sign Up</Link>
       </li>
      </ul>
    </div>
    <div className="  flex gap-2 items-center">
    <img src={logo} className='w-8 h-8' alt="logo" />
    <Link to='/' className='text-xl font-bold text-[#2E7D32]' >
    Fasal<span className='text-[#FFB300]'>Bridge</span>
    </Link>
    </div>
    
  </div>
  <div className="navbar-center items-center hidden md:flex lg:flex">
    <ul className="space-x-3 menu-horizontal px-1">
         <li className='flex items-center gap-1'>
            <FaHome  color='#6D4C41'/>
        <MyLink to='/' >
        
        Home</MyLink>
       </li>
       <li className='flex items-center gap-1'>
        <FaSeedling color='#4CAF50'/>
        <MyLink to='/all-crops'>All Crops</MyLink>
       </li>
       {
        user && (
          <div className='flex items-center gap-2'>
             <li className='flex items-center gap-1'>
            <FaShoppingCart color='#212121' />
                <MyLink to="/add-crops">
                
                   Add Crops
                </MyLink>
              </li>
             <li className='flex items-center gap-1'>
            <FaShoppingCart color='#212121' />
                <MyLink to="/my-posts">
                
                   My Posts
                </MyLink>
              </li>

          </div>
              
              
        )
          
       }
      
   
    </ul>
  </div>

 
  <div className='navbar-end'>
     {
    user ? (
       <div className=" dropdown dropdown-end  z-50">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-9 border-2 border-gray-300 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  referrerPolicy="no-referrer"
                  src={user.photoURL || "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"}
                />
              </div>
            </div>
            <ul
              tabIndex="-1"
              className="menu  menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow"
            >
              <div className=" pb-3 border-b border-b-gray-200">
                <li className="text-sm font-bold text-green-600 text-center">{user.displayName}</li>
                <li className="text-xs text-gray-600 text-center">{user.email}</li>
              </div>
             

             
              <li>
                  <button onClick={signOutUser} to='/login' className='btn text-lg font-semibold rounded-md border-2  border-[#2E7D32] bg-gradient-to-r from-[#1B5E20] to-[#4CAF50] bg-clip-text text-transparent '>
    <IoLogOut color='#1B5E20'/>

    Log Out</button>
              </li>
            </ul>
        
     
          </div>
          
        
    ) : (
      <div className="flex gap-1 ">
    <Link to='/login' className='btn text-[16px] font-semibold rounded-md border-2  border-[#2E7D32] bg-gradient-to-r from-[#1B5E20] to-[#4CAF50] bg-clip-text text-transparent '>
    <FiLogIn color='#1B5E20'/>
    Login</Link>

  
    
    
    
  
  </div>
    )
  }
   <div className='lg:block md:block hidden'>
    <Link to='/register' className='btn   bg-gradient-to-r from-[#1B5E20] to-[#4CAF50] text-[16px] font-semibold rounded-md text-white'>
     <FaUserPlus/>
    Sign Up

    </Link>
   </div>
  </div>
 
  
</div>
</Container>
</div>
    );
};

export default Navbar;