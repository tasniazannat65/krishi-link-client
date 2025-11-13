import React, {  useContext, useEffect } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { useLocation } from 'react-router';
import toast from 'react-hot-toast';
import forgetImg from '../assets/forget.png'


const ForgetPassword = () => {
    const { forgetPasswordReset, emailRef} = useContext(AuthContext);
    const location = useLocation();
    const receivedEmail = location.state?.email || '';
    useEffect(()=>{
        if(emailRef.current){
            emailRef.current.value = receivedEmail;

        }
    },[emailRef, receivedEmail])
    const handleResetPassword = (e)=>{
        e.preventDefault();
        const email = emailRef.current?.value;
        if(!email){
            toast.error('Please enter your email!')
            return;
        }
        forgetPasswordReset(email)
        .then(()=>{
            toast.success('Check your gmail to reset password')
            window.open = ('https://mail.google.com/', '_blank')
        })
        .catch(error=>{
            toast.error(error.message);
        })
    }
    return (
        
           
          
                                   <div className="hero bg-[#cfe2a352] min-h-screen py-10">
                 
          <div className="hero-content flex-col md:flex-row lg:flex-row gap-3 lg:gap-5 items-center ">
                               <div >
                <img className='  lg:w-[600px]' src={forgetImg} alt="forget password" />
            </div>

            
            
            <div className=" card bg-green-800  w-[600px] max-w-sm shrink-0 shadow-lg hover:shadow-2xl">
              <div className="card-body">
                <h2 className='font-bold text-lg md:text-xl lg:text-2xl text-center text-white '>Forget Password</h2>
               <form onSubmit={handleResetPassword}>
                 <fieldset className="fieldset">
                  <label className="label text-white font-semibold text-lg">Email</label>
                  <input type="email" name='email' ref={emailRef} className="input text-gray-500 w-full" placeholder="example@gmail.com" required/>
                 
                  <button type='submit' className="btn bg-gradient-to-r from-green-500 to-lime-400 hover:from-green-400  hover:to-lime-700 text-white font-semibold text-lg mt-4 hover:scale-105 transition-transform duration-200">Reset Password</button>
                 
      
                </fieldset>
               </form>
              </div>
            </div>
          </div>
        </div>

            
           
            
        
    );
};

export default ForgetPassword;