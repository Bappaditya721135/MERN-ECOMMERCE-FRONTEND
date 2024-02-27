import { combineReducers } from "redux";
import { productReducer } from "./product/productReducer.js";
import { currentProductReducer } from "./current-product/currentProductReducer.js";
import { authenticationReducer } from "./authentication/authenticationReducer.js";
import { addToCartReducer } from "./add to cart/addToCartReducer.js";


export const rootReducer = combineReducers({
    product: productReducer,
    currentProduct: currentProductReducer,
    user: authenticationReducer,
    addToCart: addToCartReducer,
})