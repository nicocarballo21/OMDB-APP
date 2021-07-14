const db = require("../config/db/dbConnection")
const S = require("sequelize")
const crypto = require("bcrypt")

class User extends S.Model {
  hashPassword(password, salt) {
    return crypto.hash(password, salt)
  }

  validPassword(password) {
    return this.password === User.hashPassword(password, this.salt)
  }
}
User.init(
  {
    name: {
      type: S.STRING,
      allowNull: false
    },
    email: {
      type: S.STRING,
      allowNull: false,
      validate: {
        isEmail: true
      },
      unique: true
    },
    password: {
      type: S.STRING,
      validate: {
        notEmpty: true,
        min: 5
      }
    },
    salt: {
      type: S.STRING
    }
  },
  { sequelize: db, modelName: "user" }
)

User.addHook("beforeCreate", async user => {
  user.salt = await crypto.genSalt(6)
  user.password = await user.hashPassword(user.password, user.salt)
})

module.exports = User
