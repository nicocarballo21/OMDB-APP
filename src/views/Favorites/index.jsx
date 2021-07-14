import { React, useEffect } from "react"
import axios from "axios"

import { useHistory, Link, useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

import { setFavorites } from "../../state/actions/favorites"
import MovieCard from "../../components/MovieCard"
import NormalMessage from "../../utils/messages/NormalMessage"

export default function Favorites() {
  const dispatch = useDispatch()
  const history = useHistory()
  const { user, favorites } = useSelector(state => state)
  const { id } = useParams()

  useEffect(() => {
    !user.id && history.push("/movies")
    dispatch(setFavorites(id))
  }, [dispatch, user.id, id, history])

  const deleteFavorite = async idMovie => {
    try {
      const res = await axios.delete(`/favorites/delete/${idMovie}`)
      if (res) {
        NormalMessage("Movie deleted from favorites!", "success")
        setTimeout(() => {
          dispatch(setFavorites(id))
        }, 1200)
      }
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      {favorites.length ? (
        <div className="ui four links cards" id="cards">
          {favorites.map(movie => (
            <MovieCard
              movie={movie}
              key={movie.imdbID}
              favorite={true}
              deleteFavorite={deleteFavorite}
            />
          ))}
        </div>
      ) : (
        <div className="ui negative centered message ">
          <div className="header">No favorites yet!</div>
          <p>
            Find a movie and add it! <Link to="/movies">Goo!</Link>
          </p>
        </div>
      )}
    </>
  )
}
