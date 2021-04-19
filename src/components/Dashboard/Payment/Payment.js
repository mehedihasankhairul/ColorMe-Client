import React from 'react';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import Dashboard from '../Dashboard/Dashboard';
import SliptForm from '../SplitForm/SplitForm';

const stripePromise = loadStripe('pk_test_51If0TFDmVveQ22MLEHYuBEsb313PqBhn8eJKj3QdzHIbpHdPPEkNQYGPS76s8hXMSXFk1tPgQylzo41eafkfVD6100bTe9kQGS');
const PaymentCard={
    width: '50%',
    marginLeft: '26%',
    backgroundColor: 'aquamarine',
  
 }
const Payment = ({handlePayment}) => {
    return (
        <div>
        <Dashboard />
        <div style={PaymentCard} className='text-center'> 
            <Elements  stripe={stripePromise}>
            <h4 >Pay For Service</h4>

                <SliptForm handlePayment={handlePayment}></SliptForm>
            </Elements>
        </div>
        </div>
    );
};

export default Payment;