import React from 'react'
//import {withRouter} from 'react-router-dom'
import classes from './Burger.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

const Burger =(props)=>{
let ArrayIngredient=Object.keys(props.ingredients).map(igKey=>
    [...Array(props.ingredients[igKey])].map((_,i)=>{
    return <BurgerIngredient key={igKey+i} type={igKey} />}
    )
    ).reduce((arr,el)=>{
        return arr.concat(el)
    },[])


if (ArrayIngredient.length===0){
    ArrayIngredient=<p>please start adding Ingredients !</p>
}
    return (
        <div className={classes.Burger}>
         <BurgerIngredient type="Bread-Top" />   
        {ArrayIngredient}
        <BurgerIngredient type="Bread-Bottom" />
        </div>
    )
}


export default Burger