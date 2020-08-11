import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux'
import {createStore, applyMiddleware, compose,combineReducers} from 'redux'
import BurgerBuilderReducer from './Store/reducers/BurgerBuilder'
import thunk from 'redux-thunk'
import {orderReducer} from './Store/reducers/Order'
import {authReducer} from './Store/reducers/Auth'
import createSagaMiddelware from 'redux-saga'
import{ watch} from './Store/Saga/index'

const rootReducer = combineReducers({
    BB:BurgerBuilderReducer,
    OR:orderReducer,
    auth:authReducer
})

const sagaMiddleWare=createSagaMiddelware()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk,sagaMiddleWare)))
sagaMiddleWare.run(watch)
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
