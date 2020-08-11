import {takeEvery,all} from 'redux-saga/effects'
import * as actionType from '../actions/AcionsTypes'
import {logoutSaga, checkAuthTimeoutSaga,authSaga,authCheckStateSaga} from './auth'
import {fetchIngredientsSaga} from './BurgerBuilder'
import {submitOdersSaga,fetchOrdersSaga} from './order'



export function* watch(){
    yield all(
   [ takeEvery(actionType.AUTH_INITIATE_LOGOUT,logoutSaga),
     takeEvery(actionType.CHECK_EXPIRATIOM_TIME,checkAuthTimeoutSaga),
     takeEvery(actionType.AUTH_USER,authSaga),
     takeEvery(actionType.AUTH_CHECK_TIMEOUT,authCheckStateSaga) ,  

     takeEvery(actionType.FETCH_INGREDIENTS,fetchIngredientsSaga),

     takeEvery(actionType.SUBMIT_ORDERS,submitOdersSaga),
     takeEvery(actionType.FETCH_ORDER_INIT,fetchOrdersSaga),]
)} 