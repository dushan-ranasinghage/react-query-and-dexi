import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import localforageStore from "../../cache/localforageDb";

export const getComments = createAsyncThunk(
    'comments/get',
    async () => {
        const start = Date.now();
        try {
            const cachedResults: any = await localforageStore.getItem('somekey');
            if(cachedResults){
                const end = Date.now();
                console.log(`Execution time (Localforge): ${end - start} ms`);
                return JSON.parse(cachedResults);
            }else{
                const results = await axios.get('https://jsonplaceholder.typicode.com/comments');
                await localforageStore.setItem('somekey', JSON.stringify(results.data));
                const end = Date.now();
                console.log(`Execution time (Axios): ${end - start} ms`);
                return results.data;
            }

        } catch (e) {
            return [];
        }
    }
)