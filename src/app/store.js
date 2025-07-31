import { configureStore } from "@reduxjs/toolkit"
import galleryReducer from "./slices/gallerySlice"
import playerReducer from "./slices/playerSlice"
import puneriTVReducer from "./slices/puneriTVSlice"


const store = configureStore({
    reducer:{
        player: playerReducer,
        puneriTV: puneriTVReducer,
        gallery: galleryReducer
    }
})

export default store