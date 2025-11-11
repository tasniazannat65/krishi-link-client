import React from 'react';
import img1 from '../assets/rice-field.svg'


const NoSearchFound = ({reloadCrops}) => {
    return (
       
         <div className='flex flex-col min-h-screen items-center justify-center mb-10 text-center'>
            <img src={img1} alt='No Crops Found' className='w-[250px] md:w-[350px] lg:w-[420px] object-contain' />
            <h2 className='text-3xl font-bold text-green-800 mt-6'>No Crops Found</h2>
            <p className='text-gray-400 font-semibold text-lg'>The field is empty now. Try another search 🌱</p>
            <button onClick={reloadCrops} className='cursor-pointer mt-6 px-6 py-3 rounded-md bg-gradient-to-r from-green-500 to-green-700 text-white font-semibold hover:scale-105 transition-transform duration-300 shadow-lg'>Refresh Search</button>

        </div>
       
    
    );
};

export default NoSearchFound;

   


