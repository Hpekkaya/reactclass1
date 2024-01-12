import React from 'react'
import MadeGoal1 from './MadeGoal1'
import MissedGoal1 from './MissedGoal1'

const Goal1 = (props) => {
    const isGoal = props.isGoal

    // if (isGoal){
    //     return <MadeGoal1/>
    // }else{
    //     return <MissedGoal1/>
    // }
  
    return <>{isGoal ? <MadeGoal1/> : <MissedGoal1/>}</>
  
}

export default Goal1