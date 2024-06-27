import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios'

const initiastate= {
    prouct :[]
}
const ProductSlice = createSlice({
    name: "product",
   initialState:initiastate,
    reducers:{
        getProduct(state,action){
            state.prouct = action.payload
        }
    }

})

export const {getProduct} = ProductSlice.actions
export default ProductSlice.reducer

export function getAllProducts (){
    return async function getallpro (dispatch,getState) {
        const data = await axios.get(`https://dummyjson.com/products`)
        const result = data.data.products
    dispatch(getProduct(result))
        console.log(result);
    }
}
