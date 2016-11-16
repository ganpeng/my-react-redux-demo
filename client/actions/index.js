'use strict'

import { INCREMENT, DECREMENT } from '../constants'

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