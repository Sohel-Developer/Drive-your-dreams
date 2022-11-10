import React from 'react';
import { Link } from 'react-router-dom';

const ServiceItem = ({ service }) => {
    const { title, _id, description, img } = service;
    return (
        <div>
            <div className="max-w-sm rounded overflow-hidden shadow-lg mx-auto my-8">
                <img className="w-full" src={img} alt="Sunset in the mountains" />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{title}</div>
                    <p className="text-gray-600 text-base">
                        {description}
                    </p>
                </div>
                <div className="px-6 py-4">
                    <button type="button" className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" >
                        <Link to={`/service/${_id}`} className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Book Now</Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ServiceItem;