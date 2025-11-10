import React from 'react';
import { useLoaderData } from 'react-router';
import CropsCard from '../Components/CropsCard';
import Container from '../Container/Container';

const AllCrops = () => {
    const crops = useLoaderData();
    
    
    return (
        <div>
         <Container>
            <h2 className='font-bold text-2xl md:text-3xl lg:text-4xl text-center py-7 text-[#1B5E20] poppins-font'>🌿 Explore All <span className='text-[#F9A825]'>Available Crops</span></h2>
            <p className='text-center font-semibold text-lg  md:text-xl lg:text-xl text-gray-400 hind-siliguri-font'>Find fresh, high-quality crops directly from trusted farmers across the country. Browse, compare prices, and connect instantly through FasalBridge.</p>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-8 md:py-10 lg:py-14'>
            {
                crops.map(crop=> <CropsCard key={crop._id} crop={crop}/>)
            }
           </div>
         </Container>
        </div>
    );
};

export default AllCrops;