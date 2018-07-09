const express = require('express')
const router = express.Router()

// 存在postString 返回之
module.exports = router.all('*', function(req, res){
    console.log(`ReqNo.${req.clientReqNo}  End\n`)
    
    if(req.postString !== undefined){
        res.writeHead(200)        
        res.write(req.postString)   // 单纯字符串无需编码
        res.end()
    }else{
        res.sendStatus(200)
    }
})
