import React from 'react'
import classes from './ToolBar.css'
import Logo from '../../../Components/Navigatiom/Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import Menu from '../SideDrawer/Menu/Menu'

const ToolBar =(props)=>(
<header className={classes.ToolBar}>
    <Menu clicked={props.DrawerToggleClicked} />
    <div className={classes.Logo}>
<Logo />
</div >
<div className={classes.DesktopOnly}>
<NavigationItems isAuth={props.isAuth} />
</div>
</header>

)

export default ToolBar