import * as actionType from '../actions/AcionsTypes'

const initialState={
    orders:[],
    loading:false,
    error:null
   
}


export const orderReducer=(state=initialState,action)=>{
    switch(action.type){
        case actionType.PURCHASE_INIT:
            return {
                ...state,
                purchased:false
            }
        case  actionType.BURGER_PURCHASE_START:
            return{
                 ...state,
                 loading:true
            }

        case actionType.BURGER_PURCHASE_SUCCESS:
            return{
                ...state,
               
                orders:this.state.orders.concat({...action.data,id:action.id}),
                loading:false
            }
           
        case actionType.BURGER_PURCHASE_FAIL:
            return{
                  ...state,
            
                  loading:false
            }  
        case actionType.FETCH_ORDERS_START:
            return {
                ...state,
                loading:action.loading
            }
        case actionType.FETCH_ORDERS_SUCCESS:
            return{
                ...state,
                orders:action.orders,
                loading:false
            }  
            
        case actionType.FETCH_ORDERS_FAIL:
            return{
                ...state,
                error:action.error

            }    

        default:
            return state      
    }
}

