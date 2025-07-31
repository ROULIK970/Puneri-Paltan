import { createSlice } from "@reduxjs/toolkit";
import { getGallery } from "../actions/gallery-action";

const initialState = {
    gallery:[],
    images:[],
    loading:"idle",
    error: "",
    message:""
}

const gallerySlice = createSlice({
    name:"gallery",
    initialState,
    extraReducers:(builder)=>{
     builder
       .addCase(getGallery.pending, (state) => {
         state.loading = "loading";
       })
       .addCase(getGallery.fulfilled, (state, action) => {
         state.loading = "succeeded";
         state.gallery = action.payload;
       })
       .addCase(getGallery.rejected, (state, action) => {
         state.loading = "failed";
         state.error = action.error.message;
       });
    }
})


const galleryReducer = gallerySlice.reducer

export default galleryReducer