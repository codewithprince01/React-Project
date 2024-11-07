import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData();
    // const [data, setData]= useState({})


    // useEffect(()=>{
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //     .then(res=>res.json())
    //     .then(data=>{
    //         setData(data)
    //     })
    // },[])


  return (
    <div className='text-center bg-gray-500 text-white text-2xl p-4 m-4'>Github Followers: {data.followers || 0}
    <img  src={data.avatar_url} alt=" git picture" width={300} />
    </div>
  )
}

export default Github

export const githubbInfo = async ()=>{
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    return response.json()
}