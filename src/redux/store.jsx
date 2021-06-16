import { applyMiddleware, combineReducers, createStore } from "redux";
import productReducer from "./reducer/shopReducer";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";

const middleware = applyMiddleware(thunk)


const combineReducer = combineReducers({
    products: productReducer
})

export const store = createStore(combineReducer, composeWithDevTools(middleware))