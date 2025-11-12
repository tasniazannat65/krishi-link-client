import React from 'react';
import { Outlet, useNavigate } from 'react-router';
import Navbar from '../Components/Header/Navbar';
import Footer from '../Components/Footer';
import { Toaster } from 'react-hot-toast';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';


const MainLayout = () => {
    const {state} = useNavigate();
    return (
        <div className='bg-[#cfe2a352]'>
           <header>
            <Navbar/>
           </header>
            <main className='min-h-screen '>
                {
                    state === 'loading' ? <LoadingSpinner/> : <Outlet/>
                }
            </main>
            <footer>
                <Footer/>
            </footer>


        <Toaster/>
            
        </div>
    );
};

export default MainLayout;