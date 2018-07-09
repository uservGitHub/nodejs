const express = require('express')
const router = express.Router()

module.exports = router.post('*', function(req, res, next){
    let data = ''
    req.on('data', (chunk) => data += chunk)
    req.on('end', () => {
        req.postString = data
        next()
    })
})

