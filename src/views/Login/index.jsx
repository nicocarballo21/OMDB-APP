import { React, useState } from "react"

import { useHistory } from "react-router-dom"
import { useDispatch } from "react-redux"

import { setUsers } from "../../state/actions/user"
import DelayMessage from "../../utils/messages/DelayMessage"

import Form from "../../components/Form"

export default function Login() {
  const dispatch = useDispatch()
  const history = useHistory()
  const [userData, setuserData] = useState({
    email: "",
    password: "",
    name: ""
  })

  const handleSubmit = async e => {
    e.preventDefault()

    dispatch(setUsers(userData)).then(data => {
      if (data.error) {
        DelayMessage("Login in proccess!", "Invalid User, try again!", "error")
      } else {
        DelayMessage(
          "Login in proccess!",
          "Success, Now you are login",
          "success",
          data.payload.name
        )

        setTimeout(() => {
          history.push("/movies")
        }, 2400)
      }
    })
  }

  const handleChange = e => {
    setuserData({ ...userData, [e.target.name]: e.target.value })
  }

  return (
    <Form
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      userData={userData}
      type={"Log in"}
    />
  )
}
