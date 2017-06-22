const html = require('choo/html')
const css = require('sheetify')

const prefix = css`
  :host {
  }
`

module.exports = (state, emit) => {
  return html`
    <div class=${prefix}>
      <div class="container">
        <h1 class="f4 f3-ns fw6 black-80">404 Not Found</h1>
      </div>
    </div>
  `
}
