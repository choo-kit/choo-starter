const axios = require('axios')

const http = axios.create({
  baseURL: (module.parent ? '' : window.location.origin) + '/api/v1/',
})

exports.fetchUsers = function () {
  return http('users')
}
