import React from 'react'
import { useFormik } from 'formik'
import validations from "./validations"

const MyFormik = () => {
    const {handleSubmit,handleChange,handleBlur,handleReset, errors,touched,values} = useFormik({
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
            <input type='text' name='name' value={values.name} placeholder='name' onChange={handleChange} onBlur={handleBlur}/> <br></br>
            {errors.name && touched.name && <div style={{color:"red"}}>{errors.name}</div>}

            <input type='text' name='email' value={values.email} placeholder='email' onChange={handleChange} onBlur={handleBlur}/> <br></br>
            {errors.email && touched.email && <div style={{color:"red"}}>{errors.email}</div>}
            
            <label>Gender :</label><br></br>
            <label>Male</label>
            <input type='radio' name='gender' value='Male' checked={values.gender === 'male'} onChange={handleChange}/> 
            <label>Female</label>
            <input type='radio' name='gender' value='Female' checked={values.gender === 'female'} onChange={handleChange}/> <br></br>
            
            <label>Hobies :</label><br></br>
            <label>Futball</label>
            <input type='checkbox' name='hobies' value='Football' checked={values.hobies.includes('Football')}  onChange={handleChange}/> 
            <label>Travel</label>
            <input type='checkbox' name='hobies' value='Travel' checked={values.hobies.includes('Travel')} onChange={handleChange}/> 
            <label>Chess</label>
            <input type='checkbox' name='hobies' value='Chess' checked={values.hobies.includes('Chess')} onChange={handleChange}/> <br></br>

            <label>Country</label><br></br>
            <select name='country' onChange={handleChange}>
                <option value="" >- Select Country</option>            
                <option value="tr" >Turkey</option>            
                <option value="USA" >USA</option>            
                <option value="Eng" >England</option>            
            </select> <br></br>
            <label>Password</label><br></br>
            <input type='password' name='password' value={values.password} placeholder='pasw' onChange={handleChange} onBlur={handleBlur}/> <br></br>
            {errors.password && touched.password && <div style={{color:"red"}}>{errors.password}</div>}

            <label>Confirm Password</label><br></br>
            <input type='password' name='confirmPassword' value={values.confirmPassword} placeholder='pasw' onChange={handleChange} onBlur={handleBlur}/> <br></br>
            {errors.confirmPassword && touched.confirmPassword && <div style={{color:"red"}}>{errors.confirmPassword}</div>}

            <button type='submit'>Submit</button>
            {/* <button type='reset'>New Record</button> */} {/* Not necessary at all  */}
            

        </form>
    </div>
  )
}

export default MyFormik