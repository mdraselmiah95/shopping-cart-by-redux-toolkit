import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },

  reducers: {
    add(state, { payload }) {
      const inCart = state.cart.find((item) => item.id === payload.id);
      if (inCart) {
        state.cart = [...payload];
      } else {
        state.cart.push(payload);
      }
    },
    remove: (state, { payload }) => {
      state.cart.splice(
        state.cart.findIndex((a) => a.id === payload),
        1
      );
    },
  },
});

export const { add, remove } = cartSlice.actions;

export default cartSlice.reducer;

export const cartSelector = (state) => state.entities.carts;
