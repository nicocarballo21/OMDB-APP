import { createReducer } from "@reduxjs/toolkit"

import { getAllUsers } from "../actions/allUsers"

const UsersReducer = createReducer([], {
  [getAllUsers.fulfilled]: (state, action) => action.payload
})

export default UsersReducer
