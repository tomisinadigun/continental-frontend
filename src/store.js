import { configureStore, combineReducers } from "@reduxjs/toolkit";
import toggleReducer from "./features/toggleSlice"



const rootReducer = combineReducers({
    toggle: toggleReducer,
})


const store = configureStore({
    reducer:rootReducer,
    // Reducers and middleware will be configured here 

});

export default store;