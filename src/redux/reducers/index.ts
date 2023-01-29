import { combineReducers } from "@reduxjs/toolkit";

import photosReducer from './photosSlice'
import commentsReducer from './commentsSlice'

const rootReducer = combineReducers({
    photos: photosReducer,
    comments: commentsReducer
})

export default rootReducer