import {createStore} from "redux"
import {createBrowserHistory} from "history";
import createRootReducer from "../reducers";
import {AppState} from "../reducers/AppReducer";

export interface StoreState {
    app: AppState
}

export const history = createBrowserHistory()

const store = createStore(
    createRootReducer(history)
)

export default store
