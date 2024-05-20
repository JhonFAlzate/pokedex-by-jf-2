import { createSlice } from "@reduxjs/toolkit";

const darkSlice = createSlice({
    name: 'dark',
    initialState: false,
    reducers: {
        setDarkSlice: (state, action) => action.payload
    }


})
export const {setDarkSlice} = darkSlice.actions;

export default darkSlice.reducer;