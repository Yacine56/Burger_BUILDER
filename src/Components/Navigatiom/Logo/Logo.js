import React from 'react'
import BurgerLogo from '../../../Assets/images/Logo.png'
import classes from './Logo.css'

const Logo =(props)=>(
    <div className={classes.Logo} >
<img src={BurgerLogo} alt='Logo' />
</div>
)

export default Logo