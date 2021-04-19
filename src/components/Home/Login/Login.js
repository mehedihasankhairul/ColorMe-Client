import React, { useContext } from 'react';

import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebaseConfig';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../../App';
import google from '../../../images/google.png'
import logo from '../../../images/colorme.png'
const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }

  const handleGoogleSignIn = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function (result) {
      const { displayName, email } = result.user;
      const signedInUser = { name: displayName, email }
      setLoggedInUser(signedInUser);
      //  history.push('/')
      history.replace(from)
    }).catch(function (error) {
      const errorMessage = error.message;
      console.log(errorMessage);
    });
  }

  const style = {
    border: '1px solid black',
    borderRadius: '10px 0px 10px 0 '
  }

  return (
    <div className='mt-5 text-center'>
      <Link to="/home"> <img width="10%" className='img-fluid  mb-5' src={logo} alt="" /> </Link>
      <h3 className='text-center mb-3'>Login With</h3>
      <div className="justify-content-center row mb-3">
        <div style={style} className="col-md-3 text-center">
          <img width="5%" className='img-fluid' src={google} alt="" />
          <button className="btn" onClick={handleGoogleSignIn}> Sign in With Google</button>
        </div>
      </div>
      <div className='text-center'>
        <span className='text-dark'>Don't Have Account? </span>
        <span className="text-danger">Create a new account</span>
      </div>

    </div>
  );
};

export default Login;