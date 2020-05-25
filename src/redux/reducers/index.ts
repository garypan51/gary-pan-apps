import {combineReducers} from "redux";
import {History} from "history"
import {appReducer} from "./AppReducer";

const createRootReducer = (history: History) => combineReducers({
    app: appReducer
})

export default createRootReducer
