import React from 'react'

const CSSStyling = () => {
    const myStyle ={color: "white", backgroundColor:"black"}
  return (
    <div>
        <h1 style={{color:"red"}}>CSS Styling Inline in React</h1>
        <h1 style={{color:"brown", backgroundColor:"yellow"}}>BackgroundColor Style</h1>
        <h1 style={myStyle}> Style 1</h1>
    </div>
  )
}

export default CSSStyling