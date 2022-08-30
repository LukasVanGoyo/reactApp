import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import productsService from "./productsService";
import {toast} from 'react-toastify'


const initialState = {
    products: [],
    product: '',
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

export const addProduct = createAsyncThunk('product/addProduct' , async (data, thunkAPI) => {
    try {
        return await productsService.addProduct(data)
    }
    catch (error){
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const getProducts = createAsyncThunk('product/getProducts' , async (data, thunkAPI) => {
    try {
        return await productsService.getProducts()
    }
    catch (error){
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})


export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        reset: (state) => {
            state.isLoading = false
            state.isError = false
            state.isSuccess =false
            state.message = ''


        }
    },

    extraReducers: (builder) => {
        builder
            .addCase(addProduct.pending, (state) => {
                state.isLoading = true
            })
            .addCase(addProduct.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.product = action.payload
                toast.success('Produkt został dodany!')
            })
            .addCase(addProduct.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
                state.product = null
            })

            .addCase(getProducts.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getProducts.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.products = action.payload

            })
            .addCase(getProducts.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
                state.products = null
            })





    }
})


export const { reset } = productsSlice.actions
export default productsSlice.reducer