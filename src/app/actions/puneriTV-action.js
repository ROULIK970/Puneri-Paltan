import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getSeasonTVList = createAsyncThunk("get-seasotv-list", async(seasonId) => {
 try {
     const res = await axios.get(
       `https://appy.trycatchtech.com/v3/puneri_paltan/puneri_tv_list?cat_id=${seasonId}`
     );
   
     return res.data;
 } catch (error) {
    throw error
 }
});
