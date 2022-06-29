import { combineReducers } from "redux";
import { cartReducer } from "./Cart/CartReducer";

export const rootReducer = combineReducers({
    cart: cartReducer
})