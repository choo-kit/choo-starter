const path = require('path')
const express = require('express')
const compression = require('compression')
const bodyParser = require('body-parser')
const app = require('../client/app')
const page = require('./page')
const createApi = require('./api')
const pkg = require('../package.json')

module.exports = (db) => {
  const api = createApi(db)

  const router = express()
  router.use(compression())
  router.use('/public', express.static(path.resolve('./public'))) 
  router.use(bodyParser.json()) // support json encoded bodies

  router.get('/api/v1/users', api.users.get)

  function send (req, res) {
    var state = getDefaultAppState()

    sendPage(req, res, state)
  }
  
  // landing page
  router.get('/', (req, res) => {
    var state = getDefaultAppState()

    // state.param = ..

    sendPage(req, res, state)
  })
  router.get('/about', send)
  router.get('/404', send)
  router.get('/*', send)

  return router

  // helpers
  function getDefaultAppState () {
    var state = {}
    for (var key in app.defaults) {
      state[key] = app.defaults[key]
    }

    return JSON.parse(JSON.stringify(state))
  }

  function sendPage (req, res, state) {
    res.setHeader('Content-Type', 'text/html')

    const frozenState = Object.freeze(state)
    const contents = app.toString(req.url, frozenState)

    return res.end(page(contents, frozenState))
  }
}
