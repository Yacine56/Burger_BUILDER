import React ,{Component} from 'react'
import Button from '../../../Components/Burger/Buttons/Button'
//import instance from '../../../Axios-Orders'
//import {Redirect} from 'react-router-dom'
import Spinner from '../../../Components/UI/Spinner/Spinner'
import Input from '../../../Components/UI/Input/Input'
import classes from './ContactDate.css'
import {connect} from 'react-redux' 
import * as actions from '../../../Store/actions/Order'
import * as burgeraction from '../../../Store/actions/BurgerBuilder'


class ContactData extends Component {
state={
   orderForm: {name:{
        elementType:'input',
        elementConfig:{
            type:'text',
            placeholder:'Your name'

        },
        value:''
        ,validation:{
            required:true
        }
        ,valid:false
        ,touched:false
    },
    street: {
        elementType:'input',
        elementConfig:{
            type:'text',
            placeholder:'Adress'

        },
        value:''
        ,validation:{
            required:true
        }
        ,valid:false
        ,touched:false
    },
    zipCode:{
        elementType:'input',
        elementConfig:{
            type:'text',
            placeholder:'Zip Code'

        },
        value:''
        ,validation:{
            required:true
            ,length:5,
            isNumeric:true
        }
        ,valid:false
        ,touched:false
    },
    country:{
        elementType:'input',
        elementConfig:{
            type:'text',
            placeholder:'Country'

        },
        value:''
        ,validation:{
            required:true
        }
        ,valid:false
        ,touched:false
    },
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
    deliveryMethod:{
        elementType:'select',
        elementConfig:{
            options:[{value:'fastest',displayValue:'Fastest'},
                     {value:'cheapest',displayValue:'Cheapest'},
        ]

        },
        value:'fastest',
        valid:true
       
    }
},
   
    formValid:false
}

OrderHandler=(event)=>{
    this.setState({loading:true})
    const formdata={}
    for(let elementName in this.state.orderForm){
        formdata[elementName]=this.state.orderForm[elementName].value
    }
  
  
    const order={
        ingredient:this.props.ingredient,
        price:this.props.price,
        data:formdata
      
        }

        this.props.onSubmitOrder(order,this.props.token)
       this.props.onredirect()
      
    
  
     
}

InputChangehandler=(event,FieldName)=>{
    const FormCopy ={...this.state.orderForm}
    let targetConfig={...FormCopy[FieldName]}

     targetConfig.value=event.target.value
     targetConfig.valid=this.checkValidity(targetConfig.value,targetConfig.validation)
     targetConfig.touched=true
    
     FormCopy[FieldName]=targetConfig
    let formvalid=true
  
     for(let key in FormCopy){
         formvalid=FormCopy[key].valid && formvalid

     }
     console.log(formvalid)
     this.setState({
         orderForm:FormCopy,
         formValid:formvalid
     })


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

    if (rules.isNumeric) {
        const pattern = /^\d+$/;
        isValid = pattern.test(value) && isValid
    }
      
      return isValid
  
    }
   

render(){
    let StateForm =[]
    for(let key in this.state.orderForm){
        StateForm.push({
            id:key,
            config:this.state.orderForm[key]})
    }



    let form =( <form onSubmit={this.OrderHandler}>
        
        {StateForm.map(element=>{
          return(<Input key={element.id} elementType={element.config.elementType} 
            elementConfig={element.config.elementConfig} value={element.config.value}
             options={element.config.options} changed={(event)=>this.InputChangehandler(event,element.id)}
             invalid={!element.config.valid}  touched={element.config.touched} />)
        })}   
        <Button btnType='Success' disabled={!this.state.formValid}>Submit</Button>
        </form>)
   if (this.props.loading){
       form=(<Spinner />)
   }
 

    return(
        <div className={classes.ContactData} >
            <h4>Enter Your Contact Data</h4>
           {form}
        </div>
    )
}

}

const mapStateToProps=state=>{
    return {
        ingredient:state.BB.ingredient,
        price:state.BB.price,
        loading:state.OR.loading,
        token:state.auth.token
        
    }
}

const mapDipatchToProps=dispatch=>{
   return { 
       onSubmitOrder:(orderdata,token)=>dispatch(actions.submitPurchase(orderdata,token))
       ,onredirect:()=>dispatch(burgeraction.redirect())
}
}

export default connect(mapStateToProps,mapDipatchToProps)(ContactData)