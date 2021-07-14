import React from "react"
import ReactDOM from "react-dom"
import App from "./views/App"
import "./index.css"

//redux
import store from "./state/store"
import { Provider } from "react-redux"

import "semantic-ui-css/semantic.min.css"

import { BrowserRouter } from "react-router-dom"

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,

  document.getElementById("root")
)
