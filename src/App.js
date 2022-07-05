import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';

/* 
colocar elementos que cambian y se editan
*/
function App() {
  return ( 
      <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/services' element={<Services/>} />
          <Route path='/products' element={<Products/>} />
          <Route path='/sign-up' element={<SignUp/>} />
      </Routes>
  );
}

export default App;
