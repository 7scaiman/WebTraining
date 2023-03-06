import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const AddressApi = createApi({
    reducerPath: 'Aaddressapi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://6405d8b440597b65de42ce9b.mockapi.io/addressa',
    }),
    endpoints: (build) => ({
        getAddress:build.query({
            query: () => "Address",
        })
    })
})

export const {useGetGoodsQuery} =  AddressApi;