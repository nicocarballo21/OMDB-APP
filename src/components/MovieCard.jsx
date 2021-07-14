import React from "react"

import { Link } from "react-router-dom"

export default function MovieCard({ movie, favorite, deleteFavorite }) {
  return (
    <div className="ui card black">
      <Link className="image" to={`/movies/${movie.imdbID}`}>
        <img src={movie.Poster} alt={movie.Title}></img>
      </Link>
      <div className="content">
        <div className="header">{movie.Title}</div>
        <div className="meta">{movie.Type}</div>
        <div className="description">{movie.Year}</div>
      </div>
      {favorite && (
        <div className="ui bottom button" onClick={() => deleteFavorite(movie.imdbID)}>
          <i className="trash icon"></i>
          Delete
        </div>
      )}
    </div>
  )
}
