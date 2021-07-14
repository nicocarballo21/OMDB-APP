const t = require("./User")
console.log(t)

module.exports = {
  User: t,
  Favorite: require("./favorite")
}
