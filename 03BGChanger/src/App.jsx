import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState('gray')

  return (
    <div className='w-full h-screen duration-200 ' style={{background: color}}>

      <div className="w-auto h-15 bg-white rounded-3xl mx-4 py-2 text-white flex justify-center relative top-96 left-0 border-2 border-blue-950 ">

        <button onClick={()=>{setColor('red')}} className='bg-red-500 px-3  rounded-full mx-4 '>Red</button>
        <button onClick={()=>{setColor('blue')}} className='bg-blue-500 px-3  rounded-full mx-4 '>Blue</button>
        <button onClick={()=>{setColor('green')}} className='bg-green-700 px-3  rounded-full mx-4 '>Green</button>
        <button onClick={()=>{setColor('yellow')}} className='bg-yellow-500 px-3  rounded-full mx-4 '>Yellow</button>
        <button onClick={()=>{setColor('black')}} className='bg-gray-900 px-3  rounded-full mx-4 '>Dark</button>
        <button onClick={()=>{setColor('orange')}} className='bg-orange-500 px-3  rounded-full mx-4 '>Orange</button>
        <button onClick={()=>{setColor('indigo')}} className='bg-indigo-900 px-3  rounded-full mx-4 '>Indigo</button>
        <button onClick={()=>{setColor('pink')}} className='bg-pink-400 px-3  rounded-full mx-4 '>Pink</button>
        <button onClick={()=>{setColor('aqua')}} className='bg-blue-900 px-3  rounded-full mx-4 '>Aqua</button>

      </div>
      
    </div>
  )
}

export default App
