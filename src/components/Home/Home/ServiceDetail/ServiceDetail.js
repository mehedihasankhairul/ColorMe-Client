import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceDetail.css';


const ServicesDetail = ({ service }) => {
    return (
        <div  className="col-md-4 text-center service ">
        <Link to={`/dashboard/book/${service._id}`} style={{textDecoration:'none'}}>
                <img style={{ width: '15%' }} src={service.imageURL} alt="" />
                {
                    service.image ? <img style={{ height: '50px' }} src={service.imageURL}/>
                        :
                        // <img style={{ height: '50px' }} className="img-fluid mb-3" src={`https://localhost:5000/${service.imageURL}`} alt="" />
                        <img style={{ height: '50px' }} className="img-fluid mb-3" src={service.imageUrl} alt="" />
                }
                <h5 className="mt-3 mb-3">{service.title}</h5>
                <p className="text-secondary">{service.description}</p>
                <button className="btn btn-danger">Get Now</button>
            </Link>
        </div>

    );
};

export default ServicesDetail;