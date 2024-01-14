import React, { useState } from 'react'

const Forms = () => {
  const [name,setName]= useState()
  const handleSubmit =(event)=>{
    event.preventDefault();
    alert(`You entered was : ${name}`)
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Enter Your Name : <input type='text' value={name} onChange={(event)=>setName(event.target.value)} /><br></br>
        </label> <br></br>

        <button type='submit'>Submit</button>        
      </form>
    </div>
  )
}

export default Forms