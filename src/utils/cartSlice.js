import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
    initialState: {
        items: [],
    },
    reducers: {
        // reducer function with name addItem
        addItem: (state,action) => {
            console.log(`state::${state}`);
            console.log(action.payload);
            state.items.push(action.payload);
        },
        removeItem: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload.id);
        },
        clearCart: (state) => {
            state.items = [];
        }
    },
})

// default export is for reducer used in the store
export default cartSlice.reducer;
// used to dispatch action in components
export const { addItem, removeItem, clearCart } = cartSlice.actions;