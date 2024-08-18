import { createSlice } from '@reduxjs/toolkit'

export const orderSlice = createSlice({
  name: 'order',
  initialState: { name: 'demo name' },
  reducers: {
    saveOrderInfo: (state, action) => {
      console.log(action.payload)
      state = action?.payload
    },
    removeOrderInfo: (state) => {
      return {}
    },
  },
})

export const { saveOrderInfo, removeOrderInfo } = orderSlice.actions
export default orderSlice.reducer
