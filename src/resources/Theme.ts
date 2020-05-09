import {Colors} from "./Colors";

export interface Theme {
    primaryColor: string
    primaryColorDark: string
    secondaryColor: string
    textColor: string
    rippleColor: string
}

export const DarkTheme = {
    primaryColor: Colors.dark.primaryColor,
    primaryColorDark: Colors.dark.primaryColorDark,
    secondaryColor: Colors.dark.secondaryColor,
    textColor: Colors.dark.textColor,
    rippleColor: Colors.dark.rippleColor
}

export const LightTheme = {
    primaryColor: Colors.light.primaryColor,
    primaryColorDark: Colors.light.primaryColorDark,
    secondaryColor: Colors.light.secondaryColor,
    textColor: Colors.light.textColor,
    rippleColor: Colors.light.rippleColor
}
