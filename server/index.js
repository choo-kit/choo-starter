const express = require('express')
const http = require('http')
const database = require('./database')
const createRouter = require('./router')
const config = require('../config')

const log = console.log
const db = database(config.db)
const router = createRouter(db)

const server = http.createServer((req, res) => {
  req.on('finish', end)
  req.on('close', end)
  
  router(req, res)

  function end () {
    res.removeListener('finish', end)
    res.removeListener('close', end)
  }
})

const port = process.env.PORT || 8080
server.listen(port, () => log('info', `Server started at :${port}`))

process.once('uncaughtException', (err) => {
  log('error', err.stack)
  process.exit(1)
})
