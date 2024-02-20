import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk('fetchProducts', async () => {
    const response = await axios.get('https://fakestoreapi.com/products')
    return response.data;
})

const productSlice = createSlice({
    name: 'products',
    initialState: {
        isLoading: false,
        data: [],
        error: false
    },

    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state, action) => {
                state.isLoading = true
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.isLoading = false
                state.error = true
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.isLoading = false
                state.data = action.payload
            })
    }
})

export default productSlice.reducer