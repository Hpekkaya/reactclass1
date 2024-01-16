import React from 'react'
import "./CSSStyling.css"
import styles from "./CSSStyling.module.css"
import Example from './Example/Example'
import Example2 from './Example/Example2'
import ExampleModule from './ExampleModule/ExampleModule'
import Example2Module from './ExampleModule/Example2Module'

const CSSStyling = () => {
    const myStyle ={color: "white", backgroundColor:"black"}
  return (
    <div>
        <h1 style={{color:"red"}}>CSS Styling Inline in React</h1>
        <h1 style={{color:"brown", backgroundColor:"yellow"}}>BackgroundColor Style</h1>
        <h1 style={myStyle}> Style 1</h1>
        <h1 className={styles.bigblue}>CSS Module Example</h1>
        <Example/>
        <Example2/>
        <ExampleModule/>
        <Example2Module/>
    </div>
  )
}

export default CSSStyling