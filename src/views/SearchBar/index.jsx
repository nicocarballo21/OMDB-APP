import { React, useState } from "react"

import { setMovies } from "../../state/actions/movies"
import { useDispatch, useSelector } from "react-redux"
import Pagination from "../../components/Pagination"

export default function SearchBar() {
  const dispatch = useDispatch()
  const [movieTitle, setmovieTitle] = useState("cars")
  const [type, settype] = useState("movie")
  const [loader, setLoader] = useState(false)

  const movies = useSelector(state => state.movies)

  const handleChange = ({ target }) => {
    if (target.name === "type") settype(target.value)
    else setmovieTitle(target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    setLoader(true)
    setTimeout(() => {
      dispatch(setMovies({ type, movieTitle }))
      setLoader(false)
    }, 1100)
  }

  return (
    <div>
      <form method="get" onSubmit={handleSubmit}>
        <div className="ui fluid large input icon">
          <input onChange={handleChange} type="text" placeholder="Search..." />
          <hr />
          <select className="ui button yellow" onChange={handleChange} name="type">
            <option value="movie">movies</option>
            <option value="series">series</option>
          </select>
          <button className="ui button yellow" onClick={handleSubmit}>
            Search!
          </button>
        </div>

        {loader && (
          <div className="ui">
            <div className="ui active dimmer">
              <div className="ui indeterminate text loader">Searching {type}s...</div>
            </div>
            <p></p>
          </div>
        )}

        {movies.Error && (
          <div className="ui negative message ">
            <div className="header">We're sorry we can't find this {type}</div>
            <p>{type} not found!</p>
          </div>
        )}
      </form>

      {movies.Response === "True" && <Pagination type={type} movieTitle={movieTitle} />}
    </div>
  )
}
