import React, { useState } from 'react'

const Forms = () => {
  const [name,setName]= useState()
  const [inputs,setInputs] = useState({})
  const [myCar,setMyCar] = useState("Volvo")
  // Single valued submit process
  // const handleSubmit =(event)=>{event.preventDefault();  alert(`You entered was : ${name}`) }
  const handleChange = (event) => {
    const name = event.target.name
    const value = event.target.value
    setInputs(values => ({...values, [name]:value}))
  }
  const handleChange2 = (event) => {   // For Select options in Forms in order to process value
    setMyCar(event.target.value )   
  }
  const handleSubmit2 =(event)=> {
    event.preventDefault();  
    console.log(inputs) }

  return (
    <div>
      {/* <form onSubmit={handleSubmit}>
        <label>
          Enter Your Name : <input type='text' value={name} onChange={(event)=>setName(event.target.value)} /><br></br>
        </label> <br></br>
        <button type='submit'>Submit</button>        
      </form> */}
      <form onSubmit={handleSubmit2}>
        <label>
          Enter Your Name : <input type="text" name="username" value= {inputs.username || ""}
          onChange={handleChange} /><br></br>
        </label> <br></br>
        <label>
          Enter Your Age : <input type="number" name="age" value= {inputs.age || ""}
          onChange={handleChange} /><br></br>
        </label> <br></br>
        <button type='submit'>Submit</button>        
      </form>
      <form>
        <select value={myCar} onChange={handleChange2}>
          <option value="Ford">Ford</option>
          <option value="Volvo">Volvo</option>
          <option value="Nissan">Nissan</option>
        </select>
      </form>
    </div>
  )
}

export default Forms