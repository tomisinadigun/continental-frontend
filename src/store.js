import { configureStore, combineReducers } from "@reduxjs/toolkit";
import toggleReducer from "./features/toggleSlice"
import authReducer from "./features/authSlice"



const rootReducer = combineReducers({
    toggle: toggleReducer,
    auth: authReducer,
})


const store = configureStore({
    reducer:rootReducer,
});

export default store;