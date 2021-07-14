import { createReducer } from "@reduxjs/toolkit"
import { setFavorites, ClearFavorites } from "../actions/favorites"

const favoritesReducer = createReducer([], {
  [setFavorites.fulfilled]: (state, action) => action.payload,
  [ClearFavorites]: (state, action) => action.payload
})

export default favoritesReducer
