import React from 'react'
import classes from './NavigationItems.css'
import NavigationItem from './NavigationItem/NavigationItem'

const NavigationItems=(props)=>(
<ul className={classes.NavigationItems}>
  <NavigationItem link='/' exact >BURGER Builder</NavigationItem>
  {props.isAuth ? <NavigationItem link='/orders' >Orders</NavigationItem> : null}
  {!props.isAuth ? <NavigationItem link='/Auth' >Sign IN</NavigationItem>
                : <NavigationItem link='/logout' >Logout</NavigationItem> }
</ul>

)

export default NavigationItems