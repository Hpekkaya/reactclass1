


const JSX=()=> {
    const name ="hakan"
    return(
        <div className="App">
            {/* This is JSX component */}
            <h1 className="hakan">Hello {name}</h1>
            <h1>{10+10}</h1>
            <h1>{name.toUpperCase()}</h1>
            <h2 style={{color:"red"}}>Ahmet</h2>
        </div>
    )
}

export default JSX