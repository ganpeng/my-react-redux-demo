'use strict'

import express from 'express'

const route = express.Router()

route.get('/', (req, res) => {
    setTimeout(() => {
        // res.json([
        //     {
        //         name : 'louis',
        //         age : 20
        //     },
        //     {
        //         name : 'dongdong',
        //         age : 23
        //     }
        // ])    
        res.status(401).json({
            error : 'wrong!!'
        })

    }, 5000)
})



export default route