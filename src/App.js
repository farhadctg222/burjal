import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './Componet/Home/Home';
import Header from './Componet/Header/Header';
import Login from './Componet/Login/Login';
import Room from './Componet/Room/Room';
import {createContext, useState } from 'react';
import Book from './Componet/Book/Book';
import PrivetRoute from './Componet/PrivetRoute/PrivetRoute';
export  const UserContex = createContext()
function App() {
  const [logInuser,setlogInuser]= useState({})
  return (
    <UserContex.Provider value={[logInuser,setlogInuser]}>
      <h1>{logInuser.email}</h1>
    <BrowserRouter>
   <Header></Header>
   
    <Routes>
      

      <Route path='/login' element={<Login></Login>}></Route>
      <Route path='/room' element={<Room></Room>}></Route>
      <Route path='/home' element={<Home></Home>}></Route>
     
      
         <Route path={"/book/:bedType"}element={<PrivetRoute><Book></Book></PrivetRoute>}/>
        


    </Routes>
    
    
    </BrowserRouter>
    </UserContex.Provider>
   
  );
}

export default App;
