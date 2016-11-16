'use strict'

import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'
import { Provider } from 'react-redux'

import App from '../containers/App'
import store, { history } from '../store'

const route = (
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={App} />
            </Route>
        </Router>
    </Provider>
)

export default route