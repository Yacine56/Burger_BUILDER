import Aux from '../../HOC/Aux'
import React,{ useState} from 'react'
import classes from './Layout.css'
import ToolBar from '../../Components/Navigatiom/ToolBar/ToolBar'
import SideDrawer from '../Navigatiom/SideDrawer/SideDrawer'
import {connect} from 'react-redux'

const layout =(props)=>{
 
const [ShowSideDrawer,setShowSideDrawer]=useState(false)

 const SideDrawerClose=()=>{
setShowSideDrawer(false)
 }

 const DrawerToggleClicked=()=>{
    setShowSideDrawer(!ShowSideDrawer)
  
 }
 

     
     return(  <Aux>
    <SideDrawer  isAuth={props.isAuthemticated} show={ShowSideDrawer} close={SideDrawerClose} />
    <ToolBar isAuth={props.isAuthemticated} DrawerToggleClicked={DrawerToggleClicked}/>
<main className={classes.content}>
    {props.children}
</main>
</Aux>

)
}

const mapStateToProps=state=>{
    return{
        isAuthemticated:state.auth.token !== null
    }
}

export default connect(mapStateToProps)(layout) 