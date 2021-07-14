import { React, useEffect, useState } from "react"
import axios from "axios"

import { useParams, useHistory } from "react-router-dom"
import { useSelector } from "react-redux"

import NormalMessage from "../utils/messages/NormalMessage"
//utils
import getMovieById from "../utils/getMovieById"

export default function CardDetail() {
  const user = useSelector(state => state.user)
  const history = useHistory()
  const [detail, setdetail] = useState({})
  const { imdbID } = useParams()

  useEffect(() => {
    getMovieById(imdbID).then(data => setdetail(data))
  }, [imdbID])

  const handleFavorite = async () => {
    if (!user.id) NormalMessage("You must be log in", "info")
    else {
      try {
        await axios.post("/favorites/add", {
          user_id: user.id,
          movie_id: imdbID
        })
        NormalMessage("Movie added to favorites", "success")
      } catch (err) {
        NormalMessage("already exist", "error")
      }
    }
  }

  const {
    Title,
    Released,
    Runtime,
    Genre,
    Director,
    Poster,
    imdbRating,
    Language,
    imdbVotes,
    Plot,
    Country
  } = detail

  return (
    <div className="ui cards centered">
      <div className="ui card">
        <div className="image">
          <img src={Poster} alt={Title}></img>
        </div>
        <div className="content">
          <span className="header">{Title}</span>
          <div className="meta">
            <span className="date">Released in {Released}</span>
          </div>
        </div>
        <div className="extra content">Votes: {imdbVotes}</div>
      </div>

      <div className="ui card" id="card_detail">
        <div className="content">
          <div className="header">More about {Title} ...</div>
          <hr />
          <div className="descripcion">
            <div className="ul list ">
              <div className="item item_list">Plot: {Plot}</div>
              <div className="item item_list">Runtime: {Runtime}</div>
              <div className="item item_list">Gendre: {Genre}</div>
              <div className="item item_list">Director: {Director}</div>
              <div className="item item_list">imdbRating: {imdbRating}</div>
              <div className="item item_list">Language: {Language}</div>
              <div className="item item_list">Country: {Country}</div>
            </div>
          </div>

          <div className="extra content">
            <div className="ui two buttons">
              <div className="ui labeled button">
                <button className="ui red button like" onClick={handleFavorite}>
                  <i className="heart icon"></i>
                  Add favorite
                </button>
              </div>

              <button onClick={() => history.push("/movies")} className="ui icon button">
                Back
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
