import i18next from "i18next"
import {initReactI18next} from "react-i18next"
import en from "./en-us/index.json"

i18next
    .use(initReactI18next)
    .init( {
        lng: "en",
        resources: en
    })

export const t = (text: string, keys?: {}) => {
    return i18next.t(text, keys)
}