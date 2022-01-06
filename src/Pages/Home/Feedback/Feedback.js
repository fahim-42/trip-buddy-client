import React, {useEffect} from 'react';
import './Feedback.css';

// animation
import AOS from 'aos';
import 'aos/dist/aos.css';

const Feedback = () => {
    //animation
    useEffect(() => {
        AOS.init();
    })
    return (
        <div className="col-lg-10 text-white mx-auto mb-5">
            <h1 className="text-center bg-transparent text-primary fw-bolder fst-italic py-2 mb-5">Client Feedback</h1>

            <div className="feedback">
                <div className="mx-3 mb-3 bg-danger border-0 rounded-3" data-aos="flip-left" data-aos-duration="2000">
                    <img className="w-100 border-0 rounded-3 p-4" src="https://images.unsplash.com/photo-1562159278-1253a58da141?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="client-not-found" />
                    <h3 className="text-center fw-bold fst-italic">Martin Phillips</h3>
                    <h6 className="text-center fw-lighter fst-italic my-3">Profession: Banker</h6>
                    <p className="px-4 my-3">“I visited Sundarban for 1 Night 2 Days and it was a mesmerzing trip and we spot the Royal Bengal Tiger, wild boars, crocodiles, spotted deers. Me and my family always wanted to visit Sundarban and we had a very pleasant stay there. Our experience is very good. Their food was very good.”</p>
                </div>

                <div className="mx-3 mb-3 bg-warning border-0 rounded-3" data-aos="fade-up" data-aos-duration="1000">
                    <img className="w-100 border-0 rounded-3 p-4 img-fluid" src="https://images.unsplash.com/photo-1445404590072-16ef9c18bd83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="client-not-found" />
                    <h3 className="text-center text-dark fw-bold fst-italic">Carrie Hopwell</h3>
                    <h6 className="text-center text-dark fw-lighter fst-italic my-3">Profession: Model</h6>
                    <p className="text-dark px-4 my-3">“St. Martin is a wonderful Island in the bay of bengal. Coconut tree has taken a part of this island , Fresh sea food and fresh coconut water are main attraction. sunset and sunrise both are enjoyable from this Island. Even you can see the pagoda of Myanmar from this Island. Amazing views and water for swimming...”</p>
                </div>

                <div className="mx-3 mb-3 bg-success border-0 rounded-3" data-aos="flip-right" data-aos-duration="2000">
                    <img className="w-100 border-0 rounded-3 p-4" src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="client-not-found" />
                    <h3 className="text-center fw-bold fst-italic">David Bailey</h3>
                    <h6 className="text-center fw-lighter fst-italic my-3">Profession: Photographer</h6>
                    <p className="px-4 my-3">“The beach is wide, clean and quiet and the water is blue. It is the best honeymoon destination in Cox's Bazar. If you want some more privacy, quietness and romantic environment this is the best beach for you. Inani Beach is an ideal place for sea-bathing and a picnic.”</p>
                </div>
            </div>
        </div>
    );
};

export default Feedback;