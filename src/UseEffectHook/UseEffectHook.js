import React, { useEffect, useState } from 'react'

const UseEffectHook = () => {

    const [count, setCount] = useState(0)
    const [count2,setCount2] = useState(0)

    // useEffect(()=>{
    //     setTimeout(()=>{
    //         setCount(count=>count+1)
    //     },1000)
    // })
    // Using of useEffect in this way, run it once for the first time,
    // Afterwards, run it again every time you render.

    // useEffect(()=>{
    //     setTimeout(()=>{
    //         setCount(count=>count+1)
    //     },1000)
    // },[])  // It runs only one times

    // useEffect(()=>{
    //     setTimeout(()=>{
    //         setCount2(count=>count+1)
    //     },1000)
    // },[count2])  
    // useEffect, which renders according to a dependency. 
    // it works once, then it works as the dependency changes

    useEffect(()=>{
        setInterval(()=>{
            setCount(count=>count+1)
        },1000)
    },[count])

    useEffect(()=>{
        let timer = setInterval (() =>{
            setCount2(count=>count+1)
        },1000)
        return () => clearInterval(timer)
    },[count])

  return (
    <div>
        <h1> Count  = I hava a rendered {count} times</h1>
        <h1> Count2 = I hava a rendered {count2} times</h1>
    </div>
  )
}

export default UseEffectHook