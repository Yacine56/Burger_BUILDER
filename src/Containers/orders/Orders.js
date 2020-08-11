import React ,{useEffect} from 'react'
import Order from './Order/Order'
//import instance from '../../Axios-Orders'
import WithErrorHandler from '../../HOC/WithErrorHandler/WithErrorHandler'
//import axios from 'axios'
import instance from '../../Axios-Orders'
import * as action from '../../Store/actions/Order'
import {connect} from 'react-redux' 
import Spinner from '../../Components/UI/Spinner/Spinner'


const Orders = props=> {




    useEffect(()=>{
        return ()=>{
            props.onfetchOrders(props.token)
        }
    },[props.token])
   
         let order =<Spinner />
          
          if(props.orders)
          {
            
              order=(  <div>
                <h3 >Your Previous Orders :</h3>
           {props.orders.map(order=>
              ( <Order  key={order.id} ingredients={order.ingredients} price={order.price} />))
           
           }
            </div>)
          }
         return order
           
    
}

const mapStateToProps=state=>{
    return{
        orders:state.OR.orders
        ,loading:state.OR.loading
        ,error:state.OR.error
        ,token:state.auth.token
    }
}

const mapDipatchToProps=dispatch=>{
    return{
        onfetchOrders:(token)=>dispatch(action.fetchOrders(token))
    }
}


export default connect(mapStateToProps,mapDipatchToProps)(WithErrorHandler(Orders,instance)) 