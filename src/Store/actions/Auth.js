import * as actionType from './AcionsTypes'
//import axios from 'axios'

export const authStart=()=>{
    return{
        type:actionType.AUTH_START
        ,loading:true
    }
}

export const authSuccess=(token,userId)=>{
    return {
        type:actionType.AUTH_SUCCESS
        ,token:token
        ,userId:userId
    }
}

export const authFail=(error)=>{
    return{
        type:actionType.AUTH_FAIL,
        error:error
    }
}

export const logout=()=>{
    // localStorage.removeItem('token')
    // localStorage.removeItem('expirationTime')
    return{
        type:actionType.AUTH_INITIATE_LOGOUT
    }
}
export const authRedirect=(path)=>{
    return {
        type:actionType.AUTH_REDIRECT,
        path:path
    }
}

export const sessionExpired=(expireTime)=>{
    return {
        type:actionType.CHECK_EXPIRATIOM_TIME
        ,expireTime:expireTime
        
    }
}

export const authPost=(email,password,isSignUp)=>{
    return {
        type:actionType.AUTH_USER,
        email:email,
        password:password,
        isSignUp:isSignUp
        }

}

export const checkAuthTimeout = expirationTime => {
    return {
      type: actionType.AUTH_CHECK_TIMEOUT,
      expirationTime: expirationTime
    };
  };