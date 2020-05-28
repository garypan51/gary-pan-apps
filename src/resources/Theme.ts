import {Colors} from "./Colors";

export interface Theme {
    primaryColor: string
    primaryColorDark: string
    secondaryColor: string
    accentColor: string
    textColor: string
    textColorAlt: string
    rippleColor: string
}

export const DarkTheme = {
    primaryColor: Colors.dark.primaryColor,
    primaryColorDark: Colors.dark.primaryColorDark,
    secondaryColor: Colors.dark.secondaryColor,
    accentColor: Colors.dark.accentColor,
    textColor: Colors.dark.textColor,
    textColorAlt: Colors.dark.textColorAlt,
    rippleColor: Colors.dark.rippleColor
}

export const LightTheme = {
    primaryColor: Colors.light.primaryColor,
    primaryColorDark: Colors.light.primaryColorDark,
    secondaryColor: Colors.light.secondaryColor,
    accentColor: Colors.light.accentColor,
    textColor: Colors.light.textColor,
    textColorAlt: Colors.light.textColorAlt,
    rippleColor: Colors.light.rippleColor
}
