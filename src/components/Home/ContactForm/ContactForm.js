import React from 'react';
import './ContactForm.css'
import contact from '../../../images/contactimg1.jpg'
import { Link } from 'react-router-dom';


const ContactForm = () => {
    const onSubmit = () => {
        alert('Your Message Sent Successfully');

    }
    return (
        <div style={{backgroundColor: "#2E4053"}} className="row justify-content-center">
            <div className="co-md-4 mt-5 ">
                <img style={{width:'130%', marginLeft:'10px', }} src={contact} alt="" />
            </div>
            <div className="col-md-7">
                <div>
                    <div className="row contactForm" id="contactForm">
                        <div className="col-sm-12">
                            <div className="row">
                                <div className="col-sm-8 col-sm-offset-2">
                                    <div>
                                        <h2 className="text-white my-5">CONTACT US</h2>
                                    </div>
                                    <form method="post" data-form-title="CONTACT US">
                                        <input type="hidden" data-form-email="true" />
                                        <div className="form-group">
                                            <input type="text" className="form-control" name="name" required placeholder="Name*" data-form-field="Name" />
                                        </div>
                                        <div className="form-group">
                                            <input type="email" className="form-control" name="email" required placeholder="Email*" data-form-field="Email" />
                                        </div>
                                        <div className="form-group">
                                            <input type="tel" className="form-control" name="phone" placeholder="Phone" data-form-field="Phone" />
                                        </div>
                                        <div className="form-group">
                                            <textarea className="form-control" name="message" placeholder="Message" rows={7} data-form-field="Message" defaultValue={""} />
                                        </div>
                                        <div>
                                            <Link to ="home"><button onSubmit={onSubmit} type="submit" className="btn btn-lg btn-danger">Send</button></Link>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;