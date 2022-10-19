import './App.css';
import Button from './components/button/Button';
import freeCodeCampLogo from './imagenes/freecodecamp-logo.png'
// import { useState } from 'react';
import Counter from './components/counter/Counter';

function App() {

const  handleClick1 = () => {
  console.log('Click')
}

const  resetCounter = () => {
  console.log('Reiniciar')
}

  return (
    <div className='App'>
     <div className='freecodecamp-logo-container'>
      <img 
      className='frecodecamp-logo'
      src={freeCodeCampLogo}
      alt='Logo de freeCodeCamp'
      />
     </div>
     <div className='principal-container'>
      <Counter
      clicksNumber='5'
      />
      <Button
      text='Click'
      isClickButton={true}
      handleClick={handleClick1}/>
      
      <Button
      text='Restart'
      isClickButton={false}
      handleClick={resetCounter}/>
     </div>
    </div>
  );
}

export default App;
