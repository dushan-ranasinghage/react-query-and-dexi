import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { db } from "../../cache/db";

export const getPhotos = createAsyncThunk(
    'photos/get',
    async () => {
        try{
            const results = await axios.get('https://jsonplaceholder.typicode.com/photos')
            await db.photos.bulkAdd(results.data);
            return results.data
        } catch(e){
            console.log("Get photos error", e);
            return []
        }
    }
)