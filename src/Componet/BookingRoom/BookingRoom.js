import React, { useEffect, useState } from 'react';

const BookingRoom = () => {
    const [room,setroom]= useState([])
    useEffect(() => {
        fetch('http://localhost:4000/Booking')
        .then(res=>res.json())
        .then(data=>setroom(data))
    }, [room])
    return (
        <div>
            {
                room.map(room=><h1>check In {room.checkIn} checkOut :  {room.checkout} bedType : {room.bedType}email : {room.email}</h1> )
            }
            
        </div>
    );
};

export default BookingRoom;