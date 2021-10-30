import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import Feedback from '../Feedback/Feedback';
import About from '../About/About';

const Home = () => {
    return (
        <div className="bg-dark my-0">
            <Banner></Banner>
            <Services></Services>
            <Feedback></Feedback>
            <About></About>
        </div>
    );
};

export default Home;