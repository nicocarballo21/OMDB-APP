import React from "react"

import { Link } from "react-router-dom"

export default function Home() {
  return (
    <div id="home">
      <Link to="/movies">
        <div className="ui attached yellow button" id="btn_home">
          Search movies now!
        </div>
      </Link>
    </div>
  )
}
