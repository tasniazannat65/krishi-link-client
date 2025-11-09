import React from 'react';
import { Link, NavLink } from 'react-router';
import logo from '../../assets/logo.png'
import Container from '../../Container/Container';
import { FiLogIn } from "react-icons/fi";
import { FaHome, FaUserPlus } from "react-icons/fa";
import { FaSeedling } from "react-icons/fa6";
import MyLink from './MyLink';


const Navbar = () => {
    return (
<div className='bg-[#2e7d321f]'>
    <Container>
           <div className="navbar  poppins-font">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
       <li className='hover:bg-yellow-500 text-green-600 hover:text-white text-xl'>
        <NavLink to='/'>Home</NavLink>
       </li>
       <li className='hover:bg-yellow-500 text-green-600 hover:text-white text-xl'>
        <NavLink to='/all-crops'>All Crops</NavLink>
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
  <div className="navbar-center hidden lg:flex">
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
   
    </ul>
  </div>
  <div className="navbar-end space-x-3">
    <Link className='btn text-lg font-semibold rounded-md border-2  border-[#2E7D32] bg-gradient-to-r from-[#1B5E20] to-[#4CAF50] bg-clip-text text-transparent '>
    <FiLogIn color='#1B5E20'/>
    Login</Link>
    <Link className='btn bg-gradient-to-r from-[#1B5E20] to-[#4CAF50]  text-lg font-semibold rounded-md text-white'>
    <FaUserPlus/>
    Sign Up</Link>
  </div>
</div>
</Container>
</div>
    );
};

export default Navbar;