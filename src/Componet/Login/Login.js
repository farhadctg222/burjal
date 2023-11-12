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
            const {email,displayName}= result.user
            const signIn = {email:email,displayName:displayName}
          
            
           setlogin(signIn)
            setlogInuser(signIn)
            storeToken()
           
            navigate(from)
        })
    }
    const storeToken = ()=>{
       auth.currentUser.getIdToken(true)
        .then(function(idToken) {
          console.log(idToken)
          sessionStorage.setItem('idToken',idToken)
          }).catch(function(error) {
            // Handle error
          });
    }
    return (
        <div className='loginHeader'>
            <h1>{login.displayName}</h1>
            <img src={login.photoURL} alt="" /><br />
           <button className='button' onClick={google}>GoogleLogin</button>
        </div>
    );
};

export default Login;