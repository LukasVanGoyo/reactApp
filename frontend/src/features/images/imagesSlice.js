import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import imagesService from "./imagesService";

import {toast} from 'react-toastify'
const  image = JSON.parse(localStorage.getItem('image'))

const initialState = {
    image: image ? image : null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}


export const upload = createAsyncThunk('images/upload' , async (data, thunkAPI) => {
    try {
        return await imagesService.upload(data)
    }
    catch (error){
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const imagesSlice = createSlice({
    name: 'images',
    initialState,
    reducers: {
        reset: (state) => {
            state.image = localStorage.setItem('image', null)
            state.isLoading = false
            state.isError = false
            state.isSuccess = false
            state.message = ''


        }
    },

    extraReducers: (builder) => {
        builder
            .addCase(upload.pending, (state) => {
                state.isLoading = true
            })
            .addCase(upload.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.image = action.payload
                toast.success('Zdjęcie zostało dodane')

            })
            .addCase(upload.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
                toast.error(state.message)
            })


    }
})


export const { reset } = imagesSlice.actions
export default imagesSlice.reducer