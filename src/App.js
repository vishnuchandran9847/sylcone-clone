import React from 'react'
import { BrowserRouter as Router ,Routes,Route } from 'react-router-dom';
 
import CartHeader from './Components/AddToCart/CartHeader';
import CartProduct from './Components/CartProduct/CartProduct';
import CheckOut from './Components/CheckOut/CheckOut';
import Home from './Components/Home/Home';
import Date from './Components/Date/Date';
import "./assets/Css/Custom.css";
import Search from './Components/Search/Search';
import Payment from './Components/Payment/Payment';
import OrderPlace from './Components/OrderPlace/OrderPlace';



function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path="/cartitems" element={<CartHeader/>}/>
          <Route path='/cart' element={<CartProduct/>}/>
          <Route path='/checkout' element={<CheckOut/>} />
          <Route path='/date' element={<Date/>}/>
          <Route path='/search' element={<Search/>}/>
          <Route path='/payment' element={<Payment/>}/>
          <Route path='/orderplace' element={<OrderPlace/>}/>
        
      
        
        </Routes>
      </Router>

    </div>
  )
}

export default App