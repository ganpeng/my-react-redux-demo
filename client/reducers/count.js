'use strict'

import { INCREMENT, DECREMENT } from '../constants'

export default function count(state=0, action) {
    switch (action.type) {
        case INCREMENT : {
            return state + action.number
        }
        case DECREMENT : {
            return state - action.number
        }
        default : 
            return state
    }
}