import { createSlice, current } from '@reduxjs/toolkit'

import { getPhotos } from '../actions/photos'

const INITIAL_STATE = {
  items: [],
  status: 'idle' | 'pending' | 'succeeded' | 'failed'
}

export const counterSlice = createSlice({
  name: 'photos',
  initialState: INITIAL_STATE,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(getPhotos.pending, (state, action) => {
      state.status = 'pending'
    });
    builder.addCase(getPhotos.fulfilled, (state, action) => {
      state.items = action.payload
      state.status = 'succeeded'
    });
    builder.addCase(getPhotos.rejected, (state, action) => {
      state.status = 'failed'
    });
  },
})

export default counterSlice.reducer