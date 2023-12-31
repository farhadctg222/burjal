import React, { useContext, useState } from 'react';
import './Login.css'
import { initializeApp } from "firebase/app";
import {GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { UserContex } from '../../App';
import {useLocation, useNavigate, useParams} from 'react-router-dom';



const Login = () => {
    const {bedType} = useParams()
    const [login, setlogin]= useState({})
    const [logInuser,setlogInuser]= useContext(UserContex)
    const navigate = useNavigate()
  const location = useLocation()
  const {from} = location.state || {from:{pathname:"/home"}}

   

    const firebaseConfig = {
        apiKey: "AIzaSyBM334JmDWB35NRco5qtLSsg-TGkosGpVU",
        authDomain: "burjalarob.firebaseapp.com",
        projectId: "burjalarob",
        storageBucket: "burjalarob.appspot.com",
        messagingSenderId: "145616687221",
        appId: "1:145616687221:web:a6d4ec6ff4f68641ce283c",
        measurementId: "G-4DB96GBBHX"
      };
      const app = initializeApp(firebaseConfig);
      const auth = getAuth(app);
     

    const provider = new GoogleAuthProvider();

    const google = ()=>{
        signInWithPopup(auth,provider)
        .then(result=>{
            console.log(result.user)
           setlogin(result.user)
            setlogInuser(result.user)
            storeToken()
            navigate(from)
        })
    }
    const storeToken = ()=>{
       auth.currentUser.getIdToken(true)
        .then(function(idToken) {
          console.log(idToken)
          sessionStorage.setItem('Token',idToken)
          }).catch(function(error) {
            // Handle error
          });
    }
    return (
        <div className='loginHeader'>
            <h1>{login.displayName}</h1>
            <title>Dubble Room</title>
            <img src={login.photoURL} alt="" /><br />
           <button onClick={google}>GoogleLogin</button>
        </div>
    );
};

export default Login;