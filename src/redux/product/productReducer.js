import { PRODUCT_FETCH, PRODUCT_FETCH_ERROR, PRODUCT_FETCH_SUCCESS } from "./productAction.js"


const initialState = {
    loading: false,
    products: null,
    error: null,
}

export const productReducer = (state = initialState, action) => {
    switch(action.type) {
        case PRODUCT_FETCH: 
            return {
                loading: true,
            }
        case PRODUCT_FETCH_SUCCESS: 
            return {
                loading: false,
                products: action.payLoad,
            }
        case PRODUCT_FETCH_ERROR:
            return {
                loading: false,
                products: [],
                error: action.payLoad,
            }
        default: return state;
    }
}