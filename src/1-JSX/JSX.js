


const JSX=()=> {
    const name ="hakan"
    const myElement = <h1 style={{color:"red"}}>I love JSX</h1>
    const myElement1= <h1>React is{5+5} times better than JSX</h1>
    const myElement2 ={}
    return(
        <div className="App">
            {myElement}
            {myElement1}
           
        </div>
    )
}

export default JSX