import React, { useState } from "react";
import MyFormik from "./FormikYup/MyFormik";
import Form1 from "./Form1";

const Forms = () => {
  // const [name, setName] = React.useState("Enter Name");
  
  // const [inputs, setInputs] = React.useState({});
  
  // const [myCar, setmyCar] = React.useState("Volvo");
  // const handleSubmit =(event)=>{
  //   event.preventDefault();
  //   alert(`The name you entered was : ${name}`)
  // }
    // const handleChange = (event)=>{
    //   const name = event.target.name
    //   const value = event.target.value
    //   setInputs( values => ({...values, [name]:value}))

    // }
    // const handleSubmit2 = (event)=> {
    //   event.preventDefault();
    //   console.log(inputs)
    // }
    // const handleChange2 = (event)=>{
    //         setmyCar(event.target.value)
    // }
  return (
    <div>
      {/* <form onSubmit={handleSubmit}>
        <label> Enter your name : 
          <input 
          type="text" 
          value={name}
          onChange={(event)=>setName(event.target.value)}
          />
        </label> <br></br>
        <input type='submit'/>
      </form> */}
      {/* <form onSubmit={handleSubmit2}>
        <label> Enter your name : </label>
        <input
          type="text"
          name="username"
          value={inputs.username || ""}
          onChange={handleChange}
        />{" "}
        <br></br>
        <label> Enter your Age   : </label>
        <input
          type="number"
          name="age"
          value={inputs.age || ""}
          onChange={handleChange}
        /><br></br>
        <input type="submit"/>
      </form>
      <form>
        <select value={myCar} onChange={handleChange2}>
          <option value="Ford">Ford</option>
          <option value="Volvo">Volvo</option>
          <option value="Honda">Honda</option>
        </select>
      </form> */}
      {/* <MyFormik/> */}
      <Form1/>
    </div>
  );
};

export default Forms;
