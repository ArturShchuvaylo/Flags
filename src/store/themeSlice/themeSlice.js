import { createSlice } from "@reduxjs/toolkit";

const initialState = 'light'
const themeSlice = createSlice({
    name: 'them',
    initialState,
    reducers:{
        setTheme:(state,{payload})=>payload,     
    }
});


export const {setTheme} = themeSlice.actions;

export const themeReducer = themeSlice.reducer;

