import React, { useState, useEffect} from 'react'
import Modal from '../../Components/UI/Modal/Modal'
import Aux from '../../HOC/Aux'


const withErrorHandler =(WrappedComponent,axios)=>{
   return props=>
{
    const [error,setError]=useState(false)
   
        const inter=axios.interceptors.request.use(req=>{
           setError(null)
           return req
         
        })
        const interErr=axios.interceptors.response.use(res =>res,err=>{
            setError(err)
        })
    useEffect(()=>{
        return()=>{
            axios.interceptors.request.eject( inter)
             axios.interceptors.response.eject(interErr)
        }
    },[inter,interErr])
    const errorComfimedHandler=()=>{
        setError(null)
    }

  
    return (
        <Aux>
          <Modal show={error} BackDropCancel={errorComfimedHandler}>
              {error && error.message}
          </Modal>
        <WrappedComponent {...props} />
        </Aux>
    )}
}


export default withErrorHandler