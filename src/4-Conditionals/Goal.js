import React from 'react'
import MadeGoal from './MadeGoal'
import MissedGoal from './MissedGoal'

const Goal = (props) => {
    const isGoal = props.isGoal

    if(isGoal){
        
        return <MadeGoal/>
    }else{

        return <MissedGoal/>

    }

    
  return (
    <div>Goal</div>
  )
}

export default Goal