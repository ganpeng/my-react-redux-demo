'use strict'

import {
    REQUEST_USER_DATA,
    REQUEST_USER_DATA_SUCCESS,
    REQUEST_USER_DATA_FAILURE
} from '../constants'

const initialState = {
    isFetching : false,
    users : [],
    error : '' 
}

export default function user(state=initialState, action) {
    switch(action.type) {
        case REQUEST_USER_DATA : {
            return Object.assign({}, state, {isFetching : true, error : ''})
        }
        case REQUEST_USER_DATA_SUCCESS : {
            return Object.assign({}, state, {isFetching : false, users: [...state.users, ...action.users], error : ''})
        }
        case REQUEST_USER_DATA_FAILURE : {
            return Object.assign({}, state, {isFetching : false, error : action.error})
        }
        default :
            return state
    }
}