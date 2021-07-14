const router = require("express").Router()

const authRoutes = require("./auth")
const favoritesRoutes = require("./favorites")
const users = require("./users")

router.use("/users", users)
router.use("/auth", authRoutes)
router.use("/favorites", favoritesRoutes)

router.get("/me", (req, res) => {
  if (!req.user) res.sendStatus(401)
  else res.send(req.user)
})

router.use(function (req, res) {
  res.status(404).end()
})

module.exports = router
