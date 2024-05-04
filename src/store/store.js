import { configureStore } from '@reduxjs/toolkit'
import slice from "./movixSlice";

const store = configureStore({
    reducer:{
        allItems:slice
    }
})
 export default store;