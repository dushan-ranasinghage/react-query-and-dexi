import { createSlice, current } from '@reduxjs/toolkit'

import { getComments } from '../actions/comments'

interface IInitialState {
    items: any
    status: string
}

// status: 'idle' | 'pending' | 'succeeded' | 'failed'
const INITIAL_STATE: IInitialState = {
    items: [],
    status: 'idle'
}

export const counterSlice = createSlice({
    name: 'comments',
    initialState: INITIAL_STATE,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(getComments.pending, (state, action) => {
            state.status = 'pending'
        });
        builder.addCase(getComments.fulfilled, (state, action) => {
            state.items = action.payload
            state.status = 'succeeded'
        });
        builder.addCase(getComments.rejected, (state, action) => {
            state.status = 'failed'
        });
    },
})

export default counterSlice.reducer