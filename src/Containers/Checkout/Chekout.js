import React from 'react'
import CheckoutSummary from '../../Components/Order/CheckoutSummary/ChekoutSummary'
import {Route,Redirect} from 'react-router-dom'
import ContactData from './Contactdata/ContactData'
import {connect} from 'react-redux'
import * as action from '../../Store/actions/Order'

const Chekout =props=>{


//componentDidMount=()=>{
    // const query =new URLSearchParams(props.location.search)
    // const ingredients={}
    // let prices=null
    // for(let param of query.entries()){
    //     if(param[0]==='price'){
    //         prices= +param[1]
    //     }else
    //     {ingredients[param[0]]= +param[1]
    //     }
    // }

    // setState({
    //     ingredients:ingredients,price:prices
    // })
//}

const checkoutContinueHandler=()=>{
    props.onPurchaseInit()
    props.history.replace('/checkout/contact-data')

}

const  checkoutCancelHandler=()=>{
    props.history.goBack()
}




        let summary=<Redirect to='/' />
         if(props.ingredients){
             console.log(props.purchased)
             const redirect= props.purchased && <Redirect to='/' />  
             
             summary=( <div>
                 {redirect}
                <CheckoutSummary 
                ingredients={props.ingredients}
                checkoutCancel={checkoutCancelHandler}
                checkoutContinue={checkoutContinueHandler} />
                <Route path={props.match.url+'/contact-data'} component={ContactData} />
                
            </div>)
         }

        return summary




}

const mapStateToProps=state=>{
    return {
        ingredients:state.BB.ingredient
        ,purchased:state.OR.purchased
    }
}

const mapDipatchToProps=dispatch=>{
    return{
        onPurchaseInit:()=>dispatch(action.purchaseInit())
    }
}

export default connect(mapStateToProps,mapDipatchToProps)(Chekout)