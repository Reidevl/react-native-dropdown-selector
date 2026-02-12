import { ViewStyle, TextStyle } from "react-native";
import { DropdownTheme } from "../../theme/types";

export interface DropdownOption {
  value: string;
  label: string;
}

export interface DropdownSelectorProps {
  value?: string;
  onValueChange: (value: string) => void;
  options: readonly DropdownOption[];
  label?: string;
  placeholder?: string;
  error?: boolean;
  errorMessage?: string;
  disabled?: boolean;
  mode?: "outlined" | "flat";
  theme?: DropdownTheme;
  style?: ViewStyle;
  inputStyle?: ViewStyle;
  textStyle?: TextStyle;
  labelStyle?: TextStyle;
  errorStyle?: TextStyle;
  iconComponent?: React.ReactNode;
}
