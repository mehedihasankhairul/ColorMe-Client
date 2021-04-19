import React from 'react';
import './HeaderMain.css';
import headerBG from '../../../images/headerBG.jpg'
import { Link } from 'react-router-dom';


const HeaderMain = () => {
    return (
        <main style={{ height: '800px' }} className="row d-flex align-items-center headerMain">

            <div className="col-md-6 offset-md-1">
                <h1 style={{ color: '#3A4256' }}>World Famous Wall Painting Service Provider  <br /> Company in Bangladesh</h1>
                <p className="text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias doloribus sapiente cum magni perferendis magnam consectetur nostrum natus accusamus beatae.</p>
                <Link to="book"><button className="btn btn-danger">Get Now</button></Link>
            </div>

            <div className="col-md-4">
                <img style={{ width: '800px'}} src={headerBG} alt="" className="img-fluid" />
            </div>
        </main>
    );
};

export default HeaderMain;