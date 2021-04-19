import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Dashboard from '../Dashboard/Dashboard';


const AddAdmin = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        alert('admin added successfully')
        console.log(data);


        fetch('https://glacial-sierra-08693.herokuapp.com/dashboard/addAdmin', {
            method: 'POST',
            headers: { 'Content-Type': 'Application/json' },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.error(error)
            })
    }
    return (

        <section className="row">
            <Dashboard />
            <div className="col-md-6 pr-3" row style={{ position: "absolute", right: "0%", left: "20%", backgroundColor: "#F4FDFB", marginTop: "10%" }}>
                <h4 className="text-secondary">Make a Admin</h4>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className=" col-md-4">
                        <div class="form-group"> <label for="form_company">Admin Email*</label> <input id="form_company" {...register("email")} type="text" class="form-control" required="required" /> </div>
                    </div>
                    <button type="submit" className="btn btn-danger ml-3">Submit</button>
                </form>
            </div>
        </section>

    );
};

export default AddAdmin;