import React from 'react'
import { BrowserRouter as Router ,Routes,Route } from 'react-router-dom';
 
import CartHeader from './Components/AddToCart/CartHeader';
import CartProduct from './Components/CartProduct/CartProduct';
import CheckOut from './Components/CheckOut/CheckOut';
import Home from './Components/Home/Home';
import "./assets/Css/Custom.css";



function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path="/cartitems" element={<CartHeader/>}/>
          <Route path='/cart' element={<CartProduct/>}/>
          <Route path='/checkout' element={<CheckOut/>} />
      
        
        </Routes>
      </Router>

    </div>
  )
}

export default App