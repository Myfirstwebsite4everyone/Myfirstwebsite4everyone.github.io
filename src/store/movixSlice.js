import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    url:{},
    genres:{}
};

const slice = createSlice({
    name:"Movix",
    initialState,
    reducers:{
        getApiConfiguration:(state,action)=>{
            state.url = action.payload;
        },
        getGenres:(state,action)=>{
            state.genres = action.payload;
        },

    }
});
export const {getApiConfiguration,getGenres} = slice.actions;
export default slice.reducer;