import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() {
    // const [data,setData] =useState([])
    // useEffect(()=>{
    //     fetch("https://api.github.com/users/nisargpipaliya")
    //     .then(res => res.json())
    //     .then(data => setData(data))
    // },[])

    const data = useLoaderData()

  return (
    <div className='bg-gray-700 text-white m-4 p-4'>Github Followers : {data.followers} 
        <img src={data.avatar_url} />
    </div>
    
  )
}

export default Github

// use useLoaderData() hook to use data in above code
export const  githubInfoLoader = async() => {
    const response = await fetch("https://api.github.com/users/nisargpipaliya")
    return response.json()
}