import {put} from'redux-saga/effects'
//import *as actionType from '../actions/AcionsTypes'
import * as actionO from '../actions/Order'
//import {delay} from 'redux-saga'
//import axios from 'axios'
import instance from '../../Axios-Orders'


export function* submitOdersSaga(action){

   try{
        yield put(actionO.burgerPurchaseStart())
        const response = yield instance.post('/orders.json?auth='+action.token,action.orderdata)
        
         yield put(actionO.burgerPurchaseSuccess(response.data.name,action.orderdata))
    
    }catch(error){
          yield put(actionO.burgerPurchaseFail(error))
        
        }
  
       
   

    }


export function* fetchOrdersSaga(action){
   try{
        yield put(actionO.fetchOrdersStart())
       const response= instance.get('/orders.json?auth='+action.token)
       const data =[]     
      
        for(let key in response.data ){
 
             data.push({...response.data[key],
            id:key})
         }
       console.log("data",data)  
    yield put(actionO.fetchOrdersSuccess(data))
     }catch(err){
      yield put(actionO.fetchOrdersFail(err))
     }
 }



