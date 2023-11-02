import React from 'react';
import './Booking.css'

const Booking = (props) => {
   
    const {title,bedType,avatar,price,capacity,description,imgUrl} = props.room
    console.log(title,bedType)
    return (
       <>
       <div className="bookHeader">
        <div className="dddddd">
        <div className="title">
            <h1>{avatar}</h1>
            <h1 style={{display:'inline-flex'}}>{title}</h1><p>{description}</p>
        </div>
        <div className="bookImg">
            <img src={imgUrl} alt="" />
        </div>
        <div className="detail">
            <h1>Capacity{capacity}</h1><h1>bedType{bedType}</h1><h1>Price:{price}</h1>
            <button>Book Now</button>
        </div>
        </div>
       </div>
       
       </>
    );
};

export default Booking;