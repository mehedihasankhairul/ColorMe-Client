import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import ContactForm from '../ContactForm/ContactForm';
import HappyClient from '../HappyClient/HappyClient';
import Header from '../Header/Header';
import HeaderMain from '../HeaderMain/HeaderMain';
import Testimonial from '../Testimonial/Testimonial';
import Services from './ServiceData/Services';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <HeaderMain></HeaderMain>
           <Services></Services>
            <HappyClient></HappyClient>
            <Testimonial></Testimonial>
            <ContactForm></ContactForm>
           <Footer></Footer>
        </div>
    );
};

export default Home;