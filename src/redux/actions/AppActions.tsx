import {APP} from "../../constants/ReduxKeys";

export const setDarkMode = (enabled: boolean) => ({
    type: APP.ACTION_SET_DARK_MODE,
    enabled
})
