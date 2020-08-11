import React from 'react'
import Aux from '../../../HOC/Aux'
import Button from '../Buttons/Button'

const OrderSummary =(props)=>{
    const OrderList = Object.keys(props.ingredients).map(igkey=>{

        return <li key={igkey}><span style={{textTransform:'capitalize'}}>{igkey}</span> : {props.ingredients[igkey]} </li>
    })
  return(  <Aux>
      <h1>Your order Summary</h1>
      <h3>The Ingredients Are the following :</h3>
      <ul>
          {OrderList}
      </ul>
  <h3><strong>YOUR TOTAL IS PRICE: {props.price.toFixed(2)}</strong></h3>
      <h2>Continue to checkout ?</h2>
      <Button btnType='Danger' clicked={props.BackDropCancel}>CANCEL</Button>
      <Button btnType='Success' clicked={props.PurchaseContinue}>CONTINUE</Button>

    </Aux>)

}

export default OrderSummary