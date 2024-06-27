import { configureStore } from "@reduxjs/toolkit";
import productSlice from './slice/Product'
const store = configureStore({
    reducer:{
    prodctState:productSlice
    }
})

export default store 