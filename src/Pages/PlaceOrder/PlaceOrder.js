import React, { useRef } from 'react';
import { useParams } from 'react-router';
import useAuth from './../../Hooks/useAuth';

const PlaceOrder = () => {
    const { id } = useParams();
    const { user } = useAuth();

    const nameRef = useRef();
    const emailRef = useRef();
    const addressRef = useRef();
    const cityRef = useRef();
    const mobileRef = useRef();

    const handlePlaceOrder = e => {
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const address = addressRef.current.value;
        const city = cityRef.current.value;
        const mobile = mobileRef.current.value;

        const newOrder = { name, email, address, city, mobile, status:"pending" }

        // const url = 'http://localhost:3050/orders';
        const url = 'https://haunted-castle-35810.herokuapp.com/orders';
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newOrder)
        })
        .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Booking Successful.');
                    e.target.reset();
                }
            })

        e.preventDefault();
    }
    return (
        <div className="col-lg-5 bg-warning my-5 mx-auto border-0 rounded-3">
            <form onSubmit={handlePlaceOrder} className="row g-3 my-5 mx-5 py-5">
                <div className="col-md-6">
                    <label htmlFor="inputUsername" className="form-label">User Name</label>
                    <input ref={nameRef} value={user.displayName} type="text" className="form-control" id="inputUsername" />
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputEmail4" className="form-label">Your Email</label>
                    <input ref={emailRef} value={user.email || "can't-show@gmail.com"} type="email" className="form-control" id="inputEmail4" />
                </div>

                <div className="col-6">
                    <label htmlFor="inputAddress" className="form-label">Current Address</label>
                    <input ref={addressRef} type="text" className="form-control" id="inputAddress" placeholder="Local-area, Street name etc." required/>
                </div>
                <div className="col-6">
                    <label htmlFor="inputCity" className="form-label">Current City</label>
                    <input ref={cityRef} type="text" className="form-control" id="inputCity" placeholder="Division, City etc." required/>
                </div>
                <div className="col-12">
                    <label htmlFor="inputMobile" className="form-label">Mobile no.</label>
                    <input ref={mobileRef} type="number" className="form-control" id="inputMobile" placeholder="Your Mobile Number" required/>
                </div>
                <div className="col-12 my-4">
                    <button type="submit" className="btn btn-primary">Confirm Booking</button>
                </div>
            </form>
        </div>
    );
};

export default PlaceOrder;