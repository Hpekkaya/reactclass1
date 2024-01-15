import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()
  return (
    <div>
      <label>In order to contact click </label>
        <button onClick={()=>navigate("contact")}>Contact</button><br></br>
        <button onClick={()=>navigate(-1)}>Back</button>
      
    </div>
  )
}

export default Home