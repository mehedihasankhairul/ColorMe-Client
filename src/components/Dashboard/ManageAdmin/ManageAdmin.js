import React, { useEffect, useState } from 'react';
import Dashboard from '../Dashboard/Dashboard';

const ManageAdmin = () => {

    const [books,setBooks] = useState([])
    const handleDelete = id => {
        console.log(id);
        fetch(`http://localhost:5000/dashboard/delete/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(res => {
                console.log(res);
            }
            )
        alert('Your Order has Deleted');
        // history.push('/dashboard');
    }
    const fetchProducts= () =>{
    
        fetch('http://localhost:5000/dashboard/bookinglist')
        .then(res=>res.json())
        .then(data=>setBooks(data))
    }
        useEffect(()=>{
           fetchProducts()
        },[])

    
    return (

        
        <div>
            <Dashboard/>
            <div  style={{marginLeft:'20%'}} className="col-md-7">
            <table class="table">
  <thead>
    <tr>
    <th scope="col">Product Id</th>
      <th scope="col">Status</th>
      <th scope="col">Service</th>
      <th scope="col">Price</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
      {
            books.map(book =>  <tr key={book._id}>
                <th scope="row">{book._id}</th>
                <td>{book.orderStatus}</td>
                <td>{book.title}</td>
                <td>{book.servicePrice}</td>
                <td><button onClick={() =>handleDelete(book._id)} type="button" class="btn btn-danger">Delete</button></td>
              </tr>)
      }
  </tbody>
</table>
            </div>
        </div>
    );
};

export default ManageAdmin;