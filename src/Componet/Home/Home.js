import React from 'react';
import './Home.css'
import Booking from '../Booking/Booking';

const Home = () => {
    const bookingRoom = [{
        title:'Couple Power Room',
        description:'Superior Double Rome are perfectly,Generally a family room means the room is larger than the standard room and will accommodate 4- 6 people, usually with an extra twin bed or sleeper sofa',
        imgUrl:'https://karonseasand.com/wp-content/uploads/2022/03/Family-Suite_7.jpg',
        bed: 2,
        capacity: 4,
        bedType:'Family',
        avatar:'C',
        price:199
    },
    {
        title:'Sigle Room Capacity',
        description:'a room with a single bed that is intended for one person to sleep in (often in a hotel or rented accommodation)',
        imgUrl:'https://luxesource.com/wp-content/uploads/2020/03/LX_Arizona56_HOM_Westergard_01.jpg',
        bed: 1,
        capacity: 2,
        bedType:'Sigle',
        avatar:'S',
        price:120
    },
    {
        title:'Family Capcity Room',
        description:'Some hotels may specifically designate rooms with two double or two queen size beds as a family room because these rooms will sleep up to four people. Other hotels may describe a family room as one that offers a king bed for parents and bunk beds or a sleeper sofa for the children',
        imgUrl:'https://static-otelico.com/cache/national/National_hotel_cluses_haute_savoie_45.jpg',
        bed: 3,
        capacity: 6,
        bedType:'Dobule',
        avatar:'F',
        price:220
    }


]
    
    return (
        <div className='main'>
          {
            bookingRoom.map(room=><Booking key={room.bedType}room={room}></Booking>)
          }
            
        </div>
    );
};

export default Home;