import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './Componet/Home/Home';
import Header from './Componet/Header/Header';
import Login from './Componet/Login/Login';
import Room from './Componet/Room/Room';
import Booking from './Componet/Booking/Booking';
function App() {
  return (
    <BrowserRouter>
   <Header></Header>
   
    <Routes>
      

      <Route path='/login' element={<Login></Login>}></Route>
      <Route path='/room' element={<Room></Room>}></Route>
      <Route path='/home' element={<Home></Home>}></Route>
     


    </Routes>
    
    
    </BrowserRouter>
   
  );
}

export default App;
