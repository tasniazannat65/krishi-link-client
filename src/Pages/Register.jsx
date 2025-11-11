import React from 'react';
import bgImg from '../assets/registerbg.jpg'
import { Link } from 'react-router';
import img from '../assets/farmer.webp'

const Register = () => {
    return (
       
         <div className='relative bg-cover bg-center py-16  flex justify-center items-center poppins-font px-4' style={{backgroundImage: `url(${bgImg})`}}>
            <div className='absolute inset-0 bg-gradient-to-br from-black/70 to-green-900/40 '></div>
            <div className='relative z-10 bg-white/95 p-6  flex flex-col md:flex-row lg:flex-row gap-4 rounded-xl shadow-2xl hover:shadow-lg transition-shadow duration-300 max-w-5xl w-full items-center'>
                <div className='flex flex-col items-center justify-center text-center md:w-1/2 lg:w-1/2'>
                    <img className='rounded-lg w-full h-[380px] object-cover shadow-md' src='https://www.shutterstock.com/image-photo/farmer-planting-on-organic-paddy-600nw-497587918.jpg' alt="farmers" />
                    <h4 className='font-bold text-xl md:text-2xl lg:text-2xl text-[#6D4C41] mt-5 tracking-wide'>Join FasalBridge – Grow Together with Smart Farming!</h4>
                  
                    
                </div>
                
                    
                       <div className="relative rounded-xl md:w-1/2 lg:w-1/2 p-6 md:p-7 lg:p-8 shadow-inner bg-white w-full   border-[3px] border-[#6D4C41]">
     
        <img className='absolute -top-4 md:-top-6 lg:-top-6 rounded-full left-1/2 transform -translate-x-1/2 w-20 h-20' src={img} alt="farmer" />
        
       <form className='mt-8'>
         <fieldset className="fieldset">
          <label className="label font-semibold text-gray-500 text-[16px]">Name</label>
          <input type="text" name='displayName' className="input w-full  rounded-md border-gray-300 focus:border-green-600 focus:ring-green-500" placeholder="Enter Your Name" required/>
          <label className="label font-semibold text-gray-500 text-[16px]">Photo URL</label>
          <input type="text" name='photoURL' className="input w-full  rounded-md border-gray-300 focus:border-green-600 focus:ring-green-500" placeholder="Photo URL" required/>
          <label className="label font-semibold text-gray-500 text-[16px]">Email</label>
          <input type="email" name='email' className="input w-full  rounded-md border-gray-300 focus:border-green-600 focus:ring-green-500" placeholder="example@gmail.com" required />
          <label className="label font-semibold text-gray-500 text-[16px]">Password</label>
          <input type="password" name='password' className="input w-full  rounded-md border-gray-300 focus:border-green-600 focus:ring-green-500" placeholder="*******" required/>
          
          <button className="btn bg-[#6D4C41] text-white font-semibold text-lg w-full hover:bg-[#8D6E63] transition-colors duration-200  mt-4">Register</button>
          <div className='flex items-center gap-2'>
            <div className='w-full  border-t-2 border-t-gray-400'></div>
            <span className='font-medium text-[#6D4C41]'>OR</span>
            <div className='w-full border-t-2 border-t-gray-400'></div>
          </div>
          {/* Google */}
<button className="btn bg-white text-black border border-gray-300 hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center gap-2 w-full">
  <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
  Login with Google
</button>
<p className='text-[15px] text-center font-medium text-[#212121]'>Already have an account?Please <Link className='text-green-800 hover:text-[#0288D1] hover:underline' to='/login'>Login</Link></p>
        </fieldset>
       </form>
      
    </div>
                
            </div>
            
        </div>
      
    );
};

export default Register;