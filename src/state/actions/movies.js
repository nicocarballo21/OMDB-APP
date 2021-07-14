import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

export const setMovies = createAsyncThunk("MOVIES", data => {
  let url
  if (data.page)
    url = `https://www.omdbapi.com/?apikey=20dac387&s=${data.movieTitle}&type=${data.type}&page=${data.page}`
  else url = `https://www.omdbapi.com/?apikey=20dac387&s=${data.movieTitle}&type=${data.type}`
  return axios.get(url).then(r => r.data)
})
