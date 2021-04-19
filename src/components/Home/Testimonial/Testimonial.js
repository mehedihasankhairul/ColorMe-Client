import React, { useEffect, useState } from 'react';

import loading from '../../../images/loading.gif';
import TestimonialData from '../Home/TestimonialData/TestimonialData';


const Testimonial = () => {

    const [testimonialData, setTestimonialData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setTestimonialData(data))
    }, [])

    return (
        <section className="services-container mt-5 bg-light">
            <div className="text-center">
                <h1 style={{ color: '#3A4256' }}>Clients Feedback</h1>
            </div>
            <div className="d-flex justify-content-center">
                {testimonialData.length === 0 ?
                    <img src={loading} alt=""/>
                    :
                    <div className="w-75 row mt-5 pt-5">
                        {
                            testimonialData.map(Feedback => <TestimonialData Feedback={Feedback} key={Feedback.name}></TestimonialData>)
                        }
                    </div>
                }

            </div>
        </section>
    );
};

export default Testimonial;