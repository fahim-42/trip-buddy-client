import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

// animation
import AOS from 'aos';
import 'aos/dist/aos.css';

const Service = ({ service }) => {
    // const {service} = props;
    const { _id, name, price, description, image } = service;

    //animation
    useEffect(() => {
        AOS.init();
    });

    return (
        <div className="service mx-3 mb-3 border-0 rounded-3" data-aos="zoom-in" data-aos-duration="2000">
            <img className="w-80 border-0 rounded-3 p-4" src={image} alt="not found" />
            <h2 className="text-center fw-bold fst-italic mb-3">{name}</h2>
            <h4 className="text-center fw-light fst-italic mb-3">Price: {price}tk</h4>
            <p className="px-4 mb-3">{description}</p>
            <Link to={`/place-order/${_id}`}>
                <button className="btn btn-warning fw-bold mb-4 ms-4">Book A Trip</button>
            </Link>
        </div>
    );
};

export default Service;