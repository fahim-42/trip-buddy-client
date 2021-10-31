import React, { useRef } from 'react';

const AddService = () => {
    const nameRef = useRef();
    const imageRef = useRef();
    const priceRef = useRef();
    const descriptionRef = useRef();


    const handleAddService = e => {
        const name = nameRef.current.value;
        const image = imageRef.current.value;
        const price = priceRef.current.value;
        const description = descriptionRef.current.value;

        const newService = { name, image, price, description }

        const url = 'http://localhost:3050/services';
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newService)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('New Package Added Successfully.');
                    e.target.reset();
                }
            })
        e.preventDefault();
    }
    return (
        <div className="col-lg-5 bg-warning my-5 mx-auto border-0 rounded-3">
            <form onSubmit={handleAddService} className="row g-3 my-5 mx-5 py-5">
                <div className="col-md-6">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input ref={nameRef} placeholder="Name of place" type="text" className="form-control" id="name" required />
                </div>
                <div className="col-md-6">
                    <label htmlFor="image" className="form-label">Image</label>
                    <input ref={imageRef} placeholder="Image url with quotation" type="text" className="form-control" id="image" required />
                </div>

                <div className="col-6">
                    <label htmlFor="price" className="form-label">Price</label>
                    <input ref={priceRef} placeholder="Total cost" type="number" className="form-control" id="price" required />
                </div>
                <div className="col-6">
                    <label htmlFor="description" className="form-label">Description</label>
                    <input ref={descriptionRef} type="text" className="form-control" id="description" placeholder="Write about place" required />
                </div>
                <div className="col-12 my-4">
                    <button type="submit" className="btn btn-primary">Add Package</button>
                </div>
            </form>
        </div>
    );
};

export default AddService;