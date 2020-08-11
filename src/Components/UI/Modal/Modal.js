import React from 'react'
import classes from './Modal.css'
import Aux from '../../../HOC/Aux'
import BackDrop from '../../UI/Backdrop/BackDrop'

const modal=(props)=>(
    <Aux>
        <BackDrop show={props.show} click ={props.BackDropCancel}/>
     <div className={classes.Modal}
     style={{
         transform: props.show ? 'translateY(0)' : 'translateX(100vh)',
         opacity: props.show ? '1' : '0'
     }}>
         {props.children}
     </div>
     </Aux>
)


export default React.memo(modal, (PrevProps,NextProps)=>NextProps.show===PrevProps.show && NextProps.children===PrevProps.children )