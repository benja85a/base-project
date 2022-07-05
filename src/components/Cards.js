import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Mirate los detinos!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/pexels.jpg'
              text='elegir alguna de estas fotos'
              label='etiquetas'
              path='/services'
            />
            <CardItem
              src='images/pexels.jpg'
              text='elegir alguna de estas fotos'
              label='etiquetas'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/pexels.jpg'
              text='elegir alguna de estas fotos'
              label='etiquetas'
              path='/services'
            />
            <CardItem
              src='images/pexels.jpg'
              text='elegir alguna de estas fotos'
              label='etiquetas'
              path='/products'
            />
            <CardItem
              src='images/pexels.jpg'
              text='elegir alguna de estas fotos'
              label='etiquetas'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
