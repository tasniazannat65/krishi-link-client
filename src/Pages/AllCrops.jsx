import React from 'react';
import { useLoaderData } from 'react-router';
import CropsCard from '../Components/CropsCard';
import Container from '../Container/Container';

const AllCrops = () => {
    const crops = useLoaderData();
    
    
    return (
        <div>
         <Container>
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