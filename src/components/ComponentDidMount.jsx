import React, { useEffect } from 'react'

const ComponentDidMount = () => {
    console.log("Mounted-1")

    useEffect(()=>{console.log("Mounted-2")},[])

    useEffect(()=>{
        const timer = setInterval(()=>console.log("tick"),1000)
        return ()=>clearInterval(timer)
    },[])
  return (
    <div>ComponentDidMount</div>
  )
}

export default ComponentDidMount