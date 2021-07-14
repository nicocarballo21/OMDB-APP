import { React, useEffect } from "react"
import { useParams, useHistory } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { setFavorites, ClearFavorites } from "../state/actions/favorites"
import MovieCard from "../components/MovieCard"
import NormalMessage from "../utils/messages/NormalMessage"

export default function UserDetail() {
  const { id } = useParams()
  const dispatch = useDispatch()
  const history = useHistory()

  const favs = useSelector(state => state.favorites)

  useEffect(() => {
    dispatch(setFavorites(id)).then(e => {
      if (!e.payload.length) {
        NormalMessage("This user has no Favorites!", "info")
        setTimeout(() => history.push("/users"), 1200)
      }
    })
    return () => {
      dispatch(ClearFavorites())
    }
  }, [dispatch, history, id])
  return (
    <div className="ui four links cards" id="cards">
      {favs && favs.map(movie => <MovieCard movie={movie} key={movie.imdbID} />)}
    </div>
  )
}
