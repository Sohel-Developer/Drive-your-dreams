import React, { useEffect, useState } from 'react';
import ServiceItem from './ServiceItem';

const Service = () => {

    const [services,setServices] = useState([]);

    useEffect(()=>{
        fetch('service.json')
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            setServices(data)
        })
    },[]) 


    return (
        <div className=''>
            <h1>{services.length}</h1>
            <div className='grid grid-cols-3 gap-4'>
            {
                services.map(service=> <ServiceItem
                key={service.id}
                service={service}
                ></ServiceItem>)
            }
            
            </div>
        </div>
    );
};

export default Service;