import React from 'react';

const About = () => {
    return (
        <div className="col-lg-10 text-white mx-auto pb-5">
            <h1 className="text-center bg-white text-primary fw-bolder fst-italic py-2 mb-5">About Us</h1>

            <div className="d-flex flex-wrap">
                <div className="col-lg-8 col-sm-12">
                    <h1 className="text-center my-3 fw-bolder fst-italic">TripBuddy&trade;</h1>
                    <p className="fs-5 mx-5 my-3">We provide all kinds of tourism services at a very affordable price around the country. Sajek Vally, Sundarban, St. Martin's Island, Jaflong etc. are popular among them. We can arrange any special tour on demand.<br/>We also offer rent-a-car service.</p>
                    <div className="fs-5 mx-5 my-3">
                        <h3 className="fw-bold fst-italic">Our Liabilities :</h3>
                        <ul className="ms-5 fst-italic ">
                            <li>Food</li>
                            <li>Travel Expenses</li>
                            <li>Hotel Expenses</li>
                            <li>Security</li>
                            <li>Emergency Medical Service</li>
                        </ul>
                    </div>

                </div>
                <div className="col-lg-4 col-sm-12 bg-primary border-5 rounded-3">
                    <form className="ms-0 my-5 ms-5">
                        <h4 className="mb-3 fw-bolder fst-italic">Whats on your mind ?</h4>
                        <input className="border-0 rounded-3 mb-2 py-1 px-5" type="text" placeholder="Your Name" />
                        <br />
                        <input className="border-0 rounded-3 mb-2 py-1 px-5" type="Email" placeholder="Your Email" />
                        <br />
                        <textarea  className="border-0 rounded" id="" cols="35" rows="5"></textarea>
                        <br />
                        <button className="btn btn-warning mt-3" type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default About;