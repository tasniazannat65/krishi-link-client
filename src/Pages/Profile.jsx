import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Context/AuthContext';
import toast from 'react-hot-toast';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import Container from '../Container/Container';

const Profile = () => {
    const {user} = useContext(AuthContext);
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);
    const [editProfile, setEditProfile] = useState(false);

    useEffect(()=>{
        if(!user.email){
            
            return;
        }
         fetch(`http://localhost:5000/users?email=${user.email}`, {
            headers: {
                authorization: `Bearer ${user.accessToken}`
            }
        })
        .then(res=>res.json())
        .then(data=>{
            
            
            setProfile(data)
            setLoading(false)
        })
    },[user])
    
    const handleProfileUpdate = (e)=>{
        e.preventDefault();
        const displayName = e.target.displayName.value;
        const photoURL = e.target.photoURL.value;
        const email = e.target.email.value;
        const updateInfo = {
            displayName,
            photoURL,
            email
        }
        fetch(`http://localhost:5000/users/${profile._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                 authorization: `Bearer ${user.accessToken}`


            },
            body: JSON.stringify(updateInfo)
        })
        .then(res=>res.json())
        .then(data=>{
            
            if(data.modifiedCount){
                toast.success('Profile updated successfully!')
                setProfile(prev=> ({...prev, ...updateInfo}))
                setEditProfile(false);

            }
        })
       
    }
     if(loading){
            return <LoadingSpinner/>
        }
    
    return (
        <Container>
            <div className='lg:py-16  md:py-12 py-8'>
           
                <div className='bg-white  shadow-md rounded-lg p-6 flex max-w-3xl mx-auto flex-col items-center'>
                    <img src={profile?.photoURL || 'default-avatar.png'} alt='profile' className='w-24 h-24 rounded-full border-4 border-green-600 mb-4' />
                   <h2 className='text-xl font-bold text-green-700'>{profile?.displayName }</h2>

                   <p className='text-gray-700 text-lg font-semibold'>{profile?.email}</p>
                   <button onClick={()=> setEditProfile(true)} className='mt-3 px-4 py-2 bg-green-700 text-white rounded-md  hover:bg-green-800 text-[16px] font-semibold'>Edit Profile</button>

                </div>


                

   {
    editProfile && profile && (
        <div className='bg-lime-700 p-7 my-10 max-w-5xl mx-auto space-y-3'>
     <form onSubmit={handleProfileUpdate} className='mt-8'>
         <fieldset className="fieldset">
          <label className="label font-semibold text-white text-xl">Name</label>
          <input type="text" name='displayName' defaultValue={profile?.displayName || ''} className="input w-full  rounded-md border-gray-300  " placeholder="Enter Your Name" required/>
          <label className="label font-semibold text-white text-xl">Photo URL</label>
          <input type="text" name='photoURL' defaultValue={profile?.photoURL || ''} className="input w-full  rounded-md border-gray-300 " placeholder="Photo URL" required/>
          <label className="label font-semibold text-white text-xl">Email</label>
          <input type="email" name='email' defaultValue={profile?.email || '' } className="input w-full  rounded-md border-gray-300 " placeholder="example@gmail.com" required />

   
<div className='flex space-x-3 mt-4'>
              <button type='submit' className="flex-1 btn bg-yellow-500 text-white font-semibold text-lg w-full hover:bg-yellow-600 transition-colors duration-200  mt-4">Submit</button>
<button onClick={()=> setEditProfile(false)}  className="flex-1 btn bg-gray-500 text-white font-semibold text-lg w-full hover:bg-gray-600 transition-colors duration-200  mt-4">Cancel</button>
    </div>        
        

        </fieldset>

       </form>
  </div>
    ) 
   }

  
      

         

   


        </div>
        </Container>
    );
};

export default Profile;