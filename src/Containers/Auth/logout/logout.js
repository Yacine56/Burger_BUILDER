import React ,{Component} from 'react'
import * as action from '../../../Store/actions/Auth'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'



class Logout extends Component {
    componentDidMount=()=>{
       this.props.onLogout()
   }


   render(){
       return (<Redirect to='/' />)
   }
}

const mapDispatchToProps=dispatch=>{
    return{
        onLogout:()=>{dispatch(action.logout())}
    }
}

export default connect(null,mapDispatchToProps)(Logout) 