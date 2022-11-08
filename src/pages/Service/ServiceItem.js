import React from 'react';
import { Link } from 'react-router-dom';

const ServiceItem = () => {
    return (
        <div>
            <div class="max-w-sm rounded overflow-hidden shadow-lg mx-auto my-8">
                <img class="w-full" src="https://tailwindcss.com/img/card-top.jpg" alt="Sunset in the mountains"/>
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">The Coldest Sunset</div> 
                        <p class="text-gray-600 text-base">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                        </p>
                    </div>
                    <div class="px-6 py-4">
                    <button type="button" class="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                    <Link to='/login' class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Book Now</Link>
                  </button>
                    </div>
            </div>
        </div>
    );
};

export default ServiceItem;