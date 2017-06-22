const html = require('choo/html')
const css = require('sheetify')

const prefix = css`
  :host {
    background: #fafafa;
    border-top: 1px solid rgba(0, 0, 0, .05);
  }
`

module.exports = (state, emit) => {
  return html`
    <footer class=${prefix}>
      <div class="footer-inner tc f5 pv4 black-80">
        Made by <a href="https://github.com/iiegor" class="no-underline color-inherit bb b--mid-gray">Iegor Azuaga</a>
      </div>
    </footer>
  `
}
