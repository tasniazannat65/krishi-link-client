import React from 'react';
import takaImg from '../assets/taka.png'
import { Link } from 'react-router';


const CropsCard = ({crop}) => {
    
    
    return (
    <div className=' relative border border-green-100  rounded-lg poppins-font shadow-md hover:shadow-2xl hover:-translate-y-2  transition-all transform duration-300 bg-gradient-to-b from-green-50 to-white '>
        
         <div className='absolute -top-4 -left-3 bg-orange-400 shadow-md  z-20 -skew-x-6'>
              <span className=' inline-block transform skew-x-6  text-white text-md font-medium py-2 px-4  '>
                {crop.type}
            </span>
         </div>
        
        <div className='overflow-hidden rounded-t-lg z-10 '>
            <img className='h-[290px] w-full  object-cover transition-transform duration-300 hover:scale-110' src={crop.image} alt={crop.name} />
        </div>
          
        <div className='  p-4  space-y-2'>
            <h3 className='text-xl font-semibold text-green-800 tracking-wide'>{crop.name}</h3>
            <p className='text-lg font-medium text-green-700 flex gap-1 items-center'><span>Price:</span> 
                <img className='w-4 h-4 ' src={takaImg} alt="taka" />
                <span className=' text-gray-500 text-md'>{crop.pricePerUnit} {crop.unit}</span></p>
                <p className='leading-snug line-clamp-2 text-md text-gray-600 '>{crop.description.slice(0, 100)}...</p>
                <Link to={`/crop-details/${crop._id}`} className='btn border-2 py-2 mt-2 rounded-md border-green-600 w-full text-green-700 hover:bg-green-600 transition-all duration-200 hover:text-white text-lg font-semibold bg-white '>View Details</Link>
        </div>


    </div>
  

    );
};

export default CropsCard;