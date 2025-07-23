import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

const appStore = configureStore({
    reducer:{
        // cart is the name of the slice
        cart: cartSlice
    }
});

export default appStore;