import React from 'react';
import { Link } from 'react-router-dom';

const SideNavbar = () => {
    return (
        <div>

            <div className="w-full h-screen ">
                <div className="w-64 sm:w-1/2 md:w-64 h-full bg-gray-800 shadow sm:shadow-md md:shadow-lg lg:shadow-xl xl:shadow-2xl ">
                    <ul className="text-gray-200">
                        <Link to={'/dashbord/addreview'} className="block cursor-pointer  p-2 hover:bg-gray-800 hover:text-gray-300">
                            Add Review
                        </Link>
                        <Link className="block cursor-pointer p-2 hover:bg-gray-800 hover:text-gray-300">

                            Your Service
                        </Link>
                        <Link to={'/'} className="block cursor-pointer p-2 hover:bg-gray-800 hover:text-gray-300">

                           Home
                        </Link>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default SideNavbar;