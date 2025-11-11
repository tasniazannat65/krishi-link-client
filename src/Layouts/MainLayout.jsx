import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Header/Navbar';
import Footer from '../Components/Footer';


const MainLayout = () => {
    return (
        <div className='bg-[#cfe2a352]'>
           <header>
            <Navbar/>
           </header>
            <main className='min-h-screen '>
                <Outlet/>
            </main>
            <footer>
                <Footer/>
            </footer>
            
        </div>
    );
};

export default MainLayout;