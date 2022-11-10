import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceItem from './ServiceItem';

const AllService = () => {
    const services=useLoaderData()
    return (
        <div>
            <div className='grid grid-cols-3 gap-4'>
                {
                    services.map(service => <ServiceItem
                        key={service.id}
                        service={service}
                    ></ServiceItem>)
                }

            </div>
        </div>
    );
};

export default AllService;