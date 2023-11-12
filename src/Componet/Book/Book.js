import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import dayjs from 'dayjs';
import { UserContex } from '../../App';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import BookingRoom from '../BookingRoom/BookingRoom';


const Book = () => {
    const {bedType,title} = useParams();
    const [logInuser,setlogInuser]= useContext(UserContex)
    console.log(logInuser)
    const [detail,setdetail] = useState({})
   
    
    const [value, setValue] = useState({
        checkIn :new Date(),
        checkout : new Date(),
        bedType: bedType
    });
    
    const handle = ()=>{
        const newBooking = {...value,...logInuser}
        fetch('http://localhost:4000/addBooking',{
        method:'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(newBooking)
       
        })
        .then(res=>res.json())
        .then(data=>setValue(data))
    }   

    const handleout = (date)=>{
        const newdate = {...value}
        newdate.checkIn = date
        setValue(newdate)
    }
    const handleChance = (date)=>{
        const newdate = {...value}
        newdate.checkout = date
        setValue(newdate)
    }

    
  
    return (
        <>
        <div style={{textAlign:'center',marginLeft:'auto'}}>
            <h1 style={{color:'red'}}>{logInuser.email}</h1>
            <h1>lets go book {bedType} </h1>
            <Link to='/home'>what a defarent ?</Link><br /> <br />
            <div className="time" style={{marginLeft:'auto'}}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
          
           
            <DatePicker
            label="Check In Date"
            value={setValue.checkIn}
            onChange={handleChance}
            />
             <DatePicker
            
            label="Check Out Date"
            value={setValue.checkout}
            onChange={handleout}
            />
       
    </LocalizationProvider>
    </div><br />
            <button className='button' onClick={handle}>book now</button>
            
           
        </div>
       <BookingRoom></BookingRoom>
        </>
    );
};

export default Book;