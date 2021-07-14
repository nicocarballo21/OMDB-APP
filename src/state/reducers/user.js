import { createReducer } from "@reduxjs/toolkit"

import { setUsers } from "../actions/user"
import { logOutUsers } from "../actions/user"
import { cookiesUser } from "../actions/user"

const UsersReducer = createReducer(
  {},
  {
    [setUsers.fulfilled]: (state, action) => action.payload,
    [logOutUsers.fulfilled]: (state, action) => action.payload,
    [cookiesUser]: (state, action) => action.payload
  }
)

export default UsersReducer
