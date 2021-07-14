import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

export const getAllUsers = createAsyncThunk("getAllUsers", () => {
  return axios.get("/users").then(r => r.data)
})
