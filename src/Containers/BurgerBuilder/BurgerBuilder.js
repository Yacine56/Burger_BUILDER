import React ,{Component} from 'react'
import Aux from '../../HOC/Aux' 
import Burger from '../../Components/Burger/Burger'
import BuildControls from '../../Components/Burger/BuildControls/BuildControls'
import Modal from '../../Components/UI/Modal/Modal'
import OrderSummary from '../../Components/Burger/OrderSummary/OrderSummary'
import instance from '../../Axios-Orders'
import Spinner from '../../Components/UI/Spinner/Spinner'
import withErrorHandler from '../../HOC/WithErrorHandler/WithErrorHandler'
import * as actions from '../../Store/actions/BurgerBuilder'
import * as authActions from '../../Store/actions/Auth'
import {connect} from 'react-redux'




export class BurgerBuilder extends Component {

    state={
     
         //purchasable:false
        displaySummary:false
       
      
        
    }
    UpdatPurchase(ingredients){
     
     const sum = Object.keys(ingredients).map(igKey=>{
         return ingredients[igKey]

     }).reduce((sum,el)=>{
         return sum+el
     },0)
            return sum>0
     

    }

    componentDidMount=()=>{
        this.props.onFetchingIngredients(this.props.auth)

    }

    // AddIngredient=(type)=>{
    //     // const cuurentCount =this.state.ingredient[type]
    //     // const UpdatedCount = cuurentCount+1
    //     // const StateCopy={...this.state.ingredient}
    //     // StateCopy[type]=UpdatedCount
    //     // const prices=this.state.price+Ingredient_prices[type]
        
    //     // this.setState(
    //     //     {ingredient:StateCopy,price:prices}
            
    //     // )

    //     // this.UpdatPurchase(StateCopy)
    // }

    // RemoveIngredient=(type)=>{
    //     // const cuurentCount =this.state.ingredient[type]
    //     // if(cuurentCount<=0){
    //     //     return;
    //     // }
    //     // const UpdatedCount = cuurentCount-1
    //     // const StateCopy={...this.state.ingredient}
    //     // StateCopy[type]=UpdatedCount
    //     // const prices=this.state.price-Ingredient_prices[type]
        
    //     // this.setState(
    //     //     {ingredient:StateCopy,price:prices}
            
    //     // )
    //     // this.UpdatPurchase(StateCopy)

    // }
    displaySummary=()=>{
        if(this.props.isAuth)
        {this.setState({
            displaySummary:true
        })}
        else{
            this.props.onRedirectPath('/checkout')
           this.props.history.push('/auth')
        }
    }
    BackDropCancel=()=>{
        this.setState({
            displaySummary:false
        })
    }
    PurchaseContinue=()=>{
    
    //    const queryParam =[]
    //    for(let i in this.props.ingredient){
    //        queryParam.push(encodeURIComponent(i)+'='+encodeURIComponent(this.props.ingredient[i]))
    //    }
    //    // eslint-disable-next-line
    //     queryParam.push('price='+this.props.price)
        this.props.history.push({
            pathname:'/checkout'
         //   search:'?'+queryParam.join('&')
        })
    }
   

    render(){
       
        let DisabledInfo={...this.props.ingredient}
        for(let key in DisabledInfo){
            DisabledInfo[key]=DisabledInfo[key]<=0
        }
         let  orderSummary=null
        let burger=this.props.error ? <h2 style={{textAlign:'center'}}>Ingredients Can't be loaded </h2> :<Spinner />
        if(this.props.ingredient)
       { 
        burger= (
        <Aux> 
            <Burger ingredients={this.props.ingredient}/>   
            <BuildControls 
        AddIngredient={this.props.onIngredientAdd} 
        RemoveIngredient={this.props.onIngredientRemove} 
        price={this.props.price} 
        disabled={DisabledInfo} 
        purchasable={this.UpdatPurchase(this.props.ingredient)}
        displaySummary={this.displaySummary}
        isAuth={this.props.isAuth}
        /> 
        </Aux> 
        )    
        orderSummary=  <OrderSummary  ingredients={this.props.ingredient} 
        PurchaseContinue={this.PurchaseContinue}
        BackDropCancel={this.BackDropCancel} 
        price={this.props.price} />
      
    
    }
    if (this.state.loading){
        orderSummary=<Spinner />
    }
        
        return(
           <Aux>
                <Modal show ={this.state.displaySummary}   BackDropCancel={this.BackDropCancel} >
                  {orderSummary}
                </Modal>
             {burger}
             </Aux>
        )
    }

}

const mapStateToProps= state =>{
   return{ 
       ingredient: state.BB.ingredient,
       price:state.BB.price
       ,error:state.BB.error
       ,token:state.auth.token
       ,isAuth:state.auth.token !== null
}}

const mapDipatchToProps =dispatch=>{
    return {
        onIngredientAdd:(igName)=>dispatch(actions.AddIngredient(igName) )
        ,onIngredientRemove:(igName)=>dispatch(actions.RemoveIngredient(igName))
        ,onFetchingIngredients:(token)=>dispatch(actions.fetchIngredients(token))
        ,onRedirectPath:(path)=>dispatch(authActions.authRedirect(path))
    }

}

export default connect(mapStateToProps,mapDipatchToProps)(withErrorHandler(BurgerBuilder,instance));