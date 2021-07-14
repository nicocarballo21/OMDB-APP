import { createAsyncThunk, createAction } from "@reduxjs/toolkit"
import axios from "axios"

export const setFavorites = createAsyncThunk("Favorites", (userId = null) => {
  if (userId) return axios.get(`/favorites/${userId}`).then(r => r.data)
  else return []
})

export const ClearFavorites = createAction("clear", () => ({ payload: [] }))
