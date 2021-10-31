import React, { useEffect, useState } from 'react';
import Service from './../../Home/Service/Service';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        // const url = 'http://localhost:3050/services';
        const url = 'https://haunted-castle-35810.herokuapp.com/services';
        fetch(url)
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    return (
        <div id="services" className="col-lg-10 mx-auto mb-5">
            <h1 className="text-center bg-transparent text-primary fw-bolder fst-italic py-2 mb-5">Choose Your Package</h1>
            <div className="service-container mx-auto">
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;