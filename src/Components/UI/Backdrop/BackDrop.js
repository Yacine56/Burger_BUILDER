import React from 'react'
import classes from './BackDrop.css'


const BackDrop =(props)=>(

props.show ? <div className={classes.BackDrop} onClick={props.click}></div> : null
    )


export default BackDrop