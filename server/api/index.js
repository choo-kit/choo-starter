const assert = require('assert')
const Users = require('./users')

module.exports = (db) => {
  const users = Users(db)

  wrap(users)

  return {
    users,
  }
}

function wrap (api) {
  for (let methodName of Object.getOwnPropertyNames(Object.getPrototypeOf(api))) {
    let method = api[methodName]

    if (typeof method === 'function' && methodName.charAt(0) !== '_') {
      api[methodName] = method.bind(api)
    }
  }

  return api
}
