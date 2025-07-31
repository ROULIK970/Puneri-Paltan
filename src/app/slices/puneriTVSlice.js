import { createSlice } from "@reduxjs/toolkit";
import { getSeasonTVList } from "../actions/puneriTV-action";

const initialState = {
  tvList: [],
  loading: "idle",
  error: "",
  message: "",
};

const puneriTVSlice = createSlice({
  name: "puneriTv",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getSeasonTVList.pending, (state) => {
        state.loading = "loading";
      })
      .addCase(getSeasonTVList.fulfilled, (state, action) => {
        
        state.loading = "succeeded";
        state.tvList = action.payload;
      })
      .addCase(getSeasonTVList.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.error.message;
      });
  },
});


export const puneriTvActions = puneriTVSlice.actions;

 const puneriTVSliceReducer = puneriTVSlice.reducer;

export default puneriTVSliceReducer;
