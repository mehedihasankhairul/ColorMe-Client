import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Dashboard from '../Dashboard/Dashboard';


const AddReviews = () => {
    const [review, setReview] = useState({})
    const { register, handleSubmit, watch, formState: { errors } } = useForm();


    const onSubmit = review => {

        console.log(review);

        fetch('http://localhost:5000/dashboard/addreviews', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(review),

        })
            .then(res => console.log("hello", res))


    }

    const cardStyle = {
        marginTop: '0',
        width: '700px'
    }

    return (
        <div>
            <Dashboard />

            <div >
                <div class=" text-center ">
                    <span style={{ fontSize: '25px' }}>Please Write A Review</span>
                </div>
                <div class="row mr-0">
                    <div class="col-lg-7 mx-auto">
                        <div style={cardStyle} class="card mt-2 mx-auto p-4 bg-light">
                            <div class="card-body bg-light ml-4">
                                <div class="container">
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <div class="controls">
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <div class="form-group"> <label for="form_name">Your Name*</label> <input id="form_name" {...register("name")} type="text" name="name" class="form-control" placeholder="Please enter  Name " required="required" data-error=" Name is required." /> </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="form-group"> <label for="form_company">Company Name*</label> <input id="form_company" {...register("company")} type="text" name="company" class="form-control" placeholder="Please enter Company Name " required="required" data-error="Company Name is required." /> </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                            </div>
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <div class="form-group"> <label for="form_message">Write Your Review *</label> <textarea id="form_message" {...register("review")} name="review" class="form-control" placeholder="Write your message here." rows="4" required="required" data-error="Please, write review."></textarea> </div>
                                                </div>
                                                <div class="col-md-12 mt-4"> <input type="submit" class="btn btn-success btn-send pt-2 btn-block " value="Send Review" /> </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>)
        </div>
    );
};

export default AddReviews;