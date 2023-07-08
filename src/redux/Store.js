import { configureStore } from "@reduxjs/toolkit";
import { CartSlice } from "./Slices/CartSlice";

// store is centralised data
export const store=configureStore({
    reducer:{
        cart:CartSlice.reducer,
    }
});
