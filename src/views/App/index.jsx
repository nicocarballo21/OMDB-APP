import { React, useEffect } from "react"
import { Switch, Route } from "react-router-dom"
import axios from "axios"

import { cookiesUser } from "../../state/actions/user"
import { useDispatch } from "react-redux"

//components
import CardDetail from "../../components/CardDetail"
import Home from "../../components/Home"
import UserDetail from "../../components/UserDetail"
import NavBar from "../NavBar"
import Content from "../Content"
import SearchBar from "../SearchBar"
import Register from "../Register"
import Login from "../Login"
import Favorites from "../Favorites"
import Users from "../Users"

export default function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    axios
      .get("/me")
      .then(res => res.data)
      .then(user => {
        dispatch(cookiesUser(user))
      })
      .catch(({ response }) => {
        console.log(response.status, response.statusText)
      })
  }, [dispatch])

  return (
    <div className="app">
      <NavBar />
      <div className="ui container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/movies/:imdbID" component={CardDetail} />
          <Route path="/auth/register" component={Register} />
          <Route path="/auth/login" component={Login} />
          <Route path="/favs/:id" component={Favorites} />
          <Route path="/users/:id" component={UserDetail} />

          <Route path="/users" component={Users} />
          <Route path="/movies">
            <SearchBar />
            <Content />
          </Route>
        </Switch>
      </div>
    </div>
  )
}
