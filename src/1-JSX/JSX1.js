import React from 'react'

const JSX1 = () => {
    const myElement = <h1>I love JSX</h1>
    const myElement2 = <h1>React is {5+5} times better than JSX </h1>
    const myElement3 = (
        <ul>
            <li>Apple</li>
            <li>Lemon</li>
            <li>Dates</li>
        </ul>
    )
    const myElement4 = <input type='text' style={{width:"100px"}}></input>
    const myElement5 = <h1 className='myClass'>Hello myClass</h1>
    const x=10;
    const myElement6 = <h2>{x<10 ? "Runs"  : "False "}</h2>         // Turnery operations
  return (
    <div>
        {myElement}
        {myElement2}
        {myElement3}
        Enter your name : {myElement4}
        {myElement5}
        {myElement6}
    </div>
  )
}

export default JSX1