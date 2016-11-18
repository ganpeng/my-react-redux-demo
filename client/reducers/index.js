'use strict'

import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'

import countReducer from './count'
import usersReducer from './user'


const rootReducer = combineReducers({
    count : countReducer,
    users : usersReducer,
    routing
})


export default rootReducer