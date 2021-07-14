const express = require("express")
const router = express.Router()
const passport = require("passport")

const { User } = require("../models")

router.post("/register", async (req, res, next) => {
  try {
    const user = await User.create(req.body)
    res.status(201).send(user)
  } catch (err) {
    res.json(err)
  }
})

router.post("/login", passport.authenticate("local"), (req, res) => {
  if (req.user) res.status(200).send(req.user)
  else res.sendStatus(500)
})

router.get("/logout", (req, res) => {
  req.logout()
  res.status(200).json({})
})

module.exports = router
