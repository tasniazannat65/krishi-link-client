import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Header/Navbar';
import Footer from '../Components/Footer';


const MainLayout = () => {
    return (
        <div className='bg-[#FAFAF8]'>
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