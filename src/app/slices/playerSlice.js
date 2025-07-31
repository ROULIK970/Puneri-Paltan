import { createSlice } from "@reduxjs/toolkit";
import { getAllPlayers, getPlayersCategory, getSinglePlayer } from "../actions/player-action";

const initialState = {
    player:{},
    players:[],
    categories:[],
    loading:'idle',
    error:'',
    message:''
}


const playerSlice = createSlice({
    name:'player',
    initialState,
    extraReducers:(builder) =>{
        builder
          .addCase(getAllPlayers.pending, (state) => {
            state.loading = "loading";
          })
          .addCase(getAllPlayers.fulfilled, (state, action) => {
            state.loading = "succeded";
            state.players = action.payload;
          })
          .addCase(getAllPlayers.rejected, (state, action) => {
            state.loading = "failed";
            state.error = action.error.message;
          })
          .addCase(getPlayersCategory.pending, (state) => {
            state.loading = "loading";
          })
          .addCase(getPlayersCategory.fulfilled, (state, action) => {
            state.loading = "succeded";
            state.categories = action.payload;
          })
          .addCase(getPlayersCategory.rejected, (state, action) => {
            state.loading = "failed";
            state.error = action.error.message;
          })
          .addCase(getSinglePlayer.pending, (state) => {
            state.loading = "loading";
          })
          .addCase(getSinglePlayer.fulfilled, (state, action) => {
            state.loading = "succeded";
            state.player = action.payload;
          })
          .addCase(getSinglePlayer.rejected, (state, action) => {
            state.loading = "failed";
            state.error = action.error.message;
          });
    }
})


export const playerActions = playerSlice.actions //doubt

const playerReducer = playerSlice.reducer

export default playerReducer