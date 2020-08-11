import React, {Component} from 'react'

import Input from '../../Components/UI/Input/Input'
import Button from '../../Components/Burger/Buttons/Button'
import classes from './Auth.css'
import * as actions from '../../Store/actions/Auth'
import {connect} from 'react-redux' 
import Spinner from '../../Components/UI/Spinner/Spinner'
import {Redirect} from 'react-router-dom'

class Auth extends Component {
    state={
        controls:{
            email:{
                elementType:'input',
                elementConfig:{
                    type:'email',
                    placeholder:'E-mail'
        
                },
                value:''
                ,validation:{
                    required:true,
                    isEmail:true
                }
                ,valid:false
                ,touched:false
            },
        password:{
                elementType:'input',
                elementConfig:{
                    type:'password',
                    placeholder:'Password'
        
                },
                value:''
                ,validation:{
                    required:true,
                    minLength:7
                }
                ,valid:false
                ,touched:false
            },

        }
        ,formValid:false
        ,isSignUp:true
    }
    componentDidMount=()=>{
        if(this.props.building && this.props.redirectPath){
            this.props.onRedirectPath()
        }
    }

    checkValidity=(value,rules)=>{
        let isValid=false
        if(rules.required)
       { isValid= value.trim() !== '' }       
       
       if(rules.length){
           isValid= value.length === rules.length
       }
       if (rules.isEmail) {
         const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
         isValid = pattern.test(value) && isValid
     }
     if (rules.minLength) {
        isValid = value.length >= rules.minLength && isValid
    }

    if (rules.maxLength) {
        isValid = value.length <= rules.maxLength && isValid
    }
 
     if (rules.isNumeric) {
         const pattern = /^\d+$/;
         isValid = pattern.test(value) && isValid
     }
       
       return isValid
   
     }
     InputChangehandler=(event,FieldName)=>{
          const UpdatedForm={
              ...this.state.controls,
              [FieldName]:
              {...this.state.controls[FieldName],
                value:event.target.value,
                valid:this.checkValidity(event.target.value,this.state.controls[FieldName].validation)
              , touched:true
            }
          }
    
    this.setState({ 
        controls:UpdatedForm
    })
        }

    onSubmit=(event)=>{
        event.preventDefault()
        this.props.onSubmitForm(this.state.controls.email.value,this.state.controls.password.value,this.state.isSignUp)

    }

    switchSugnMethod=()=>{
        this.setState(prevState=>{
           return {isSignUp:!prevState.isSignUp}
        })
    }



    render(){
        let StateForm =[]
        for(let key in this.state.controls){
            StateForm.push({
                id:key,
                config:this.state.controls[key]})
        }
       
       let form =(  <form onSubmit={this.onSubmit} >
                       {StateForm.map(element=>{
                         return ( <Input key={element.id} elementType={element.config.elementType} 
                           elementConfig={element.config.elementConfig}  invalid={!element.config.valid}  
                           touched={element.config.touched} value={element.config.value}
                           changed={(event)=>this.InputChangehandler(event,element.id)}
                             />)
                       })}
                             <Button btnType='Success' >Submit</Button>
                  
                       </form>
                       
                       )
                if(this.props.loading){
                    form=<Spinner />
                }  
                let errormessage=null
                if(this.props.error){
                    errormessage=(
                    <p>{this.props.error.message}</p>
                    )
                }     
let redirect=null
              if (this.props.isAuth){
                  redirect=<Redirect to={this.props.redirectPath} />
              }


         return (
             <div className={classes.Auth}>
                 {redirect}
                 {errormessage}
                 {form}
                 <Button btnType='Danger' 
                         clicked={this.switchSugnMethod} >{this.state.isSignUp ? 'switch to sign in': 'switch to sign up'}</Button>
             </div>
         )

    }


}

const mapStateToProps=state=>{
  return { 
           loading:state.auth.loading,
           error:state.auth.error,
           isAuth:state.auth.token !== null,
           redirectPath:state.auth.redirectPath,
           building:state.BB.building
           
}
}

const mapDipatchToProps=dispatch=>{
    return{
        onRedirectPath:()=>dispatch(actions.authRedirect('/'))
       , onSubmitForm:(email,password,isSignUp)=>dispatch(actions.authPost(email,password,isSignUp))
    }
}

export default connect(mapStateToProps,mapDipatchToProps)(Auth)