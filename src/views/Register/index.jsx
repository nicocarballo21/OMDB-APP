import { useState } from "react"
import axios from "axios"

import { useHistory } from "react-router-dom"

import NormalMessage from "../../utils/messages/NormalMessage"
import DelayMessage from "../../utils/messages/DelayMessage"
import ValidatePassword from "../../utils/ValidatePassWord"

import Form from "../../components/Form"
export default function Register() {
  const history = useHistory()

  const [userData, setuserData] = useState({
    name: "",
    email: "",
    password: "",
    error: false
  })

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      const res = await axios.post("/auth/register", userData)
      const user = res.data

      if (ValidatePassword(userData.password)) {
        setuserData({ error: true })
        return
      }

      if (user.id) {
        DelayMessage("Creating user ...", "User successfuly created!", "success")
        setTimeout(() => {
          history.push("/movies")
        }, 2400)

        setuserData({
          email: "",
          password: ""
        })
      } else NormalMessage("User already exist!", "info")
    } catch (err) {
      console.log(err)
    }
  }

  const handleChange = e => {
    setuserData({ ...userData, [e.target.name]: e.target.value })
  }

  return (
    <Form
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      userData={userData}
      type={"Register"}
      error={userData.error}
    />
  )
}
