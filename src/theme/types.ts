export interface DropdownTheme {
  colors: {
    background: string;
    backgroundSelected: string;
    text: string;
    textSelected: string;
    textDisabled: string;
    border: string;
    borderFocused: string;
    borderError: string;
    errorText: string;
    placeholder: string;
    shadow: string;
    icon: string;
    iconDisabled: string;
  };
}

export type ThemeMode = "light" | "dark";
