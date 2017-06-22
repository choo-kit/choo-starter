const config = require('../config')

function page(contents, state) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>${config.site.name}</title>

      <link href="https://fonts.googleapis.com/css?family=Rubik:300,400" rel="stylesheet">
      <link rel="stylesheet" href="/public/app.css">
    </head>
    <body class="rubik font-smoothing white-80">
      <div id="app">
        <div id="app-root">${contents}</div>
      </div>

      <script type="text/javascript">window.$STATE = ${JSON.stringify(state)};</script>
      <script type="text/javascript" src="/public/app.js"></script>
    </body>
    </html>
  `
}

module.exports = page
