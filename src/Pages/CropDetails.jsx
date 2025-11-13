import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { AuthContext } from '../Context/AuthContext';
import Container from '../Container/Container';
import takaImg from '../assets/taka.png'
import { MdEmail, MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { FaLocationDot } from 'react-icons/fa6';
import { IoPerson } from 'react-icons/io5';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

const CropDetails = () => {
    const {id} = useParams();
    const [crops, setCrops] = useState({});
    const [loading, setLoading] =useState(true);
    const {user} = useContext(AuthContext);
    useEffect(()=>{
        fetch(`http://localhost:5000/crops/${id}`, {
            headers: {
                authorization: `Bearer ${user.accessToken}`
            }
        })
        .then(res=>res.json())
        .then(data=>{
            setCrops(data)
            setLoading(false);
            
        })
    },[id, user])
    if(loading){
        return <LoadingSpinner/>
    }
    return (
        <Container>
            <div className='flex gap-8 py-8 md:py-12 lg:py-16 flex-col md:flex-row lg:flex-row items-center '>
            <div className='flex-1'>
                <img className='w-full  rounded-lg' src={crops.image} alt={crops.name} />
            </div>
            <div className='flex-1 space-y-2 lg:space-y-4 poppins-font'>
                <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold text-green-900'>{crops.name}</h2>
                <div className='badge bg-lime-600 text-lg flex  justify-center items-center px-6 py-4 rounded-full font-medium text-white'>{crops.type}</div>
                <p className='text-green-500 font-semibold flex items-center gap-1 text-lg lg:text-xl'>Price: 
                    <img className='w-3 h-3 lg:w-4 lg:h-4' src={takaImg} alt="taka" />
                   <span className='text-gray-600 lg:text-lg text-sm font-medium'> {crops.pricePerUnit} 
                    
                    
                    {crops.unit}</span>
                </p>
                <p className='text-green-500 lg:text-xl text-lg font-semibold flex items-center gap-1'>
                    <MdOutlineProductionQuantityLimits className='text-green-700' />
                    Quantity: <span className='text-gray-600 lg:text-lg text-sm font-medium'>{crops.quantity}</span></p>
                <p className='text-green-500 lg:text-xl text-lg font-semibold flex items-center gap-1'>
                    <FaLocationDot className='text-green-700'/>
                    Location: <span className='text-gray-600 text-sm lg:text-lg font-medium'>{crops.location}</span></p>
                <p className='text-green-500 lg:text-xl text-lg font-semibold flex items-center gap-1'>
                    <MdEmail className='text-green-700'/>
                    Owner Email: <span className='text-gray-600 text-sm lg:text-lg font-medium'>{crops.owner?.ownerEmail}</span></p>
                <p className='text-green-500 text-lg lg:text-xl font-semibold flex items-center gap-1'>
                    <IoPerson className="text-green-700"/>
                    Owner Name:  <span className='text-gray-600 text-sm lg:text-lg font-medium'>{crops.owner?.ownerName}</span></p>


                <p className='text-lg lg:text-xl font-semibold  text-green-500'>Description: <span className='text-gray-600 hind-siliguri-font text-[16px] lg:text-lg font-medium tracking-wide'>
                    {crops.description}
                    </span> </p>
            </div>
            
        </div>
        </Container>
    );
};

export default CropDetails;