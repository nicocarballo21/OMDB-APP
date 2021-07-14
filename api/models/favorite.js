const db = require("../config/db/dbConnection")
const S = require("sequelize")

class Favorite extends S.Model {}
Favorite.init(
  {
    user_id: {
      type: S.INTEGER,
      allowNull: false
    },
    movie_id: {
      type: S.STRING,
      allowNull: false
    }
  },
  { sequelize: db, modelName: "favorites" }
)

module.exports = Favorite
