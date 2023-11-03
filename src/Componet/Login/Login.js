import React, { useState } from 'react';
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getAuth } from "firebase/auth";



const Login = () => {
    const [login, setlogn]= useState({})
    console.log(login)

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
        .then(result=>setlogn(result.user))
    }
    return (
        <div>
            <h1>{login.displayName}</h1>
            <img src={login.photoURL} alt="" />
           <button onClick={google}>GoogleLogin</button>
        </div>
    );
};

export default Login;