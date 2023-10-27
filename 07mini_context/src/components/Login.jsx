import React, {useContext, useState} from 'react'
import UserContext from '../context/UserContext'

const Login = () => {
    const [userName, setUsername] =useState('');
    const [password, setPassword] = useState('');
    const {setUser} = useContext(UserContext);
    function handleSubmit(e){

        e.preventDefault();

        setUser({userName, password})

    }

  return (
    <div>

        <h2>User Login</h2>

        <input type='text'
        value={userName}
        onChange={(e)=>setUsername(e.target.value)}
        placeholder='username' />

         
        <input
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
         pattern='password' placeholder='Password' />

        <button onClick={handleSubmit}>Submit</button>
      
    </div>
  )
}

export default Login
