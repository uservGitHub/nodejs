#! node

let http = require('http')

const {log} = console

const postString = process.argv[2] || 'no string.'
const path = process.argv[3] || '/'
const port = process.argv[4] || '3000'

const opt = {
  hostname: 'localhost',
  port: port,
  path: path,
  method: 'POST',
  headers: {
    'Content-Type': 'text/plain',
    'Content-Length': Buffer.byteLength(postString)
  }
}

const req = http.request(opt, (res)=>{
  log(`statusCode:${res.statusCode}`)
  log(`headers:${JSON.stringify(res.headers)}`)
  res.setEncoding('utf8')
  res.on('data', (chunk)=>{
    log(`data:${chunk}`)
  })
  res.on('end', ()=>{
    log('data end')
  })
})

req.on('error', (e)=>{
  log(`error:${e.message}`)
})

log('POST传输字符串，无需编码解码。')

req.write(postString)
req.end()

