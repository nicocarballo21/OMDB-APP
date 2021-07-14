import { createReducer } from "@reduxjs/toolkit"
import { setMovies } from "../actions/movies"

const moviesReducer = createReducer([], {
  [setMovies.fulfilled]: (state, action) => action.payload
})

export default moviesReducer
