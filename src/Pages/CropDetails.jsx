import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { AuthContext } from '../Context/AuthContext';
import Container from '../Container/Container';
import takaImg from '../assets/taka.png'
import { MdEmail, MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { FaLocationDot } from 'react-icons/fa6';
import { IoPerson } from 'react-icons/io5';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';

const CropDetails = () => {
    const {id} = useParams();
    const [crop, setCrop] = useState({});
    const [loading, setLoading] =useState(true);
    const {user} = useContext(AuthContext);
    const [quantity, setQuantity] = useState(1);
    const [message, setMessage ] = useState('')
    const [isInterest, setIsInterest] = useState(false);
    useEffect(()=>{
        fetch(`https://fasal-bridge-server.vercel.app/crops/${id}`, {
            headers: {
                authorization: `Bearer ${user.accessToken}`
            }
        })
        .then(res=>res.json())
        .then(data=>{
            setCrop(data)
            setLoading(false);
            if(data.interests?.some(interest=> interest.userEmail === user.email)){
                setIsInterest(true);
            }
            
        })
    },[id, user])
    const handleInterestSubmit = async(e)=>{
        e.preventDefault();
        if(quantity < 1){
            toast.error('Quantity must be at least 1');
            return;
        }
       const result = await Swal.fire({
  title: (`Send interest for ${quantity} ${crop.unit}?`),
  icon: "question",
  showCancelButton: true,
  confirmButtonColor: "#276221",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, Send"
})
 if (!result.isConfirmed) {
 return;
  }
 
        const interestData = {
            id: crop._id,
            userEmail: user.email,
            userName: user.displayName,
            quantity,
            message,
            status: 'pending'

        }
         fetch(`https://fasal-bridge-server.vercel.app/crops/${crop._id}/interest`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${user.accessToken}`
            },
            body: JSON.stringify(interestData)
         })
         .then(res=>res.json())
         .then(data=>{
           
            if(data.modifiedCount){
                       Swal.fire({
                      title: "Interest Sent!",
                      icon: "success",
                      timer: 1500,
                      showConfirmButton: false,
                    });
                setIsInterest(true);
            }
         })
    }
    const handleStatusUpdate = (interestId, newStatus, interestQuantity)=>{
             Swal.fire({
  title: (`Are you sure to ${newStatus}`),
  showCancelButton: true,
  confirmButtonColor: "#276221",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes"
})
.then((result)=>{
    if(!result.isConfirmed) return;
     fetch(`https://fasal-bridge-server.vercel.app/crops/${crop._id}/interest/${interestId}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${user.accessToken}`
            },
            body: JSON.stringify({status: newStatus})

        })
        .then(res=>res.json())
        .then(data=>{
            
            
            if(data.modifiedCount > 0){
                toast.success(`Interest ${newStatus}`)
                setCrop(prev=> ({
                    ...prev,
                    quantity: newStatus === 'accepted' ? prev.quantity - interestQuantity : prev.quantity,
                    interests: prev.interests.map((interest)=> interest._id.toString() === interestId ? {...interest, status: newStatus} : interest) 
                }))
            }
        })
})

       
    }

    if(loading){
        return <LoadingSpinner/>
    }
    return (
        <Container>
            <div className='flex gap-8 py-8 md:py-12 lg:py-16 flex-col  lg:flex-row items-center '>
            <div className='flex-1'>
                <img className='w-full  rounded-lg' src={crop.image} alt={crop.name} />
            </div>
            <div className='flex-1 space-y-2 lg:space-y-4 poppins-font'>
                <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold text-green-900'>{crop.name}</h2>
                <div className='badge bg-lime-600 text-lg flex  justify-center items-center px-6 py-4 rounded-full font-medium text-white'>{crop.type}</div>
                <p className='text-green-500 font-semibold flex items-center gap-1 text-lg lg:text-xl'>Price: 
                    <img className='w-3 h-3 lg:w-4 lg:h-4' src={takaImg} alt="taka" />
                   <span className='text-gray-600 lg:text-lg text-sm font-medium'> {crop.pricePerUnit} 
                    
                    
                    {crop.unit}</span>
                </p>
                <p className='text-green-500 lg:text-xl text-lg font-semibold flex items-center gap-1'>
                    <MdOutlineProductionQuantityLimits className='text-green-700' />
                    Quantity: <span className='text-gray-600 lg:text-lg text-sm font-medium'>{crop.quantity}</span></p>
                <p className='text-green-500 lg:text-xl text-lg font-semibold flex items-center gap-1'>
                    <FaLocationDot className='text-green-700'/>
                    Location: <span className='text-gray-600 text-sm lg:text-lg font-medium'>{crop.location}</span></p>
                <p className='text-green-500 lg:text-xl text-lg font-semibold flex items-center gap-1'>
                    <MdEmail className='text-green-700'/>
                    Owner Email: <span className='text-gray-600 text-sm lg:text-lg font-medium'>{crop.owner?.ownerEmail}</span></p>
                <p className='text-green-500 text-lg lg:text-xl font-semibold flex items-center gap-1'>
                    <IoPerson className="text-green-700"/>
                    Owner Name:  <span className='text-gray-600 text-sm lg:text-lg font-medium'>{crop.owner?.ownerName}</span></p>


                <p className='text-lg lg:text-xl font-semibold  text-green-500'>Description: <span className='text-gray-600 hind-siliguri-font text-[16px] lg:text-lg font-medium tracking-wide'>
                    {crop.description}
                    </span> </p>
            </div>
            
        </div>
        {
            crop.owner?.ownerEmail === user.email ? (
                <div className='max-w-3xl mx-auto'>
                    <h3 className='text-3xl font-bold text-center text-green-800 mb-6'>Received Interests</h3>
                    <div className='mb-8 md:mb-12 lg:mb-14 overflow-x-auto '>
                        <table>
                            <thead className='bg-lime-200 text-lg text-[#6D4C41]'>
                                <tr>
                                    <th className='py-2 px-4 border-2 border-green-500  text-center'>Buyer Name</th>
                                    <th className='py-2 px-4 border-2 border-green-500  text-center'>Message</th>
                                    <th className='py-2 px-4 border-2 border-green-500  text-center'>Quantity</th>
                                    <th className='py-2 px-4 border-2 border-green-500  text-center'>Status</th>
                                    <th className='py-2 px-4 border-2 border-green-500  text-center'>Action</th>
                                </tr>

                            </thead>
                            <tbody>
                                {
                                    crop?.interests?.length ? (
                                        crop.interests.map((interest)=>(
                                            <tr key={interest._id}>
                                                <td className='py-2 px-4 border-2 text-gray-600 font-semibold border-green-500'>{interest.userName}</td>
                                                <td className='py-2 px-4 border-2 text-gray-600 font-semibold border-green-500'>
                                                    {interest.message}
                                                </td>
                                                <td className='py-2 px-4 border-2 text-gray-600 font-semibold border-green-500'>{interest.quantity}</td>
                                                <td className='py-2 px-4 border-2  text-gray-600 font-semibold border-green-500 '>
                                                    <span className={interest.status === 'accepted' ? 'text-green-600' : interest.status === 'rejected' ? 'text-red-600' : 'text-yellow-600'}
                                                    >{interest.status}</span>
                                                </td>
                                                <td className='py-2 px-4 border-2 border-green-500 space-x-3 space-y-3 lg:space-y-0'>
                                                    {
                                                        interest.status === 'pending' && (
                                                            <>
                                                         <button onClick={()=>handleStatusUpdate(interest._id, 'accepted', interest.quantity)} className='px-3 py-1 bg-green-600 text-white  rounded-md hover:bg-green-700'>Accept</button>
                                                    <button  onClick={()=>handleStatusUpdate(interest._id, 'rejected', interest.quantity)}  className='px-3 py-1 bg-red-600 text-white  rounded-md hover:bg-red-700'> Reject</button>

                                                            
                                                            </>
                                                        )
                                                    }

                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td className='text-center py-4 text-gray-800  font-medium' colSpan='5'>No interests yet for this crop.</td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                    </div>

                </div>

            ) : 
         (
            <div className='bg-yellow-500 rounded-lg shadow-md p-6 my-8 md:my-12 lg:my-16  max-w-4xl mx-auto'>
                {
                    isInterest ? (
                        <p className='text-green-800 text-xl font-semibold text-center'>You've already sent an interest for this crop.</p>
                    ) : (
                        <form onSubmit={handleInterestSubmit} className='space-y-4'>
                            <div>
                                <label className='block text-white font-semibold mb-1'>Quantity ({crop.unit})</label>
                                <input type="number" value={quantity} onChange={(e)=> setQuantity(parseInt(e.target.value))}
                                min={1}
                                className='w-full  rounded-md bg-white p-2' required
                                />
                            </div>
                                 <div>
                                <label className='block text-white font-semibold mb-1'>Message</label>
                                <input type="text" value={message} onChange={(e)=> setMessage(e.target.value)}
                                placeholder={`Interested in ${quantity} ${crop.unit}`}
                                className='w-full bg-white rounded-md p-2'
                                />
                            </div>
                            <p className='text-white font-semibold'>
                                Total Price: <span className='text-green-800 font-bold'>{quantity * crop.pricePerUnit} BDT</span>
                            </p>
                            <button type='submit' className='w-full text-lg bg-gradient-to-r from-green-600 to-lime-500 text-white py-2 rounded-md font-semibold hover:from-green-700 hover:to-lime-600 transition'>Submit Interest</button>

                        </form>
                    )
                }

            </div>
        )
        }
      
      

        </Container>
    );
};

export default CropDetails;