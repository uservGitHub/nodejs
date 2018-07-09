const express = require('express')
const startReqNo = require('./routes/startReqNo')
const endTry = require('./routes/endTry')
const receivePostString = require('./routes/receviePostString')

const app = express()
const {log} = console

app.use(startReqNo)
app.use(receivePostString)

//或者 app.use((req, res, next) => {})
app.post('/*', (req, res, next) => {
    log(`postString:${req.postString}`)
    next()
})

app.use(endTry)

if(!module.parent){
    const server = app.listen(3000, () => {
        const {port, address} = server.address()
        log(`curl server listening at ${address} on port ${port}.`)
    })
}
