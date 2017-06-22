const assert = require('assert')
const html = require('bel')
const css = require('sheetify')

const prefix = css`
  :host {
    font-family: inherit;
    color: #fff;
    background: #333;
    padding: 0;
    line-height: 1.25;
    cursor: pointer;

    > .button-inner {
      position: relative;
      padding: 0.5em 1em;
    }
  }

  :host:hover {
    > .button-inner {
      background: rgba(255, 255, 255, .1);
    }
  }
`

module.exports = (props) => {
  assert.equal(typeof props, 'object', 'elements/button: props should be an object')

  var classNames = prefix
  if (props.hasOwnProperty('class')) {
    classNames += ' ' + props.class
  }

  var click = null
  if (props.hasOwnProperty('click')) {
    click = props.click
  }

  return html`
    <button class="${classNames} white bn br2" onclick=${click}>
      <div class="button-inner">${props.label}</div>
    </button>
  `
}
