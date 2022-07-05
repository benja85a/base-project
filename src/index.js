import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';

ReactDOM.render(
    <BrowserRouter>
        <Navbar></Navbar>
        <App />
        <Footer></Footer>
    </BrowserRouter>
, document.getElementById('root'));
