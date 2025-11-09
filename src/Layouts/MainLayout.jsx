import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Header/Navbar';


const MainLayout = () => {
    return (
        <div>
           <header>
            <Navbar/>
           </header>
            <main>
                <Outlet/>
            </main>
            
        </div>
    );
};

export default MainLayout;