import React from 'react'
import Burger from '../../Burger/Burger'
import Button from '../../../Components/Burger/Buttons/Button'


import classes from './CheckoutSummary.css'

const CheckoutSummary =(props)=>{
  
    return(
            <div className={classes.CheckoutSummary}>
                <div className={classes.CheckoutForm}>
                    <Burger ingredients={props.ingredients} />
                   
                </div  >
                <div className={classes.Button}>
                    <Button btnType="Danger"
                    clicked={props.checkoutCancel}>CANCEL</Button>
                    <Button btnType="Success"
                    clicked={props.checkoutContinue}
                    >Chekout</Button>
                    </div>
            </div>

    )


}


export default CheckoutSummary