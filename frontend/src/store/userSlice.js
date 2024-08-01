import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  jwtToken: "",
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setJwtToken: (state, action) => {
      state.jwtToken = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = userSlice.actions

export default userSlice.reducer