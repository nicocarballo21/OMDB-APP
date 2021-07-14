import React from "react"

import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

import { logOutUsers } from "../../state/actions/user"

import DelayMessage from "../../utils/messages/DelayMessage"

export default function Header() {
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)

  const handleLogout = () => {
    dispatch(logOutUsers())
    DelayMessage("Log out in process ...", "Log out successfuly", "success")
  }
  return (
    <div className="ui large inverted menu">
      <Link to="/movies" className="ui item">
        OMDB
      </Link>

      <div className="right menu">
        <Link to="/users" className="ui item">
          Users
        </Link>
        {user.id && (
          <Link to={`/favs/${user.id}`} className="item">
            Favoritos
          </Link>
        )}
        <Link to="/auth/register" className="ui item primary button">
          Register
        </Link>
        {user.id ? (
          <a className="ui item" onClick={handleLogout}>
            <i className="user icon"></i>
            Log out
          </a>
        ) : (
          <Link to="/auth/login" className="ui item">
            <i className="user icon"></i>
            Log in
          </Link>
        )}
      </div>
    </div>
  )
}
