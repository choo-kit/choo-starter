const choo = require('choo')
const log = require('choo-log')
const css = require('sheetify')
const defaults = require('./models/defaults')

function parseDefaults (defs) {
  return function (state, emitter) {
    for (let key in defs) {
      state[key] = module.parent ? defs[key] : window.$STATE[key]
    }

    emitter.emit('render')
  }
}

const app = choo()

// define models:
app.use(parseDefaults(defaults))

if (process.env.NODE_ENV === 'development') {
  app.use(log())
}

// define global styles:
css('tachyons')

css`
  *, *:before, *:after {
    box-sizing: inherit;
  }

  html {
    background: #fafafa;
  }

  html,
  body {
    font-size: 14px;
    margin: 0;
  }

  .rubik {
    font-family: 'Rubik', sans-serif;
  }

  .font-smoothing {
    -webkit-font-smoothing: antialiased;
  }

  .page {
    background: #fff;
  }
`

// define routes:
app.route('/', require('./pages/home'))
app.route('/404', require('./pages/error'))

app.defaults = defaults

if (module.parent) {
  module.exports = app
} else {
  app.mount('#app-root')
}
