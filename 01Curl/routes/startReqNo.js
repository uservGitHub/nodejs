const express = require('express')
const router = express.Router()

// 请求序号
let clientReqNo = 0

module.exports = router.all('*' ,function(req, res, next){
    clientReqNo += 1
    // 打印请求序号和类型
    console.log(`ReqNo.${clientReqNo}  ${req.method}  ${req.originalUrl}`)
    req.clientReqNo = clientReqNo
    next()
})
