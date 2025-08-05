import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";



export const getAllPlayers = createAsyncThunk("get-players", async () => {
  try {
    const catIds = [1, 2, 3];
    let allPlayers = [];

    for (const id of catIds) {
      const response = await axios.get(
        `https://appy.trycatchtech.com/v3/puneri_paltan/player_list?cat_id=${id}`
      );
      allPlayers = [...allPlayers, ...response.data];
    }

    return allPlayers;
  } catch (error) {
    throw error;
  }
});



export const getPlayersCategory = createAsyncThunk('get-categories', async() =>{
  try {

    const res = await axios.get(
      "https://appy.trycatchtech.com/v3/puneri_paltan/category_list"
    );
    return res.data
  } catch (error) {
    throw error
  }
})

export const getSinglePlayer = createAsyncThunk('get-single-player', async(id)=>{
  try {
    const res = await axios.get(
      `https://appy.trycatchtech.com/v3/puneri_paltan/single_player?id=${id}`
    );
    return res.data[0]
  } catch (error) {
    throw error
  }
})