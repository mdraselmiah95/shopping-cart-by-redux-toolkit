import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },

  reducers: {
    add(state, { payload }) {
      console.log(payload);
    },
  },
});

export const { add } = cartSlice.actions;

export default cartSlice.reducer;

export const cartSelector = (state) => state.entities.carts;
