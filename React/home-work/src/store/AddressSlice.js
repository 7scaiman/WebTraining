import {createSlice} from '@reduxjs/toolkit'


const  addressSlice = createSlice({
    name:'address',
    initialState:{
        address:[{
            Country: "Macao",
            City: "Abshireshire",
            Street: "Howell Dam",
            AddressType: true,
            id: 1
        },
            {
                Country: "Chad",
                City: "San Tan Valley",
                Street: "Pauline Oval",
                AddressType: false,
                id: 2
            },
            {
                Country: "Antarctica (the territory South of 60 deg S)",
                City: "East Alyssonstad",
                Street: "Bergnaum Walks",
                AddressType: false,
                id: 3
            }]
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
})

export const {addAddress,deleteAddress} = addressSlice.actions;

export default addressSlice.reducer