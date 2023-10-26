import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [Counter, setCounter] = useState(0);            // Initially counter is zero.
  
  /* we use Hooks so that React can manage the change in UI itself.

    Otherwise in Vanilla JS Projects, we have to update all the elements where we want to change by using document.getElementById or using 
    any other selector and then we set them one by one. But in React we can use HOOK's to change in UI. */


    


  function Add(e){
    if(Counter<10){
      setCounter(Counter+1);

      document.querySelector('p').innerText = `Counter is : ${Counter}`;
      document.querySelector('p').style.color = `green`;

    }else{
      document.querySelector('p').innerText = 'Counter cannot be more then 10.';
      document.querySelector('p').style.color = 'red';

    }
  }
  function Remove(e){
    if(Counter >0){
      setCounter( Counter-1);
      document.querySelector('p').innerText = `Counter is : ${Counter}`;
      document.querySelector('p').style.color = `green`;
    }else{
      document.querySelector('p').innerText = 'Counter cannot be more then 0.';
      document.querySelector('p').style.color = 'red';
    }
  }

  return (
    <>
      <h3>Hii, Welcome to REACT COUNTER Project</h3>

      <h4>Counter is : {Counter}</h4>

      <button onClick={Add}>Increase Counter : {Counter}</button>
      <hr/>
      <button onClick={Remove}>Decrease Counter : {Counter}</button>
      <p>Counter  is {Counter}</p>
    </>
  )
}

export default App
