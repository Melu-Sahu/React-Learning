import React, { useEffect, useState } from 'react'

const Github = () => {
    const [data, setData] = useState({});

    useEffect(()=>{

        fetch("https://api.github.com/users/Melu-Sahu")
        .then((res)=>res.json())
        .then((data)=>{
            setData(data);
        })

    },[]);


  return (
    <div className='text-center bg-blue-400 m-4 p-4 text-3xl'>

        Github Followers : {data.followers}

        <img src={data.avatar_url} alt='github profile image' width={300} className='' />
      
    </div>
  )
}

export default Github
