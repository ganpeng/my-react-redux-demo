'use strict'

import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'

import countReducer from './count'


const rootReducer = combineReducers({
    count : countReducer,
    routing
})


export default rootReducer