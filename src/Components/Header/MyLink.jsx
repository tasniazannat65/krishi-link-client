import React from 'react';
import { NavLink } from 'react-router';

const MyLink = ({children, to}) => {
    return (
        <NavLink to={to} className={({isActive})=> `font-medium text-lg ${isActive ? 'border-b-2 border-b-[#F9A825] text-[#1B5E20]' : 'text-[#424242]'}`}>
            {children}
        </NavLink>
            
        
    );
};

export default MyLink;