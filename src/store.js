import { configureStore, combineReducers } from "@reduxjs/toolkit";
import toggleReducer from "./features/toggleSlice"
import authReducer from "./features/authSlice"
import menuReducer from "./features/menuSlice"



const rootReducer = combineReducers({
    toggle: toggleReducer,
    auth: authReducer,
    menu: menuReducer,
})


const store = configureStore({
    reducer:rootReducer,
});

export default store;