import React from 'react';
import { Link } from 'react-router-dom';
import  './Header.css'


const Header = () => {

    const style = {
        backgroundImage:`url(${"https://media.cntraveler.com/photos/5a78ac9ab4fe907d6c133b1d/16:9/w_1280,c_limit/Burj-Al-Arab-Jumeirah__2018_Burj-Al-Arab-Jumeirah---The-Terrace---Salt-Pool1.jpghttps://media.cntraveler.com/photos/5a78ac9ab4fe907d6c133b1d/16:9/w_1280,c_limit/Burj-Al-Arab-Jumeirah__2018_Burj-Al-Arab-Jumeirah---The-Terrace---Salt-Pool1.jpg"})`,
        
        height:'600px',
        textAlign:'center',
        backgroundSize:'cover',
        
       
    }
    return (
        <div className='header'style={style}>
            <div className="dddd">
           <li>  <Link to='/home' style={{textDecoration: 'none'}}>Home</Link></li>
          <li> <Link to='/login'style={{textDecoration: 'none'}}>Login</Link></li> 
          <li> <Link to='/room'style={{textDecoration: 'none'}}>Room</Link></li> 
            </div>
            <div className="header">
                <h1 style={{fontSize: '100px'}}>Burj Al Arob</h1>
                <h3 className='global'>A global Icon of  luxury Hotel</h3>

            </div>
           
            
            
        </div>
    );
};

export default Header;