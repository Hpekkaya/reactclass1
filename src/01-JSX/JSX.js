


const JSX=()=> {
    const name ="hakan"
    const myElement = <h1 style={{color:"red"}}>I love JSX</h1>
    const myElement1= <h1>React is{5+5} times better than JSX</h1>
    const myElement2 = (
        <ul>
            <li>Apples</li>
            <li>Bananas</li>
            <li>Oranges</li>
        </ul>
    )

    const myElement3 = <input type="text"/>
    const myElement5 = <h1 className="myclass">Hello JSX</h1>
    const x =12; 
    const myElement6 = <h1>{ x>10 ? "Hello" : "Good By"}</h1>

    return(
        <div className="App">
            {myElement}
            {myElement1}
            {myElement2}
            {myElement3}
            {myElement5}
            {myElement6}
           
        </div>
    )
}

export default JSX