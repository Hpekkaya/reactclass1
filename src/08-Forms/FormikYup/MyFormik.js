import React from 'react'
import { useFormik } from 'formik'
import validations from "./validations"

const MyFormik = () => {
    const {handleSubmit,handleChange,handleBlur,handleReset, errors,touched} = useFormik({
        initialValues : {
            name :"",
            email:"",
            gender:"",
            hobies:[],
            country:"",
            password:"",
            confirmPassword:""
        },
        onSubmit:(values,bag)=>{
            console.log(values);
            console.log(bag);
            bag.resetForm();
        },
        validationSchema:validations
    })
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type='text' name='name' placeholder='name' onChange={handleChange} onBlur={handleBlur}/> <br></br>
            <input type='text' name='email' placeholder='email' onChange={handleChange} onBlur={handleBlur}/> <br></br>
            
            <label>Gender :</label><br></br>
            <label>Male</label>
            <input type='radio' name='gender' value='Male' onChange={handleChange}/> 
            <label>Female</label>
            <input type='radio' name='gender' value='Female' onChange={handleChange}/> <br></br>
            
            <label>Hobies :</label><br></br>
            <label>Futball</label>
            <input type='checkbox' name='hobies' value='Football' onChange={handleChange}/> 
            <label>Travel</label>
            <input type='checkbox' name='hobies' value='Travel' onChange={handleChange}/> 
            <label>Chess</label>
            <input type='checkbox' name='hobies' value='Chess' onChange={handleChange}/> <br></br>

            <label>Country</label><br></br>
            <select name='country' onChange={handleChange}>
                <option value="" >- Select Country</option>            
                <option value="tr" >Turkey</option>            
                <option value="USA" >USA</option>            
                <option value="Eng" >England</option>            
            </select> <br></br>
            <label>Password</label><br></br>
            <input type='password' name='password' placeholder='pasw' onChange={handleChange} onBlur={handleBlur}/> <br></br>
            <label>Confirm Password</label><br></br>
            <input type='password' name='confirmPassword' placeholder='pasw' onChange={handleChange} onBlur={handleBlur}/> <br></br>
            <button type='submit'>Submit</button>
            <button type='reset'>New Record</button>

        </form>
    </div>
  )
}

export default MyFormik