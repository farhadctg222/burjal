import React from 'react';
import './Booking.css'
import {Link} from 'react-router-dom'

const Booking = (props) => {
   
    const {title,bedType,avatar,price,capacity,description,imgUrl} = props.room
    console.log(title,bedType)
    return (
       <>
       <div className="bookHeader">
        <div className="dddddd">
        <div className="title">
            <h1 className='avatar'>{avatar}</h1>
            <h1 className='titles'>{title}</h1><p>{description}</p>
        </div>
        <div className="bookImg">
            <img src={imgUrl} alt="" />
        </div>
        <div className="detail">
            <h1>Capacity: {capacity}</h1><h1>bedType: {bedType}</h1><h1>Price: {price}</h1>
          <Link to=''> <button className='button'>Book Now</button></Link> 
        </div>
        </div>
       </div>
       
       </>
    );
};

export default Booking;