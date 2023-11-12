import React, { useContext, useEffect, useState } from 'react';
import { UserContex } from '../../App';
import { getAuth } from 'firebase/auth';

const BookingRoom = () => {
    const [room,setroom]= useState([])
    const [logInuser,setlogInuser]= useContext(UserContex)
    useEffect(() => {
        fetch('http://localhost:4000/Booking?email='+logInuser.email,{
            method: 'GET',
            headers:{
                'Content-Type': 'Application/json',
                authorization : `Bearer ${sessionStorage.getItem('idToken')}`
            }
        })
        .then(res=>res.json())
        .then(data=>setroom(data))
    }, [room])
    return (
        <div>
            {
                room.map(room=><h1>check In {room.checkIn} checkOut :  {room.checkout} bedType : {room.bedType} email : {room.email}</h1> )
            }:
            
        </div>
    );
};

export default BookingRoom;