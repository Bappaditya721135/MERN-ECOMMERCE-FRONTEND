import { MY_CART_FETCH, MY_CART_FETCH_ERROR, MY_CART_FETCH_SUCCESS } from "./myCartAction.js"


const initialState = {
    loading: false,
    cart: null,
    error: null,
}



export const myCartReducer = (state = initialState, action) => {
    switch(action.type) {
        case MY_CART_FETCH:
            return {
                loading: true,
            }
        case MY_CART_FETCH_SUCCESS:
            return {
                loading: false,
                cart: action.payLoad
            }
        case MY_CART_FETCH_ERROR:
            return {
                loading: false,
                error: action.payLoad
            }
        default: return state;
    }
}