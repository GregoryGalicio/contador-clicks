import './App.css';
import Button from './components/button/Button';
import freeCodeCampLogo from './imagenes/freecodecamp-logo.png'
// import { useState } from 'react';
import Counter from './components/counter/Counter';
import { useState } from 'react';

function App() {

  const [number, setNumber] = useState(0)
  const [number1, setNumber1] = useState(0)
  const [result, setResult] = useState(0)
 

const  increase = () => {
  setNumber(number+1)
  setResult(0)
}
const decrease = () => {
  setNumber(number-1)
  setResult(0)
}

const  resetCounter = () => {
  setNumber(0)
  setResult(0)
}
const  increase1 = () => {
  setNumber1(number1+1)
  setResult(0)
}
const decrease1 = () => {
  setNumber1(number1-1)
  setResult(0)
}
const  resetCounter1 = () => {
  setNumber1(0)
  setResult(0)
}

/*Funciones para calculo*/
const  addition = () => {
  setResult(number+number1)
}

const  subtraction = () => {
  setResult(number-number1)
}

const  multiplication = () => {
  setResult(number*number1)
}

const  restartAll = () => {
  setNumber(0)
  setNumber1(0)
  setResult(0)
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
      clicksNumber={number} />
      <Button
      text='Increase'
      isClickButton={true}
      handleClick={increase}/>
      <Button
      text='Decrease'
      isClickButton={true}
      handleClick={decrease}/>
      <Button
      text='Restart'
      isClickButton={false}
      handleClick={resetCounter}/>
     </div>
     <div className='principal-container'>
      <Counter
      clicksNumber={number1} />
      <Button
      text='Increase'
      isClickButton={true}
      handleClick={increase1}/>
      <Button
      text='Decrease'
      isClickButton={true}
      handleClick={decrease1}/>
      <Button
      text='Restart'
      isClickButton={false}
      handleClick={resetCounter1}/>
     </div>
     <div className='principal-container'>
      <Counter
      clicksNumber={result} />
      <Button
      text='Addition'
      isClickButton={true}
      handleClick={addition}/>
      <Button
      text='Subtraction'
      isClickButton={true}
      handleClick={subtraction}/>
      <Button
      text='Multiplication'
      isClickButton={false}
      handleClick={multiplication}/>
     </div>
     <Button
      text='Restart all numbers'
      isClickButton={false}
      handleClick={restartAll}/>
    </div>
    
  );
}

export default App;
