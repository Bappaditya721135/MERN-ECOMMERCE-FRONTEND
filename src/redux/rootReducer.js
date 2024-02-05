import { combineReducers } from "redux";
import { productReducer } from "./product/productReducer.js";
import { currentProductReducer } from "./current-product/currentProductReducer.js";


export const rootReducer = combineReducers({
    product: productReducer,
    currentProduct: currentProductReducer
})