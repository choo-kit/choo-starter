const html = require('choo/html')
const css = require('sheetify')

const header = require('../components/header')
const hero = require('../components/hero')
const footer = require('../components/footer')
const button = require('../elements/button')

module.exports = (state, emit) => {
  return html`
    <div class="app-container">
      ${header(state, emit)}
      ${hero(state, emit)}
      ${footer(state, emit)}
    </div>
  `

  function buttonClick () {
    console.log('Button clicked!')
  }
}
