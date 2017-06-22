const html = require('choo/html')
const css = require('sheetify')

const prefix = css`
  :host {
    position: relative;
    height: 400px;

    .hero-inner {
      padding-top: 5rem;

      > .button {
        padding: 1rem 1.5rem;
        background: #6d56b3;
      }

      .hero-title {
        padding: 0.5rem 1rem;
      }
    }

    .hero-background {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -1;

      > .hero-picture {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background: center top url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzY4MHB4IiBoZWlnaHQ9Ijg2NXB4IiB2aWV3Qm94PSIwIDAgNzY4MCA4NjUiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGRlZnM+PGxpbmVhckdyYWRpZW50IHgxPSI2NS43MTAxOTc2JSIgeTE9IjAlIiB4Mj0iNjcuOTc3NzE2NiUiIHkyPSI4My42OTA5MDU2JSIgaWQ9ImxpbmVhckdyYWRpZW50LTEiPjxzdG9wIHN0b3AtY29sb3I9IiM1QzQyQUIiIHN0b3Atb3BhY2l0eT0iMC45ODE3OTkxMzkiIG9mZnNldD0iMCUiPjwvc3RvcD48c3RvcCBzdG9wLWNvbG9yPSIjNUM0MkFCIiBzdG9wLW9wYWNpdHk9IjAiIG9mZnNldD0iMTAwJSI+PC9zdG9wPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IHgxPSIzNi43MDEzMjg2JSIgeTE9IjAlIiB4Mj0iMzQuODU3MzI3MiUiIHkyPSI1Ny45NjQ1NjQ3JSIgaWQ9ImxpbmVhckdyYWRpZW50LTIiPjxzdG9wIHN0b3AtY29sb3I9IiM1QzQyQUIiIG9mZnNldD0iMCUiPjwvc3RvcD48c3RvcCBzdG9wLWNvbG9yPSIjNUM0MkFCIiBzdG9wLW9wYWNpdHk9IjAuMTYxNTQzMjUyIiBvZmZzZXQ9IjEwMCUiPjwvc3RvcD48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCB4MT0iODguMDAyMTUlIiB5MT0iMCUiIHgyPSI4OS42MzMyMDk2JSIgeTI9IjM5LjIxNDcyNDElIiBpZD0ibGluZWFyR3JhZGllbnQtMyI+PHN0b3Agc3RvcC1jb2xvcj0iIzVDNDJBQiIgb2Zmc2V0PSIwJSI+PC9zdG9wPjxzdG9wIHN0b3AtY29sb3I9IiNGRkZGRkYiIHN0b3Atb3BhY2l0eT0iMCIgb2Zmc2V0PSIxMDAlIj48L3N0b3A+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGcgaWQ9IlBhZ2UtMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PGcgaWQ9ImJhY2tncm91bmRfZGVmYXVsdCI+PGcgaWQ9Ikdyb3VwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjAwMDAwMCwgLTIuMDAwMDAwKSI+PHBvbHlnb24gaWQ9IlBhdGgtMiIgZmlsbD0idXJsKCNsaW5lYXJHcmFkaWVudC0xKSIgcG9pbnRzPSIwIDEgNDg2NC44OTg0NCAxIDAgNjU5LjM3NSI+PC9wb2x5Z29uPjxwb2x5Z29uIGlkPSJQYXRoLTMiIGZpbGw9InVybCgjbGluZWFyR3JhZGllbnQtMikiIHBvaW50cz0iMjYzMC40NzY1NiAyIDc2ODAgMiA3NjgwIDg0MiI+PC9wb2x5Z29uPjxwb2x5Z29uIGlkPSJQYXRoLTYiIGZpbGw9InVybCgjbGluZWFyR3JhZGllbnQtMykiIHBvaW50cz0iMCA4NjUuODU2NDQ1IDM2MDAuOTk1MTIgMC44NTY0NDUzMTIgMCAwLjg1NjQ0NTMxMiI+PC9wb2x5Z29uPjwvZz48L2c+PC9nPjwvc3ZnPg==);
        background-size: cover;
        z-index: -2;
      }

      > .hero-fade {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background: linear-gradient(to bottom, #5c42ab -13%, rgba(255,255,255,0), #fafafa 91%);
        z-index: -1;
      }
    }
  }
`

module.exports = (state, emit) => {
  return html`
    <div class=${prefix}>
      <div class="hero-inner ph4 tc h-100 white">
        <div class="db mb5">
          <h1 class="hero-title f2 normal dib bg-white black-70">A place to start using the choo framework</h1>
        </div>

        <a href="https://github.com/choo-kit/choo-starter#getting-started" class="button f4 white dim br2 no-underline">Get Started</a>
      </div>

      <div class="hero-background">
        <div class="hero-picture"></div>
        <div class="hero-fade"></div>
      </div>
    </div>
  `
}
