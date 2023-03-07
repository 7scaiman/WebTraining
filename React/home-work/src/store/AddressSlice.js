import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import {API_URL} from "../Constants/Contstants";

export const fetchAddress = createAsyncThunk(
    'address/fetchAddress',
    async function (_,{rejectWithValue}){

        try {
        const response = await fetch(API_URL);

        if (!response.ok){
            throw new Error("Server Error")
        }


        const data =await response.json();
        return data;
        }
        catch (error){
        return rejectWithValue(error.message)
        }
    }
);

const  addressSlice = createSlice({
    name:'address',
    initialState:{
        address:[],
        status: null,
        error: null,
    },
    reducers: {
        addAddress(state,action) {
            console.log(state)
            console.log(action)
            state.address.push({
                Country: action.payload.Country,
                City: action.payload.City,
                Street: action.payload.Street,
                AddressType: action.payload.AddressType,
                id: Date.now()
            })
        },
        deleteAddress(state,action) {
           state.address = state.address.filter(i => i.id !== action.payload)
        },
    },
    extraReducers:{
        [fetchAddress.pending]: (state,action) => {
            state.status = "loading"
            state.error = null;
        },
        [fetchAddress.fulfilled]: (state,action) => {
            state.status = "resolved";
            state.address = action.payload;
        },
        [fetchAddress.rejected]: (state,action) => {
            state.status = "rejected";
            state.error = action.payload;
        }
    }
})

export const {addAddress,deleteAddress} = addressSlice.actions;

export default addressSlice.reducer