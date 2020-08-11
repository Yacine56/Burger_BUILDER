import * as actionType from './AcionsTypes'
//import instance from '../../Axios-Orders'

export const AddIngredient=(name)=>{
    return {type:actionType.ADD_INGREDIENT,ingredientName:name}
}

export const RemoveIngredient=(name)=>{
      return {type:actionType.REMOVE_INGREDIENT,ingredientName:name}
}

export const setIngredients=(ingredients)=>{
    return {
        type:actionType.SET_INGREDIENTS,
        ingredient:ingredients
    }
}

export const fetchFailed =()=>{
        return {
            type:actionType.FETCH_FAILED
        }
}

export const redirect=()=>{
    return{
        type:actionType.REDIRECT
    }
}
 

export const fetchIngredients=(token)=>{
  return{
      type:actionType.FETCH_INGREDIENTS
  }
}