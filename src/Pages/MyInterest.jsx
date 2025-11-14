import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Context/AuthContext';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import Container from '../Container/Container';
import { Link } from 'react-router';

const MyInterest = () => {
    const {user} = useContext(AuthContext);
    const [userInterest, setUserInterest] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        fetch('https://fasal-bridge-server.vercel.app/crops',{
            headers: {
                authorization: `Bearer ${user.accessToken}`
            }
        })
        .then(res=>res.json())
        .then(data=>{
            // console.log(data)
            const filterMyCropInterest = data.filter(crop=>{
                const interestsArr = crop.interests || [];
                return interestsArr.some(interest=> interest.userEmail === user.email);
            })
            const myCropInterests = filterMyCropInterest.map(crop=>{
                const interestsData = (crop.interests || []).filter(
                                    interest=> interest.userEmail === user.email

                )
                return interestsData.map(interest => ({
                    interestId: interest._id,
                    cropId: crop._id,
                    cropName: crop.name,
                    ownerName: crop.owner?.ownerName || '',
                    ownerEMail: crop.owner?.ownerEmail || '',
                    quantity: interest.quantity,
                    message: interest.message,
                    status: interest.status || 'pending'

                    
                }))
                
            })
            const finalInterests = [];
            myCropInterests.map(arr=>{
                arr.map(crops=>finalInterests.push(crops))
            })
            const sortingStatus = {
                accepted: 1,
                pending: 2,
                rejected: 3
            }

            finalInterests.sort((a,b)=> sortingStatus[a.status] - sortingStatus[b.status])

            
            setUserInterest(finalInterests);
            setLoading(false);
        })
    },[user])
    if(loading){
        return <LoadingSpinner/>
    }
    return (
        <div className='py-8 md:py-12 lg:py-14 poppins-font'>
            <title>FasalBridge Agro Platform || My Interests</title>
           <Container>
            <h2 className='text-3xl font-bold text-center text-green-800  mb-6'>My Interests</h2>
            {
                userInterest.length === 0 ? (
                    <p className='text-center text-gray-700 font-semibold'>You have not sent any interests yet.</p>
                ) : (
                    <div className='overflow-x-auto'>
                        <table className='max-w-5xl mx-auto border-2 border-green-600'>
                            <thead className='bg-lime-100 text-[#6D4C41]'>
                                <tr>
                                    <th className='py-2 px-4 border-2 border-green-600'>Crop Name</th>
                                    <th className='py-2 px-4 border-2 border-green-600'>Owner Name</th>
                                    <th className='py-2 px-4 border-2 border-green-600'>Quantity</th>
                                    <th className='py-2 px-4 border-2 border-green-600'>Message</th>
                                    <th className='py-2 px-4 border-2 border-green-600'>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    userInterest.map(interest=>(
                                        <tr key={interest.interestId} className='text-gray-700 font-semibold'>
                                            <td className='py-2 px-4 border-2 border-green-600'><Link  to={`/crop-details/${interest.cropId}`}>{interest.cropName}</Link></td>
                                            <td className='py-2 px-4 border-2 border-green-600'>{interest.ownerName}</td>
                                            <td className='py-2 px-4 border-2 border-green-600'>{interest.quantity}</td>
                                            <td className='py-2 px-4 border-2 border-green-600'>{interest.message}</td>
                                            <td className={`py-2 px-4 border-2 border-green-600 ${interest.status === 'accepted' ? 'text-green-600' : interest.status === 'rejected' ? 'text-red-600' : 'text-yellow-600'}`}>
                                                {interest.status}
                                            </td>
                                        </tr>

                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                )
            }
           </Container>
            
        </div>
    );
};

export default MyInterest;