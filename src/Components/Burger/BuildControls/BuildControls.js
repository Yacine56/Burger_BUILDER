import React from 'react'
import classes from './BuildControls.css'
import BuidlControl from  './BuildControl/BuildControl'

const controls=[
     {label:'Salad' ,type:'Salad'},
     {label:'Meat' ,type:'Meat'},
     {label:'Cheese' ,type:'Cheese'}
]


const BuildControls = (props)=>{
   const ControlButtons= controls.map(ctrl=>{
   
     return(<BuidlControl key={ctrl.label} 
          label={ctrl.label} 
          Add={()=>props.AddIngredient(ctrl.type)} 
          Remove={()=>props.RemoveIngredient(ctrl.type)}  
          disabled={props.disabled[ctrl.type]} />)
    
    })
    let pricetext=null
    if(props.price===4){
       pricetext=<h3 className={classes.price}>Your Starting Price is :</h3>
    }else{
      pricetext=<h3  className={classes.price}>Your Current Price is :</h3>
    }
   
     return(
     <div className={classes.BuildControls}>
         { ControlButtons}
         
      {pricetext}   
     <h1 >{props.price.toFixed(2)} $</h1>

     <button className={classes.OrderButton} 
     disabled={!props.purchasable}
     onClick={props.displaySummary}>{props.isAuth ? "Order Now" : "SignUp to Order " } !</button>

    </div>)
}

export default BuildControls