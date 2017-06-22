module.exports = {
  site: {
    name: 'choo-starter'
  },
  db: {
    dialect: 'sqlite3',
    connection: {
      filename: './sqlite.db'
    },
    useNullAsDefault: true
  }
}