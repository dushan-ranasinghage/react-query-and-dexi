import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getPhotos = createAsyncThunk(
    'photos/get',
    async () => {
        const results = await axios.get('https://jsonplaceholder.typicode.com/photos')
        return results.data
    }
)