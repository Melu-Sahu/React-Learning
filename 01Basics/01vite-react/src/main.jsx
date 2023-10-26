import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


function MyApp(){
  return(
    <h1>Hii mere Friend Mr. Meluram</h1>
  )
}

const Element = (
  <a href='https://www.google.com' target='_blenk'>Visit Google.</a>
)



const userName = 'Meluram';
const reactElement = React.createElement(
  'a',
  {href: 'https://www.google.com', target : '_blank'},
  'click me to visit google.',
  userName
)

ReactDOM.createRoot(document.getElementById('root')).render(

  // MyApp()      // This will also work if above MyApp() function exists.
  // <MyApp/>

    // Element      // will also work if variable 'Element' is defined.


    reactElement    // this will also work because it is written according to react standerds.

  // <React.Fragment>
  //   <App />
  // </React.Fragment>

)
