import {put} from'redux-saga/effects'
//import *as actionType from '../actions/AcionsTypes'
import * as actionB from '../actions/BurgerBuilder'
//import {delay} from 'redux-saga'
//import axios from 'axios'
import instance from '../../Axios-Orders'


export function* fetchIngredientsSaga(action){
    try{
        const response = yield instance.get('/ingredients.json')
        
          yield  put(actionB.setIngredients(response.data))
            
        }catch(error){
           
            yield  put(actionB.fetchFailed(error))
        }

    
}