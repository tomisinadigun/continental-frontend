import { createSlice } from "@reduxjs/toolkit";


const menuSlice = createSlice({
    name: "menu",
    initialState: false,

    reducers: {
        showMenu: (state) => !state
    }
})


export const { showMenu } = menuSlice.actions;
export default menuSlice.reducer;