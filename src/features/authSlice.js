import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: false,

    reducers: {
        checkView: (state) => !state
    }
})


export const { checkView } = authSlice.actions
export default authSlice.reducer