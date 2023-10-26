import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  let time;


  useEffect(() => {

    if (isRunning) {

      time = setInterval(() => {

        setSeconds((prevSeconds) => {
          if (prevSeconds === 9) {
            setMinutes((prevMinutes) => {
              if (prevMinutes === 9) {
                setHours((prevHours) => {
                  console.log('updating hours', prevHours);
                  return prevHours + 1
                });
                return 0;
              } else {
                console.log('updating minutes', prevMinutes);
                return prevMinutes + 1;
              }
            })
            return 0;
          } else {
            console.log('updating seconds ', prevSeconds);
            return prevSeconds + 1;
          }
        })



      }, 1000);

    } else {
      clearInterval(time);
    }

    return () => {
      clearInterval(time);        // clearing the interval
    };

  }, [isRunning])


  function onStop() {
    // alert('onStop working');
    setIsRunning(false);

  }
  function onStart() {
    setIsRunning(true);
  }
  function onReset() {
    setIsRunning(false);

    setHours(0);
    setMinutes(0);
    setSeconds(0);
  }


  return (
    <div>

      <div className='border rounded-2xl p-5'>
        <h1 className='m-5 p-4'>{`${hours} : ${minutes} : ${seconds}`}</h1>

        <div className="buttonGroup flex">

          <button className='bg-orange-600 m-3 focus:outline-none' onClick={onStop}>Stop</button>
          <button className='bg-orange-600 m-3 focus:outline-none' onClick={onStart}>Start</button>
          <button className='bg-orange-600 m-3 focus:outline-none' onClick={onReset}>Reset</button>
        </div>
      </div>


    </div>
  )
}

export default App
