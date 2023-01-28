import { combineReducers } from "@reduxjs/toolkit";

import photosReducer from './photosSlice'

const rootReducer = combineReducers({
    photos: photosReducer
})

export default rootReducer