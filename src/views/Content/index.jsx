import { React } from "react"
import { useSelector } from "react-redux"

import MovieCard from "../../components/MovieCard"

export default function Content() {
  const movies = useSelector(state => state.movies.Search)

  return (
    <div className="ui four links cards" id="cards">
      {movies && movies.map(movie => <MovieCard movie={movie} key={movie.imdbID} />)}
    </div>
  )
}
