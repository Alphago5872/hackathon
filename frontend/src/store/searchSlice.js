import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  keywords: "",
  status: "",
}

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    changeKeywords: (state, action) => {
      state.keywords = action.payload
    },
    changeStatus: (state, action) => {
      state.status = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = searchSlice.actions

export default searchSlice.reducer