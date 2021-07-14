import { createAsyncThunk, createAction } from "@reduxjs/toolkit"
import axios from "axios"

export const setUsers = createAsyncThunk("setUsers", user => {
  return axios.post("/auth/login", user).then(r => r.data)
})

export const logOutUsers = createAsyncThunk("logOutUsers", () => {
  return axios.get("/auth/logout").then(r => r.data)
})
export const cookiesUser = createAction("cookiesUser", user => ({ payload: user }))
