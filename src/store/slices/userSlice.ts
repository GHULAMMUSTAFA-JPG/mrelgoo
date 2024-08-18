import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

type UserData = {
  name: string
  email: string
}

export const initialUserState: {
  auth: boolean
  jwt?: {
    token: string
    refreshToken: string
  }
  user: UserData | null
} = {
  auth: false,
  jwt: undefined,
  user: null,
}

export const userSlice = createSlice({
  name: 'user',
  initialState: initialUserState,
  reducers: {
    setJWT: (
      state,
      action: PayloadAction<{
        token: string
        refreshToken: string
      }>
    ) => {
      state.jwt = action.payload
    },
    deleteJWT: (state) => {
      state.jwt = undefined
    },
    loginUser: (state) => {
      state.auth = true
    },
    logoutUser: (state) => {
      state.auth = false
      state.jwt = undefined
      state.user = null
    },
    setUserData: (state, action: PayloadAction<UserData>) => {
      state.user = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { loginUser, logoutUser, setJWT, deleteJWT, setUserData } =
  userSlice.actions

export default userSlice.reducer
