import React, {  useContext, useEffect, useRef, useState } from 'react';
import { AuthContext } from '../Context/AuthContext';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

import Container from '../Container/Container';
import Swal from 'sweetalert2';
import toast from 'react-hot-toast';

const MyPosts = () => {
    const {user} = useContext(AuthContext);
    const [crops, setCrops] = useState([]);
    const [loading, setLoading] = useState(true);
    const [updateCrop, setUpdateCrop] = useState(null);
    const cropModalRef = useRef(null);
    useEffect(()=>{
        if(!user.email){
           return; 
        }
         fetch(`https://fasal-bridge-server.vercel.app/my-posts?email=${user.email}`, {
            headers: {
                authorization: `Bearer ${user.accessToken}`
            }
        })
        .then(res=>res.json())
        .then(data=>{
            setCrops(data);
            
            setLoading(false);
            
        })
       
    },[user])

    const handleUpdate = (e)=>{
        e.preventDefault();
        const image = e.target.image.value;
        const name = e.target.name.value;
        const pricePerUnit = e.target.pricePerUnit.value;
        const quantity = e.target.quantity.value;
        const location = e.target.location.value;
        const updatedCrop = {
            image,
            name,
            pricePerUnit,
            quantity,
            location

        }
        fetch(`https://fasal-bridge-server.vercel.app/crops/${updateCrop._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${user.accessToken}`
            },
            body: JSON.stringify(updatedCrop)
        })
        .then(res=>res.json())
        .then(data=>{
            // console.log(data)
            if(data.modifiedCount){
                toast.success('Crop updated successfully!')
                setCrops(prev=> prev.map(crop=> crop._id === updateCrop._id ? {...crop, ...updatedCrop} : crop

                ))
                setUpdateCrop(null)


            }
        })

    }
    const handleCropModalOpen = ()=>{
        cropModalRef.current.showModal();
    }

    const handleDelete = (id)=>{
        Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {
    fetch(`https://fasal-bridge-server.vercel.app/crops/${id}`, {
        method: 'DELETE',
        headers: {
                authorization: `Bearer ${user.accessToken}`
            }
    })
    .then(res=>res.json())
    .then(data=>{

        if(data.deletedCount){
             Swal.fire({
      title: "Deleted!",
      text: "Your crop has been deleted.",
      icon: "success"
    });
    const remainingCrops = crops.filter(crop=> crop._id !== id);

 setCrops(remainingCrops)
        }
       
    })
   
  
  }
});
    }
    if(loading){
        return <LoadingSpinner/>
    }
    return (
      <Container>
        <title>FasalBridge Agro Platform || My Posts</title>
          <div className='text-center lg:pt-10 md:pt-8 pt-6'>
                     <h2 className='font-bold text-2xl md:text-3xl  lg:text-4xl text-[#1B5E20]'>My Crop <span className='text-[#F9A825]'> Posts </span></h2>
            <p className=' font-medium text-lg  md:text-xl lg:text-xl text-gray-600 hind-siliguri-font mt-5'>Here you can manage all crops you have added.</p>
                </div>
        <div className='p-4 py-8 poppins-font'>
            <div className='hidden md:block lg:block overflow-x-auto'>
                <table className='min-w-full border-2 border-green-600'>
                    <thead className='bg-lime-100'>
                        <tr className='text-[#6D4C41] text-lg'>
                            <th className='py-2 px-4 border-2 border-green-600 font-semibold'>Image</th>
                            <th className='py-2 px-4 border-2 border-green-600 font-semibold'>Name</th>
                            <th className='py-2 px-4 border-2 border-green-600 font-semibold'>Price</th>
                            <th className='py-2 px-4 border-2 border-green-600 font-semibold'>Quantity</th>
                            <th className='py-2 px-4 border-2 border-green-600 font-semibold'>Location</th>
                            <th className='py-2 px-4 border-2 border-green-600 font-semibold'>Actions</th>
                        </tr>

                    </thead>
                    <tbody>
                        {
                            crops.map(crop=>(
                                <tr key={crop._id} className='text-center border-t'>
                                    <td className='py-2 px-4 border'>
                                        <img src={crop.image} alt={crop.name} className='w-16 h-16 object-cover mx-auto rounded' />

                                    </td>
                                    <td className='py-2 px-4 border-2 border-green-600 text-gray-700 font-medium'>{crop.name}</td>
                                    <td className='py-2 px-4 border-2 border-green-600 text-gray-700 font-medium'>{crop.pricePerUnit} / {crop.unit}</td>
                                    <td className='py-2 px-4 border-2 border-green-600 text-gray-700 font-medium'>{crop.quantity}</td>
                                    <td className='py-2 px-4 border-2 border-green-600 text-gray-700 font-medium'>{crop.location}</td>
                                    <td className='py-2 px-4 border md:space-y-2 space-x-2 '>
                                        <button  onClick={()=>{
                                            setUpdateCrop(crop)
                                            handleCropModalOpen()
                                        }} className='px-3 py-2 bg-green-600 text-white rounded-md hover:bg-green-700'>Edit</button>
                                        <button onClick={()=>handleDelete(crop._id)} className='px-3 py-2 bg-red-600 rounded-md text-white hover:bg-red-700'>Delete</button>
                                    </td>


                                </tr>
                            ))
                        }
                    </tbody>

                </table>

            </div>

        </div>
        <div className='space-y-3 pb-10 block md:hidden lg:hidden'>
            {
                crops.map(crop=>(
                    <div key={crop._id} className='border-2 border-green-600 rounded-lg p-4 shadow bg-white flex flex-col space-y-2 '><img src={crop.image} alt={crop.name} className='w-full h-44 object-cover rounded-md' />
                    <h3 className='font-bold text-lg text-green-700'>{crop.name}</h3>
                    <p className='text-[16px] text-green-600 font-medium'>Price: <span className='text-gray-600'>{crop.pricePerUnit} / {crop.unit}</span></p>
                    <p className='text-[16px] text-green-600 font-medium'>Quantity: <span className='text-gray-600'>{crop.quantity}</span></p>
                    <p className='text-[16px] text-green-600 font-medium'>Location: <span className='text-gray-600'>{crop.location}</span></p>
                    <div className='flex space-x-2 mt-2'>
                        <button onClick={()=>{
                            setUpdateCrop(crop)
                            handleCropModalOpen
                        }} className='px-3 flex-1 py-2 bg-green-600 text-white rounded-md hover:bg-green-700'>Edit</button>
                        <button onClick={()=>handleDelete(crop._id)} className='px-3 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 flex-1'>Delete</button>
                    </div>

                    </div>
                ))
            }

        </div>

        

       <dialog ref={cropModalRef} className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
    <h3 className="font-bold text-green-800 text-lg">Edit Crop</h3>
   
    <div className="modal-action">
      <form onSubmit={handleUpdate} className='space-y-3'>
        <label className='text-gray-900 font-semibold'>Crop Image URL</label>
        <input type="url" name='image' defaultValue={updateCrop?.image || ''}
        className='w-full border rounded-md p-2'
        placeholder='https://example.com/image.jpg' required />

        <label className='text-gray-900 font-semibold'>Crop Name</label>
        <input type="text" name='name' defaultValue={updateCrop?.name || ''}
        className='w-full border rounded-md p-2'
        placeholder='Crop name' required />
           <label className='text-gray-900 font-semibold'>Crop Price</label>
        <input type="number" name='pricePerUnit' defaultValue={updateCrop?.pricePerUnit || ''}
        className='w-full border rounded-md p-2'
        placeholder='Price per unit' required />
           <label className='text-gray-900 font-semibold'>Crop Quantity</label>

        <input type="number" name='quantity' defaultValue={updateCrop?.quantity || ''}
        className='w-full border rounded-md p-2'
        placeholder='Quantity' required />

           <label className='text-gray-900 font-semibold'>Location</label>

        <input type="text" name='location' defaultValue={updateCrop?.location || ''}
        className='w-full border rounded-md p-2'
        placeholder='Location' required />
        <div className='flex justify-end space-x-2 pt-2'>
            <button onClick={()=>{
                setUpdateCrop(null)
                cropModalRef.current.close()
            }

            } type='button'  className='px-4 py-2 bg-gray-600 text-white rounded-md'>Cancel</button>
            <button type='submit'  className='px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md'>Update</button>

        </div>


        
        
      </form>
    </div>
  </div>
</dialog>
   
   
      </Container>
    );
};

export default MyPosts;