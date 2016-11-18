'use strict'

import { createStore, applyMiddleware } from 'redux'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import thunk from 'redux-thunk'
import promise from 'redux-promise'
import createLogger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'


import rootReducer from '../reducers'
import rootSaga from '../saga'

const initialState = {
    count : 5
}

const sagaMiddleware = createSagaMiddleware()
const logger = createLogger()

const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk, promise, sagaMiddleware, logger)
)

sagaMiddleware.run(rootSaga)

export const history = syncHistoryWithStore(browserHistory, store)


export default store