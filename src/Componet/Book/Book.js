import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import dayjs from 'dayjs';
import { UserContex } from '../../App';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';


const Book = () => {
    const {bedType,title} = useParams();
    const [logInuser,setlogInuser]= useContext(UserContex)
    const [detail,setdetail] = useState({})
    console.log(detail)
    const [value, setValue] = useState({
        checkIn :new Date(),
        checkout : new Date(),
        bedType: bedType
    });
    console.log(value)
    const handle = ()=>{
        const newBooking = {...value,...logInuser,}
        fetch('http://localhost:4000/addBooking',{
        method:'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(newBooking)
       
        })
        .then(res=>res.json())
        .then(data=>console.log(data))
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

    useEffect(() => {
        fetch('http://localhost:4000/Booking')
        .then(res=>res.json())
        .then(data=>{
            setdetail(data)
            console.log(data)
        })
    }, [])
  
    return (
        <div style={{textAlign:'center',marginLeft:'auto'}}>
            <h2 style={{color:'red'}}>Hello,<br />{logInuser.email}</h2>
            <h1>lets go book :<br/>{bedType} </h1>
            <Link to='/home'>what a defarent ?</Link><br /> <br />
            <div className="time" style={{marginLeft:'auto'}}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
          
           
            <DatePicker
            label="Check In Date"
            value={setValue.checkIn}
            onChange={handleChance}
            /> <br /> <br />
             <DatePicker
            label="Check Out Date"
            value={setValue.checkout}
            onChange={handleout}
            />
       
    </LocalizationProvider>
    </div> <br />
            <button className="button" onClick={handle}>book now</button>
               
        </div>
    );
};

export default Book;