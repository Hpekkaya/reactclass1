import React, { useEffect, useState } from 'react'

const UseEffectHook = () => {
    const [count, setCount]=useState(10)
    const [count2, setCount2]=useState(0)
    // useEffect(()=> {
    //     setTimeout(()=>{
    //         setCount (count=>count+1)
    //     },1000)
    // } )
    // Useefect run for the first time
    // Then, run in each render

    // useEffect(()=> {
    //     setTimeout(()=>{
    //         setCount (count=>count+1)
    //     },1000)
    // }, [0] )
    // // Useefect run only one time
    // useEffect(()=> {
    //     setTimeout(()=>{
    //         setCount2 (count=>count+1)
    //     },1000)
    // }, [count2] )
    // Dependant useEffect, run one time and runs as change its dependancy

    // useEffect(()=>{
    //     setInterval(()=>{
    //         setCount(count=>count+1)
    //     },1000)
    // },[count])

    useEffect(()=>{
        let timer = setInterval(()=>{            
            setCount2(count2=>count2+1)
        },1000)
        return ()=> clearInterval(timer)
    },[count2])

  return (
    <div>
        <h2>I have rendered {count} times </h2>
        <h2>I have rendered {count2} times </h2>
    </div>
  )
}

export default UseEffectHook