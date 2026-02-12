import { DropdownTheme, ThemeMode } from "./types";

const lightColors: DropdownTheme["colors"] = {
  background: "#ffffff",
  backgroundSelected: "#f5f5f5",
  text: "#000000",
  textSelected: "#000000",
  textDisabled: "#00000061",
  border: "#0000003b",
  borderFocused: "#000000",
  borderError: "#d32f2f",
  errorText: "#d32f2f",
  placeholder: "#0000006b",
  shadow: "#000000",
  icon: "#0000008f",
  iconDisabled: "#00000061",
};

const darkColors: DropdownTheme["colors"] = {
  background: "#1e1e1e",
  backgroundSelected: "#2d2d2d",
  text: "#ffffff",
  textSelected: "#ffffff",
  textDisabled: "#ffffff61",
  border: "#ffffff3b",
  borderFocused: "#ffffff",
  borderError: "#ef5350",
  errorText: "#ef5350",
  placeholder: "#ffffff6b",
  shadow: "#000000",
  icon: "#ffffff8f",
  iconDisabled: "#ffffff61",
};

export const defaultThemes: Record<ThemeMode, DropdownTheme> = {
  light: {
    colors: lightColors,
  },
  dark: {
    colors: darkColors,
  },
};

export const getDefaultTheme = (mode: ThemeMode = "light"): DropdownTheme => {
  return defaultThemes[mode];
};
