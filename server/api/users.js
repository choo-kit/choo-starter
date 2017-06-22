const send = require('./send')

function Users (db) {
  if (!(this instanceof Users)) return new Users(db)

  this.db = db
}

Users.prototype.get = function (req, res) {
  var self = this
  self.db('users')
    .select('first_name').as('name')
    .then((rows) => {
      send({
        error: 0,
        response: rows
      }, res)
    })
    .catch((e) => {
      send({
        error: e
      }, res, 500)
    })
}

module.exports = Users
