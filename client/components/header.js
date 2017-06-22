const html = require('choo/html')
const css = require('sheetify')

const prefix = css`
  :host {
    background: #5c42ab;
    border-bottom: 1px solid rgba(0, 0, 0, .1);
  }
`

const navItems = [{
  href: '/',
  text: 'Home'
}, {
  href: 'https://github.com/choo-kit/choo-starter',
  text: 'GitHub'
}]

module.exports = (state, emit) => {
  return html`
    <header role="banner" class=${prefix}>
      <div class="w-70 center ph4 pv3 flex justify-between items-center">
        <a href="/" id="logo" class="dib f2 no-underline white">choo-starter 📦</a>

        <ul class="list pl0 mv0 flex">
          ${navItems.map(item => {
            return html`<li class="dib ml4"><a href=${item.href} class="f4 dim no-underline color-inherit">${item.text}</a></li>`
          })}
        </ul>
      </div>
    </header>
  `
}
