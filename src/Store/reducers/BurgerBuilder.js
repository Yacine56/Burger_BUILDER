import * as actionType from '../actions/AcionsTypes'


const initialState={
    ingredient:null,
    price:4
    ,error:false
    , building:false
}


const Ingredient_prices= {
    Salad:0.8,
    Meat:2.5,
    Cheese:1.2,

}

const BurgerBuilderReducer =(state=initialState,action)=>{
    switch(action.type){
        case actionType.ADD_INGREDIENT :
            return{
                ...state,
                ingredient:{
                    ...state.ingredient,
                    [action.ingredientName]:state.ingredient[action.ingredientName]+1
                }
                ,price:state.price+Ingredient_prices[action.ingredientName]
                ,building:true
            }
        case actionType.REMOVE_INGREDIENT:
            return{
                ...state,
                ingredient:{
                    ...state.ingredient,
                    [action.ingredientName]:state.ingredient[action.ingredientName]-1
                }
                ,price:state.price-Ingredient_prices[action.ingredientName]
                ,building:true
            }
        case actionType.SET_INGREDIENTS:
            return{
                ...state,
                ingredient:{
                    Salad:action.ingredient.Salad,
                    Meat:action.ingredient.Meat,
                    Cheese:action.ingredient.Cheese
                },
                error:false,
                price:4
            }
        case actionType.FETCH_FAILED:
            return{
                ...state,
                error:true
}    
         case actionType.REDIRECT:
             return{
                 ...state,
                 ingredient:null,
                 price:4
             }  
            default: return state
    }


}

export default BurgerBuilderReducer