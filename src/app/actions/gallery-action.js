import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"



export const getGallery = createAsyncThunk('get-gallery', async() =>{
    try {
        const res = await axios.get(
          "https://appy.trycatchtech.com/v3/puneri_paltan/gallary_list?cat_id=7"
        );

        return res.data
    } catch (error) {
        throw error
    }
})