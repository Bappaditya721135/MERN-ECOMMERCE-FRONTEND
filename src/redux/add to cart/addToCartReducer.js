import { ADD_CART_FETCH, ADD_CART_FETCH_ERROR, ADD_CART_FETCH_SUCCESS } from "./addToCartAction.js"


const initialState = {
    loading: false,
    isAdded: false,
    error: null,
}


export const addToCartReducer = (state=initialState, action) => {
    switch(action.type) {
        case ADD_CART_FETCH:
            return {
                loading: true,
            }
        case ADD_CART_FETCH_SUCCESS:
            return {
                loading: false,
                isAdded: true,
            }
        case ADD_CART_FETCH_ERROR:
            return {
                loading: false,
                error: action.payLoad,
            }
        default: return state;
    }
}