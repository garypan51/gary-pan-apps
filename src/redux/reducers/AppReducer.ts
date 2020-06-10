import {APP} from "../../constants/ReduxKeys";
import {t} from "../../strings/i18n";

export interface AppState {
    darkModeEnabled: boolean
    showAppBar: boolean
    appBarTitle: string
    showSourceCodeLink: boolean
}

const initialState = {
    darkModeEnabled: true,
    showAppBar: false,
    appBarTitle: t("app.name"),
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
        case APP.ACTION_SET_APP_BAR_TITLE:
            return {
                ...state,
                appBarTitle: action.title
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
