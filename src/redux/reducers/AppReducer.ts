import {APP} from "../../constants/ReduxKeys";

export interface AppState {
    darkModeEnabled: boolean
}

const initialState = {
    darkModeEnabled: true
}

export function appReducer(state = initialState, action: any) {
    switch (action.type) {
        case APP.ACTION_SET_DARK_MODE:
            return {
                ...state,
                darkModeEnabled: action.enabled
            }
        default:
            return state
    }
}
