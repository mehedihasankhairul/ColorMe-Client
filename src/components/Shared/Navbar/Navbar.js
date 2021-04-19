import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../images/colorme.png'

const Navbar = () => {
    return (
        <div className="container">
        <nav className=" navbar navbar-expand-lg navbar-light offset-md-1">
           <Link to="/home"> <img style={{ width: '60%'}} className="navbar-brand img-fluid" src={Logo} alt="Logo"/> </Link>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <Link to="/Home" className="nav-link mr-5 font-weight-bold" href="#">Home <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/dashboard" className="nav-link mr-5 font-weight-bold" href="">Dashboard</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/book" className="nav-link mr-5 font-weight-bold">Our Service</Link>
                    </li>
                 
                    <li className="nav-item">
                        <Link to="/contact" className="nav-link mr-5 font-weight-bold">Contact Us</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/login"> <button type="button" className=" mr-5 font-weight-bold btn btn-danger btn-lg">Login</button></Link>
                    </li>
                </ul>
            </div>
        </nav>
        </div>
    );
};

export default Navbar;