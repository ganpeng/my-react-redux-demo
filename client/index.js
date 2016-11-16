'use strict'
import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'

import route from './route'

render(
    route,
    document.getElementById('root')
)