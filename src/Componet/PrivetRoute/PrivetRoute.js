import React, { useContext } from 'react';
import { Navigate, Routes,redirect } from 'react-router-dom';
import { UserContex } from '../../App';

const PrivetRoute = ({children,...rest}) => {
    const [logInuser,setlogInuser]= useContext(UserContex)

return logInuser.email?(
    children):( <Navigate to="/login"/>
)

};

export default PrivetRoute;