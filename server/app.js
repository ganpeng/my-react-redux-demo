'use strict'

import express from 'express'
import path from 'path'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'

import webpackConfig from '../webpack.config.dev'

import users from './router'


const PORT = process.env.PORT || 3001
const app = express()
const compiler = webpack(webpackConfig)

app.use(webpackDevMiddleware(compiler, {
    noInfo : true,
    publicPath : webpackConfig.output.publicPath
}))
app.use(webpackHotMiddleware(compiler))


app.use('/users', users)

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/index.html'))
})


app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
})