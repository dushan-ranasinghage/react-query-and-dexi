import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { db } from "../../cache/db";

// const photosObservable = liveQuery(
//     () => db.photos
//         .toArray()
// );

// Subscribe
// const subscription = photosObservable.subscribe({
//     next: result => console.log("Got result:", JSON.stringify(result)),
//     error: error => console.error(error)
// });

// Unsubscribe
// subsciption.unsubscribe();

export const getPhotos = createAsyncThunk(
    'photos/get',
    async () => {
        const start = Date.now();
        try {
            const photos = await db.photos.toArray();
            const count = await db.photos.count();
            if (count === 0) {
                const results = await axios.get('https://jsonplaceholder.typicode.com/photos');
                await db.photos.bulkPut(results.data);
                const end = Date.now();
                console.log(`Execution time (Axios): ${end - start} ms`);
                return results.data;
            } else {
                const end = Date.now();
                console.log(`Execution time (Cache): ${end - start} ms`);
                return photos;
            }
        } catch (e) {
            return [];
        }
    }
)