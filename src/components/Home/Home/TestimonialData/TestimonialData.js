import React from 'react';

const TestimonialData = ({ Feedback }) => {
    return (
        <div style={{marginBottom:'15px'}} className="col-md-4" >

        <div className="card shadow-sm">
            <div className="card-header d-flex  align-items-center">
                <img className="mx-3" src={Feedback.img} alt="" style={{borderRadius:'50px'}} width="60"/>
                <div>
                    <h6 className="text-primary">{Feedback.name}</h6>
                    <p className="m-0">{Feedback.company}</p>
                </div>
            </div>
            <div className="card-body">
                <p className="card-text text-secondary mt-4">{Feedback.review}</p>
            </div>
            
       </div>
        </div>
    );
};

export default TestimonialData;