import {put,delay} from'redux-saga/effects'
import *as actionType from '../actions/AcionsTypes'
import * as actions from '../actions/Auth'
//import {delay} from 'redux-saga'
import axios from 'axios'

export function* logoutSaga(action){
   yield localStorage.removeItem('token')
   yield localStorage.removeItem('expirationTime')
    
   yield put({
       type:actionType.AUTH_LOGOUT
   })

}

export function* checkAuthTimeoutSaga (action){
    yield delay(action.expireTime*1000)
    yield put(actions.logout())
}

export function* authSaga(action){

      yield put(actions.authStart())
      const authData = {
         email: action.email,
         password: action.password,
         returnSecureToken: true
     };
       let URL='https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC-S5YELYe-YKYyNEp55F012DT-a-SQ1T8'
         if(!action.isSignUp){
             URL='https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyC-S5YELYe-YKYyNEp55F012DT-a-SQ1T8'
         } 
       
      const response= yield axios.post(URL,authData)
      console.log(response)
           try{
              const expirationTime=yield new Date(new Date().getTime()+response.data.expiresIn*1000)
             localStorage.setItem('token',response.data.idToken)
             localStorage.setItem('expirationTime',expirationTime)
             yield put(actions.authSuccess(response.data.idToken,response.data.localId))
             yield  put(actions.sessionExpired(response.data.expiresIn))
                }catch(err){
                    console.log(err)
                    put(actions.authFail(err.response.data.error))
                }
     }

     export function* authCheckStateSaga(action) {
        const token = yield localStorage.getItem("token");
        if (!token) {
          yield put(actions.logout());
        } else {
          const expirationDate = yield new Date(
            localStorage.getItem("expirationDate")
          );
          if (expirationDate <= new Date()) {
            yield put(actions.logout());
          } else {
            const userId = yield localStorage.getItem("userId");
            yield put(actions.authSuccess(token, userId));
            yield put(
              actions.checkAuthTimeout(
                (expirationDate.getTime() - new Date().getTime()) / 1000
              )
            );
          }
        }
      }



