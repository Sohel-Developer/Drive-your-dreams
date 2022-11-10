import React from 'react';
import { Outlet } from 'react-router-dom';
import SideNavbar from '../pages/DashBord/SideNavbar';

const Dashbord = () => {
    return (
        <div className='grid grid-cols-2'>
            <div>
            <SideNavbar></SideNavbar>
            </div>
            <div>
                <Outlet></Outlet>
            </div>

        </div>
    );
};

export default Dashbord;