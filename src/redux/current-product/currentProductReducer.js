import { CURRENT_PRODUCT_FETCH, CURRENT_PRODUCT_FETCH_SUCCESS, CURRENT_PRODUCT_FETCH_ERROR } from "./currentProductAction.js";


const initialState = {
    loading: false,
    product: null,
    err: null,
}

export const currentProductReducer = (state = initialState, action) => {
    switch(action.type) {
        case CURRENT_PRODUCT_FETCH:
            return {
                loading: true,
            }
        case CURRENT_PRODUCT_FETCH_SUCCESS:
            return {
                loading: false,
                product: action.payLoad,
            }
        case CURRENT_PRODUCT_FETCH_ERROR:
            return {
                loading: false,
                product: null,
                err: action.payLoad,
            }
        default: return state;
    }
}