import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
            <div className="container-fluid pb-0 mb-0 justify-content-center text-light ">
                <footer>
                    <div className="row my-5 justify-content-center py-5">
                        <div className="col-11">
                            <div className="row ">
                                <div className="col-xl-8 col-md-4 col-sm-4 col-12 my-auto mx-auto a">
                                    <h3 className="text-muted mb-md-0 mb-5 bold-text">ColorMe | Design Your Home like Dream.</h3>
                                </div>
                                <div className="col-xl-2 col-md-4 col-sm-4 col-12">
                                    <h6 className="mb-3 mb-lg-4 bold-text "><b>MENU</b></h6>
                                    <ul className="list-unstyled">
                                       <Link to="/home"> <li>Home</li> </Link>
                                       <Link to="/book"> <li>Our Service</li></Link>
                                       <Link to="/contact"> <li>Contact</li></Link>
                                       <Link to="/dashboard"> <li>DashBoard</li></Link>
                                    </ul>
                                </div>
                                <div className="col-xl-2 col-md-4 col-sm-4 col-12">
                                    <h6 className="mb-3 mb-lg-4 text-muted bold-text mt-sm-0 mt-5"><b>ADDRESS</b></h6>
                                    <p className="mb-1">DAKU ROAD, MOHAMMADPUR, DHAKA-1212</p>
                                    
                                </div>
                            </div>
                            <div className="row ">
                                <div className="col-xl-8 col-md-4 col-sm-4 col-auto my-md-0 mt-5 order-sm-1 order-3 align-self-end">
                                    <p className="social text-muted mb-0 pb-0 bold-text"> <span className="mx-2"><i className="fa fa-facebook" aria-hidden="true" /></span> <span className="mx-2"><i className="fa fa-linkedin-square" aria-hidden="true" /></span> <span className="mx-2"><i className="fa fa-twitter" aria-hidden="true" /></span> <span className="mx-2"><i className="fa fa-instagram" aria-hidden="true" /></span> </p><small className="rights"><span>®</span> Programming Hero | All Rights Reserved.</small>
                                </div>
                                <div className="col-xl-2 col-md-4 col-sm-4 col-auto order-1 align-self-end ">
                                    <h5 className="mt-55 mt-2 text-muted bold-text"><b>MeHeDi HaSaN Khairul</b></h5><small> <span><i className="fa fa-envelope" aria-hidden="true" /></span> mhkhairul78@gmail.com</small>
                                </div>
                                <div className="col-xl-2 col-md-4 col-sm-4 col-auto order-2 align-self-end mt-3 ">
                                    <h5 className="text-muted bold-text"><b>Programming Hero</b></h5><small><span><i className="fa fa-envelope" aria-hidden="true" /></span> programming.hero1@gmail.com</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>

    );
};

export default Footer;