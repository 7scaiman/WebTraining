import {configureStore, createAsyncThunk} from "@reduxjs/toolkit";
import {AddressApi} from "./AddressApi";


export  const  fetch = createAsyncThunk(

)
export const store = configureStore({
    reducer: {
        [AddressApi.reducerPath]: AddressApi.reducer,


    }
})