import React from 'react'
import { BrowserRouter as Router ,Routes,Route } from 'react-router-dom';

import Home from './Home/Home';
import CartHeader from './AddToCart/CartHeader';
import CartProduct from './CartProduct/CartProduct';
import CheckOut from './CheckOut/CheckOut';



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