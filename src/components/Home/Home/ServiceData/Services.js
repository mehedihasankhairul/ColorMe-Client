import React, { useState, useEffect } from 'react';
import loading from '../../../../images/loading.gif'
import paintingWall1 from '../../../../images/painting-wall1.jpg'
import wall2 from '../../../../images/wall-2.png'
import wall3 from '../../../../images/wall-3.jpg'
import ServicesDetail from '../ServiceDetail/ServiceDetail';




// const serviceData = [
//     {
//         name: 'Painting your Wall With AsianPaint',
//         description: 'What to consider before hiring out a home painting job',
//         img: paintingWall1 ,
//     },
//     {
//         name: 'Painting your Wall With AsianPaint 2',
//         description: 'What to consider before hiring out a home painting job',
//         img: wall2,
//     },
//     {
//         name: 'Painting your Wall With AsianPaint 3',
//         description: 'What to consider before hiring out a home painting job',
//         img: wall3,
//     },

// ]
const Services = () => {
    
    const [newService,setNewServices] = useState([])
    useEffect(() => {
      fetch('http://localhost:5000/services')
      .then(res =>res.json())
      .then(data=>setNewServices(data))

    },[])
 
    return (
        <section className="services-container mt-5">
            <div className="text-center">
                <h1 style={{ color: '#3A4256' }}>We Provide Awesome Services</h1>
            </div>
            <div className="d-flex justify-content-center">
                {newService.length === 0 ?
                    <img src={loading} alt=""/>
                    :
                    <div className="w-75 row mt-5 pt-5">
                        {
                            newService.map(service => <ServicesDetail service={service} key={service.name}></ServicesDetail>)
                        }
                    </div>
                }
            </div>
        </section>
    );
};

export default Services;