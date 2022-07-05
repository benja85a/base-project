import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

let nombre = "Benjamin Rivas";
let web = "BenjaminRivasweb.es";

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src="/videos/stock.webm" autoPlay loop muted />
      <h1>mi pagina</h1>
      <p>dale a los botones</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          boton
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          boton 2
        </Button>
        <p>mi nombre es: {nombre}</p>
        <p>mi web es: {web}</p>
        {/* <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          mirar trailer <i className='far fa-play-circle' />
        </Button> */}
      </div>
    </div>
  );
}

export default HeroSection;
