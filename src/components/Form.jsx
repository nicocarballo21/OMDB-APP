import { React } from "react"
import { Link } from "react-router-dom"
import FormError from "./Form/FormError"
import FormButtons from "./Form/FormButtons"

export default function Form({ handleSubmit, userData, handleChange, type, error }) {
  return (
    <form onSubmit={handleSubmit} className="ui form centered" id="form">
      <h2 style={{ textAlign: "center" }}>- {type} -</h2>
      <hr />
      <div className="field">
        <label>Name</label>
        <input
          value={userData.name}
          onChange={handleChange}
          type="text"
          required
          name="name"
          placeholder="Full name"></input>
      </div>
      <div className="field">
        <label>E-mail</label>
        <input
          value={userData.email}
          onChange={handleChange}
          type="email"
          required
          name="email"
          placeholder="joe@schmoe.com"></input>
      </div>
      <div className="field">
        <label>Password</label>
        <input
          value={userData.password}
          onChange={handleChange}
          type="password"
          required
          name="password"
          placeholder="password"></input>
      </div>

      {error && <FormError />}

      <FormButtons type={type} />
      <div className="ui message ">
        <p style={{ textAlign: "center" }}>
          You are not register? <Link to="/auth/register">Register now!</Link>
        </p>
      </div>
    </form>
  )
}
