  
import React, { useEffect, useState } from 'react';
import Dashboard from '../Dashboard/Dashboard';

const BookingList = () => {

    const [books,setBooks] = useState([])
    const fetchProducts= () =>{
    
        fetch('https://glacial-sierra-08693.herokuapp.com/dashboard/bookinglist')
        .then(res=>res.json())
        .then(data=>setBooks(data))
    }
        useEffect(()=>{
           fetchProducts()
        },[])
        console.log(books);
    return (
        <div>
            <Dashboard/>
            
             <div style={{marginLeft:'20%'}} className="col-md-7">
             <table class="table">
  <thead>
    <tr>
      <th scope="col">Product Id</th>
      <th scope="col">Status</th>
      <th scope="col">Service</th>
      <th scope="col">Price</th>
    </tr>
  </thead>
  <tbody>
      {
            books.map(book =>  <tr key={book._id}>
                <th scope="row">{book._id}</th>
                <td>{book.orderStatus}</td>
                <td>{book.title}</td>
                <td>{book.servicePrice}</td>
              </tr> )
      }
  </tbody>
</table>
             </div>
        </div>
    );
};

export default BookingList;