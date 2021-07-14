import { configureStore } from "@reduxjs/toolkit"
import favoritesReducer from "./reducers/favorites"
import moviesReducer from "./reducers/movies"
import UsersReducer from "./reducers/user"
import allUsersReducer from "./reducers/allUsers"

const store = configureStore({
  reducer: {
    movies: moviesReducer,
    user: UsersReducer,
    favorites: favoritesReducer,
    allUsers: allUsersReducer
  }
})

export default store
