import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Dashboard from '../Dashboard/Dashboard';

const AddService = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const [imageURL, setIMageURL] = useState(null);

  const onSubmit = data => {
    const addService = {
      title: data.title,
      description: data.description,
      imageURL: imageURL,
      servicePrice: data.servicePrice
    };
    const url = `https://glacial-sierra-08693.herokuapp.com/dashboard/addservice`;

    fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(addService)
    })
      .then(res => console.log('server side response', res))
    console.log(data)
  };

  const handleImageUpload = event => {
    console.log(event.target.files[0])
    const imageData = new FormData();
    imageData.set('key', '0acec1d09d55d65932eb88e827bc7143');
    imageData.append('image', event.target.files[0]);

    axios.post('https://api.imgbb.com/1/upload',
      imageData)
      .then(function (response) {
        setIMageURL(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });

  }
  const cardStyle = {
    marginTop: '0',
    width: '700px'
  }
  return (

    <div>
      <Dashboard />


      <div>
        <div className=" text-center">
          <span style={{ fontSize: '25px', marginTop: "10px" }}>Add New service</span>
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
                          <div class="form-group"> <label for="form_name">Service Name</label> <input id="form_name" {...register("name")} type="text" name="title" class="form-control" placeholder="Please enter  title " required="required" data-error=" title is required." /> </div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-group"> <label for="form_company">Service Image</label> <input id="form_company" {...register("serviceImg")} type="file" onChange={handleImageUpload} name="serviceImg" class="form-control" placeholder="Please enter Service Image" required="required" data-error=" Service Image is required." /> </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group"> <label for="form_company">Service Price</label> <input id="form_company" {...register("servicePrice")} type="text" name="servicePrice" placeholder="$100" class="form-control" required="required" /> </div>
                      </div>
                      <div class="row">
                      </div>
                      <div class="row">
                        <div class="col-md-12">
                          <div class="form-group"> <label for="form_message">Description</label> <textarea id="form_message" {...register("description")} name="description" class="form-control" placeholder="Write Service Description." rows="4" required="required" data-error="Please, write description."></textarea> </div>
                        </div>
                        <div class="col-md-12 mt-4"> <input type="submit" class="btn btn-info btn-send pt-2 btn-block " value="Send Review" /> </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>





      {/* <div style={{marginLeft:'400px'}} className='ml-5'>
      <h1>Add a Service</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
      <div class="form-group"> <label for="form_name">Your Name*</label> <input id="form_name" {...register("name")} type="text" name="name" class="form-control" placeholder="Please enter  Name " required="required" data-error=" Name is required."/> </div>
      <br/>
      <input name="exampleRequired" type="file" onChange={handleImageUpload} />
      <br/>
      <input type="submit" />
    </form>
    </div> */}

    </div>
  );
};

export default AddService;