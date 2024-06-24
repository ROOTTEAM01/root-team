import {combineReducers, createStore} from "redux";
import {flagReducer} from "../features/flag/flagReducer";

export const store = createStore(combineReducers({
    flag: flagReducer,
}));