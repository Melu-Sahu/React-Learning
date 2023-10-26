import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    const {id} = useParams();
  return (
    <div>
      <h1 className='p-4 my-2 bg-blue-400 text-3xl'> User : {id}</h1>
    </div>
  )
}

export default User
