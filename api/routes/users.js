const express = require("express")
const router = express.Router()

const { User } = require("../models")

router.get("/", async (req, res, next) => {
  try {
    const users = await User.findAll()
    res.status(200).send(users)
  } catch (err) {
    next(err)
  }
})

module.exports = router
