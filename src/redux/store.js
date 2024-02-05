import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { rootReducer } from "./rootReducer.js";
import { asyncCurrentProductFetch } from "./current-product/currentProductAction.js";


export const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(thunk)
))






