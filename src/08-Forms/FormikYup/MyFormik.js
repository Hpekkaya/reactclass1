import React from 'react'
import { useFormik } from 'formik'
import validations from './validations';

const MyFormik = () => {

    const { handleSubmit, handleChange, handleBlur, errors, touched } = useFormik({
        initialValues: {
            name: "",
            email: "",
            gender: "",
            hobies: "",
            country: "",
            password: "",
            confirmPassword: ""
        },
        onSubmit: (values, bag) => {
            console.log(values)
            bag.resetForm();
        },
        validationSchema : validations
    });

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                <br></br>
                <input
                    type="text"
                    name="email"
                    placeholder="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                <br></br>
                <label>Male</label>
                <input type="radio" name="gender" value="male" onChange={handleChange} />
                <label>Female</label>
                <input
                    type="radio"
                    name="gender"
                    value="female"
                    onChange={handleChange}
                />
                <br></br>
                <label>Football</label>
                <input
                    type="checkbox"
                    name="hobies"
                    value="football"
                    onChange={handleChange}
                />
                <label>Cinema</label>
                <input
                    type="checkbox"
                    name="hobies"
                    value="cinema"
                    onChange={handleChange}
                />
                <label>Photography</label>
                <input
                    type="checkbox"
                    name="hobies"
                    value="photography"
                    onChange={handleChange}
                />
                <br></br>
                <select name="country" onChange={handleChange}>
                    <option value="">- Select Country -</option>
                    <option value="tr">Turkey</option>
                    <option value="en">England</option>
                    <option value="usa">USA</option>
                </select>
                <br></br>
                <label>Password</label>
                <br></br>
                <input type="password" name="password" onChange={handleChange} onBlur={handleBlur} />
                <br></br>
                <label>ConfirmPassword</label>
                <br></br>
                <input name="confirmPassword" onChange={handleChange} onBlur={handleBlur} />
                <br></br>
                <button type="submit" >Kayıt Ol</button>
            </form>
        </div>
    )
}

export default MyFormik