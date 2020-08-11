import React, { Suspense } from 'react';
import Layout from './Components/Layout/Layout'
import BurgerBuilder from './Containers/BurgerBuilder/BurgerBuilder'
import './App.css';
//import Chekout from './Containers/Checkout/Chekout'
import {BrowserRouter, Route,Switch, Redirect} from 'react-router-dom'
//import Orders from './Containers/orders/Orders'
//import Auth from './Containers/Auth/Auth'
import Logout from './Containers/Auth/logout/logout'

const Checkout=React.lazy(()=>{
  return import('./Containers/Checkout/Chekout')
})

const Orders =React.lazy(()=>{
  return import('./Containers/orders/Orders')
})

const Auth=React.lazy(()=>{
  return import('./Containers/Auth/Auth')
})

let routes=(
  <BrowserRouter basename='myBurger'>
  <div >
   <Layout>
     <Switch>
    <Route path='/checkout' render={(props)=><Checkout {...props} />} />
    <Route path='/orders'   render={(props)=><Orders {...props}/>} />
    <Route path='/Auth'     render={(props)=><Auth {...props}/>} />
    <Route path='/logout'   component={Logout} />
    <Route path='/'     exact    component={BurgerBuilder} />
    <Redirect to='/' />
    </Switch>
   </Layout>
  </div>
  </BrowserRouter>
)

const app =()=> {
 
    return (<div>
      <Suspense fallback={<p>LOADING......</p>} >{routes} </Suspense>
    </div>
     
    );
  }


export default app;
