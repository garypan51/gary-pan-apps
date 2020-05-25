import {APP} from "../../constants/ReduxKeys";

export const setDarkMode = (enabled: boolean) => ({
    type: APP.ACTION_SET_DARK_MODE,
    enabled
})

export const setShowAppBar = (show: boolean) => ({
    type: APP.ACTION_SET_SHOW_APP_BAR,
    show
})

export const setShowSourceCodeLink = (show: boolean) => ({
    type: APP.ACTION_SET_SHOW_SOURCE_CODE_LINK,
    show
})
