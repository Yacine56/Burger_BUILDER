import React from 'react'
import classes from './BuildControl.css'




const BuildControl = (props)=>{
   return(
    <div className={classes.BuildControl}>
        <div className={classes.Label}>{props.label}</div>
        <button className={classes.Less} onClick={props.Remove} disabled={props.disabled} >Less</button>
        <button className={classes.More} onClick={props.Add} >More</button>  
 </div>)
}

export default BuildControl