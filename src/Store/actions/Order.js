import * as actionType from './AcionsTypes'
//import instance from '../../Axios-Orders'

export const burgerPurchaseSuccess=(id,orderdata)=>{
    return {
        type:actionType.BURGER_PURCHASE_SUCCESS,
        id:id,
        data:orderdata
    }

} 

export const burgerPurchaseFail=(error)=>{
    return{
        type:actionType.BURGER_PURCHASE_FAIL
        ,error:error
    }
}

export const burgerPurchaseStart=()=>{
    return {
        type:actionType.BURGER_PURCHASE_START
    }
}

export const submitPurchase=(orderdata,token)=>{
       return{
           type:actionType.SUBMIT_ORDERS,
           oderdata:orderdata,
           token:token
       }
}

export const purchaseInit=()=>{
    return{
        type:actionType.PURCHASE_INIT
    }
}


export const fetchOrdersSuccess=(orders)=>{
    return{
        type:actionType.FETCH_ORDERS_SUCCESS,
        orders:orders
    }
}

export const fetchOrdersFail=(error)=>{
    return{
        type:actionType.FETCH_ORDERS_FAIL,
        error:error
    }
}

export const fetchOrdersStart=()=>{
    return{
        type:actionType.FETCH_ORDERS_START,
        loading:true
    }
}



export const fetchOrders=(token)=>{
    return{
        type:actionType.FETCH_ORDER_INIT,
        token:token
    }
 
}