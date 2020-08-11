import React from 'react'
import Logo from '../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import BackDrop from '../../UI/Backdrop/BackDrop'
import classes from './SideDrawer.css'
import Aux from '../../../HOC/Aux'

const SideDrawer=(props)=>{
    let Aclasses =[classes.SideDrawer,classes.Close]
    if(props.show){
        Aclasses=[classes.SideDrawer,classes.Open]
    }
return(
    <Aux>
        <BackDrop show={props.show} click={props.close} />
    <div className={Aclasses.join(' ')}>
        <div className={classes.Logo}>
        <Logo />
        </div> 
        <nav>
            <NavigationItems />
        </nav>
    </div>
    </Aux>
)

}

export default SideDrawer