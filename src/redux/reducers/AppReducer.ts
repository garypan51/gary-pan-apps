import {APP} from "../../constants/ReduxKeys";

export interface AppState {
    darkModeEnabled: boolean
    showAppBar: boolean
    showSourceCodeLink: boolean
}

const initialState = {
    darkModeEnabled: true,
    showAppBar: false,
    showSourceCodeLink: false
}

export function appReducer(state = initialState, action: any) {
    switch (action.type) {
        case APP.ACTION_SET_DARK_MODE:
            return {
                ...state,
                darkModeEnabled: action.enabled
            }
        case APP.ACTION_SET_SHOW_APP_BAR:
            return {
                ...state,
                showAppBar: action.show
            }
        case APP.ACTION_SET_SHOW_SOURCE_CODE_LINK:
            return {
                ...state,
                showSourceCodeLink: action.show
            }
        default:
            return state
    }
}
