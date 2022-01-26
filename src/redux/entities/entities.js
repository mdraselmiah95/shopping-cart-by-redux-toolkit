import { combineReducers } from "redux";
import cartReducer from "../slices/cartSlice";

export default combineReducers({
  carts: cartReducer,
});
