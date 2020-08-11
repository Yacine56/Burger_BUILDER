import * as actionType from '../actions/AcionsTypes'
import { updateObject } from '../utility'


const initialState={
    token:null,
    userId:null,
    error:null,
    loading:false,
    redirectPath:'/'
}

const authStart=(state,actions)=>{
    return updateObject(state,{error:null,loading:true})
}

const authSuccess=(state,action)=>{
    return updateObject(state,{
        token:action.token,
        userId:action.userId,
        error:null,
        loading:false
    })
}
const authFail=(state,action)=>{
    return updateObject(state,{
        error:action.error,
        loading:false
    })
}

const authLogout=(state,action)=>{
    return updateObject(state,{
        userId:null,
        token:null
        
    })
}

const authRedirect=(state,action)=>{
    return updateObject(state,{redirectPath:action.path})
}

export const authReducer =(state=initialState,action)=>{
       switch(action.type){
           case actionType.AUTH_START:
               return authStart(state,action)

            case actionType.AUTH_SUCCESS:
                return authSuccess(state,action)
                
            case actionType.AUTH_FAIL:
                return authFail(state,action)    

            case actionType.AUTH_LOGOUT:
                return authLogout(state,action)    

            case actionType.AUTH_REDIRECT:
                return authRedirect(state,action)    

            default:
                return state
            }
}