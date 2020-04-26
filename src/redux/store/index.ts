import {createStore} from "redux"
import {createBrowserHistory} from "history";
import createRootReducer from "../reducers";


export interface StoreState {

}

export const history = createBrowserHistory()

const store = createStore(
    createRootReducer(history)
)

export default store