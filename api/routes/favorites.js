const { default: axios } = require("axios")
const express = require("express")
const router = express.Router()

const { Favorite } = require("../models")

const getMovieById = async id => {
  const res = await axios.get(`https://www.omdbapi.com/?apikey=20dac387&i=${id}`)
  return res.data
}

router.delete("/delete/:id", async (req, res, next) => {
  try {
    const result = await Favorite.destroy({ where: { movie_id: req.params.id } })
    console.log("eeeeeeeee", result)
    if (result) res.sendStatus(204)
    else next()
  } catch (err) {
    next(err)
  }
})

router.post("/add", async (req, res, next) => {
  try {
    const [fav, created] = await Favorite.findOrCreate({
      where: {
        user_id: req.body.user_id,
        movie_id: req.body.movie_id
      }
    })
    if (created) res.status(201).send(fav)
    else next()
  } catch (err) {
    next(err)
  }
})

router.get("/:userId", async (req, res, next) => {
  try {
    const favs = await Favorite.findAll({ where: { user_id: req.params.userId } })

    const dataPromisesArray = favs.map(item => {
      return getMovieById(item.movie_id)
    })
    Promise.all(dataPromisesArray).then(dataMoviesArray => res.status(201).send(dataMoviesArray))
  } catch (err) {
    next(err)
  }
})

module.exports = router
