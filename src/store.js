import {configureStore} from "@reduxjs/toolkit";
import countersReducers from "./features/counters/countersSlice.js";

const store = configureStore({
    reducer: {
        counters: countersReducers
    }
})

export default store;
