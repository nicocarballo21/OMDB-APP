import { React, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import ListItem from "../../components/ListItem"

import { getAllUsers } from "../../state/actions/allUsers"

export default function Users() {
  const dispatch = useDispatch()
  const users = useSelector(state => state.allUsers)

  useEffect(() => {
    dispatch(getAllUsers())
  }, [dispatch])
  return (
    <>
      {users.length ? (
        <div className="ui inverted segment">
          <div className="ui inverted relaxed divided list">
            {users.map(user => (
              <ListItem user={user} key={user.id} />
            ))}
          </div>
        </div>
      ) : (
        <div className="ui negative centered message ">
          <div className="header">No users yet!</div>
          <p>
            Register one now! <Link to="/register">Goo!</Link>
          </p>
        </div>
      )}
    </>
  )
}
