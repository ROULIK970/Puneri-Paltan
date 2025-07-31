import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllPlayers = createAsyncThunk('get-players', async()=>{
        try {
            
          const res1 =  await axios.get(
            "https://appy.trycatchtech.com/v3/puneri_paltan/player_list?cat_id=1"
          );
           const res2 = await axios.get(
             "https://appy.trycatchtech.com/v3/puneri_paltan/player_list?cat_id=2"
           );
            const res3 = await axios.get(
              "https://appy.trycatchtech.com/v3/puneri_paltan/player_list?cat_id=3"
            );
          const res = [...res1.data, ...res2.data, ...res3.data]
 
          return res
        } catch (error) {
          throw error
        }
})

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