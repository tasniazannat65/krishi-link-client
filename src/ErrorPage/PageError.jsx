import React from 'react';
import { Link } from 'react-router';
import bgImg from '../assets/error-bg.jpg'

const PageError = () => {
    return (
    <div className='poppins-font'>
        <div className='relative  bg-cover bg-center min-h-screen flex justify-center items-center' style={{backgroundImage: `url(${bgImg})`}}>
            <div className='absolute inset-0 bg-black opacity-60'>

            </div>
            <div className='relative z-10 text-center text-white px-6'>
                <div className='text-2xl md:text-4xl lg:text-5xl animate-bounce'>🍀</div>
                <h1 className='text-3xl md:text-6xl lg:text-8xl font-bold text-[#2E7D32]'>404</h1>
                <h2 className='text-2xl md:text-4xl lg:text-5xl font-semibold mt-4 text-[#FFB300]'>Page Not Found</h2>
                <p className='mt-2 mb-6 text-lg md:text-xl lg:text-2xl text-gray-300'>Oopps! Looks like this page doesn't exist.</p>
                <Link to='/' className='btn bg-gradient-to-r from-[#4CAF50] via-[#F9A825] to-[#1B5E20] text-white font-semibold px-6 py-3 rounded-md transition-all duration-300 hover-bg-gradient-to-r
                hover:from-green-800 hover:to-green-700 animate-pulse text-xl'>Go Home</Link>
            </div>
        </div>

    </div>
    );
};

export default PageError;