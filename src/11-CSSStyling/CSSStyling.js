import React from 'react'
import "./CSSStyling.css"
import styles from "./CSSStyling.module.css"

const CSSStyling = () => {
    const myStyle ={color: "white", backgroundColor:"black"}
  return (
    <div>
        <h1 style={{color:"red"}}>CSS Styling Inline in React</h1>
        <h1 style={{color:"brown", backgroundColor:"yellow"}}>BackgroundColor Style</h1>
        <h1 style={myStyle}> Style 1</h1>
        <h1 className={styles.bigblue}>CSS Module Example</h1>
    </div>
  )
}

export default CSSStyling