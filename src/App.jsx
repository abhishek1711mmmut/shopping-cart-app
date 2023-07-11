import React from 'react'
import NavBar from './components/Navbar'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import Cart from './pages/Cart'

const App = () => {
  return (
    <div>
      <div className='bg-slate-900'>
        <NavBar/>
      </div>

      <Routes>
        <Route path='/shopping-cart-app' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
    </div>
  )
};

export default App