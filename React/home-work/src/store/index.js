import {configureStore, createAsyncThunk} from "@reduxjs/toolkit";
import addressReducer from "./AddressSlice";
export const store = configureStore({
    reducer: {
        address:addressReducer,
    }
})