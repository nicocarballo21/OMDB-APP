import { React, useEffect, useState } from "react"

import { useDispatch } from "react-redux"
import { setMovies } from "../state/actions/movies"

export default function Pagination({ type, movieTitle }) {
  const dispatch = useDispatch()
  let [page, setpage] = useState(1)

  useEffect(() => {
    dispatch(
      setMovies({
        page,
        type,
        movieTitle
      })
    )
  }, [dispatch, page, movieTitle, type])

  return (
    <div className="ui three buttons inverted grey" id="pagination">
      <button onClick={() => setpage(page - 1)} className="ui labeled icon button">
        <i className="left chevron icon"></i>
        Back
      </button>
      <button className="ui button" onClick={() => setpage(1)}>
        Home
      </button>
      <button onClick={() => setpage(page + 1)} className="ui right labeled icon button">
        Next
        <i className="right chevron icon"></i>
      </button>
    </div>
  )
}
