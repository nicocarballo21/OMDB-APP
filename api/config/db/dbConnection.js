const Sequelize = require("sequelize")

const { options, database } = require("./dbSettings.json")

const db = new Sequelize(database, null, null, options)

module.exports = db
