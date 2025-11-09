import React from 'react';
import Container from '../Container/Container';
import { Link } from 'react-router';
import logo from '../assets/logo.png'
import { FaFacebook, FaLocationDot, FaXTwitter } from 'react-icons/fa6';
import { IoLogoYoutube } from 'react-icons/io';
import { BsInstagram } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { FaPhoneAlt } from 'react-icons/fa';

const Footer = () => {
    return (
       <div>
         <div className='poppins-font bg-green-800 py-6 md:py-8 lg:py-14'>
            <Container>
  <footer className='footer grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 '>
     <div className='flex flex-col lg:w-[310px] md:w-[280px]'>
               <div className="  flex gap-2 items-center">
    <img src={logo} className='w-8 h-8' alt="logo" />
    <Link to='/' className='text-xl font-bold text-green-700' >
    Fasal<span className='text-[#FFB300]'>Bridge</span>
    </Link>
    
    </div>
    <p className='text-lg hind-siliguri-font text-gray-300 font-semibold  mt-3'>FasalBridge unites farmers, buyers, and agri-experts to drive rural growth through fair trade, knowledge, and sustainable innovation.</p>
   </div>
    <nav className='lg:ml-16 ml-0 md:ml-12 '>
    <h6 className="text-xl font-semibold text-[#FFB300]">Services</h6>
    <a className="link link-hover text-white hover:text-indigo-600">Branding</a>
    <a className="link link-hover text-white hover:text-indigo-600">Design</a>
    <a className="link link-hover text-white hover:text-indigo-600">Marketing</a>
    <a className="link link-hover text-white hover:text-indigo-600">Advertisement</a>
  </nav>
    <nav>
    <h6 className="text-xl font-semibold text-[#FFB300] ">Legal</h6>
    <a className="link link-hover text-white hover:text-indigo-600">Terms of use</a>
    <a className="link link-hover text-white hover:text-indigo-600">Privacy policy</a>
    <a className="link link-hover text-white hover:text-indigo-600">Cookie policy</a>
  </nav>
   
   <nav className='md:text-center'>
    <h6 className="text-xl font-semibold text-[#FFB300]">Contact Us</h6>
    <a className="link link-hover text-white flex gap-2 items-center">
        <MdEmail size={16}/>
        <span>Email: fasal@bridge.com</span></a>
    <a className="link link-hover text-white flex gap-2 items-center">
        <FaPhoneAlt size={16} />

        <span>Phone: +880 2234 903414</span>
    </a>
    <a className="link link-hover text-white flex gap-2 items-center">
        <FaLocationDot size={16}/>

        <span>Address: Dhaka, Bangladesh</span>
    </a>
    
  </nav>
  <nav className='space-y-2'>
    <h6 className=" text-[#FFB300] text-xl font-semibold ">Social</h6>
    <div className='flex gap-3 text-white'>
        <a className='rounded-full bg-amber-400 p-2'><FaFacebook className='hover:scale-110 transition  duration-200 ease-in-out' size={20}/></a>
    <a className='rounded-full bg-amber-400 p-2'><IoLogoYoutube className='hover:scale-110 transition  duration-200 ease-in-out' size={20}/></a>
    <a className='rounded-full bg-amber-400 p-2'><FaXTwitter className='hover:scale-110 transition  duration-200 ease-in-out' size={20}/></a>
    <a className='rounded-full bg-amber-400 p-2'><BsInstagram className='hover:scale-110 transition  duration-200 ease-in-out' size={20}/></a>
    </div>
     <fieldset className="w-70">
      <label className='text-white'>Enter your email address</label>
      <div className="join mt-3">
        <input
          type="text"
          placeholder="username@site.com"
          className="input input-bordered join-item" />
        <button className=" px-4  bg-[#FFB300] text-green-700 font-semibold join-item rounded-r-full">Subscribe</button>
      </div>
    </fieldset>

  </nav>
  </footer>
  
            </Container>
            
           
            
        </div>
         <div className='bg-[#FFB300] p-4 lg:p-5  poppins-font'>
                <p className='text-lg lg:text-xl text-green-700 font-bold text-center'>Copyright © 2025 - All right reserved by FasalBridge.</p>
            </div>
       </div>
        
    );
};

export default Footer;