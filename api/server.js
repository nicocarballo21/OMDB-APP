const express = require("express")
const path = require("path")
const db = require("./config/db/dbConnection")

const cookieParser = require("cookie-parser")
const sessions = require("express-session")

const passport = require("passport")
const localStrategy = require("passport-local").Strategy

const { User } = require("./models")

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, "public")))

app.use(cookieParser())
app.use(
  sessions({
    secret: "OMDB",
    resave: true,
    saveUninitialized: true
  })
)

app.use(passport.initialize())
app.use(passport.session())

passport.use(
  new localStrategy(
    {
      usernameField: "email",
      passwordField: "password"
    },
    function (email, password, done) {
      User.findOne({ where: { email } })
        .then(user => {
          if (!user) {
            return done("sin user", false)
          }
          user.hashPassword(password, user.salt).then(hash => {
            if (hash !== user.password) {
              return done(null, false)
            }

            return done(null, user)
          })
        })
        .catch(done)
    }
  )
)

passport.serializeUser(function (user, done) {
  done(null, user.id)
})

passport.deserializeUser(function (id, done) {
  User.findByPk(id).then(user => done(null, user))
})

app.use("/", require("./routes"))

app.use(function (err, req, res, next) {
  res.status(500).send(err)
})

const PORT = process.env.PORT || 3001

db.sync({ force: false })
  .then(({ config }) => {
    console.log(`Successful database connection to => ${config.database}`)
    app.listen(PORT, () => console.log(`server listening at port ${PORT}`))
  })
  .catch(err => {
    console.log("DB sync failed", err)
  })

module.exports = app
