import React from 'react'
import classes from './Order.css'

const Order =(props)=>{
   const ingredientsPurchased=[]

   for(let ingredientName in props.ingredients){
       ingredientsPurchased.push({name:ingredientName,amount:props.ingredients[ingredientName]})
   }
   console.log(ingredientsPurchased)

   const list =ingredientsPurchased.map(ig=>{
       return (<li key={ig.name}>{ig.name}: {ig.amount} </li>)
   })

   return (<div className={classes.Order}>
     <p>INGREDIENTS</p>
     {list}
     <p>PRICE : {props.price} $</p>

    </div>
)
   }
export default Order