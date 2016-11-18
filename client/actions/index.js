'use strict'

import axios from 'axios'

import { 
    INCREMENT, 
    DECREMENT,
    REQUEST_USER_DATA,
    REQUEST_USER_DATA_SUCCESS,
    REQUEST_USER_DATA_FAILURE
} from '../constants'

export function delayIncrement(number) {
    return dispatch => {
        setTimeout(() => {
            dispatch(increment(number))
        }, 4000)
    }
}

export function increment(number) {
    return {
        type : INCREMENT,
        number
    }
}


export function decrement(number) {
    return {
        type : DECREMENT,
        number
    }
}


export function fetchUser() {
    return dispatch => {
        dispatch(fetchUserRequest())
        return axios.get('/users')
            .then((res) => {
                dispatch(fetchUserSuccess(res.data))
            })
            .catch((err) => {
                dispatch(fetchUserFailure('errors!!!!'))
            })
    }
}


export function fetchUserRequest() {
    return {
        type : REQUEST_USER_DATA
    }
}



export function fetchUserSuccess(users) {
    return {
        type : REQUEST_USER_DATA_SUCCESS,
        users
    }
}

export function fetchUserFailure(error) {
    return {
        type : REQUEST_USER_DATA_FAILURE,
        error
    }
}


export function sagaRequest() {
    return dispatch => {
        dispatch({type : REQUEST_USER_DATA})
    }
}

