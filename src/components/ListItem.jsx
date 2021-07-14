import React from "react"
import { Link } from "react-router-dom"

export default function ListItem({ user }) {
  return (
    <div className="item">
      <i className="user icon"></i>
      <div className="content">
        <Link className="header" to={`/users/${user.id}`}>
          {user.name}
        </Link>
      </div>
    </div>
  )
}
