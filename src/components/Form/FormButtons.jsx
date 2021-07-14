import React from "react"

import { Link } from "react-router-dom"
export default function FormButtons({ type }) {
  return (
    <>
      <button className="ui yellow fluid button" type="submit">
        {type}
      </button>
      <hr />
      <Link to="/movies" className="ui red fluid button" type="submit">
        Back
      </Link>
    </>
  )
}
